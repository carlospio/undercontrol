# PROMPT TÉCNICO — DESENVOLVIMENTO DO NOVO SITE UNDER CONTROL

## CONTEXTO

Você é um desenvolvedor sênior especialista em:

- Next.js
- React
- TypeScript
- Tailwind CSS
- SEO técnico
- SEO semântico
- GEO (Generative Engine Optimization)
- Performance
- UX/UI
- Arquitetura de sites institucionais
- Conversão e geração de leads

Sua tarefa é desenvolver o novo site da **Under Control**, utilizando como referência principal:

**Site de referência visual e de conteúdo:**  
https://underctrl-xevovqmv.manus.space/

**Site atual:**  
https://undercontroll.com.br/

O site de referência deve ser tratado como a principal fonte de **identidade visual, layout, composição, tom, proposta de valor e conteúdo**.

O site atual deve ser utilizado como fonte complementar para informações institucionais, serviços, contatos e demais informações existentes.

---

# 1. OBJETIVO

Criar uma versão profissional, moderna, rápida, responsiva e escalável do site da Under Control.

O projeto precisa combinar:

1. Fidelidade visual ao site de referência.
2. Melhoria de UX.
3. Estrutura completa de SEO.
4. Estrutura preparada para GEO.
5. Forte foco em conversão.
6. Arquitetura escalável.
7. Conteúdo organizado por serviço e segmento.
8. Blog preparado para crescimento orgânico.
9. Excelente performance.
10. Código limpo e reutilizável.

### Regra principal

**NÃO criar uma identidade visual nova.**

O resultado deve parecer uma evolução natural do site de referência.

Não substituir arbitrariamente:

- cores;
- tipografia;
- estilo;
- espaçamento;
- botões;
- cards;
- imagens;
- elementos decorativos;
- linguagem;
- composição visual.

As melhorias devem acontecer principalmente na arquitetura, UX, SEO, performance, conversão e escalabilidade.

---

# 2. ANTES DE CODIFICAR

Antes de implementar:

1. Acesse e analise o site de referência.
2. Acesse e analise o site atual.
3. Identifique:
   - cores;
   - fontes;
   - tamanhos;
   - espaçamentos;
   - bordas;
   - sombras;
   - botões;
   - componentes;
   - imagens;
   - ícones;
   - animações;
   - comportamento responsivo;
   - estrutura das seções;
   - tom de comunicação;
   - proposta de valor;
   - CTAs;
   - serviços;
   - públicos;
   - informações institucionais.
4. Crie uma análise interna antes de começar a implementação.
5. Preserve o conteúdo institucional relevante.
6. Não invente informações sobre a empresa.
7. Quando alguma informação estiver ausente, deixe a estrutura preparada para preenchimento posterior em vez de inventar dados.

---

# 3. STACK

Utilizar preferencialmente:

- Next.js com App Router
- TypeScript
- Tailwind CSS
- React
- ESLint
- Prettier
- next/image
- next/font

Utilizar Server Components por padrão.

Client Components somente quando forem realmente necessários.

Evitar dependências desnecessárias.

---

# 4. ARQUITETURA DO PROJETO

Criar estrutura semelhante a:

```text
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── sobre/
│   │   └── page.tsx
│   │
│   ├── servicos/
│   │   ├── page.tsx
│   │   ├── assistente-remota/
│   │   │   └── page.tsx
│   │   ├── secretaria-remota/
│   │   │   └── page.tsx
│   │   ├── gestao-de-agenda/
│   │   │   └── page.tsx
│   │   ├── atendimento-telefonico/
│   │   │   └── page.tsx
│   │   ├── atendimento-whatsapp/
│   │   │   └── page.tsx
│   │   ├── agendamento-de-consultas/
│   │   │   └── page.tsx
│   │   ├── gestao-de-leads/
│   │   │   └── page.tsx
│   │   ├── organizacao-de-viagens/
│   │   │   └── page.tsx
│   │   ├── cotacoes-e-compras/
│   │   │   └── page.tsx
│   │   ├── gestao-de-documentos/
│   │   │   └── page.tsx
│   │   ├── apoio-administrativo/
│   │   │   └── page.tsx
│   │   └── servicos-personalizados/
│   │       └── page.tsx
│   │
│   ├── solucoes/
│   │   ├── page.tsx
│   │   ├── empresarios/
│   │   │   └── page.tsx
│   │   ├── medicos/
│   │   │   └── page.tsx
│   │   ├── dentistas/
│   │   │   └── page.tsx
│   │   ├── profissionais-da-saude/
│   │   │   └── page.tsx
│   │   ├── advogados/
│   │   │   └── page.tsx
│   │   ├── arquitetos/
│   │   │   └── page.tsx
│   │   ├── engenheiros/
│   │   │   └── page.tsx
│   │   └── profissionais-liberais/
│   │       └── page.tsx
│   │
│   ├── como-funciona/
│   │   └── page.tsx
│   │
│   ├── faq/
│   │   └── page.tsx
│   │
│   ├── blog/
│   │   ├── page.tsx
│   │   ├── categorias/
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── contato/
│   │   └── page.tsx
│   │
│   ├── politica-de-privacidade/
│   │   └── page.tsx
│   │
│   ├── sitemap.ts
│   ├── robots.ts
│   └── not-found.tsx
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── SolutionsSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── CTASection.tsx
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── SolutionCard.tsx
│   │   ├── FAQItem.tsx
│   │   ├── Breadcrumb.tsx
│   │   ├── WhatsAppButton.tsx
│   │   ├── ContactForm.tsx
│   │   └── BlogCard.tsx
│   │
│   └── seo/
│       ├── JsonLd.tsx
│       └── BreadcrumbSchema.tsx
│
├── lib/
│   ├── seo.ts
│   ├── constants.ts
│   └── utils.ts
│
├── data/
│   ├── services.ts
│   ├── solutions.ts
│   ├── faq.ts
│   └── blog.ts
│
└── styles/
    └── globals.css
```

