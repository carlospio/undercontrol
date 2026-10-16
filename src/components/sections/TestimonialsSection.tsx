import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export interface Testimonial {
  author: string;
  role: string;
  quote: string;
  source?: string;
  date?: string;
}

// TODO: PLACEHOLDER — depoimentos fictícios, apenas para preencher o layout.
// Substituir por avaliações reais (Google, clientes, etc.) antes de divulgar o site.
const testimonials: Testimonial[] = [
  {
    author: "Mariana S.",
    role: "Empresária",
    quote:
      "A rotina ficou muito mais organizada e hoje sobra tempo para o que realmente importa.",
  },
  {
    author: "Dr. Ricardo M.",
    role: "Profissional da saúde",
    quote:
      "Atendimento humano, discreto e sempre pontual. Recomendo sem hesitar.",
  },
  {
    author: "Fernanda L.",
    role: "Empreendedora",
    quote:
      "Delegar as tarefas administrativas foi a melhor decisão para o meu negócio.",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="rounded-2xl border border-border-soft/60 bg-surface p-6">
      <blockquote className="font-display text-lg leading-snug text-ink">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-4 text-sm text-muted">
        <span className="font-semibold text-ink">{testimonial.author}</span> — {testimonial.role}
      </figcaption>
    </figure>
  );
}

function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-border-soft bg-surface p-8 text-center">
      <p className="font-display text-lg font-semibold text-ink">
        A experiência dos clientes merece ser verdadeira.
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Este espaço está preparado para reunir apenas avaliações verificadas de clientes, com
        origem, data e identificação verificáveis, assim que forem disponibilizadas pela empresa.
      </p>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-cream py-20">
      <Container>
        <SectionHeading
          eyebrow="Reputação com responsabilidade"
          title="Confiança é construída em"
          emphasis="cada conversa real."
          align="center"
        />
        <div className="mt-12">
          {testimonials.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.author} testimonial={testimonial} />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </Container>
    </section>
  );
}
