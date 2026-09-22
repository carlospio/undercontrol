import Link from "next/link";
import type { Service } from "@/data/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/servicos/${service.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border-soft/60 bg-surface p-6 shadow-[0_12px_28px_rgba(33,17,46,0.06)] transition-transform duration-200 hover:-translate-y-1"
    >
      <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
        {service.name.charAt(0)}
      </span>
      <h3 className="font-display text-lg font-semibold text-ink">{service.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{service.shortDescription}</p>
      <span className="mt-auto pt-4 text-sm font-bold text-ink group-hover:text-gold-dark">
        Saiba mais →
      </span>
    </Link>
  );
}
