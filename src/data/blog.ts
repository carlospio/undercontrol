import type { BlogCategory, BlogPost } from "./types";

export const blogCategories: BlogCategory[] = [
  {
    slug: "assistente-remota",
    name: "Assistente Remota",
    description:
      "Tudo sobre o que é, como funciona e quando faz sentido contar com uma assistente remota.",
  },
  {
    slug: "produtividade",
    name: "Produtividade",
    description:
      "Ideias práticas para organizar a rotina e ganhar tempo no dia a dia profissional.",
  },
  {
    slug: "gestao",
    name: "Gestão",
    description:
      "Boas práticas de organização, atendimento e gestão para negócios e escritórios.",
  },
  {
    slug: "atendimento",
    name: "Atendimento",
    description:
      "Conteúdo sobre atendimento ao cliente, WhatsApp, telefone e experiência do paciente.",
  },
  {
    slug: "saude",
    name: "Saúde",
    description:
      "Conteúdo voltado a clínicas, consultórios e profissionais da área da saúde.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "o-que-e-uma-assistente-remota",
    title: "O que é uma assistente remota e como ela pode ajudar sua rotina",
    excerpt:
      "Entenda o que faz uma assistente remota, quais tarefas ela pode assumir e como esse formato de apoio se diferencia de uma contratação tradicional.",
    category: "assistente-remota",
    publishedAt: "2026-02-10",
    readingTime: "5 min",
    content: [
      {
        heading: "O que é uma assistente remota?",
        body: [
          "Uma assistente remota é uma profissional que presta apoio administrativo e de atendimento à distância, cuidando de tarefas como agenda, contatos e pendências do dia a dia — sem precisar estar fisicamente presente no seu escritório ou consultório.",
          "Diferente de uma contratação tradicional, o apoio remoto costuma ter um escopo flexível, ajustado conforme o volume de demandas de cada cliente.",
        ],
      },
      {
        heading: "Quais tarefas uma assistente remota pode assumir?",
        body: [
          "Entre as atividades mais comuns estão a gestão de agenda e compromissos, a triagem e resposta de contatos por telefone e WhatsApp, o acompanhamento de pendências administrativas e o apoio em tarefas pontuais, como organização de documentos ou cotações.",
        ],
      },
      {
        heading: "Quando faz sentido contratar uma assistente remota?",
        body: [
          "Sinais comuns de que é hora de delegar incluem: agenda que depende só da sua memória, contatos que ficam sem resposta, tarefas administrativas acumuladas e falta de tempo para o que exige a sua atenção direta — seja o crescimento do negócio, o atendimento a pacientes ou a atuação em casos e projetos.",
        ],
      },
    ],
    faq: [
      {
        question: "Assistente remota é o mesmo que assistente virtual?",
        answer:
          "Os termos são usados de forma parecida no mercado. Na prática, o que diferencia um serviço do outro é o escopo de atuação e o nível de personalização do atendimento oferecido.",
      },
    ],
    relatedServices: ["assistente-remota", "secretaria-remota"],
    relatedSolutions: ["empresarios", "profissionais-liberais"],
  },
  {
    slug: "como-delegar-tarefas-administrativas",
    title: "Como delegar tarefas administrativas sem perder o controle da rotina",
    excerpt:
      "Delegar não é perder controle — é criar um processo que sustenta o crescimento. Veja como identificar o que delegar primeiro.",
    category: "produtividade",
    publishedAt: "2026-02-24",
    readingTime: "4 min",
    content: [
      {
        heading: "Por que delegar é diferente de perder controle",
        body: [
          "Quando tudo depende de uma única pessoa, nada avança com a atenção que merece. Delegar tarefas administrativas significa criar uma rotina estruturada, com processos claros, e não simplesmente abrir mão das decisões importantes.",
        ],
      },
      {
        heading: "Como identificar o que delegar primeiro",
        body: [
          "Um bom ponto de partida é observar quais tarefas se repetem toda semana, quais interrompem seu foco com mais frequência e quais não exigem necessariamente a sua execução direta — como confirmações de agenda, triagem de mensagens e organização de documentos.",
        ],
      },
      {
        heading: "Delegar com uma rotina acompanhada",
        body: [
          "O processo de delegação funciona melhor quando existe um acompanhamento contínuo: alguém entende sua rotina, propõe um plano de atuação e ajusta o escopo conforme a demanda muda ao longo do tempo.",
        ],
      },
    ],
    relatedServices: ["assistente-remota", "apoio-administrativo"],
    relatedSolutions: ["empresarios", "advogados"],
  },
  {
    slug: "como-reduzir-faltas-em-consultas",
    title: "Como reduzir faltas em consultas: 4 práticas para clínicas e consultórios",
    excerpt:
      "Faltas e cancelamentos de última hora afetam diretamente a agenda de clínicas e consultórios. Veja práticas simples para reduzir esse problema.",
    category: "saude",
    publishedAt: "2026-03-03",
    readingTime: "4 min",
    content: [
      {
        heading: "Confirmações ativas antes da consulta",
        body: [
          "Enviar uma confirmação com antecedência — e não apenas um lembrete — reduz esquecimentos e dá ao paciente a chance de remarcar com tempo suficiente para preencher o horário.",
        ],
      },
      {
        heading: "Lista de espera organizada",
        body: [
          "Manter uma lista de espera ativa permite preencher rapidamente horários cancelados, em vez de deixá-los vagos até a próxima consulta agendada.",
        ],
      },
      {
        heading: "Atendimento rápido pelo WhatsApp",
        body: [
          "Grande parte das remarcações acontece por mensagem. Um atendimento ágil nesse canal facilita o reagendamento em vez do simples cancelamento.",
        ],
      },
      {
        heading: "Acompanhamento no pós-consulta",
        body: [
          "Um contato de acompanhamento após a consulta fortalece a relação com o paciente e ajuda a identificar a necessidade de um retorno, reduzindo faltas futuras.",
        ],
      },
    ],
    relatedServices: ["agendamento-de-consultas", "atendimento-whatsapp"],
    relatedSolutions: ["medicos", "dentistas", "profissionais-da-saude"],
  },
  {
    slug: "como-organizar-agenda-profissional",
    title: "Como organizar uma agenda profissional sem depender só da memória",
    excerpt:
      "Uma agenda desorganizada custa tempo e gera retrabalho. Veja como estruturar compromissos, confirmações e lembretes de forma consistente.",
    category: "gestao",
    publishedAt: "2026-03-17",
    readingTime: "4 min",
    content: [
      {
        heading: "Centralize compromissos em um único lugar",
        body: [
          "Manter compromissos espalhados entre agendas, mensagens e anotações é uma das principais causas de conflitos de horário. O primeiro passo é centralizar tudo em uma única ferramenta.",
        ],
      },
      {
        heading: "Automatize confirmações e lembretes",
        body: [
          "Confirmações e lembretes enviados com antecedência reduzem esquecimentos, tanto os seus quanto os de quem depende dos seus horários.",
        ],
      },
      {
        heading: "Reserve blocos para tarefas de concentração",
        body: [
          "Além de organizar compromissos externos, uma boa gestão de agenda reserva blocos de tempo protegidos para tarefas que exigem foco, evitando interrupções constantes.",
        ],
      },
    ],
    relatedServices: ["gestao-de-agenda", "assistente-remota"],
    relatedSolutions: ["empresarios", "advogados"],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getCategoryBySlug(slug: string) {
  return blogCategories.find((category) => category.slug === slug);
}

export function getPostsByCategory(categorySlug: string) {
  return blogPosts.filter((post) => post.category === categorySlug);
}
