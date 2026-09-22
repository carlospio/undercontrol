import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/Button";
import { getServicesBySlugs } from "@/data/services";

const homeServiceSlugs = [
  "gestao-de-agenda",
  "atendimento-telefonico",
  "atendimento-whatsapp",
  "agendamento-de-consultas",
  "gestao-de-leads",
  "organizacao-de-viagens",
  "cotacoes-e-compras",
  "gestao-de-documentos",
  "apoio-administrativo",
  "servicos-personalizados",
];

export function ServicesSection() {
  const homeServices = getServicesBySlugs(homeServiceSlugs);

  return (
    <section className="bg-surface-alt/40 py-20">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Nossos serviços"
            title="Um apoio completo para a sua"
            emphasis="rotina administrativa."
          />
          <Button href="/servicos" variant="light">
            Ver todos os serviços
          </Button>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {homeServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
