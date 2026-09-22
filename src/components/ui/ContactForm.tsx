"use client";

import { useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";
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

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
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

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      whatsapp: String(data.get("whatsapp") ?? ""),
      segment: String(data.get("segment") ?? ""),
      message: String(data.get("message") ?? ""),
      company: String(data.get("company") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) {
        setState("error");
        setErrorMessage(result.error ?? "Não foi possível enviar. Tente novamente.");
        return;
      }

      trackEvent("form_submit", { form: "contato", segment: payload.segment });
      setState("success");
      form.reset();
    } catch {
      setState("error");
      setErrorMessage("Não foi possível enviar. Verifique sua conexão e tente novamente.");
    }
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
        <p className="font-display text-xl font-semibold">Mensagem enviada!</p>
        <p className={cn("mt-2 text-sm", isLight ? "text-white/76" : "text-muted")}>
          Nossa equipe vai entrar em contato em breve. Se preferir, fale agora mesmo pelo WhatsApp.
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

      {state === "error" ? (
        <p role="alert" className="text-sm font-semibold text-red-500">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full rounded-full bg-gold px-6 py-3 text-sm font-bold text-ink transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {state === "loading" ? "Enviando..." : "Quero conversar sem compromisso"}
      </button>
    </form>
  );
}
