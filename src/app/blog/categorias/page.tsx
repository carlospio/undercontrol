import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { blogCategories, getPostsByCategory } from "@/data/blog";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Categorias do Blog",
  description: "Explore os artigos do blog da Under Control organizados por categoria.",
  path: "/blog/categorias",
});

export default function BlogCategoriesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Categorias", href: "/blog/categorias" }]} />

      <section className="bg-cream py-16">
        <Container>
          <SectionHeading title="Categorias do" emphasis="blog." as="h1" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {blogCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/blog/categorias/${category.slug}`}
                className="rounded-2xl border border-border-soft/60 bg-surface p-6 transition-transform hover:-translate-y-1"
              >
                <h2 className="font-display text-lg font-semibold text-ink">{category.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{category.description}</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-wide text-gold-dark">
                  {getPostsByCategory(category.slug).length} artigo(s)
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
