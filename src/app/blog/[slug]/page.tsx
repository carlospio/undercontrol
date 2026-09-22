import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { BlogCard } from "@/components/ui/BlogCard";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { ArticleJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { blogPosts, getPostBySlug, getCategoryBySlug } from "@/data/blog";
import { getServicesBySlugs } from "@/data/services";
import { getSolutionsBySlugs } from "@/data/solutions";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const category = getCategoryBySlug(post.category);
  const relatedServices = getServicesBySlugs(post.relatedServices ?? []);
  const relatedSolutions = getSolutionsBySlugs(post.relatedSolutions ?? []);
  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        publishedAt={post.publishedAt}
        updatedAt={post.updatedAt}
      />
      {post.faq ? <FaqJsonLd items={post.faq} /> : null}

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          ...(category ? [{ label: category.name, href: `/blog/categorias/${category.slug}` }] : []),
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <article className="bg-cream py-16">
        <Container className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-gold-dark">
            {category?.name}
          </span>
          <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-muted">
            Publicado em {new Date(post.publishedAt).toLocaleDateString("pt-BR")} · {post.readingTime} de leitura
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink">{post.excerpt}</p>

          <nav aria-label="Índice do artigo" className="mt-8 rounded-2xl border border-border-soft/60 bg-surface p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-gold-dark">Índice</p>
            <ol className="mt-3 space-y-1 text-sm">
              {post.content.map((section, index) => (
                <li key={section.heading}>
                  <a href={`#secao-${index}`} className="text-ink hover:text-gold-dark">
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-10 space-y-10">
            {post.content.map((section, index) => (
              <section key={section.heading} id={`secao-${index}`}>
                <h2 className="font-display text-2xl font-semibold text-ink">{section.heading}</h2>
                {section.body.map((paragraph, pIndex) => (
                  <p key={pIndex} className="mt-4 text-base leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {(relatedServices.length > 0 || relatedSolutions.length > 0) && (
            <div className="mt-12 rounded-2xl border border-border-soft/60 bg-surface-alt/60 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-gold-dark">
                Relacionado a este artigo
              </p>
              <ul className="mt-3 flex flex-wrap gap-3 text-sm">
                {relatedServices.map((service) => (
                  <li key={service.slug}>
                    <a href={`/servicos/${service.slug}`} className="font-semibold text-ink hover:text-gold-dark">
                      {service.name} →
                    </a>
                  </li>
                ))}
                {relatedSolutions.map((solution) => (
                  <li key={solution.slug}>
                    <a href={`/solucoes/${solution.slug}`} className="font-semibold text-ink hover:text-gold-dark">
                      {solution.name} →
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </article>

      {post.faq && post.faq.length > 0 ? (
        <FAQSection items={post.faq} title="Perguntas sobre" emphasis="este tema." />
      ) : null}

      {otherPosts.length > 0 ? (
        <section className="bg-surface-alt/40 py-16">
          <Container>
            <p className="font-display text-2xl font-semibold text-ink">Artigos relacionados</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {otherPosts.map((related) => (
                <BlogCard key={related.slug} post={related} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CTASection />
    </>
  );
}
