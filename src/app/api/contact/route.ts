import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { siteConfig } from "@/lib/constants";
import { isRateLimited } from "@/lib/rateLimit";

export const runtime = "nodejs";

interface ContactPayload {
  name: string;
  email: string;
  whatsapp: string;
  segment: string;
  message: string;
  company?: string; // honeypot field, must stay empty
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Muitas tentativas. Tente novamente em instantes." },
      { status: 429 }
    );
  }

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Corpo da requisição inválido." }, { status: 400 });
  }

  if (payload.company) {
    // Honeypot preenchido: spam. Responde OK sem processar.
    return NextResponse.json({ ok: true });
  }

  const { name, email, whatsapp, segment, message } = payload;

  if (!name?.trim() || !email?.trim() || !whatsapp?.trim() || !segment?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Preencha todos os campos obrigatórios." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Informe um e-mail válido." }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) {
    console.error("[contato] SMTP_HOST, SMTP_USER e SMTP_PASS não configurados.");
    return NextResponse.json(
      { error: "Envio indisponível no momento. Fale conosco pelo WhatsApp." },
      { status: 503 }
    );
  }

  const port = Number(process.env.SMTP_PORT ?? 465);
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const to = process.env.CONTACT_TO ?? siteConfig.email;

  try {
    await transporter.sendMail({
      from: `"Site Under Control" <${user}>`,
      to,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `Novo contato pelo site — ${name}`,
      text: [
        `Nome: ${name}`,
        `E-mail: ${email}`,
        `WhatsApp: ${whatsapp}`,
        `Profissão/segmento: ${segment}`,
        "",
        message,
      ].join("\n"),
      html: `
        <h2>Novo contato pelo site</h2>
        <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>WhatsApp:</strong> ${escapeHtml(whatsapp)}</p>
        <p><strong>Profissão/segmento:</strong> ${escapeHtml(segment)}</p>
        <p><strong>Mensagem:</strong><br>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });
  } catch (error) {
    console.error("[contato] falha ao enviar e-mail:", error);
    return NextResponse.json(
      { error: "Não foi possível enviar sua mensagem agora. Tente novamente." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
