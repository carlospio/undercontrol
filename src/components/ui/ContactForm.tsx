"use client";

import { useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

const segments = [
  "Empresário",
  "Médico",
  "Dentista",
  "Profissional da saúde",
  "Advogado",
  "Arquiteto",
  "Engenheiro",
  "Profissional liberal",
  "Outro",
];

type FormState = "idle" | "success";

export function ContactForm({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const [state, setState] = useState<FormState>("idle");
  const startedRef = useRef(false);
  const isLight = tone === "light";

  const fieldClasses = cn(
    "w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:border-gold",
    isLight
      ? "border-white/20 bg-white/10 text-white placeholder:text-white/50"
      : "border-border-soft bg-white text-ink placeholder:text-muted"
  );

  const labelClasses = cn("mb-1.5 block text-sm font-semibold", isLight ? "text-white" : "text-ink");

  function handleFocusStart() {
    if (!startedRef.current) {
      startedRef.current = true;
      trackEvent("form_start", { form: "contato" });
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot preenchido: spam. Finge sucesso sem abrir o WhatsApp.
    if (data.get("company")) {
      setState("success");
      return;
    }

    const segment = String(data.get("segment") ?? "");
    const text = [
      "Olá! Vim pelo site da Under Control e gostaria de conversar.",
      "",
      `*Nome:* ${String(data.get("name") ?? "")}`,
      `*E-mail:* ${String(data.get("email") ?? "")}`,
      `*WhatsApp:* ${String(data.get("whatsapp") ?? "")}`,
      `*Profissão/segmento:* ${segment}`,
      `*Mensagem:* ${String(data.get("message") ?? "")}`,
    ].join("\n");

    const whatsappUrl = `${siteConfig.whatsapp.url}&text=${encodeURIComponent(text)}`;
    const opened = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    if (!opened) {
      window.location.href = whatsappUrl;
    }

    trackEvent("form_submit", { form: "contato", segment });
    setState("success");
    form.reset();
  }

  if (state === "success") {
    return (
      <div
        role="status"
        className={cn(
          "rounded-2xl border px-6 py-8 text-center",
          isLight ? "border-white/15 bg-white/10 text-white" : "border-border-soft bg-surface text-ink"
        )}
      >
        <p className="font-display text-xl font-semibold">Quase lá!</p>
        <p className={cn("mt-2 text-sm", isLight ? "text-white/76" : "text-muted")}>
          Abrimos o WhatsApp com a sua mensagem pronta. É só enviar para falar com a nossa equipe.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor="name" className={labelClasses}>
          Seu nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          onFocus={handleFocusStart}
          className={fieldClasses}
          placeholder="Como podemos te chamar?"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClasses}>
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClasses}
            placeholder="voce@email.com"
          />
        </div>
        <div>
          <label htmlFor="whatsapp" className={labelClasses}>
            WhatsApp
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            required
            className={fieldClasses}
            placeholder="(11) 99999-9999"
          />
        </div>
      </div>

      <div>
        <label htmlFor="segment" className={labelClasses}>
          Profissão / segmento
        </label>
        <select id="segment" name="segment" required className={fieldClasses}>
          <option value="">Selecione uma opção</option>
          {segments.map((segment) => (
            <option key={segment} value={segment}>
              {segment}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Como podemos ajudar?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={fieldClasses}
          placeholder="Conte um pouco sobre a sua rotina e o que gostaria de delegar"
        />
      </div>

      {/* Honeypot anti-spam — mantido fora da visão e da navegação por teclado */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <button
        type="submit"
        className="w-full rounded-full bg-gold px-6 py-3 text-sm font-bold text-ink transition-opacity hover:opacity-90"
      >
        Quero conversar sem compromisso
      </button>
    </form>
  );
}