A estrutura pode ser adaptada se houver uma solução tecnicamente superior, mas deve preservar separação entre:

- layout;
- UI;
- conteúdo;
- SEO;
- dados;
- páginas.

---

# 5. DESIGN SYSTEM

Antes de construir as páginas, criar tokens de design baseados no site de referência.

Centralizar:

- cores;
- tipografia;
- border-radius;
- shadows;
- spacing;
- container width;
- breakpoints;
- transições.

Não espalhar valores arbitrários pelo projeto.

Exemplo conceitual:

```ts
const designTokens = {
  colors: {
    primary: "...",
    secondary: "...",
    background: "...",
    foreground: "...",
    muted: "...",
  },
  radius: {
    sm: "...",
    md: "...",
    lg: "...",
  },
}
```

Os valores reais devem ser obtidos da análise do site de referência.

---

# 6. HEADER

Criar Header responsivo.

Desktop:

- Logo
- Sobre
- Serviços
- Soluções
- Como funciona
- FAQ
- Blog
- Contato
- CTA principal

Mobile:

- Logo
- Menu hamburger
- Navegação em drawer/menu
- CTA de contato

O header deve possuir boa acessibilidade.

Implementar:

- navegação por teclado;
- aria-labels;
- foco visível;
- botão de menu acessível;
- fechamento correto do menu mobile.

---

# 7. HOME

Criar Home completa.

## Hero

### H1

> Sua assistente remota especializada

### Texto

> Tenha mais tempo para cuidar do que realmente importa. A Under Control cuida das suas tarefas administrativas e pessoais de forma eficiente, personalizada e profissional.

CTAs:

- Quero uma assistente
- Falar pelo WhatsApp

O Hero deve reproduzir o conceito visual do site de referência.

---

## Seção: Para quem é a Under Control?

Criar cards:

- Empresários
- Médicos
- Dentistas
- Profissionais da saúde
- Advogados
- Arquitetos
- Engenheiros
- Profissionais liberais

Cada card deve possuir link para a página correspondente.

---

## Seção: Nossos Serviços

Apresentar:

- Gestão de Agenda
- Atendimento Telefônico
- Atendimento via WhatsApp
- Agendamentos
- Gestão de Leads
- Organização de Viagens
- Cotações e Compras
- Gestão de Documentos
- Apoio Administrativo
- Serviços Personalizados

Cada serviço deve apontar para sua página individual.

---

## Seção: Como funciona?

### 01
Entendemos sua rotina.

### 02
Criamos sua rotina personalizada.

### 03
Nossa equipe assume as tarefas.

### 04
Você ganha tempo.

CTA:

> Quero ganhar tempo

---

## Seção: Benefícios

- Mais tempo
- Mais produtividade
- Menos tarefas operacionais
- Atendimento profissional
- Flexibilidade
- Organização
- Solução personalizada
- Mais foco no negócio

---

## Seção: Sobre

Apresentar a empresa de forma resumida.

CTA:

> Conheça a Under Control

---

## Seção: Depoimentos

Se existirem depoimentos reais no material de referência/site atual, utilizar.

Não inventar depoimentos.

Criar estrutura preparada para CMS.

---

## Seção: FAQ

Exibir perguntas estratégicas.

Adicionar link:

> Ver todas as perguntas

---

## CTA final

Criar uma seção de conversão forte.

Exemplo:

> Tenha mais tempo para o que realmente importa.

CTA:

> Falar com uma especialista

---

# 8. PÁGINA SOBRE

URL:

```text
/sobre/
```

Estrutura:

