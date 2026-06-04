import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const position = formData.get("position") as string;
    const experience = formData.get("experience") as string;
    const message = formData.get("message") as string;
    const resume = formData.get("resume") as File | null;

    console.log("CAREER APPLICATION BODY 👉", {
      fullName,
      email,
      phone,
      position,
      experience,
      message,
      resume: resume?.name,
    });

    if (!fullName || !email || !phone || !position) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const attachments = resume
      ? [
          {
            filename: resume.name,
            content: Buffer.from(await resume.arrayBuffer()),
          },
        ]
      : [];

    // 📧 ADMIN EMAIL
    await transporter.sendMail({
      from: `"Prosira Advertisers" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `🔥 New Job Application – ${position}`,
      html: `
        <b>Position Applied:</b> ${position}<br/>
        <b>Full Name:</b> ${fullName}<br/>
        <b>Email:</b> ${email}<br/>
        <b>Phone:</b> +91 ${phone}<br/>
        <b>Experience:</b> ${experience || "N/A"}<br/>
        <b>Message:</b><br/>${message || "No additional message"}<br/>
        <b>Resume Attached:</b> ${resume?.name || "No resume attached"}
      `,
      attachments,
    });

    // 📊 GOOGLE SHEET PUSH
    await fetch(process.env.GOOGLE_SHEET_WEBHOOK!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "career",
        fullName,
        email,
        phone,
        position,
        experience,
        message,
        fileName: resume?.name || "",
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CAREER APPLICATION ERROR ❌", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
