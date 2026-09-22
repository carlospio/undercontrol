import Link from "next/link";
import type { BlogPost } from "@/data/types";
import { getCategoryBySlug } from "@/data/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  const category = getCategoryBySlug(post.category);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border-soft/60 bg-surface p-6 transition-transform duration-200 hover:-translate-y-1"
    >
      <span className="text-xs font-bold uppercase tracking-[0.14em] text-gold-dark">
        {category?.name ?? post.category}
      </span>
      <h3 className="mt-3 font-display text-lg font-semibold text-ink">{post.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
      <div className="mt-auto flex items-center justify-between pt-4 text-xs text-muted">
        <span>{post.readingTime} de leitura</span>
        <span className="font-bold text-ink group-hover:text-gold-dark">Ler artigo →</span>
      </div>
    </Link>
  );
}
