import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";

export function AboutSection() {
  return (
    <section className="bg-surface-alt/40 py-20">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Sobre a Under Control"
            title="Uma equipe dedicada a devolver"
            emphasis="tempo para o seu dia."
          />
          <p className="mt-6 text-base leading-relaxed text-muted">
            A Under Control nasceu em {siteConfig.foundingYear} com o objetivo de ajudar
            empresários, profissionais da área da saúde e outros profissionais liberais a
            delegar tarefas administrativas e pessoais, ganhando tempo livre para focar no
            crescimento do negócio e na qualidade de vida.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            À frente da operação está {siteConfig.ceo.name}, {siteConfig.ceo.bio.toLowerCase()}
          </p>
          <div className="mt-8">
            <Button href="/sobre" variant="primary">
              Conheça a Under Control
            </Button>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl ring-1 ring-border-soft/60">
          <Image
            src="/images/about-team.png"
            alt="Assistente da Under Control atendendo um cliente ao telefone"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
