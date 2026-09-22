import type { Service } from "./types";

export const services: Service[] = [
  {
    slug: "assistente-remota",
    name: "Assistente Remota",
    keyword: "assistente remota",
    shortDescription:
      "Uma assistente remota especializada para cuidar da sua agenda, dos seus contatos e das suas pendências do dia a dia.",
    intro:
      "Uma assistente remota é uma profissional que atua à distância cuidando das tarefas administrativas e pessoais que consomem o seu tempo, para que você possa focar no que realmente importa: seu negócio, seus pacientes ou sua rotina.",
    whatIsIt:
      "A assistente remota da Under Control atua como uma extensão da sua operação. Ela organiza sua agenda, responde e filtra contatos, acompanha pendências e mantém uma rotina estruturada, sem a necessidade de uma contratação fixa (CLT) ou de um espaço físico dedicado.",
    howUnderControlHelps:
      "A Under Control desenha um escopo de trabalho sob medida para a sua rotina. Depois de entender seus canais de atendimento, seu volume de demandas e suas prioridades, montamos um plano de atuação e colocamos uma assistente dedicada para executá-lo, com acompanhamento contínuo.",
    activities: [
      "Gestão de agenda e compromissos",
      "Triagem e resposta de contatos (telefone, e-mail, WhatsApp)",
      "Confirmações e lembretes",
      "Organização de tarefas administrativas do dia a dia",
      "Acompanhamento de pendências até a resolução",
    ],
    benefits: [
      "Mais tempo livre na sua rotina",
      "Atendimento contínuo aos seus contatos",
      "Redução de tarefas operacionais",
      "Flexibilidade sem os custos de uma contratação CLT",
    ],
    idealFor: [
      "empresarios",
      "medicos",
      "advogados",
      "profissionais-liberais",
    ],
    relatedServices: [
      "secretaria-remota",
      "gestao-de-agenda",
      "atendimento-whatsapp",
    ],
    faq: [
      {
        question: "O que é uma assistente remota?",
        answer:
          "É uma profissional que presta apoio administrativo e de atendimento à distância, cuidando de agenda, contatos e pendências do seu dia a dia, sem precisar estar fisicamente no seu escritório ou consultório.",
      },
      {
        question: "O que uma assistente remota faz?",
        answer:
          "Organiza agenda e compromissos, responde e confirma contatos, acompanha pendências administrativas e mantém uma rotina estruturada, de acordo com o escopo definido para o seu negócio.",
      },
      {
        question: "Quanto custa uma assistente remota?",
        answer:
          "O valor depende do escopo de atendimento e do volume de demandas da sua rotina. A Under Control monta uma proposta sob medida após entender suas necessidades — fale com a equipe para receber um orçamento.",
      },
      {
        question: "Assistente remota ou secretária presencial: qual escolher?",
        answer:
          "A assistente remota costuma ser mais flexível e não envolve os custos de uma contratação CLT (encargos, férias, substituições). Ela é indicada para quem precisa de apoio consistente sem ampliar a estrutura interna da empresa.",
      },
    ],
    seo: {
      title: "Assistente Remota",
      description:
        "Conte com uma assistente remota especializada para organizar sua rotina, cuidar das tarefas administrativas e liberar seu tempo. Conheça a Under Control.",
    },
  },
  {
    slug: "secretaria-remota",
    name: "Secretária Remota",
    keyword: "secretária remota",
    shortDescription:
      "Apoio de secretariado à distância, com organização de agenda, atendimento e rotina administrativa.",
    intro:
      "A secretária remota cuida das funções tradicionais de secretariado — agenda, atendimento, organização de documentos — sem a necessidade de uma posição fixa dentro da empresa.",
    whatIsIt:
      "É um formato de apoio administrativo em que uma profissional de secretariado atua remotamente, integrada à sua rotina, cuidando de compromissos, contatos e tarefas do escritório ou consultório.",
    howUnderControlHelps:
      "A Under Control assume as funções de secretariado da sua operação: organização de agenda, atendimento telefônico e por WhatsApp, controle de documentos e suporte administrativo geral, com um escopo flexível e revisado conforme sua demanda cresce.",
    activities: [
      "Organização e controle de agenda",
      "Atendimento telefônico e via WhatsApp",
      "Organização de documentos e arquivos",
      "Apoio em tarefas administrativas gerais",
      "Intermediação entre você e seus contatos",
    ],
    benefits: [
      "Rotina de escritório mais organizada",
      "Sem custos de contratação CLT",
      "Cobertura contínua, sem depender de uma única pessoa",
      "Escopo ajustável conforme a demanda",
    ],
    idealFor: ["advogados", "arquitetos", "engenheiros", "empresarios"],
    relatedServices: [
      "assistente-remota",
      "gestao-de-agenda",
      "gestao-de-documentos",
    ],
    faq: [
      {
        question: "Secretária CLT ou apoio remoto: qual a diferença?",
        answer:
          "Além da remuneração, uma contratação CLT envolve encargos, férias, gestão e substituição em caso de ausência. O apoio remoto oferece um escopo flexível e previsível, sem ampliar sua estrutura de gestão.",
      },
      {
        question: "A secretária remota substitui uma recepção física?",
        answer:
          "Ela cobre as funções administrativas e de atendimento que hoje dependem de você ou de uma pessoa fixa. Para operações que exigem presença física constante, o apoio remoto atua em conjunto com a estrutura existente.",
      },
      {
        question: "Como funciona a comunicação no dia a dia?",
        answer:
          "A comunicação acontece pelos canais que você já utiliza — telefone, WhatsApp, e-mail — com um fluxo de trabalho alinhado durante o onboarding.",
      },
    ],
    seo: {
      title: "Secretária Remota",
      description:
        "Secretária remota para organizar sua agenda, seu atendimento e sua rotina administrativa, com um escopo flexível e sem os custos de uma contratação CLT.",
    },
  },
  {
    slug: "gestao-de-agenda",
    name: "Gestão de Agenda",
    keyword: "gestão de agenda",
    shortDescription:
      "Sua agenda organizada, com compromissos, confirmações e lembretes sob controle.",
    intro:
      "Uma agenda desorganizada custa tempo, gera retrabalho e prejudica a experiência de quem depende dos seus horários. A gestão de agenda coloca ordem nesse processo.",
    whatIsIt:
      "É o serviço responsável por administrar seus compromissos de ponta a ponta: marcação, confirmação, remarcação e lembretes, evitando conflitos de horário e esquecimentos.",
    howUnderControlHelps:
      "A equipe da Under Control assume o controle da sua agenda, alinhando ferramentas, horários e prioridades. Compromissos, confirmações e lembretes passam a acontecer em fluxo, sem depender da sua memória.",
    activities: [
      "Marcação e remarcação de compromissos",
      "Confirmações automáticas e manuais",
      "Envio de lembretes para você e seus contatos",
      "Organização de prioridades e bloqueios de agenda",
      "Integração com as ferramentas que você já usa",
    ],
    benefits: [
      "Menos conflitos e esquecimentos",
      "Redução de faltas e cancelamentos de última hora",
      "Mais previsibilidade na rotina",
      "Tempo livre para o que exige a sua atenção direta",
    ],
    idealFor: ["medicos", "dentistas", "profissionais-da-saude", "advogados"],
    relatedServices: [
      "agendamento-de-consultas",
      "atendimento-whatsapp",
      "atendimento-telefonico",
    ],
    faq: [
      {
        question: "Vocês usam a minha agenda ou sistema atual?",
        answer:
          "Sim. A gestão de agenda é feita preferencialmente nas ferramentas e sistemas que você já utiliza, para evitar retrabalho e manter a continuidade da sua rotina.",
      },
      {
        question: "Como funcionam as confirmações de compromissos?",
        answer:
          "As confirmações são enviadas com antecedência pelos canais definidos no seu escopo (WhatsApp, telefone ou e-mail), reduzindo faltas e reforçando o comparecimento.",
      },
    ],
    seo: {
      title: "Gestão de Agenda",
      description:
        "Gestão de agenda profissional: compromissos organizados, confirmações em dia e menos faltas. Conheça o serviço da Under Control.",
    },
  },
  {
    slug: "atendimento-telefonico",
    name: "Atendimento Telefônico",
    keyword: "atendimento telefônico",
    shortDescription:
      "Atendimento telefônico profissional para que nenhum contato fique sem resposta.",
    intro:
      "Cada ligação não atendida é uma oportunidade perdida ou uma pendência a mais na sua lista. O atendimento telefônico da Under Control garante que seus contatos sejam recebidos com atenção.",
    whatIsIt:
      "É o serviço de recepção e triagem de ligações em nome da sua empresa, consultório ou escritório, com um script alinhado ao tom da sua marca.",
    howUnderControlHelps:
      "A equipe atende as ligações seguindo um roteiro construído junto com você, filtra o que é prioridade, registra recados e encaminha o que precisa da sua atenção direta — sem que você precise interromper o que está fazendo.",
    activities: [
      "Atendimento e triagem de ligações",
      "Registro e encaminhamento de recados",
      "Confirmação de compromissos por telefone",
      "Atendimento com script alinhado à sua marca",
      "Direcionamento de urgências",
    ],
    benefits: [
      "Nenhuma ligação importante fica sem resposta",
      "Menos interrupções na sua rotina",
      "Atendimento consistente, com o mesmo padrão sempre",
      "Mais profissionalismo na primeira impressão",
    ],
    idealFor: ["medicos", "dentistas", "advogados", "profissionais-da-saude"],
    relatedServices: [
      "atendimento-whatsapp",
      "gestao-de-agenda",
      "secretaria-remota",
    ],
    faq: [
      {
        question: "O atendimento telefônico substitui a proximidade com o meu cliente?",
        answer:
          "Não. O objetivo é garantir que cada contato seja recebido com atenção e organização — a proximidade que você já constrói com clientes e pacientes continua sendo sua. O atendimento remoto cuida do que vem antes e depois dessa conversa.",
      },
      {
        question: "Como é definido o script de atendimento?",
        answer:
          "Durante o onboarding, alinhamos tom de voz, informações principais e fluxos de encaminhamento, para que o atendimento reflita a forma como você já se comunica com seus contatos.",
      },
    ],
    seo: {
      title: "Atendimento Telefônico",
      description:
        "Atendimento telefônico profissional e organizado para o seu negócio, consultório ou escritório, sem perder nenhum contato importante.",
    },
  },
  {
    slug: "atendimento-whatsapp",
    name: "Atendimento via WhatsApp",
    keyword: "atendimento WhatsApp",
    shortDescription:
      "Atendimento via WhatsApp organizado, com resposta ágil e acompanhamento de cada conversa.",
    intro:
      "O WhatsApp é hoje um dos principais canais de contato com clientes e pacientes. Sem uma rotina clara, mensagens se perdem e respostas demoram — o atendimento via WhatsApp da Under Control resolve isso.",
    whatIsIt:
      "É o serviço de gestão do WhatsApp comercial, com atendimento humano, organização de conversas e acompanhamento de cada solicitação até a resolução.",
    howUnderControlHelps:
      "A equipe organiza e responde as conversas do seu WhatsApp seguindo o tom da sua marca, direciona o que precisa da sua atenção e mantém um histórico claro de cada contato, evitando que mensagens fiquem sem retorno.",
    activities: [
      "Atendimento humano via WhatsApp",
      "Organização e priorização de conversas",
      "Envio de confirmações e lembretes",
      "Encaminhamento de demandas específicas",
      "Acompanhamento até a resolução de cada solicitação",
    ],
    benefits: [
      "Respostas mais rápidas para clientes e pacientes",
      "Nenhuma conversa esquecida",
      "Atendimento no tom da sua marca",
      "Mais organização no principal canal de contato",
    ],
    idealFor: ["medicos", "dentistas", "profissionais-da-saude", "empresarios"],
    relatedServices: [
      "atendimento-telefonico",
      "gestao-de-agenda",
      "gestao-de-leads",
    ],
    faq: [
      {
        question: "Vocês fazem atendimento pelo WhatsApp?",
        answer:
          "Sim. O atendimento via WhatsApp é um dos principais serviços da Under Control, com organização de conversas, resposta ágil e acompanhamento de cada solicitação.",
      },
      {
        question: "O número de WhatsApp usado é o meu ou da Under Control?",
        answer:
          "O atendimento é feito no seu número comercial, mantendo a identidade da sua marca em cada conversa.",
      },
    ],
    seo: {
      title: "Atendimento via WhatsApp",
      description:
        "Atendimento via WhatsApp organizado e humano para o seu negócio ou consultório, com resposta ágil e acompanhamento de cada conversa.",
    },
  },
  {
    slug: "agendamento-de-consultas",
    name: "Agendamento de Consultas",
    keyword: "agendamento de consultas",
    shortDescription:
      "Agendamento e confirmação de consultas e sessões, com foco em reduzir faltas.",
    intro:
      "Para clínicas e consultórios, cada falta é tempo e receita perdidos. O agendamento de consultas organiza esse processo de ponta a ponta.",
    whatIsIt:
      "É o serviço de marcação, confirmação e remanejamento de consultas e sessões, incluindo lembretes para pacientes e gestão de lista de espera.",
    howUnderControlHelps:
      "A Under Control assume o agendamento de consultas do seu consultório ou clínica, com confirmações ativas, lembretes automáticos e reorganização ágil da agenda em caso de cancelamentos.",
    activities: [
      "Agendamento de consultas e sessões",
      "Confirmações e lembretes para pacientes",
      "Gestão de lista de espera",
      "Remanejamento em caso de cancelamento",
      "Organização de encaixes e horários livres",
    ],
    benefits: [
      "Redução de faltas e cancelamentos",
      "Agenda sempre atualizada",
      "Melhor experiência para o paciente",
      "Aproveitamento dos horários livres",
    ],
    idealFor: ["medicos", "dentistas", "profissionais-da-saude"],
    relatedServices: [
      "gestao-de-agenda",
      "atendimento-whatsapp",
      "atendimento-telefonico",
    ],
    faq: [
      {
        question: "Como reduzir faltas em consultas?",
        answer:
          "Com confirmações ativas e lembretes enviados com antecedência, além de uma gestão de lista de espera que permite preencher rapidamente horários cancelados.",
      },
      {
        question: "Vocês conseguem usar o sistema da minha clínica?",
        answer:
          "Sim, sempre que possível o agendamento é feito diretamente no sistema ou agenda que você já utiliza.",
      },
    ],
    seo: {
      title: "Agendamento de Consultas",
      description:
        "Agendamento de consultas e sessões com confirmações, lembretes e gestão de lista de espera para reduzir faltas na sua clínica ou consultório.",
    },
  },
  {
    slug: "gestao-de-leads",
    name: "Gestão de Leads",
    keyword: "gestão de leads",
    shortDescription:
      "Organização e acompanhamento de leads para que nenhum contato comercial fique sem resposta.",
    intro:
      "Um lead sem retorno rápido é uma venda que provavelmente não vai acontecer. A gestão de leads organiza e acompanha cada contato comercial da sua empresa.",
    whatIsIt:
      "É o serviço de recebimento, qualificação e acompanhamento de leads gerados pelos seus canais de contato, mantendo um fluxo organizado até a conversão ou o encerramento do atendimento.",
    howUnderControlHelps:
      "A equipe organiza os leads recebidos, faz o primeiro contato e a qualificação inicial, e mantém o acompanhamento necessário para que cada oportunidade receba a atenção no momento certo.",
    activities: [
      "Recebimento e organização de leads",
      "Qualificação inicial de contatos",
      "Acompanhamento até a resposta final",
      "Atualização de status de cada oportunidade",
      "Encaminhamento para a equipe comercial quando necessário",
    ],
    benefits: [
      "Menos leads esquecidos",
      "Resposta mais rápida a novos contatos",
      "Visão organizada do funil comercial",
      "Mais previsibilidade nas conversões",
    ],
    idealFor: ["empresarios", "profissionais-liberais"],
    relatedServices: [
      "atendimento-whatsapp",
      "atendimento-telefonico",
      "apoio-administrativo",
    ],
    faq: [
      {
        question: "Como funciona a gestão de leads na prática?",
        answer:
          "Os leads recebidos pelos seus canais são organizados, qualificados e acompanhados pela equipe até que recebam uma resposta ou sejam encaminhados à sua área comercial.",
      },
    ],
    seo: {
      title: "Gestão de Leads",
      description:
        "Gestão de leads organizada para que nenhum contato comercial fique sem resposta. Conheça o serviço da Under Control.",
    },
  },
  {
    slug: "organizacao-de-viagens",
    name: "Organização de Viagens",
    keyword: "organização de viagens",
    shortDescription:
      "Planejamento de viagens nacionais e internacionais, do início ao fim.",
    intro:
      "Organizar uma viagem exige tempo e atenção a detalhes que, na correria da rotina, costumam ficar para depois. A Under Control cuida disso por você.",
    whatIsIt:
      "É o serviço de planejamento e organização de viagens a trabalho ou pessoais, incluindo passagens, hospedagem, roteiro e documentação necessária.",
    howUnderControlHelps:
      "A equipe pesquisa, compara e organiza as melhores opções de acordo com suas preferências e orçamento, cuida das reservas e mantém tudo documentado e acessível antes da viagem.",
    activities: [
      "Pesquisa e reserva de passagens e hospedagem",
      "Organização de roteiros nacionais e internacionais",
      "Acompanhamento de documentação de viagem",
      "Ajustes e remarcações quando necessário",
      "Centralização das informações da viagem",
    ],
    benefits: [
      "Economia de tempo na pesquisa e organização",
      "Menos risco de imprevistos",
      "Roteiro organizado e documentado",
      "Atendimento também durante a viagem, se necessário",
    ],
    idealFor: ["empresarios", "advogados", "arquitetos", "engenheiros"],
    relatedServices: ["cotacoes-e-compras", "apoio-administrativo"],
    faq: [
      {
        question: "Vocês organizam viagens internacionais?",
        answer:
          "Sim, o serviço cobre viagens nacionais e internacionais, incluindo passagens, hospedagem e roteiro.",
      },
    ],
    seo: {
      title: "Organização de Viagens",
      description:
        "Planejamento completo de viagens nacionais e internacionais para empresários e profissionais liberais. Conheça o serviço da Under Control.",
    },
  },
  {
    slug: "cotacoes-e-compras",
    name: "Cotações e Compras",
    keyword: "cotações e compras",
    shortDescription:
      "Pesquisa de preços, cotações e organização de compras para o seu dia a dia.",
    intro:
      "Comparar fornecedores, pedir cotações e fechar compras consome um tempo que poderia estar em outras prioridades. Esse é o papel do serviço de cotações e compras.",
    whatIsIt:
      "É o serviço responsável por pesquisar fornecedores, solicitar cotações, comparar propostas e organizar o processo de compra, seja para uso pessoal ou para a operação do seu negócio.",
    howUnderControlHelps:
      "A equipe pesquisa opções, solicita cotações, organiza os orçamentos recebidos e apresenta um comparativo claro para a sua decisão final.",
    activities: [
      "Pesquisa de fornecedores",
      "Solicitação e organização de cotações",
      "Comparativo de propostas",
      "Acompanhamento do processo de compra",
      "Organização de comprovantes e notas",
    ],
    benefits: [
      "Economia de tempo na pesquisa",
      "Decisões de compra mais informadas",
      "Processo organizado do início ao fim",
      "Menos tarefas administrativas na sua lista",
    ],
    idealFor: ["empresarios", "profissionais-liberais"],
    relatedServices: ["organizacao-de-viagens", "gestao-de-documentos"],
    faq: [
      {
        question: "Esse serviço serve para compras pessoais ou só empresariais?",
        answer:
          "Serve para os dois casos. O escopo é definido de acordo com a sua necessidade, seja para compras pessoais ou para a operação da sua empresa.",
      },
    ],
    seo: {
      title: "Cotações e Compras",
      description:
        "Pesquisa de fornecedores, cotações e organização de compras para o seu dia a dia pessoal ou empresarial.",
    },
  },
  {
    slug: "gestao-de-documentos",
    name: "Gestão de Documentos",
    keyword: "gestão de documentos",
    shortDescription:
      "Organização e controle de documentos administrativos, pessoais e da sua operação.",
    intro:
      "Documentos espalhados entre e-mails, pastas e mensagens dificultam encontrar o que você precisa na hora certa. A gestão de documentos organiza isso de forma centralizada.",
    whatIsIt:
      "É o serviço de organização, arquivamento e controle de documentos administrativos, contratuais ou pessoais, com fácil acesso quando você precisar deles.",
    howUnderControlHelps:
      "A equipe organiza seus documentos por categoria, mantém um controle de vencimentos e pendências, e garante que tudo esteja acessível e atualizado.",
    activities: [
      "Organização e arquivamento de documentos",
      "Controle de prazos e vencimentos",
      "Digitalização e centralização de arquivos",
      "Apoio na emissão de documentos e notas",
      "Atualização de cadastros e registros",
    ],
    benefits: [
      "Documentos organizados e fáceis de encontrar",
      "Menos risco de prazos perdidos",
      "Processos administrativos mais ágeis",
      "Mais controle sobre a sua operação",
    ],
    idealFor: ["advogados", "arquitetos", "engenheiros", "empresarios"],
    relatedServices: ["apoio-administrativo", "cotacoes-e-compras"],
    faq: [
      {
        question: "Vocês emitem notas fiscais?",
        answer:
          "O apoio na emissão de notas e documentos faz parte do escopo administrativo, definido de acordo com a sua necessidade durante o onboarding.",
      },
    ],
    seo: {
      title: "Gestão de Documentos",
      description:
        "Organização e controle de documentos administrativos e pessoais, com prazos em dia e fácil acesso quando você precisar.",
    },
  },
  {
    slug: "apoio-administrativo",
    name: "Apoio Administrativo",
    keyword: "apoio administrativo",
    shortDescription:
      "Suporte administrativo completo para as tarefas que consomem o seu dia.",
    intro:
      "Toda rotina profissional acumula tarefas administrativas que, sozinhas, parecem pequenas — mas juntas ocupam grande parte do seu tempo. O apoio administrativo cuida delas por você.",
    whatIsIt:
      "É um serviço amplo de suporte às tarefas operacionais do dia a dia: organização, comunicação, controle de pendências e outras demandas administrativas da sua rotina.",
    howUnderControlHelps:
      "A Under Control identifica as tarefas administrativas que mais consomem o seu tempo e assume a execução delas, com uma rotina acompanhada de perto e ajustada conforme sua necessidade muda.",
    activities: [
      "Organização de tarefas administrativas diárias",
      "Apoio em processos internos",
      "Controle de pendências gerais",
      "Comunicação com fornecedores e parceiros",
      "Suporte em demandas pontuais",
    ],
    benefits: [
      "Menos tarefas operacionais na sua lista",
      "Mais tempo para decisões estratégicas",
      "Rotina administrativa mais organizada",
      "Apoio flexível, sem ampliar sua equipe interna",
    ],
    idealFor: ["empresarios", "profissionais-liberais", "advogados"],
    relatedServices: [
      "gestao-de-documentos",
      "gestao-de-leads",
      "servicos-personalizados",
    ],
    faq: [
      {
        question: "O que está incluso no apoio administrativo?",
        answer:
          "O escopo é definido conforme a sua rotina, podendo incluir organização de tarefas, controle de pendências, comunicação com fornecedores e outras demandas administrativas do dia a dia.",
      },
    ],
    seo: {
      title: "Apoio Administrativo",
      description:
        "Apoio administrativo completo para organizar as tarefas do seu dia a dia e liberar tempo para o que exige sua atenção direta.",
    },
  },
  {
    slug: "servicos-personalizados",
    name: "Serviços Personalizados",
    keyword: "serviços personalizados",
    shortDescription:
      "Um escopo de apoio remoto construído sob medida para necessidades específicas.",
    intro:
      "Nem toda rotina se encaixa em um serviço padrão. Os serviços personalizados existem para atender demandas específicas que fogem do escopo tradicional.",
    whatIsIt:
      "É um formato de atendimento em que o escopo, os processos e as ferramentas são construídos em conjunto com você, de acordo com fluxos e necessidades específicas da sua operação.",
    howUnderControlHelps:
      "A equipe da Under Control conversa com você para entender a fundo a demanda, monta um plano de atuação sob medida e acompanha os resultados de perto, ajustando o escopo conforme necessário.",
    activities: [
      "Levantamento detalhado da necessidade específica",
      "Construção de escopo sob medida",
      "Definição de fluxos e ferramentas da operação",
      "Acompanhamento alinhado à demanda",
      "Ajustes contínuos conforme a rotina evolui",
    ],
    benefits: [
      "Solução construída para o seu caso específico",
      "Flexibilidade total de escopo",
      "Acompanhamento próximo e contínuo",
      "Sem encaixe forçado em pacotes padrão",
    ],
    idealFor: [
      "empresarios",
      "profissionais-liberais",
      "advogados",
      "arquitetos",
      "engenheiros",
    ],
    relatedServices: ["apoio-administrativo", "assistente-remota"],
    faq: [
      {
        question: "Posso contratar serviços personalizados?",
        answer:
          "Sim. Quando a sua necessidade foge do escopo padrão dos demais serviços, a equipe constrói uma proposta sob medida a partir de uma conversa detalhada sobre a sua rotina.",
      },
    ],
    seo: {
      title: "Serviços Personalizados",
      description:
        "Escopo de apoio remoto sob medida, construído em conjunto para atender necessidades específicas da sua rotina ou operação.",
    },
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServicesBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => getServiceBySlug(slug))
    .filter((service): service is Service => Boolean(service));
}
