import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { siteConfig } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Política de Privacidade",
  description: "Saiba como a Under Control trata os dados pessoais coletados através do site.",
  path: "/politica-de-privacidade",
  noIndex: true,
});

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Política de Privacidade", href: "/politica-de-privacidade" }]} />

      <section className="bg-cream py-16">
        <Container className="max-w-3xl">
          <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Política de Privacidade
          </h1>
          <p className="mt-4 text-sm text-muted">Última atualização: TODO — inserir data da revisão jurídica.</p>

          <div className="mt-8 space-y-6 text-base leading-relaxed text-ink">
            <p>
              Esta página reúne a estrutura da Política de Privacidade da {siteConfig.name}. O
              conteúdo abaixo é um esqueleto preparado para revisão e preenchimento por um
              profissional jurídico responsável — nenhum texto legal definitivo foi elaborado
              aqui.
            </p>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">1. Dados coletados</h2>
              <p className="mt-2 text-muted">
                TODO: descrever quais dados pessoais são coletados através do formulário de
                contato e demais canais do site (nome, e-mail, telefone, mensagem).
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">2. Finalidade do tratamento</h2>
              <p className="mt-2 text-muted">
                TODO: descrever a finalidade do uso dos dados coletados (contato comercial,
                elaboração de proposta, atendimento).
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">3. Compartilhamento de dados</h2>
              <p className="mt-2 text-muted">
                TODO: descrever se e com quem os dados são compartilhados (ex.: ferramentas de
                CRM, WhatsApp Business).
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">4. Direitos do titular (LGPD)</h2>
              <p className="mt-2 text-muted">
                TODO: descrever os direitos garantidos pela Lei Geral de Proteção de Dados
                (acesso, correção, exclusão, portabilidade) e o canal de contato do encarregado.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">5. Contato</h2>
              <p className="mt-2 text-muted">
                Dúvidas sobre esta política podem ser enviadas para {siteConfig.email}.
              </p>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
}
