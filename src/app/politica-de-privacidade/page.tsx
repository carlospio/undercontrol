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

const sections = [
  {
    title: "1. Quem somos",
    paragraphs: [
      `A ${siteConfig.name} presta serviços de assistência executiva remota. Esta Política de Privacidade explica, de forma simples, como tratamos os dados pessoais de quem visita este site ou entra em contato conosco, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD).`,
    ],
  },
  {
    title: "2. Dados que coletamos",
    paragraphs: [
      "Coletamos apenas os dados necessários para atender você:",
    ],
    list: [
      "Dados informados por você no formulário de contato ou em conversas pelo WhatsApp, telefone e e-mail: nome, e-mail, telefone, profissão/segmento e conteúdo da mensagem.",
      "Dados de navegação coletados por cookies, caso você os aceite: páginas visitadas, tempo de permanência, tipo de dispositivo e navegador, de forma agregada e sem identificar você pessoalmente.",
    ],
  },
  {
    title: "3. Para que usamos os dados",
    paragraphs: ["Utilizamos os dados pessoais para:"],
    list: [
      "responder às suas mensagens e solicitações;",
      "elaborar propostas e prestar os serviços contratados;",
      "melhorar o funcionamento e o conteúdo do site;",
      "cumprir obrigações legais e regulatórias.",
    ],
  },
  {
    title: "4. Cookies",
    paragraphs: [
      "Cookies são pequenos arquivos armazenados no seu navegador. Usamos cookies de medição e análise somente após o seu consentimento, que pode ser dado ou recusado no aviso exibido na primeira visita. Você também pode apagar ou bloquear cookies a qualquer momento nas configurações do seu navegador, sem prejuízo ao uso das principais funções do site.",
    ],
  },
  {
    title: "5. Compartilhamento de dados",
    paragraphs: [
      "Não vendemos os seus dados. Eles podem ser compartilhados apenas com prestadores de serviço essenciais à operação do site e do atendimento (como hospedagem, ferramentas de e-mail, de mensagens e de análise de acesso), que seguem regras de confidencialidade e segurança, ou quando houver obrigação legal ou determinação de autoridade competente.",
    ],
  },
  {
    title: "6. Confidencialidade e segurança",
    paragraphs: [
      "Adotamos medidas técnicas e administrativas razoáveis para proteger os dados pessoais contra acessos não autorizados, perda ou uso indevido. As informações compartilhadas durante a prestação dos serviços são tratadas com sigilo e discrição.",
    ],
  },
  {
    title: "7. Por quanto tempo guardamos os dados",
    paragraphs: [
      "Mantemos os dados pelo tempo necessário para cumprir as finalidades descritas nesta política, para atender a obrigações legais ou para o exercício regular de direitos. Depois disso, os dados são eliminados ou anonimizados.",
    ],
  },
  {
    title: "8. Seus direitos",
    paragraphs: ["Nos termos da LGPD, você pode, a qualquer momento, solicitar:"],
    list: [
      "a confirmação de que tratamos seus dados e o acesso a eles;",
      "a correção de dados incompletos, inexatos ou desatualizados;",
      "a anonimização, o bloqueio ou a eliminação de dados desnecessários ou tratados em desconformidade;",
      "a portabilidade dos dados;",
      "a revogação do consentimento, quando o tratamento se basear nele;",
      "informações sobre com quem compartilhamos seus dados.",
    ],
  },
  {
    title: "9. Alterações nesta política",
    paragraphs: [
      "Podemos atualizar esta Política de Privacidade sempre que necessário. A versão mais recente ficará sempre disponível nesta página, com a data da última atualização.",
    ],
  },
];

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Política de Privacidade", href: "/politica-de-privacidade" }]} />

      <section className="bg-cream py-16">
        <Container className="max-w-3xl">
          <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Política de Privacidade
          </h1>
          <p className="mt-4 text-sm text-muted">Última atualização: 19 de outubro de 2026.</p>

          <div className="mt-8 space-y-8 text-base leading-relaxed text-ink">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-display text-xl font-semibold text-ink">{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-2 text-muted">
                    {paragraph}
                  </p>
                ))}
                {section.list ? (
                  <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">10. Contato</h2>
              <p className="mt-2 text-muted">
                Para exercer seus direitos ou tirar dúvidas sobre esta política, fale conosco pelo
                e-mail {siteConfig.email} ou pelo WhatsApp {siteConfig.whatsapp.display}.
              </p>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
}
