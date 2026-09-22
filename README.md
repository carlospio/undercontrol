# Under Control — Site institucional

Site institucional da Under Control (assistente remota especializada), construído em Next.js 16
(App Router), TypeScript e Tailwind CSS v4.

A identidade visual segue o site de referência (`https://underctrl-xevovqmv.manus.space/`) —
ver [`DESIGN.md`](./DESIGN.md) para a documentação completa do design system (cores, tipografia,
componentes) e dos dados institucionais confirmados (telefone, e-mail, endereço, fundação, CEO).

## Stack

- Next.js 16 (App Router, Server Components por padrão)
- TypeScript
- Tailwind CSS v4 (tokens via `@theme` em `src/app/globals.css`)
- `next/font` (Playfair Display + DM Sans) e `next/image`
- ESLint (config `next/core-web-vitals`)

## Instalação e desenvolvimento

```bash
npm install
cp .env.example .env.local   # preencha as variáveis conforme necessário
npm run dev
```

O site sobe em `http://localhost:3000`.

## Build e produção

```bash
npm run build
npm start
```

## Lint

```bash
npm run lint
```

## Estrutura do projeto

```text
src/
├── app/                  # rotas (App Router) — uma pasta por página
│   ├── servicos/         # 12 páginas de serviço, geradas a partir de src/data/services.ts
│   ├── solucoes/         # 8 páginas de segmento, geradas a partir de src/data/solutions.ts
│   ├── blog/             # listagem, categorias e artigos ([slug])
│   ├── api/contact/      # endpoint do formulário de contato
│   ├── sitemap.ts        # sitemap.xml dinâmico
│   └── robots.ts         # robots.txt dinâmico
├── components/
│   ├── layout/           # Header, Footer, MobileMenu
│   ├── sections/         # blocos de página reutilizáveis (Hero, FAQSection, CTASection...)
│   ├── templates/        # ServicePageTemplate e SolutionPageTemplate (data-driven)
│   ├── ui/                # Button, Cards, ContactForm, WhatsAppButton, Breadcrumb...
│   └── seo/               # JSON-LD (Organization, Service, FAQPage, Article, Breadcrumb)
├── data/                 # conteúdo estruturado (services, solutions, faq, blog)
├── lib/                  # constants (siteConfig), seo.ts, analytics.ts, utils.ts
└── app/globals.css       # tokens de design (cores, radius, shadows)
```

### Por que essa arquitetura

As 12 páginas de serviço e as 8 páginas de segmento **não** são escritas manualmente — cada
`page.tsx` é um arquivo curto que busca o registro correspondente em `src/data/` e o passa para
`<ServicePageTemplate />` ou `<SolutionPageTemplate />`. Isso mantém consistência visual e de SEO,
e faz com que adicionar um novo serviço seja, na prática, adicionar um objeto em
`src/data/services.ts` mais uma pasta com um `page.tsx` de poucas linhas.

## Conteúdo e dados institucionais

Todo o conteúdo institucional (telefone, e-mail, endereço, ano de fundação, nome da CEO,
Instagram) foi extraído diretamente do site atual (`undercontroll.com.br`) e do site de
referência — nenhum dado foi inventado. Onde uma informação não estava disponível (Facebook,
LinkedIn, depoimentos verificados, texto jurídico da política de privacidade), o código contém
marcações `TODO` explícitas em vez de conteúdo fictício. Ver `src/lib/constants.ts` e a seção
final de `DESIGN.md`.

A seção de depoimentos (`TestimonialsSection`) está preparada para receber avaliações reais assim
que a empresa as disponibilizar — hoje ela renderiza um estado vazio honesto.

## SEO

- `createMetadata()` (`src/lib/seo.ts`) centraliza title/description/canonical/Open Graph/Twitter
  card por página — cada página do site fornece seu próprio title e description.
- JSON-LD: `Organization` (global), `LocalBusiness` (página de contato), `Service` (páginas de
  serviço), `FAQPage` (onde há FAQ visível), `Article` (posts do blog) e `BreadcrumbList` (todas
  as páginas internas).
- `sitemap.ts` lista apenas URLs indexáveis (a política de privacidade é `noindex` e fica de fora).
- Cada página de serviço/segmento tem H1 único, breadcrumb visual + schema, e links internos para
  serviços/segmentos relacionados.

## Formulário de contato

O formulário (`src/components/ui/ContactForm.tsx`) envia para `POST /api/contact`
(`src/app/api/contact/route.ts`), que:

- valida campos obrigatórios e formato de e-mail;
- aplica um honeypot anti-spam (campo `company` oculto);
- aplica rate limiting simples por IP (`src/lib/rateLimit.ts`);
- encaminha o lead para `CRM_WEBHOOK_URL` quando configurado, ou apenas registra no log do
  servidor caso a variável esteja vazia — pronto para plugar um CRM real no futuro.

## Analytics

Eventos são disparados via `trackEvent()` (`src/lib/analytics.ts`) para `window.dataLayer`, prontos
para o Google Tag Manager (configurado via `NEXT_PUBLIC_GTM_ID`). Eventos disponíveis:
`whatsapp_click`, `phone_click`, `form_start`, `form_submit`, `cta_click`, `service_view`.

## Variáveis de ambiente

Ver [`.env.example`](./.env.example). Nenhum arquivo `.env*` deve ser commitado.

## Checklist de deploy

- [ ] Preencher `NEXT_PUBLIC_SITE_URL` com o domínio de produção
- [ ] Confirmar `NEXT_PUBLIC_WHATSAPP_NUMBER` e `NEXT_PUBLIC_PHONE`
- [ ] Configurar `NEXT_PUBLIC_GTM_ID` (ou remover o bloco de GTM do layout, se não for usado)
- [ ] Configurar `CRM_WEBHOOK_URL` quando houver integração real de CRM
- [ ] Confirmar URLs de Facebook/LinkedIn em `src/lib/constants.ts` (hoje em branco)
- [ ] Revisar juridicamente `/politica-de-privacidade` (texto atual é um esqueleto com `TODO`s)
- [ ] Substituir imagens placeholder (hero, sobre, og-default.png, logo.png, ícone) por assets
      reais da marca
- [ ] Rodar `npm run build` e revisar todas as rotas listadas na seção 60 do briefing
- [ ] Rodar Lighthouse (mobile e desktop) e confirmar Performance/SEO/Accessibility/Best
      Practices > 90
