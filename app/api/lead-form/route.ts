import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { leadFormSchema } from "@/lib/validators/leadForm";

type Env = {
  SMTP_HOST?: string;
  SMTP_PORT?: string;
  SMTP_USER?: string;
  SMTP_PASS?: string;
};

const sendEmail = async (data: any) => {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("SMTP credentials not configured");
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const platforms = Array.isArray(data.platforms) ? data.platforms.join(", ") : data.platforms || "-";
  const services = Array.isArray(data.services) ? data.services.join(", ") : data.services || "-";

  const mailBody = `Full Name: ${data.name}\n
Company: ${data.company || "-"}\n
Email: ${data.email}\n
Phone: ${data.phone || "-"}\n
Website: ${data.website || "-"}\n
Industry: ${data.industry || "-"}\n
Business Description: ${data.description || "-"}\n
Platforms: ${platforms}\n
Services Interested: ${services}\n
Competitors: ${data.competitors || "-"}\n
Expectations: ${data.expectations || "-"}\n`;

  const info = await transporter.sendMail({
  from: `Prosira Website <${user}>`,
  replyTo: data.email,
  to: "connect@prosira.in",
  subject: `New Website Lead - ${data.name}`,
  text: mailBody,
});

  return info;
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = leadFormSchema.parse(body);

    await sendEmail(parsed);

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    const message = err?.message || "Invalid request";
    return NextResponse.json({ ok: false, message }, { status: 400 });
  }
}
