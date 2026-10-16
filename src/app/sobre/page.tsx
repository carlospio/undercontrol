import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Sobre a Under Control",
  description:
    "Conheça a história, a missão e os valores da Under Control, especializada em assistência executiva remota desde 2020.",
  path: "/sobre",
});

const values = [
  {
    title: "Atendimento personalizado",
    description:
      "Cada cliente tem uma rotina diferente. O escopo de atuação é desenhado sob medida, e não encaixado em um pacote genérico.",
  },
  {
    title: "Discrição e confiança",
    description:
      "A equipe atua como uma extensão da sua operação, com discrição no trato de informações e compromissos sensíveis.",
  },
  {
    title: "Profissionalismo",
    description:
      "O atendimento segue o mesmo padrão de qualidade em cada contato, representando bem a sua marca perante clientes e pacientes.",
  },
];

export default function SobrePage() {
  return (
    <>
      <OrganizationJsonLd />
      <Breadcrumb items={[{ label: "Sobre", href: "/sobre" }]} />

      <section className="bg-ink py-16 text-white">
        <Container>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Sobre a Under Control
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/76">
            Assistência executiva remota para quem precisa de mais tempo e uma rotina mais
            organizada.
          </p>
        </Container>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-16">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl ring-1 ring-border-soft/60 lg:mx-0 lg:max-w-none">
            <Image
              src="/images/about-juliana.jpg"
              alt={`${siteConfig.ceo.name}, ${siteConfig.ceo.role.toLowerCase()} da Under Control`}
              fill
              sizes="(min-width: 1024px) 26rem, (min-width: 640px) 24rem, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <SectionHeading title="Nossa história" />
            <p className="mt-6 text-base leading-relaxed text-muted">
              A Under Control nasceu em {siteConfig.foundingYear} com o objetivo de auxiliar
              empresários, empreendedores, profissionais da área da saúde e qualquer outro
              profissional, pessoa física ou jurídica, que precise delegar suas atividades
              administrativas ou pessoais e ganhar tempo livre — focando melhor no crescimento
              dos seus negócios e aproveitando mais tempo com a família e amigos.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              À frente da operação está {siteConfig.ceo.name}, {siteConfig.ceo.role.toLowerCase()},
              que atua com ampla experiência como secretária executiva. {siteConfig.ceo.bio}
            </p>
            <p className="mt-6 border-l-2 border-gold pl-4 text-sm text-ink">
              <span className="block font-display text-base font-semibold">{siteConfig.ceo.name}</span>
              {siteConfig.ceo.role}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-surface-alt/40 py-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <SectionHeading title="Missão" />
            <p className="mt-4 text-base leading-relaxed text-muted">
              Devolver tempo de qualidade para quem confia na Under Control, cuidando das tarefas
              administrativas e pessoais com eficiência, personalização e profissionalismo.
            </p>
          </div>
          <div>
            <SectionHeading title="Diferenciais" />
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                "Escopo de atendimento sob medida para cada cliente",
                "Atendimento humano, sem respostas automáticas",
                "Flexibilidade sem os custos de uma contratação CLT",
                "Acompanhamento contínuo da rotina delegada",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-border-soft/60 bg-surface p-5 text-base text-ink"
                >
                  <span aria-hidden="true" className="mt-0.5 text-gold-dark">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16">
        <Container>
          <SectionHeading eyebrow="O que nos guia" title="Nossos" emphasis="valores." align="center" />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-border-soft/60 bg-surface p-6">
                <h3 className="font-display text-lg font-semibold text-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection ctaLabel="Conheça a Under Control" ctaHref="/contato" />
    </>
  );
}
