import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { eximLeadFormSchema } from "@/lib/validators/eximLeadForm";

type Env = {
  SMTP_HOST?: string;
  SMTP_PORT?: string;
  SMTP_USER?: string;
  SMTP_PASS?: string;
};

const sendEximLeadEmail = async (data: any) => {
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

  const mailBody = `New EXIM Lead\n\nFull Name: ${data.fullName || "-"}\nPhone Number: ${data.phone || "-"}\nEmail Address: ${data.email || "-"}\nCompany Name: ${data.company || "-"}\nBusiness Type: ${data.businessType || "-"}\nExport/Import Category: ${data.category || "-"}\nTargeted Countries: ${data.targetCountries || "-"}`;

  const info = await transporter.sendMail({
    from: `Prosira EXIM Lead <${user}>`,
    replyTo: data.email,
    to: "connect@prosira.in",
    subject: "New EXIM Lead",
    text: mailBody,
  });

  return info;
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = eximLeadFormSchema.parse(body);

    await sendEximLeadEmail(parsed);

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    const message = err?.message || "Invalid request";
    return NextResponse.json({ ok: false, message }, { status: 400 });
  }
}