- Hero
- História
- Missão
- Valores
- Diferenciais
- Equipe/CEO, quando houver conteúdo real
- CTA

Manter o conteúdo institucional verdadeiro do site atual.

---

# 9. PÁGINA DE SERVIÇOS

URL:

```text
/servicos/
```

Apresentar todos os serviços.

Cada card deve apontar para sua página individual.

---

# 10. TEMPLATE DE PÁGINA DE SERVIÇO

Todas as páginas devem utilizar um template reutilizável.

Estrutura:

```text
Hero
↓
Introdução
↓
O que é o serviço?
↓
Como a Under Control ajuda
↓
Atividades realizadas
↓
Benefícios
↓
Para quem é indicado
↓
Como funciona
↓
FAQ específico
↓
Serviços relacionados
↓
CTA
```

## Requisitos SEO

Cada página precisa possuir:

- H1 único;
- Title único;
- Meta description;
- Canonical;
- Open Graph;
- Breadcrumb;
- Schema Service;
- FAQPage quando houver FAQ;
- links internos;
- conteúdo original;
- CTA.

---

# 11. SERVIÇOS

Criar páginas para:

## Assistente Remota

```text
/servicos/assistente-remota/
```

Palavra-chave principal:

**assistente remota**

---

## Secretária Remota

```text
/servicos/secretaria-remota/
```

Palavra-chave:

**secretária remota**

---

## Gestão de Agenda

```text
/servicos/gestao-de-agenda/
```

Palavra-chave:

**gestão de agenda**

---

## Atendimento Telefônico

```text
/servicos/atendimento-telefonico/
```

Palavra-chave:

**atendimento telefônico**

---

## Atendimento via WhatsApp

```text
/servicos/atendimento-whatsapp/
```

Palavra-chave:

**atendimento WhatsApp**

---

## Agendamento de Consultas

```text
/servicos/agendamento-de-consultas/
```

---

## Gestão de Leads

```text
/servicos/gestao-de-leads/
```

---

## Organização de Viagens

```text
/servicos/organizacao-de-viagens/
```

---

## Cotações e Compras

```text
/servicos/cotacoes-e-compras/
```

---

## Gestão de Documentos

```text
/servicos/gestao-de-documentos/
```

---

## Apoio Administrativo

```text
/servicos/apoio-administrativo/
```

---

## Serviços Personalizados

```text
/servicos/servicos-personalizados/
```

---

# 12. PÁGINA DE SOLUÇÕES

URL:

```text
/solucoes/
```

Apresentar os segmentos atendidos.

Criar cards com links.

---

# 13. TEMPLATE DE PÁGINA DE SEGMENTO

Exemplo:

```text
/solucoes/medicos/
```

Estrutura:

```text
Hero
↓
Problemas do segmento
↓
Como a Under Control ajuda
↓
Serviços relevantes
↓
Benefícios
↓
Como funciona
↓
FAQ
↓
CTA
```

Conteúdo deve ser específico para o segmento.

Não duplicar conteúdo entre páginas.

---

# 14. SEGMENTOS

Criar:

```text
/solucoes/empresarios/
/solucoes/medicos/
/solucoes/dentistas/
/solucoes/profissionais-da-saude/
/solucoes/advogados/
/solucoes/arquitetos/
/solucoes/engenheiros/
/solucoes/profissionais-liberais/
```

---

# 15. COMO FUNCIONA

URL:

```text
/como-funciona/
```

H1:

> Como funciona a Under Control?

Etapas:

1. Você entra em contato.
2. Entendemos suas necessidades.
3. Identificamos tarefas que podem ser delegadas.
4. Criamos uma rotina personalizada.
5. Nossa equipe executa as atividades.
6. Você acompanha os resultados.

CTA:

> Quero contratar uma assistente

---

# 16. FAQ

URL:

```text
/faq/
```

Perguntas:

- O que é uma assistente remota?
- O que uma assistente remota faz?
- Quanto custa uma assistente remota?
- Como funciona a contratação?
- A Under Control atende empresas?
- A Under Control atende médicos?
- Vocês fazem atendimento pelo WhatsApp?
- Vocês fazem gestão de agenda?
- Vocês fazem atendimento telefônico?
- Posso contratar serviços personalizados?
- Como funciona o atendimento?
- Qual é o horário de atendimento?

As perguntas devem ser renderizadas de forma acessível.

Implementar FAQ Schema quando adequado.

---

# 17. BLOG

URL:

```text
/blog/
```

O blog deve ser preparado para crescimento orgânico.

Categorias:

- Assistente Remota
- Produtividade
- Gestão
- Atendimento
- Saúde

Estrutura do artigo:

```text
H1
↓
Introdução
↓
Índice
↓
Conteúdo
↓
H2/H3
↓
Imagens
↓
Informações relacionadas
↓
FAQ
↓
CTA
↓
Artigos relacionados
```

