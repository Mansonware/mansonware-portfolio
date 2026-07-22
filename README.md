# Manson — Portfolio

Portfólio pessoal de **Manson**, Full Stack Developer, refeito do zero como uma aplicação
premium construída com **Next.js 15**. O objetivo foi transformar um site estático em
HTML/CSS/JS em um produto digital moderno, com animações refinadas, design system
consistente e SEO de nível profissional.

## Stack

- **[Next.js 15](https://nextjs.org/)** (App Router)
- **React 18** + **TypeScript**
- **TailwindCSS 3** com design tokens customizados
- **Framer Motion** para animações (fade-in on scroll, tilt 3D, stagger)
- **Lucide React** para ícones
- `clsx` + `tailwind-merge` para composição de classes (`cn()`)

## Como rodar o projeto

```bash
# instalar dependências
npm install

# ambiente de desenvolvimento
npm run dev

# build de produção
npm run build
npm run start

# lint
npm run lint
```

O projeto estará disponível em `http://localhost:3000`.

## Estrutura de pastas

```
/app
  layout.tsx      # metadata, fontes, JSON-LD (schema.org Person)
  page.tsx        # composição das seções da home
  globals.css     # design tokens, scrollbar, seleção, utilitários
  robots.ts       # robots.txt dinâmico
  sitemap.ts       # sitemap.xml dinâmico
/components
  Navbar.tsx       # navbar sticky com transição transparente → blur
  Hero.tsx         # hero fullscreen com stacks, CTAs e efeitos de fundo
  About.tsx        # trajetória e pilares
  Projects.tsx      # grid de projetos (Melt OS, Sistema Restaurante, Capivari Atelier)
  ProjectCard.tsx   # card com efeito de tilt 3D reativo ao mouse
  Skills.tsx        # skills agrupadas por categoria com hover states
  Experience.tsx    # timeline de experiência Full Stack
  Differentials.tsx  # grid de diferenciais
  Footer.tsx         # contato e links sociais
  Reveal.tsx          # wrapper de animação fade-in-on-scroll (useInView)
/lib
  data.ts   # todo o conteúdo estático (projetos, skills, experiência, etc.)
  utils.ts  # utilitário cn() para composição de classes Tailwind
```

## Design

- Tema escuro premium: `#0a0a0a` / `#111111` / `#1a1a1a`
- Cor de destaque: verde `#22c55e`, usada em glows, badges e CTAs
- Glassmorphism sutil, grid de fundo, gradientes radiais e blur
- Tipografia com hierarquia clara e espaçamento generoso entre seções

## Animações

- Fade-in ao rolar a página, usando `useInView` do Framer Motion
- Animações staggered para listas de tags e cards
- Tilt 3D reativo ao mouse nos cards de projeto
- Glow reativo ao hover em cards e botões

## SEO

- Metadados completos (title, description, canonical) em `app/layout.tsx`
- Open Graph e Twitter Cards com imagem dedicada
- `robots.ts` e `sitemap.ts` gerados dinamicamente
- JSON-LD `schema.org/Person` com informações profissionais

## Melhorias em relação à versão anterior

A versão anterior era um site estático (`index.html` + `style.css` + `script.js`).
Esta versão traz:

- Arquitetura em componentes React reutilizáveis e tipados
- Animações profissionais e performáticas via Framer Motion
- SEO técnico completo (sitemap, robots, JSON-LD, Open Graph)
- Design system consistente via Tailwind + tokens customizados
- Conteúdo real de projetos (Melt OS, Sistema Restaurante, Capivari Atelier)
- Seções de Skills, Experiência e Diferenciais com apresentação visual, não listas simples
