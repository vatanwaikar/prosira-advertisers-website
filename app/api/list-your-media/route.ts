import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const companyName = formData.get("companyName") as string;
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const mediaType = formData.get("mediaInquiry") as string;
    const profile = formData.get("profile") as File | null;

    if (!companyName || !name || !email || !phone || !mediaType) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
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

    const attachments = profile
      ? [
          {
            filename: profile.name,
            content: Buffer.from(await profile.arrayBuffer()),
          },
        ]
      : [];

    // 📧 ADMIN EMAIL
    await transporter.sendMail({
      from: `"Prosira Advertisers" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "📢 New Media Inquiry",
      html: `
        <b>Company Name:</b> ${companyName}<br/>
        <b>Contact Person:</b> ${name}<br/>
        <b>Email:</b> ${email}<br/>
        <b>Phone:</b> ${phone}<br/>
        <b>Media Inquiry:</b> ${mediaType}
      `,
      attachments,
    });

    // 📊 GOOGLE SHEET PUSH (MEDIA)
    await fetch(process.env.GOOGLE_SHEET_WEBHOOK!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "media",
        companyName,
        name,
        email,
        phone,
        mediaType,
        fileName: profile?.name || "",
      }),
    });

    // 📱 WHATSAPP
    const whatsappMsg = encodeURIComponent(
      `New Media Inquiry\nCompany: ${companyName}\nName: ${name}\nPhone: ${phone}\nMedia: ${mediaType}`
    );

    return NextResponse.json({
      success: true,
      whatsapp: `https://wa.me/${process.env.WHATSAPP_PHONE}?text=${whatsappMsg}`,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
