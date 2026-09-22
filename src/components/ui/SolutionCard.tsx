import Link from "next/link";
import type { Solution } from "@/data/types";

export function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <Link
      href={`/solucoes/${solution.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border-soft/60 bg-surface-alt p-6 transition-transform duration-200 hover:-translate-y-1"
    >
      <h3 className="font-display text-lg font-semibold text-ink">{solution.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{solution.shortDescription}</p>
      <span className="mt-auto pt-4 text-sm font-bold text-ink group-hover:text-gold-dark">
        Explorar soluções →
      </span>
    </Link>
  );
}
