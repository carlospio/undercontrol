import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Como Funciona a Assistente Remota",
  description:
    "Entenda passo a passo como funciona a contratação de uma assistente remota especializada da Under Control, do primeiro contato ao acompanhamento contínuo.",
  path: "/como-funciona",
});

const steps = [
  {
    number: "01",
    title: "Você entra em contato.",
    description:
      "O primeiro passo é uma conversa sem compromisso para entender a sua rotina e o que está tomando o seu tempo.",
  },
  {
    number: "02",
    title: "Entendemos suas necessidades.",
    description:
      "Mapeamos os canais de atendimento, o volume de demandas e as prioridades que não podem esperar.",
  },
  {
    number: "03",
    title: "Identificamos tarefas que podem ser delegadas.",
    description:
      "A partir do diagnóstico, apontamos quais atividades fazem mais sentido sair da sua lista primeiro.",
  },
  {
    number: "04",
    title: "Criamos uma rotina personalizada.",
    description:
      "Montamos um plano de atuação sob medida, com escopo, ferramentas e forma de trabalho definidos.",
  },
  {
    number: "05",
    title: "Nossa equipe executa as atividades.",
    description:
      "A assistente remota assume as tarefas combinadas, seguindo o tom e os processos da sua marca.",
  },
  {
    number: "06",
    title: "Você acompanha os resultados.",
    description:
      "A rotina é acompanhada de perto, com ajustes contínuos conforme sua demanda muda.",
  },
];

export default function ComoFuncionaPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Como funciona", href: "/como-funciona" }]} />

      <section className="bg-ink py-16 text-white">
        <Container>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Como funciona a Under Control?
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/76">
            Um processo simples, pensado para entender sua rotina antes de qualquer entrega.
          </p>
        </Container>
      </section>

      <section className="bg-cream py-16">
        <Container>
          <SectionHeading title="Do primeiro contato ao" emphasis="acompanhamento contínuo." />
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <li
                key={step.number}
                className="rounded-2xl border border-border-soft/60 bg-surface p-6"
              >
                <span className="font-display text-2xl font-semibold text-gold-dark">
                  {step.number}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CTASection
        title="Pronto para"
        emphasis="contratar uma assistente?"
        ctaLabel="Quero contratar uma assistente"
      />
    </>
  );
}
