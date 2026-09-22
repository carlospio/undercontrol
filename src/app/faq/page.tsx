import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FAQItem } from "@/components/ui/FAQItem";
import { CTASection } from "@/components/sections/CTASection";
import { FaqJsonLd } from "@/components/seo/JsonLd";
import { generalFaq } from "@/data/faq";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Perguntas Frequentes",
  description:
    "Tire suas dúvidas sobre assistente remota, contratação, atendimento, preços e os serviços da Under Control.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <FaqJsonLd items={generalFaq} />
      <Breadcrumb items={[{ label: "FAQ", href: "/faq" }]} />

      <section className="bg-ink py-16 text-white">
        <Container>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Perguntas frequentes
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/76">
            Tudo o que você precisa saber antes de delegar suas tarefas administrativas.
          </p>
        </Container>
      </section>

      <section className="bg-cream py-16">
        <Container className="max-w-3xl">
          <div className="space-y-4">
            {generalFaq.map((item) => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} tone="dark" />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Ainda com dúvidas?"
        title="Fale sobre"
        emphasis="a sua rotina."
        ctaLabel="Falar sobre minha rotina"
      />
    </>
  );
}
