export const siteConfig = {
  name: "Under Control",
  shortName: "Under Control",
  tagline: "Sua assistente remota especializada.",
  description:
    "A Under Control cuida das suas tarefas administrativas e pessoais de forma eficiente, personalizada e profissional, para você ter mais tempo para o que realmente importa.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://undercontroll.com.br",
  foundingYear: 2020,
  ceo: {
    name: "Juliana Azevedo",
    role: "CEO & Fundadora",
    bio: "Atua com ampla experiência como secretária executiva e se dedica diariamente para que os clientes da Under Control sejam atendidos da forma mais eficiente possível.",
  },
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5511999277276",
    display: "(11) 99927-7276",
    get url() {
      return `https://api.whatsapp.com/send?phone=${this.number}`;
    },
  },
  phone: {
    number: process.env.NEXT_PUBLIC_PHONE ?? "+5511999277276",
    display: "(11) 99927-7276",
  },
  email: "comercial@undercontroll.com.br",
  address: {
    street: "Al. Rio Negro, 585",
    neighborhood: "Alphaville",
    city: "Barueri",
    state: "SP",
    zipCode: "06454-000",
    country: "BR",
    mapUrl: "https://share.google/81yVCdZBz3P4k9QNp",
  },
  social: {
    instagram: "https://www.instagram.com/under_control_assistant/",
    // TODO: confirmar URLs oficiais de Facebook e LinkedIn antes de publicar
    facebook: "",
    linkedin: "",
  },
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
} as const;

export const navigation = {
  main: [
    { label: "Sobre", href: "/sobre" },
    { label: "Serviços", href: "/servicos" },
    { label: "Soluções", href: "/solucoes" },
    { label: "Como funciona", href: "/como-funciona" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
    { label: "Contato", href: "/contato" },
  ],
  footer: {
    navegacao: [
      { label: "Início", href: "/" },
      { label: "Sobre", href: "/sobre" },
      { label: "Serviços", href: "/servicos" },
      { label: "Soluções", href: "/solucoes" },
      { label: "Como funciona", href: "/como-funciona" },
      { label: "FAQ", href: "/faq" },
      { label: "Blog", href: "/blog" },
      { label: "Contato", href: "/contato" },
    ],
    legal: [
      { label: "Política de Privacidade", href: "/politica-de-privacidade" },
    ],
  },
} as const;
