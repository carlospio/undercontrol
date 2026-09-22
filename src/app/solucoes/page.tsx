import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SolutionCard } from "@/components/ui/SolutionCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { solutions } from "@/data/solutions";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Soluções por Segmento",
  description:
    "Assistente remota especializada para empresários, médicos, dentistas, advogados, arquitetos, engenheiros e outros profissionais liberais.",
  path: "/solucoes",
});

export default function SolucoesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Soluções", href: "/solucoes" }]} />

      <section className="bg-ink py-16 text-white">
        <Container>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Soluções para cada segmento
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/76">
            Cada profissão tem uma rotina diferente. Conheça como a Under Control se adapta às
            necessidades do seu segmento.
          </p>
        </Container>
      </section>

      <section className="bg-cream py-16">
        <Container>
          <SectionHeading title="Encontre a solução para o" emphasis="seu segmento." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution) => (
              <SolutionCard key={solution.slug} solution={solution} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