---

# 18. ESTRATÉGIA DE CONTEÚDO

Criar estrutura para conteúdos sobre:

## Assistente Remota

- O que é uma assistente remota?
- O que faz uma assistente remota?
- Assistente remota ou secretária presencial?
- Quanto custa contratar uma assistente remota?
- Assistente virtual x assistente remota

## Produtividade

- Como organizar a rotina de um empresário
- Como delegar tarefas administrativas
- Como ganhar tempo na rotina profissional
- Quais tarefas um empresário deveria delegar?

## Gestão

- Como organizar uma agenda profissional
- Como melhorar o atendimento ao cliente
- Como fazer gestão de leads
- Como organizar tarefas administrativas

## Saúde

- Como melhorar a gestão de agenda de uma clínica
- Como reduzir faltas em consultas
- Como melhorar o atendimento de pacientes pelo WhatsApp
- Como organizar a rotina administrativa de um consultório

---

# 19. SEO — ARQUITETURA

A arquitetura deve seguir:

```text
HOME
│
├── SERVIÇOS
│   ├── Assistente Remota
│   ├── Secretária Remota
│   ├── Gestão de Agenda
│   └── ...
│
├── SOLUÇÕES
│   ├── Médicos
│   ├── Advogados
│   ├── Empresários
│   └── ...
│
└── BLOG
    ├── Artigos
    └── Categorias
```

Criar links internos entre:

- Home → serviços
- Home → segmentos
- Serviço → segmentos relacionados
- Segmento → serviços relacionados
- Artigo → serviços
- Artigo → segmentos
- Serviço → artigos relacionados

---

# 20. SEO — METADATA

Criar helper para metadata.

Exemplo conceitual:

```ts
export function createMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}) {
  // ...
}
```

Cada página deve possuir metadata específica.

Nunca utilizar o mesmo title e description em todas as páginas.

---

# 21. SEO — TITLE

Formato recomendado:

```text
[Palavra-chave principal] | Under Control
```

Exemplos:

```text
Assistente Remota | Under Control
Secretária Remota | Under Control
Gestão de Agenda | Under Control
Assistente Remota para Médicos | Under Control
```

Não ultrapassar desnecessariamente o tamanho recomendado para titles.

---

# 22. SEO — META DESCRIPTION

Cada página precisa de descrição específica.

Exemplo:

> Conte com uma assistente remota especializada para organizar sua rotina, cuidar das tarefas administrativas e liberar seu tempo. Conheça a Under Control.

Criar descriptions naturais e orientadas à intenção de busca.

---

# 23. SEO — HEADINGS

Regras:

- Apenas um H1 por página.
- H2 para seções principais.
- H3 para subseções.
- Não usar headings apenas para estilização.
- Headings devem representar a estrutura semântica do conteúdo.

---

# 24. SEO — URLs

Utilizar:

- lowercase;
- palavras separadas por hífen;
- URLs curtas;
- sem parâmetros desnecessários.

Exemplos:

```text
/servicos/assistente-remota/
/servicos/gestao-de-agenda/
/solucoes/medicos/
```

---

# 25. BREADCRUMBS

Todas as páginas internas devem possuir breadcrumb visual.

Exemplo:

```text
Início
>
Serviços
>
Assistente Remota
```

Também implementar:

```json
{
  "@type": "BreadcrumbList"
}
```

---

# 26. SCHEMA.ORG

Implementar JSON-LD.

## Organization

No layout/global.

## LocalBusiness

Quando os dados da empresa permitirem.

## Service

Nas páginas de serviços.

## FAQPage

Quando houver FAQ relevante e visível na página.

## Article

Nos artigos.

## BreadcrumbList

Nas páginas internas.

Não inserir schema com informações que não estejam presentes ou sejam verdadeiras.

---

# 27. SEO LOCAL

Considerar:

- Alphaville
- Barueri
- São Paulo

Termos potenciais:

- assistente remota Alphaville
- secretária remota Alphaville
- secretária virtual Alphaville
- assistente administrativa Alphaville
- assistente remota Barueri
- secretária remota Barueri
- assistente virtual São Paulo

Não criar páginas de localização artificiais apenas para SEO.

Criar páginas locais somente quando houver conteúdo real e justificativa comercial.

Implementar:

- NAP consistente;
- endereço;
- telefone;
- mapa, se adequado;
- LocalBusiness Schema;
- links para Google Business Profile, se disponível.

---

# 28. GEO — GENERATIVE ENGINE OPTIMIZATION

Estruturar conteúdo para facilitar entendimento por mecanismos de busca e sistemas de IA.

Utilizar:

