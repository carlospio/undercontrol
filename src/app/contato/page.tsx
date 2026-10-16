import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { ContactForm } from "@/components/ui/ContactForm";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contato",
  description:
    "Fale com a Under Control por telefone, WhatsApp ou e-mail e conheça uma proposta sob medida para a sua rotina.",
  path: "/contato",
});

const contactDetails = [
  { label: "Telefone", value: siteConfig.phone.display },
  { label: "WhatsApp", value: siteConfig.whatsapp.display },
  { label: "E-mail", value: siteConfig.email },
  {
    label: "Endereço",
    value: `${siteConfig.address.street}, ${siteConfig.address.neighborhood} — ${siteConfig.address.city}/${siteConfig.address.state}, CEP ${siteConfig.address.zipCode}`,
    href: siteConfig.address.mapUrl,
  },
];

export default function ContatoPage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <Breadcrumb items={[{ label: "Contato", href: "/contato" }]} />

      <section className="bg-ink py-16 text-white">
        <Container>
          <SectionHeading
            eyebrow="Vamos conversar"
            title="Sua rotina merece"
            emphasis="atenção."
            description="Sem compromisso e sem resposta automática. Você fala com uma equipe pronta para entender a realidade da sua rotina."
            tone="light"
            as="h1"
          />
        </Container>
      </section>

      <section className="bg-cream py-16">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">Fale conosco</h2>
            <dl className="mt-6 space-y-5">
              {contactDetails.map((detail) => (
                <div key={detail.label}>
                  <dt className="text-xs font-bold uppercase tracking-[0.14em] text-gold-dark">
                    {detail.label}
                  </dt>
                  <dd className="mt-1 text-base text-ink">
                    {"href" in detail ? (
                      <a
                        href={detail.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-4 hover:underline"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      detail.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <MapEmbed className="mt-8 text-gold-dark" />
          </div>
          <div className="rounded-2xl border border-border-soft/60 bg-surface p-6 sm:p-8">
            <ContactForm tone="dark" />
          </div>
        </Container>
      </section>
    </>
  );
}
