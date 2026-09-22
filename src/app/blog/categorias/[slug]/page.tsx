import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { BlogCard } from "@/components/ui/BlogCard";
import { blogCategories, getCategoryBySlug, getPostsByCategory } from "@/data/blog";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return createMetadata({
    title: `${category.name} | Blog`,
    description: category.description,
    path: `/blog/categorias/${category.slug}`,
  });
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();
  const posts = getPostsByCategory(category.slug);

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "Categorias", href: "/blog/categorias" },
          { label: category.name, href: `/blog/categorias/${category.slug}` },
        ]}
      />

      <section className="bg-ink py-16 text-white">
        <Container>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            {category.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/76">
            {category.description}
          </p>
        </Container>
      </section>

      <section className="bg-cream py-16">
        <Container>
          {posts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-border-soft bg-surface p-8 text-center">
              <SectionHeading title="Em breve, novos artigos" align="center" />
              <p className="mt-3 text-sm text-muted">
                Ainda não publicamos artigos nesta categoria. Volte em breve.
              </p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