- respostas objetivas;
- definições claras;
- listas;
- tabelas quando fizer sentido;
- perguntas e respostas;
- conteúdo factual;
- headings descritivos;
- entidades claramente relacionadas;
- informações institucionais consistentes.

Exemplo:

## O que é uma assistente remota?

Responder diretamente nos primeiros parágrafos.

Depois aprofundar.

Evitar textos genéricos criados apenas para inserir palavras-chave.

---

# 29. IMAGENS

Utilizar `next/image`.

Todas as imagens precisam de:

- width/height adequados;
- loading correto;
- alt;
- formatos modernos;
- compressão.

Não utilizar imagem apenas como decoração quando ela puder ser substituída por CSS.

Não utilizar imagens pesadas desnecessariamente.

---

# 30. PERFORMANCE

Meta:

**Lighthouse > 90**

Priorizar:

- LCP;
- CLS;
- INP;
- TTFB.

Implementar:

- Server Components;
- lazy loading;
- imagens otimizadas;
- fontes otimizadas;
- evitar JavaScript desnecessário;
- code splitting;
- componentes leves;
- cache;
- prefetch apenas quando fizer sentido.

---

# 31. RESPONSIVIDADE

O site deve funcionar perfeitamente em:

- 320px;
- 375px;
- 390px;
- 414px;
- 768px;
- 1024px;
- 1280px;
- 1440px;
- 1920px.

Testar principalmente:

- menu;
- hero;
- cards;
- formulários;
- botões;
- textos;
- imagens;
- espaçamentos;
- CTA;
- footer.

---

# 32. ACESSIBILIDADE

Aplicar boas práticas WCAG.

Garantir:

- contraste;
- navegação por teclado;
- focus states;
- aria-labels;
- alt texts;
- headings corretos;
- formulários acessíveis;
- botões semânticos;
- links descritivos;
- tamanho de fonte adequado.

---

# 33. WHATSAPP

Criar botão flutuante.

Componente:

```text
WhatsAppButton
```

Deve:

- ser responsivo;
- possuir aria-label;
- ter CTA claro;
- não bloquear conteúdo;
- possuir evento de analytics;
- utilizar URL configurável.

Não hardcodar o número diretamente em vários componentes.

Centralizar em configuração:

```ts
export const siteConfig = {
  whatsapp: "...",
  phone: "...",
  email: "...",
}
```

---

# 34. FORMULÁRIO

Criar formulário:

```text
Nome
E-mail
WhatsApp
Profissão/segmento
Como podemos ajudar?
```

Segmentos:

```text
Empresário
Médico
Dentista
Profissional da saúde
Advogado
Arquiteto
Engenheiro
Profissional liberal
Outro
```

Implementar:

- validação;
- mensagens de erro;
- estado de loading;
- sucesso;
- tratamento de falha;
- proteção contra spam;
- acessibilidade.

Preparar integração futura com CRM/API.

---

# 35. ANALYTICS

Implementar via Google Tag Manager.

Não inserir scripts diretamente espalhados pelo projeto.

Eventos:

```text
whatsapp_click
phone_click
form_start
form_submit
cta_click
service_view
```

Criar dataLayer organizado.

Exemplo:

```ts
window.dataLayer?.push({
  event: "cta_click",
  cta_name: "...",
  location: "...",
})
```

---

# 36. SEO TÉCNICO

Implementar:

- sitemap.xml;
- robots.txt;
- canonical;
- metadata;
- Open Graph;
- Twitter/X metadata;
- favicon;
- manifest quando aplicável;
- URLs indexáveis;
- 404 customizada;
- redirects quando necessários.

Criar:

```text
app/sitemap.ts
app/robots.ts
```

O sitemap deve listar somente URLs válidas e indexáveis.

---

# 37. CANONICAL

Cada página deve possuir canonical absoluta.

Exemplo:

```text
https://undercontroll.com.br/servicos/assistente-remota/
```

Definir domínio oficial em uma única configuração.

---

# 38. REDIRECTS

Se URLs antigas forem alteradas, criar redirects 301.

Antes de remover qualquer página do site atual:

1. mapear URL;
2. verificar relevância;
3. definir nova URL;
4. criar redirect.

Não criar loops de redirect.

---

# 39. CONTEÚDO

Regra importante:

**Não inventar informações institucionais, números, clientes, depoimentos, certificações ou resultados.**

Utilizar:

- site de referência;
- site atual;
- informações fornecidas no projeto.

Quando algo estiver ausente:

```text
TODO: preencher conteúdo
```

ou criar estrutura preparada para CMS.

---

# 40. CMS / DADOS

Mesmo que inicialmente o conteúdo esteja em arquivos TypeScript, estruturar os dados de forma desacoplada.

Exemplo:

