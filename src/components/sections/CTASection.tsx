import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";

export function CTASection({
  eyebrow = "Vamos conversar",
  title = "Tenha mais tempo para",
  emphasis = "o que realmente importa.",
  description = "Conte o que está roubando o seu tempo. Nós organizamos o caminho — sem compromisso e com atendimento humano.",
  ctaLabel = "Falar com uma especialista",
  ctaHref = "/contato",
}: {
  eyebrow?: string;
  title?: string;
  emphasis?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="bg-ink py-20 text-white">
      <Container className="flex flex-col items-center gap-8 text-center">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          emphasis={emphasis}
          description={description}
          tone="light"
          align="center"
          className="max-w-2xl"
        />
        <div className="flex flex-wrap justify-center gap-4">
          <Button href={ctaHref} variant="outline-dark" className="bg-white">
            {ctaLabel}
          </Button>
          <Button href={siteConfig.whatsapp.url} external variant="outline-light">
            Falar pelo WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  );
}
