import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Serviços de Assistente Remota",
  description:
    "Conheça todos os serviços da Under Control: gestão de agenda, atendimento telefônico e via WhatsApp, gestão de leads, viagens, documentos e muito mais.",
  path: "/servicos",
});

export default function ServicosPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Serviços", href: "/servicos" }]} />

      <section className="bg-ink py-16 text-white">
        <Container>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Nossos serviços
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/76">
            Um apoio administrativo completo, construído sob medida para a sua rotina — da gestão
            de agenda ao atendimento, passando por viagens, documentos e muito mais.
          </p>
        </Container>
      </section>

      <section className="bg-cream py-16">
        <Container>
          <SectionHeading title="Escolha o serviço que" emphasis="faz sentido para você." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