```ts
export const services = [
  {
    slug: "assistente-remota",
    name: "Assistente Remota",
    shortDescription: "...",
    description: "...",
    seo: {
      title: "...",
      description: "...",
    },
  },
]
```

Isso permitirá migrar futuramente para:

- WordPress;
- Sanity;
- Strapi;
- Contentful;
- banco próprio;
- outro CMS.

---

# 41. LINKS INTERNOS

Criar uma estratégia clara de internal linking.

Exemplo:

Página:

```text
/servicos/assistente-remota/
```

deve possuir links para:

```text
/servicos/gestao-de-agenda/
/servicos/atendimento-whatsapp/
/solucoes/empresarios/
/solucoes/medicos/
/como-funciona/
```

E vice-versa.

---

# 42. FOOTER

Criar:

## Under Control

Sua assistente remota especializada.

## Navegação

- Início
- Sobre
- Serviços
- Soluções
- Como funciona
- FAQ
- Blog
- Contato

## Serviços

Links para principais serviços.

## Soluções

Links para principais segmentos.

## Contato

- Telefone
- WhatsApp
- E-mail
- Endereço

## Legal

- Política de Privacidade
- Termos de Uso

---

# 43. POLÍTICA DE PRIVACIDADE

Criar página:

```text
/politica-de-privacidade/
```

Não inventar dados jurídicos.

Deixar estrutura adequada para inserção/revisão do texto jurídico real.

---

# 44. SEO CONTENT HUB

Estruturar o site como um conjunto de clusters.

```text
                    ASSISTENTE REMOTA
                           |
          +----------------+----------------+
          |                |                |
       Serviços        Segmentos         Conteúdo
          |                |                |
      Agenda           Médicos          Blog
      WhatsApp         Advogados        Guias
      Leads            Dentistas        FAQs
      Telefone         Empresários
```

A Home deve apontar para os clusters.

Os clusters devem apontar entre si.

Os artigos devem apontar para páginas comerciais.

---

# 45. COMPONENTIZAÇÃO

Evitar páginas gigantes.

Criar componentes reutilizáveis.

Exemplos:

```tsx
<Hero />
<SectionHeading />
<ServiceCard />
<ServiceGrid />
<SolutionCard />
<SolutionGrid />
<BenefitsSection />
<HowItWorks />
<FAQSection />
<CTASection />
<WhatsAppButton />
<ContactForm />
<Breadcrumb />
```

---

# 46. REUTILIZAÇÃO DE TEMPLATES

Não criar manualmente 12 páginas de serviço completamente diferentes.

Criar:

```tsx
<ServicePage service={service} />
```

E alimentar através de dados.

Da mesma forma:

```tsx
<SolutionPage solution={solution} />
```

Isso reduz manutenção e mantém consistência.

---

# 47. ESTADOS E ERROS

Implementar:

- loading;
- empty states;
- error states;
- formulário com erro;
- 404;
- fallback quando conteúdo não existir.

---

# 48. SEGURANÇA

Aplicar:

- validação de inputs;
- sanitização;
- proteção anti-spam;
- rate limiting no endpoint de formulário quando houver backend;
- variáveis sensíveis em `.env`;
- nenhuma API key exposta no client.

Nunca colocar secrets no código.

---

# 49. ENVIRONMENT VARIABLES

Criar `.env.example`.

Exemplo:

```env
NEXT_PUBLIC_SITE_URL=https://undercontroll.com.br
NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_PHONE=
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_GA_ID=
```

Não commitar `.env`.

---

# 50. SEO CONFIG CENTRAL

Criar arquivo:

```text
src/lib/seo.ts
```

Centralizar:

- site name;
- URL;
- default title;
- default description;
- OG image;
- social profiles;
- informações da organização.

---

# 51. SITE CONFIG

Criar:

```text
src/lib/constants.ts
```

Exemplo:

```ts
export const siteConfig = {
  name: "Under Control",
  description: "Sua assistente remota especializada.",
  url: "https://undercontroll.com.br",
  whatsapp: "",
  phone: "",
  email: "",
  address: {
    street: "",
    city: "Barueri",
    state: "SP",
    zipCode: "",
    country: "BR",
  },
}
```

Preencher somente dados confirmados.

---

# 52. SEO DAS PÁGINAS

Criar mapa inicial:

| URL | Keyword principal | Intenção |
|---|---|---|
| `/` | assistente remota | Comercial |
| `/servicos/assistente-remota/` | assistente remota | Comercial |
| `/servicos/secretaria-remota/` | secretária remota | Comercial |
| `/servicos/gestao-de-agenda/` | gestão de agenda | Comercial |
| `/servicos/atendimento-whatsapp/` | atendimento WhatsApp | Comercial |
| `/servicos/atendimento-telefonico/` | atendimento telefônico | Comercial |
| `/servicos/gestao-de-leads/` | gestão de leads | Comercial |
| `/solucoes/medicos/` | assistente remota para médicos | Comercial |
| `/solucoes/dentistas/` | secretária remota para dentistas | Comercial |
| `/solucoes/advogados/` | secretária remota para advogados | Comercial |
| `/solucoes/empresarios/` | assistente remota para empresários | Comercial |
| `/como-funciona/` | como funciona assistente remota | Informacional/comercial |
| `/faq/` | assistente remota dúvidas | Informacional |
| `/blog/` | temas relacionados | Informacional |

