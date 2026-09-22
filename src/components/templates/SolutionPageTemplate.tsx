import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { FaqJsonLd } from "@/components/seo/JsonLd";
import type { Solution } from "@/data/types";
import { getServicesBySlugs } from "@/data/services";

export function SolutionPageTemplate({ solution }: { solution: Solution }) {
  const relatedServices = getServicesBySlugs(solution.relatedServices);
  const path = `/solucoes/${solution.slug}`;

  return (
    <>
      <FaqJsonLd items={solution.faq} />

      <Breadcrumb items={[{ label: "Soluções", href: "/solucoes" }, { label: solution.name, href: path }]} />

      <section className="bg-ink py-16 text-white">
        <Container>
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white/80">
            Solução para {solution.audienceLabel.toLowerCase()}
          </span>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Assistente remota para {solution.name.toLowerCase()}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/76">{solution.intro}</p>
          <div className="mt-8">
            <Button href="/contato" variant="outline-dark" className="bg-white">
              Falar com uma especialista
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title="Desafios comuns do segmento" />
            <ul className="mt-6 space-y-3">
              {solution.problems.map((problem) => (
                <li key={problem} className="flex items-start gap-3 text-base text-ink">
                  <span aria-hidden="true" className="mt-1 text-gold-dark">×</span>
                  {problem}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading title="Como a Under Control ajuda" />
            <p className="mt-4 text-base leading-relaxed text-muted">
              {solution.howUnderControlHelps}
            </p>
          </div>
        </Container>
      </section>

      {relatedServices.length > 0 ? (
        <section className="bg-surface-alt/40 py-16">
          <Container>
            <SectionHeading eyebrow="Serviços relevantes" title="O que costuma fazer" emphasis="parte do escopo." />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {relatedServices.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="bg-cream py-16">
        <Container>
          <SectionHeading eyebrow="Benefícios" title="O que muda na sua" emphasis="rotina." />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {solution.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 rounded-2xl border border-border-soft/60 bg-surface px-5 py-4 text-base text-ink"
              >
                <span aria-hidden="true" className="mt-1 text-gold-dark">✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {solution.faq.length > 0 ? (
        <FAQSection
          items={solution.faq}
          title={`Perguntas de ${solution.audienceLabel.toLowerCase()}`}
          viewAllHref="/faq"
        />
      ) : null}

      <CTASection
        title="Vamos organizar a rotina"
        emphasis={`de ${solution.audienceLabel.toLowerCase()}?`}
        description="Fale com a nossa equipe e receba uma proposta sob medida para o seu segmento."
      />
    </>
  );
}
