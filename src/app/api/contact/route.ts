import { NextRequest, NextResponse } from "next/server";
import { isRateLimited } from "@/lib/rateLimit";

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

  const crmWebhookUrl = process.env.CRM_WEBHOOK_URL;
  if (crmWebhookUrl) {
    try {
      await fetch(crmWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, whatsapp, segment, message, source: "site" }),
      });
    } catch {
      return NextResponse.json(
        { error: "Não foi possível enviar sua mensagem agora. Tente novamente." },
        { status: 502 }
      );
    }
  } else {
    console.info("[contato] novo lead (CRM_WEBHOOK_URL não configurado):", {
      name,
      email,
      whatsapp,
      segment,
    });
  }

  return NextResponse.json({ ok: true });
}