---

# 53. NAVEGAÇÃO

Desktop:

```text
Logo
Sobre
Serviços ▼
Soluções ▼
Como funciona
FAQ
Blog
[Quero uma assistente]
```

Dropdown de Serviços:

```text
Assistente Remota
Secretária Remota
Gestão de Agenda
Atendimento WhatsApp
Atendimento Telefônico
Gestão de Leads
Ver todos os serviços
```

Dropdown de Soluções:

```text
Empresários
Médicos
Dentistas
Profissionais da Saúde
Advogados
Arquitetos
Engenheiros
Profissionais Liberais
Ver todas as soluções
```

---

# 54. MICROCOPY

Manter tom:

- profissional;
- humano;
- direto;
- acolhedor;
- confiável;
- sofisticado;
- sem excesso de linguagem corporativa.

Evitar:

- exageros;
- promessas absolutas;
- claims não comprovados;
- textos genéricos de IA;
- excesso de palavras-chave.

---

# 55. CONVERSÃO

Cada página comercial deve terminar com CTA.

Exemplos:

> Precisa de mais tempo para cuidar do seu negócio?

> Deixe as tarefas operacionais com quem entende.

> Vamos entender como podemos ajudar sua rotina.

CTA:

**Falar com uma especialista**

---

# 56. CRITÉRIOS DE ACEITE VISUAL

O projeto será considerado visualmente aprovado quando:

- a identidade visual estiver claramente alinhada ao site de referência;
- não houver componentes visualmente desconectados;
- desktop estiver consistente;
- mobile estiver consistente;
- espaçamentos forem coerentes;
- tipografia seguir a referência;
- botões seguirem a referência;
- cards seguirem a referência;
- imagens seguirem o mesmo estilo;
- animações forem discretas e coerentes.

---

# 57. CRITÉRIOS DE ACEITE SEO

Antes de finalizar, verificar:

- [ ] Todas as páginas possuem H1.
- [ ] Nenhuma página possui H1 duplicado.
- [ ] Titles únicos.
- [ ] Meta descriptions únicas.
- [ ] Canonicals.
- [ ] Sitemap.
- [ ] Robots.
- [ ] Breadcrumbs.
- [ ] Schema.
- [ ] Open Graph.
- [ ] URLs amigáveis.
- [ ] Links internos.
- [ ] Imagens com ALT.
- [ ] Conteúdo original.
- [ ] Sem páginas órfãs.
- [ ] Sem links quebrados.
- [ ] Sem canonical apontando incorretamente.
- [ ] Sem páginas importantes bloqueadas no robots.
- [ ] Sem conteúdo importante renderizado exclusivamente por JavaScript no client.

---

# 58. CRITÉRIOS DE ACEITE PERFORMANCE

Verificar:

- [ ] Lighthouse Performance > 90.
- [ ] Lighthouse SEO > 90.
- [ ] Lighthouse Accessibility > 90.
- [ ] Lighthouse Best Practices > 90.
- [ ] Imagens otimizadas.
- [ ] Fontes otimizadas.
- [ ] JS mínimo.
- [ ] Sem bibliotecas desnecessárias.
- [ ] Layout sem CLS perceptível.
- [ ] Mobile rápido.
- [ ] Desktop rápido.

---

# 59. CRITÉRIOS DE ACEITE TÉCNICO

Verificar:

- [ ] TypeScript sem erros.
- [ ] ESLint sem erros.
- [ ] Build de produção funcionando.
- [ ] Todas as rotas funcionando.
- [ ] 404 funcionando.
- [ ] Sitemap funcionando.
- [ ] Robots funcionando.
- [ ] Formulário funcionando.
- [ ] WhatsApp funcionando.
- [ ] Menu mobile funcionando.
- [ ] Links internos funcionando.
- [ ] Sem console errors.
- [ ] Sem warnings importantes.
- [ ] `.env.example` criado.
- [ ] README atualizado.

---

# 60. TESTE FINAL

Executar:

```bash
npm run lint
npm run build
```

Depois testar todas as rotas.

Testar:

