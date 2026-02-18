import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    // ✅ HARD LOG (debug sathi)
    console.log("NEWSLETTER SUBSCRIPTION 👉", { email });

    if (!email) {
      return NextResponse.json(
        { error: "Email is required", received: body },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
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

    // 📧 ADMIN MAIL - Newsletter Subscription Notification
    await transporter.sendMail({
      from: `"Prosira Advertisers" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `📧 New Newsletter Subscription`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #D4AF37; margin-bottom: 20px;">📧 New Newsletter Subscription</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 0 0 10px 0;"><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            <p style="margin: 0;"><strong>Source:</strong> Website Footer Newsletter</p>
          </div>
          <p style="color: #666; font-size: 14px;">
            This user has subscribed to receive marketing insights and updates from Prosira Advertisers.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: "Successfully subscribed!" });
  } catch (error) {
    console.error("NEWSLETTER ERROR ❌", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
