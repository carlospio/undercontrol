import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export interface Testimonial {
  author: string;
  role: string;
  quote: string;
  source?: string;
  date?: string;
}

// Nenhum depoimento verificado disponível no momento — não inventar avaliações.
// Assim que a empresa disponibilizar avaliações reais (Google, clientes, etc.),
// adicione os itens aqui e o layout renderiza automaticamente.
const testimonials: Testimonial[] = [];

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