```text
/
 /sobre/
/servicos/
/servicos/assistente-remota/
/servicos/secretaria-remota/
/servicos/gestao-de-agenda/
/servicos/atendimento-telefonico/
/servicos/atendimento-whatsapp/
/servicos/agendamento-de-consultas/
/servicos/gestao-de-leads/
/servicos/organizacao-de-viagens/
/servicos/cotacoes-e-compras/
/servicos/gestao-de-documentos/
/servicos/apoio-administrativo/
/servicos/servicos-personalizados/
/solucoes/
/solucoes/empresarios/
/solucoes/medicos/
/solucoes/dentistas/
/solucoes/profissionais-da-saude/
/solucoes/advogados/
/solucoes/arquitetos/
/solucoes/engenheiros/
/solucoes/profissionais-liberais/
/como-funciona/
/faq/
/blog/
/contato/
/politica-de-privacidade/
```

---

# 61. ORDEM DE IMPLEMENTAÇÃO

Executar o desenvolvimento nesta ordem:

## Fase 1 — Fundação

1. Configurar Next.js.
2. Configurar TypeScript.
3. Configurar Tailwind.
4. Configurar fontes.
5. Criar design tokens.
6. Criar `siteConfig`.
7. Criar estrutura base.

## Fase 2 — Layout

8. Header.
9. Mobile menu.
10. Footer.
11. WhatsApp.
12. Componentes básicos.

## Fase 3 — Home

13. Hero.
14. Públicos.
15. Serviços.
16. Benefícios.
17. Como funciona.
18. Sobre.
19. FAQ.
20. CTA.

## Fase 4 — Arquitetura comercial

21. Página Serviços.
22. Template ServicePage.
23. Todas as páginas de serviços.
24. Página Soluções.
25. Template SolutionPage.
26. Todas as páginas de segmentos.

## Fase 5 — Conteúdo

27. Sobre.
28. Como funciona.
29. FAQ.
30. Blog.
31. Política de privacidade.

## Fase 6 — SEO

32. Metadata.
33. Sitemap.
34. Robots.
35. Canonicals.
36. Breadcrumb.
37. Schema.
38. Internal linking.
39. Open Graph.

## Fase 7 — Conversão

40. Formulário.
41. WhatsApp.
42. Eventos GTM.
43. DataLayer.

## Fase 8 — QA

44. Responsividade.
45. Acessibilidade.
46. Performance.
47. SEO.
48. Build.
49. Testes.
50. Correções finais.

---

# 62. REGRA PARA O CURSOR

Não tente implementar tudo de uma vez sem validar a arquitetura.

Trabalhe por etapas.

Após cada etapa:

1. Verifique o código.
2. Rode lint.
3. Verifique erros.
4. Verifique responsividade.
5. Verifique SEO.
6. Corrija problemas antes de continuar.

Não destrua funcionalidades existentes sem necessidade.

Não faça refatorações gigantes sem justificativa.

Priorize código simples, reutilizável e fácil de manter.

---

# 63. REGRA FINAL DE QUALIDADE

O resultado final precisa cumprir simultaneamente:

```text
IDENTIDADE VISUAL DO SITE DE REFERÊNCIA
                    +
CONTEÚDO REAL DA UNDER CONTROL
                    +
ARQUITETURA SEO
                    +
GEO
                    +
CONVERSÃO
                    +
PERFORMANCE
                    +
ACESSIBILIDADE
                    +
ESCALABILIDADE
```

O objetivo não é simplesmente reproduzir uma landing page.

O objetivo é construir uma **plataforma institucional completa da Under Control**, visualmente fiel ao projeto de referência e preparada para crescimento orgânico e geração de leads.

---

# 64. ENTREGA FINAL

Ao finalizar o desenvolvimento, entregar:

- código completo;
- projeto organizado;
- componentes reutilizáveis;
- todas as páginas;
- SEO técnico;
- schemas;
- sitemap;
- robots;
- formulário;
- WhatsApp;
- GTM/dataLayer;
- README;
- `.env.example`;
- instruções de instalação;
- instruções de build;
- lista de variáveis de ambiente;
- checklist de deploy.

O projeto deve estar pronto para:

```bash
npm install
npm run dev
npm run build
npm start
```

e para deploy em ambiente de produção.

---

# INSTRUÇÃO FINAL

**Comece analisando os dois sites fornecidos.**

Depois:

1. identifique a identidade visual;
2. identifique os componentes;
3. identifique o conteúdo;
4. identifique as informações institucionais;
5. monte a arquitetura;
6. implemente o design system;
7. implemente o layout;
8. implemente a Home;
9. implemente os templates;
10. implemente as páginas;
11. implemente SEO;
12. implemente conversão;
13. faça QA;
14. corrija todos os problemas encontrados.

**Não finalize apenas com uma Home bonita.**

O projeto só está concluído quando toda a arquitetura de páginas, SEO, conteúdo, conversão, performance e estrutura técnica estiver implementada.
