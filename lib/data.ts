export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://mansonware.github.io/mansonware-portfolio";

export const SITE_NAME = "Manson";

export const SITE_TITLE = "Manson — Full Stack Developer";

export const SITE_DESCRIPTION =
  "Construo produtos digitais que impressionam. Full Stack developer especializado em React, Next.js, Java, Spring Boot, Node.js e arquiteturas modernas de SaaS.";

export const SOCIAL_LINKS = {
  github: "https://github.com/Mansonware",
  linkedin: "https://www.linkedin.com/in/mansonware",
  email: "mailto:contato@mansonware.dev",
};

export const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Skills", href: "#skills" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

export const HERO_STACK = [
  "React",
  "Next.js",
  "Java",
  "Spring Boot",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "Docker",
];

export const ABOUT_TOPICS = [
  "React",
  "Next.js",
  "Java",
  "Spring Boot",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "APIs REST",
  "Docker",
  "Prisma",
  "Supabase",
  "SaaS",
  "PWAs",
  "Arquitetura",
  "IA",
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
  github: string;
  demo?: string;
  gradient: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "melt-os",
    name: "Melt OS",
    category: "SaaS • Sistema Operacional Web",
    description:
      "SaaS completo que funciona como um sistema operacional web, com múltiplos workspaces, autenticação robusta e dashboard operacional para gestão de times.",
    stack: ["Next.js", "React", "PostgreSQL", "Prisma", "Supabase", "PWA"],
    features: ["Multi-tenant", "Autenticação", "Workspace", "Dashboard"],
    challenge:
      "Arquitetura multi-tenant com isolamento de dados e performance em escala.",
    solution:
      "Prisma + Supabase com Row Level Security (RLS), workspaces isolados por tenant e cache estratégico para manter a performance sob carga.",
    result:
      "Plataforma SaaS funcional com PWA instalável e dashboard operacional completo em produção.",
    github: "https://github.com/Mansonware/melt-os",
    gradient: "from-emerald-500/30 via-emerald-500/5 to-transparent",
  },
  {
    slug: "sistema-restaurante",
    name: "Sistema Restaurante",
    category: "Gestão • Tempo Real",
    description:
      "Sistema completo de gestão de restaurante cobrindo pedidos, cardápio digital via QR Code, impressão automática e integração com WhatsApp.",
    stack: ["React", "Node.js", "WebSocket", "PWA", "QR Code"],
    features: ["Pedidos", "QR Code", "Impressoras", "WhatsApp", "Cardápio digital", "Gestão"],
    challenge:
      "Comunicação em tempo real entre garçom, cozinha e caixa sem perder pedidos em cenários de instabilidade de rede.",
    solution:
      "WebSockets para sincronização instantânea combinados com uma PWA offline-first e impressão direta nas comandas da cozinha.",
    result:
      "Sistema ativo em operação real no restaurante, com zero falhas de pedido desde o lançamento.",
    github: "https://github.com/Mansonware/sistema-restaurante",
    gradient: "from-orange-500/30 via-orange-500/5 to-transparent",
  },
  {
    slug: "capivari-atelier",
    name: "Capivari Atelier",
    category: "Landing Page • Conversão",
    description:
      "Landing page premium para um ateliê, construída com foco absoluto em performance, SEO técnico e conversão orgânica.",
    stack: ["Astro", "TailwindCSS", "SEO"],
    features: ["UX", "Conversão", "SEO"],
    challenge:
      "Converter visitantes em contatos qualificados sem depender exclusivamente de redes sociais.",
    solution:
      "Astro em modo SSG (Static Site Generation) combinado com copywriting orientado à conversão e SEO técnico aprofundado.",
    result:
      "Aumento de 40% no contato orgânico logo após o lançamento da nova landing page.",
    github: "https://github.com/Mansonware/capivari-atelier",
    gradient: "from-rose-500/30 via-rose-500/5 to-transparent",
  },
];

export type SkillCategory = {
  title: string;
  skills: string[];
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Java", "Spring Boot", "REST APIs"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "Prisma", "Supabase"],
  },
  {
    title: "DevOps",
    skills: ["Docker", "Git", "Vercel"],
  },
  {
    title: "Other",
    skills: ["PWA", "SEO", "IA"],
  },
];

export type ExperienceItem = {
  title: string;
  description: string;
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: "Arquitetura",
    description:
      "Desenho de sistemas escaláveis, multi-tenant e orientados a domínio, priorizando manutenibilidade a longo prazo.",
  },
  {
    title: "Desenvolvimento",
    description:
      "Entrega de features completas de ponta a ponta, do banco de dados à interface, com foco em qualidade de código.",
  },
  {
    title: "Front-end",
    description:
      "Interfaces modernas e responsivas com React e Next.js, priorizando performance e experiência do usuário.",
  },
  {
    title: "Back-end",
    description:
      "APIs REST robustas com Node.js, Java e Spring Boot, aplicando boas práticas de segurança e escalabilidade.",
  },
  {
    title: "Database",
    description:
      "Modelagem de dados eficiente com PostgreSQL e Prisma, com foco em performance e integridade.",
  },
  {
    title: "Deploy",
    description:
      "Pipelines de deploy contínuo com Docker e Vercel, garantindo entregas rápidas e confiáveis.",
  },
  {
    title: "Automação",
    description:
      "Automação de processos e integrações com IA aplicada para reduzir trabalho manual e aumentar produtividade.",
  },
];

export type Differential = {
  title: string;
  description: string;
};

export const DIFFERENTIALS: Differential[] = [
  {
    title: "Pensamento de Produto",
    description: "Decisões técnicas guiadas por valor real para o usuário e para o negócio.",
  },
  {
    title: "Código Limpo",
    description: "Código legível, testável e fácil de manter a longo prazo.",
  },
  {
    title: "Performance",
    description: "Aplicações rápidas, otimizadas e prontas para escalar.",
  },
  {
    title: "UX Focus",
    description: "Experiências de uso intuitivas, acessíveis e agradáveis.",
  },
  {
    title: "SEO Técnico",
    description: "Estrutura e metadados pensados para máxima visibilidade orgânica.",
  },
  {
    title: "Escalabilidade",
    description: "Arquiteturas preparadas para crescer sem retrabalho.",
  },
  {
    title: "Responsividade",
    description: "Interfaces perfeitas em qualquer dispositivo, do mobile ao desktop.",
  },
  {
    title: "Arquitetura Sólida",
    description: "Bases técnicas robustas que sustentam o crescimento do produto.",
  },
  {
    title: "IA Aplicada",
    description: "Uso estratégico de inteligência artificial para resolver problemas reais.",
  },
];
