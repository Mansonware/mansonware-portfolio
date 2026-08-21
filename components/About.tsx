"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Boxes,
  Code2,
  MessageSquareMore,
  Radar,
  Workflow,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { SOCIAL_LINKS } from "@/lib/data";

const SERVICES = [
  {
    icon: Code2,
    code: "01 / DIGITAL",
    title: "Sites e vitrines que parecem produto premium",
    description:
      "Landing pages, catálogos e experiências web com identidade forte, mobile-first e CTA pensado para converter visita em conversa ou venda.",
    tags: ["Landing pages", "E-commerce", "Vitrines", "SEO"],
  },
  {
    icon: Workflow,
    code: "02 / AUTOMATION",
    title: "Automação que tira trabalho manual da operação",
    description:
      "WhatsApp, APIs, integrações e fluxos inteligentes para acelerar atendimento, organizar dados e conectar ferramentas que hoje trabalham separadas.",
    tags: ["WhatsApp", "APIs", "Integrações", "IA"],
  },
  {
    icon: Boxes,
    code: "03 / SYSTEMS",
    title: "Sistemas sob medida sem arquitetura de nave espacial",
    description:
      "MVPs, dashboards e SaaS com escopo controlado. Primeiro a versão que resolve e pode ser vendida; complexidade entra só quando existe motivo real.",
    tags: ["MVP", "SaaS", "Dashboards", "Backend"],
  },
];

export default function About() {
  return (
    <section id="sobre" aria-label="Serviços" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px signal-line bg-accent/10" />
      <div className="pointer-events-none absolute -right-32 top-24 h-72 w-72 rounded-full bg-accent/[0.055] blur-[110px]" />

      <div className="section-container">
        <Reveal className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <span className="section-kicker">Capabilities</span>
            <h2 className="mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-text sm:text-5xl lg:text-6xl">
              Menos apresentação.
              <span className="block text-gradient">Mais impacto percebido.</span>
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg lg:justify-self-end">
            A Mansonware combina produto, engenharia e automação para criar uma presença digital que
            <span className="text-text"> chama atenção primeiro e prova valor logo depois.</span>
            Nada entra só para preencher página.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.08}>
                <motion.article
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 260, damping: 24 }}
                  className="holo-panel hud-corners group relative h-full overflow-hidden rounded-[1.6rem] p-6 sm:p-7"
                >
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/[0.06] blur-3xl transition-transform duration-700 group-hover:scale-150" />
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-text-subtle">
                      {service.code}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/[0.06] text-accent shadow-[0_0_30px_rgba(86,255,120,.08)]">
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold leading-tight tracking-[-0.025em] text-text sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-text-muted">
                    {service.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2 border-t border-border pt-5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-background/50 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-text-subtle"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.12} className="mt-8">
          <div className="holo-panel relative grid overflow-hidden rounded-[1.6rem] p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
            <div className="absolute inset-0 cyber-grid opacity-25" />
            <div className="relative z-10 flex gap-4">
              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.05] text-cyan-200 sm:flex">
                <Radar size={21} />
              </div>
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent">fit check</span>
                <h3 className="mt-2 text-lg font-semibold text-text sm:text-xl">
                  Tem uma operação manual, ideia ou venda que depende demais de direct e planilha?
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-text-muted">
                  Esse é exatamente o tipo de problema que vale transformar em uma solução enxuta antes de pensar em escala.
                </p>
              </div>
            </div>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-background sm:mt-0"
            >
              <MessageSquareMore size={16} />
              Me conta o problema
              <ArrowUpRight size={15} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
