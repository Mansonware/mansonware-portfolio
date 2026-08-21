export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://mansonware-portfolio.vercel.app";

export const SITE_NAME = "Mansonware";

export const SITE_TITLE = "Mansonware — Sites, automações e sistemas que impressionam";

export const SITE_DESCRIPTION =
  "Sites, vitrines digitais, automações, integrações e sistemas sob medida com experiência premium, foco em conversão e execução enxuta.";

export const SOCIAL_LINKS = {
  github: "https://github.com/Mansonware",
  linkedin: "https://www.linkedin.com/in/mansonware",
  email: "mailto:contato@mansonware.dev",
  whatsapp:
    process.env.NEXT_PUBLIC_WHATSAPP_URL ||
    "https://wa.me/5512996335539?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Mansonware%20e%20quero%20solicitar%20um%20or%C3%A7amento%20para%20um%20projeto.",
};

export const NAV_LINKS = [
  { label: "Serviços", href: "#sobre" },
  { label: "Cases", href: "#projetos" },
  { label: "Processo", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

export const HERO_STACK = [
  "Python",
  "Node.js",
  "TypeScript",
  "Next.js",
  "Astro",
  "APIs",
  "Automação",
  "IA",
];

export const ABOUT_TOPICS = [
  "Sites",
  "Vitrines digitais",
  "WhatsApp",
  "Automações",
  "APIs",
  "Integrações",
  "SaaS",
  "E-commerce",
  "Python",
  "Node.js",
  "TypeScript",
  "Next.js",
  "Astro",
  "PostgreSQL",
  "IA aplicada",
];

export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
  features: string[];
  challenge: string;
  solution: string;
  result: string;
  github?: string;
  demo?: string;
  gradient: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "local-store-saas",
    name: "Local Store",
    category: "Vitrine digital • WhatsApp",
    description:
      "Vitrine comercial para lojas locais com catálogo, ofertas, busca, categorias e atendimento direto pelo WhatsApp.",
    stack: ["Next.js", "TypeScript", "WhatsApp", "Vercel"],
    features: ["Catálogo", "Ofertas", "Busca", "Mobile-first", "WhatsApp"],
    challenge:
      "Organizar produtos e reduzir o atrito entre descoberta e atendimento sem exigir um e-commerce completo.",
    solution:
      "Vitrine mobile-first com produtos, preços, filtros e mensagens de WhatsApp contextualizadas por item.",
    result:
      "Demo pública em produção e base pronta para personalização rápida por cliente.",
    demo: "https://local-store-saas.vercel.app",
    gradient: "from-emerald-500/30 via-emerald-500/5 to-transparent",
  },
  {
    slug: "capivari-atelier",
    name: "Capivari Atelier",
    category: "E-commerce • Conversão",
    description:
      "Experiência de loja online premium com foco em produto, navegação mobile, confiança e redução de atrito até a compra.",
    stack: ["Astro", "TypeScript", "SEO", "Vercel"],
    features: ["Mobile-first", "Vitrine", "SEO", "Conversão"],
    challenge:
      "Transformar uma presença de marca em uma experiência digital clara e preparada para venda.",
    solution:
      "Arquitetura enxuta em Astro, interface orientada a produto e fluxo comercial com foco em velocidade e clareza.",
    result:
      "Projeto publicado em domínio próprio e preparado para operação comercial.",
    demo: "https://capivariatelier.com",
    gradient: "from-rose-500/30 via-rose-500/5 to-transparent",
  },
  {
    slug: "whatsapp-offer-bot",
    name: "OfferBot",
    category: "Automação • WhatsApp",
    description:
      "POC estruturada para automação de ofertas no WhatsApp com filas, persistência, recuperação e integração preparada com Evolution API.",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker"],
    features: ["Filas", "Dry-run", "Recovery", "Evolution API", "Testes"],
    challenge:
      "Criar uma base confiável para automação de mensagens sem comprometer segurança e controle operacional.",
    solution:
      "Arquitetura com PostgreSQL, Redis, contratos de mensageria e feature flags para separar simulação de envio real.",
    result:
      "Fluxos de simulação, recuperação e contrato de mensageria implementados com chamadas reais bloqueadas por padrão.",
    gradient: "from-cyan-500/30 via-cyan-500/5 to-transparent",
  },
];

export type SkillCategory = {
  title: string;
  skills: string[];
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Web",
    skills: ["Next.js", "Astro", "TypeScript", "React"],
  },
  {
    title: "Backend & Automação",
    skills: ["Node.js", "Python", "REST APIs", "Integrações"],
  },
  {
    title: "Dados",
    skills: ["PostgreSQL", "Prisma", "Supabase", "Redis"],
  },
  {
    title: "Entrega",
    skills: ["Git", "Docker", "Vercel", "CI/CD"],
  },
  {
    title: "Produto",
    skills: ["MVP", "SEO", "UX", "IA aplicada"],
  },
];

export type ExperienceItem = {
  title: string;
  description: string;
};

export const EXPERIENCE: ExperienceItem[] = [];

export type Differential = {
  title: string;
  description: string;
};

export const DIFFERENTIALS: Differential[] = [
  {
    title: "Entender o problema",
    description: "Objetivo, público, operação atual e impacto comercial antes de escolher tecnologia.",
  },
  {
    title: "Cortar até o essencial",
    description: "O MVP fica com o que vende, automatiza, reduz risco ou comprova a oportunidade.",
  },
  {
    title: "Construir e testar rápido",
    description: "Entrega incremental, integração real e validação mobile antes de polimento infinito.",
  },
  {
    title: "Colocar no ar e medir",
    description: "Produção primeiro; dados e resposta do mercado decidem a próxima versão.",
  },
];
