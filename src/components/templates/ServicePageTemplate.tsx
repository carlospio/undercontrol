import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SolutionCard } from "@/components/ui/SolutionCard";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import type { Service } from "@/data/types";
import { getServicesBySlugs } from "@/data/services";
import { getSolutionsBySlugs } from "@/data/solutions";

export function ServicePageTemplate({ service }: { service: Service }) {
  const relatedServices = getServicesBySlugs(service.relatedServices);
  const relatedSolutions = getSolutionsBySlugs(service.idealFor);
  const path = `/servicos/${service.slug}`;

  return (
    <>
      <ServiceJsonLd name={service.name} description={service.seo.description} path={path} />
      <FaqJsonLd items={service.faq} />

      <Breadcrumb items={[{ label: "Serviços", href: "/servicos" }, { label: service.name, href: path }]} />

      <section className="bg-ink py-16 text-white">
        <Container>
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white/80">
            Serviço
          </span>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            {service.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/76">{service.intro}</p>
          <div className="mt-8">
            <Button href="/contato" variant="outline-dark" className="bg-white">
              Falar sobre este serviço
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title={`O que é ${service.keyword}?`} />
            <p className="mt-4 text-base leading-relaxed text-muted">{service.whatIsIt}</p>
          </div>
          <div>
            <SectionHeading title="Como a Under Control ajuda" />
            <p className="mt-4 text-base leading-relaxed text-muted">
              {service.howUnderControlHelps}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-surface-alt/40 py-16">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title="Atividades realizadas" />
            <ul className="mt-6 space-y-3">
              {service.activities.map((activity) => (
                <li key={activity} className="flex items-start gap-3 text-base text-ink">
                  <span aria-hidden="true" className="mt-1 text-gold-dark">✓</span>
                  {activity}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading title="Benefícios" />
            <ul className="mt-6 space-y-3">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-base text-ink">
                  <span aria-hidden="true" className="mt-1 text-gold-dark">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {relatedSolutions.length > 0 ? (
        <section className="bg-cream py-16">
          <Container>
            <SectionHeading eyebrow="Para quem é indicado" title="Ideal para" emphasis="o seu segmento." />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {relatedSolutions.map((solution) => (
                <SolutionCard key={solution.slug} solution={solution} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {service.faq.length > 0 ? (
        <FAQSection
          items={service.faq}
          title={`Perguntas sobre ${service.keyword}`}
          viewAllHref="/faq"
        />
      ) : null}

      {relatedServices.length > 0 ? (
        <section className="bg-surface-alt/40 py-16">
          <Container>
            <SectionHeading eyebrow="Continue explorando" title="Serviços" emphasis="relacionados." />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((related) => (
                <ServiceCard key={related.slug} service={related} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CTASection
        title="Pronto para delegar"
        emphasis={`${service.keyword}?`}
        description="Fale com a nossa equipe e receba uma proposta sob medida para a sua rotina."
      />
    </>
  );
}
