"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

export function FAQItem({
  question,
  answer,
  tone = "dark",
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  tone?: "dark" | "light";
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();
  const isLight = tone === "light";

  return (
    <div
      className={cn(
        "rounded-2xl border px-5 py-4",
        isLight ? "border-white/12 bg-white/5" : "border-border-soft/60 bg-surface"
      )}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex w-full items-center justify-between gap-4 text-left text-base font-semibold",
          isLight ? "text-white" : "text-ink"
        )}
      >
        <span>{question}</span>
        <span aria-hidden="true" className={cn("text-xl leading-none", isLight ? "text-gold" : "text-gold-dark")}>
          {open ? "−" : "+"}
        </span>
      </button>
      {open ? (
        <p
          id={panelId}
          className={cn(
            "mt-3 text-sm leading-relaxed",
            isLight ? "text-white/76" : "text-muted"
          )}
        >
          {answer}
        </p>
      ) : null}
    </div>
  );
}
