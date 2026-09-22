import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQItem } from "@/components/ui/FAQItem";
import { Button } from "@/components/ui/Button";
import type { FaqItem } from "@/data/types";

export function FAQSection({
  items,
  title = "Perguntas frequentes",
  emphasis,
  viewAllHref,
  tone = "dark",
}: {
  items: FaqItem[];
  title?: string;
  emphasis?: string;
  viewAllHref?: string;
  tone?: "dark" | "light";
}) {
  const isLight = tone === "light";

  return (
    <section className={isLight ? "bg-ink py-20 text-white" : "bg-cream py-20"}>
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Tire suas dúvidas" title={title} emphasis={emphasis} tone={tone} />
          {viewAllHref ? (
            <Button href={viewAllHref} variant={isLight ? "outline-light" : "light"}>
              Ver todas as perguntas
            </Button>
          ) : null}
        </div>
        <div className="mt-10 space-y-4">
          {items.map((item) => (
            <FAQItem key={item.question} question={item.question} answer={item.answer} tone={tone} />
          ))}
        </div>
      </Container>
    </section>
  );
}
