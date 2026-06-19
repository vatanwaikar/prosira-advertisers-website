import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const contactPerson = body.contactPerson || body.name;
    const email = body.email;
    const phone = body.phone;
    const company = body.company;
    const service = body.service;
    const message = body.message;

    // ✅ Visitor Info
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip =
      forwardedFor?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "Unknown";

    const userAgent = req.headers.get("user-agent") || "Unknown";
    const referer = req.headers.get("referer") || "Direct";
    const submittedAt = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    // ✅ HARD LOG
    console.log("CONTACT BODY 👉", body);
    console.log("IP 👉", ip);
    console.log("USER AGENT 👉", userAgent);
    console.log("REFERER 👉", referer);

    if (!contactPerson || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: "Missing fields", received: body },
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

    // 📧 ADMIN MAIL
    await transporter.sendMail({
      from: `"Prosira Advertisers" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `🔥 New Lead – ${service}`,
      html: `
        <b>Contact Person:</b> ${contactPerson}<br/>
        <b>Email:</b> ${email}<br/>
        <b>Phone:</b> +91 ${phone}<br/>
        <b>Company:</b> ${company || "N/A"}<br/>
        <b>Service:</b> ${service}<br/>
        <b>Message:</b><br/>${message}

        <br/><br/>
        <hr/>
        <h3>Visitor Information</h3>

        <b>IP Address:</b> ${ip}<br/>
        <b>User Agent:</b> ${userAgent}<br/>
        <b>Referer:</b> ${referer}<br/>
        <b>Submitted At:</b> ${submittedAt}<br/>
      `,
    });

    // 📊 GOOGLE SHEET
    await fetch(process.env.GOOGLE_SHEET_WEBHOOK!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "contact",
        contactPerson,
        email,
        phone,
        company,
        service,
        message,
        ip,
        userAgent,
        referer,
        submittedAt,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CONTACT ERROR ❌", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}