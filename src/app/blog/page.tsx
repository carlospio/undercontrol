import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { BlogCard } from "@/components/ui/BlogCard";
import { blogPosts, blogCategories } from "@/data/blog";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Conteúdo sobre assistente remota, produtividade, gestão e atendimento para empresários, profissionais da saúde e liberais.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }]} />

      <section className="bg-ink py-16 text-white">
        <Container>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Blog Under Control
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/76">
            Ideias práticas sobre produtividade, gestão e atendimento para organizar a sua rotina.
          </p>
        </Container>
      </section>

      <section className="bg-cream py-16">
        <Container>
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/blog/categorias/${category.slug}`}
                className="rounded-full border border-border-soft/60 bg-surface px-4 py-2 text-sm font-semibold text-ink hover:bg-surface-alt"
              >
                {category.name}
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <SectionHeading title="Artigos" emphasis="recentes." />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
