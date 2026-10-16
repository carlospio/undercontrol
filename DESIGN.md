# Under Control — Design System (extraído do site de referência)

Fonte: https://underctrl-xevovqmv.manus.space/ (visual/tom) + https://undercontroll.com.br/ (conteúdo institucional)

## Atmosfera

Sofisticado, editorial, "executivo discreto". Contraste entre um roxo-ameixa muito escuro (quase preto) e um creme quente/marfim. Toques dourados como acento de luxo/atenção. Tipografia serifada (Playfair Display) para headlines grandes com itálico para ênfase, combinada com sans-serif (DM Sans) para tudo o mais. Botões em pílula (rounded-full). Muito espaço em branco, seções alternando fundo claro/escuro para ritmo visual.

## Paleta de cores

| Papel | Cor | Hex | Uso |
|---|---|---|---|
| Primary (plum/ink) | rgb(33,17,46) | `#21112E` | Fundo hero/CTA/header sections escuras, texto sobre creme, botão primário |
| Primary alt | rgb(40,22,49) | `#281631` | Variante de texto/bg escuro |
| Background (cream) | rgb(247,243,235) | `#F7F3EB` | Fundo padrão da página |
| Surface (card claro) | rgb(255,253,248) | `#FFFDF8` | Cards sobre fundo creme |
| Surface alt | rgb(238,231,218) | `#EEE7DA` | Cards/painéis secundários |
| Border sutil | rgb(221,213,201) | `#DDD5C9` | Bordas sobre creme |
| Accent (gold) | rgb(216,173,24) | `#D8AD18` | Destaques, itálico em headline, sombra de botão, números "01/02" |
| Accent hover | rgb(169,128,0) | `#A98000` | Hover do dourado |
| Lavender surface | rgb(239,235,241) | `#EFEBF1` | Botão secundário claro ("Solicitar proposta") |
| Texto sobre escuro | rgb(255,255,255) | `#FFFFFF` | Texto em seções escuras |
| Texto muted | rgb(116,107,112) | `#746B70` | Texto secundário |
| WhatsApp | rgb(37,211,102) | `#25D366` | Botão flutuante |

Regra: seções alternam entre fundo `background` (creme) e fundo `primary` (plum escuro), nunca fundo branco puro nem preto puro.

## Tipografia

- Display/Headings: **Playfair Display** (serif), pesos 500/600/700 + itálico 500/600. Usado em H1/H2 grandes, muitas vezes com um trecho em itálico dourado ou branco para ênfase.
- Corpo/UI: **DM Sans** (sans-serif), pesos 400/500/600/700/800.
- H1 referência: 72px / peso 600 / line-height ~0.99 / Playfair Display.
- Fallbacks: Playfair Display → Georgia, serif. DM Sans → system-ui, sans-serif.
- Fonte carregada via `next/font/google`.

## Componentes

**Botões**: sempre `rounded-full` (pill). Três variantes:
1. Primário sólido: bg `#21112E`, texto branco, peso 700.
2. Primário "destaque" (sobre creme): bg transparente/branco com texto `#21112E`, sombra dourada difusa (`0 14px 30px rgba(216,173,24,0.2)`).
3. Secundário claro: bg `#EFEBF1`, texto `#21112E`, peso 700, sem sombra.

Padding horizontal ~24px, sem padding vertical explícito (altura controlada por line-height/flex).

**Cards**: fundo `#FFFDF8` ou `#EEE7DA`, sem borda forte, cantos arredondados (~16–20px), sombra leve/discreta, ícone com fundo circular escuro no topo.

**Botão WhatsApp flutuante**: círculo verde `#25D366`, ícone branco, sombra `0 12px 28px rgba(0,0,0,0.25)`.

**Seções escuras**: fundo `#21112E`/`#281631`, headline com trecho em itálico dourado, listas comparativas (✕ vs ✓), tabela/cards com fundo levemente translúcido (`rgba(255,255,255,0.05-0.1)`).

## Layout

- Container centralizado, largura máx. ampla (~1280–1440px), padding lateral generoso.
- Ritmo vertical: seções grandes (~80–120px de padding vertical), alternando bg claro/escuro.
- Grid de 3 colunas para cards de público/serviço em desktop, 1 coluna em mobile.
- Header sticky, fundo creme translúcido com blur, logo + navegação + CTA pill à direita.
- Mobile: menu hamburguer, navegação em drawer, CTA de contato sempre visível.

## Microcopy / tom

Frases curtas, diretas, com um leve tom editorial/emocional ("Devolva ao seu dia o que é mais valioso: seu tempo."). Uso de números/etapas (01, 02, 03, 04). Comparativos "antes x depois". CTAs de ação em primeira pessoa ("Quero...", "Solicitar...", "Falar com...").

---

# Conteúdo institucional confirmado (não inventar além disto)

- **Nome:** Under Control
- **Fundação:** 2020
- **CEO:** Juliana Azevedo — ampla experiência como secretária executiva.
- **Telefone/WhatsApp:** (11) 99927-7276 — `https://api.whatsapp.com/send?phone=5511999277276`
- **E-mail:** undercontrol.ju@gmail.com
- **Endereço:** Alameda Rio Negro, 1030, Alphaville, Barueri/SP, CEP 06454-000
- **Horário de atendimento:** Segunda a sexta, 09:00–18:00
- **Instagram:** https://www.instagram.com/under_control_assistant/
- **Facebook/LinkedIn:** mencionados no rodapé do site atual mas sem URL confirmada → deixar como TODO.
- **Segmentos atendidos (site atual):** Empresários / Advogados / Arquitetos / Engenheiros; Médicos / Dentistas / Esteticistas / Profissionais da saúde em geral; Profissionais liberais com escritório ou consultório.
- **Depoimentos/avaliações reais:** nenhum disponível nos dois sites — estrutura deve ficar preparada para CMS, sem inventar depoimentos (o próprio site de referência trata isso como "espaço preparado para reputação pública autêntica").

## Logo real da cliente

Fonte: `https://undercontroll.com.br/wp-content/uploads/2022/03/ewet-300x271.png` (imagem branca
com transparência, lockup vertical: marca geométrica hexagonal + "UNDER CONTROL" + "ASSISTENTE
REMOTA"). O arquivo original está em `public/brand/logo-source.png`.

Como o lockup original é vertical (deixaria o header muito alto), a marca foi recortada e
reaproveitada em partes — sem inventar iconografia nova, apenas reformatando o asset real:

- `public/brand/logo-icon-white.png` — só o glifo hexagonal, cor branca original, para fundos escuros (footer).
- `public/brand/logo-icon-ink.png` — o mesmo glifo, recolorido para `#21112E` (mesma máscara alfa, só a cor mudou), para uso sobre o header claro.
- `public/brand/logo-horizontal.png` — lockup horizontal completo (ícone + wordmark + tagline reais, recortados do arquivo original) sobre fundo `#21112E`, usado como base do `public/logo.png` (schema.org Organization) e do `public/og-default.png`.
- `src/app/icon.png` — favicon: o glifo real branco centralizado num círculo `#21112E`.

Header e footer usam o ícone real (`logo-icon-ink.png` / `logo-icon-white.png`) ao lado do
wordmark em texto vivo (Playfair Display), não a imagem do wordmark — mantém nitidez em qualquer
resolução e permite reaproveitar as cores do design system.
