import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const benefits = [
  "Mais tempo",
  "Mais produtividade",
  "Menos tarefas operacionais",
  "Atendimento profissional",
  "Flexibilidade",
  "Organização",
  "Solução personalizada",
  "Mais foco no negócio",
];

export function BenefitsSection() {
  return (
    <section className="bg-ink py-20 text-white">
      <Container>
        <SectionHeading
          eyebrow="O que muda na sua rotina"
          title="Benefícios de contar com a"
          emphasis={"Under Control."}
          tone="light"
          align="center"
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="rounded-2xl border border-white/12 bg-white/5 px-4 py-6 text-center"
            >
              <p className="text-sm font-semibold text-white">{benefit}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
