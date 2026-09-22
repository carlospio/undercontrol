import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const steps = [
  { number: "01", title: "Entendemos sua rotina." },
  { number: "02", title: "Criamos sua rotina personalizada." },
  { number: "03", title: "Nossa equipe assume as tarefas." },
  { number: "04", title: "Você ganha tempo." },
];

export function HowItWorksSection() {
  return (
    <section className="bg-cream py-20">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="Um método sem complicação"
          title="Você conta o que precisa."
          emphasis="Nós desenhamos a rotina."
        />
        <div>
          <ol className="space-y-6">
            {steps.map((step) => (
              <li key={step.number} className="flex items-start gap-4">
                <span className="font-display text-2xl font-semibold text-gold-dark">
                  {step.number}
                </span>
                <p className="pt-1 text-lg font-semibold text-ink">{step.title}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <Button href="/como-funciona" variant="primary">
              Quero ganhar tempo
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
