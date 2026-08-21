import { Code2, Rocket, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import { ABOUT_TOPICS } from "@/lib/data";

const PILLARS = [
  {
    icon: Code2,
    title: "Sites e vitrines que ajudam a vender",
    description:
      "Landing pages, catálogos e experiências de compra pensadas para mobile, clareza e conversão.",
  },
  {
    icon: Sparkles,
    title: "Automação e integrações",
    description:
      "WhatsApp, APIs, IA e ferramentas conectadas para reduzir tarefas repetitivas e acelerar atendimento e operação.",
  },
  {
    icon: Rocket,
    title: "Sistemas sob medida",
    description:
      "MVPs, SaaS e painéis internos construídos com escopo controlado, baixo custo operacional e evolução incremental.",
  },
];

export default function About() {
  return (
    <section id="sobre" aria-label="Serviços" className="relative py-24 sm:py-32">
      <div className="section-container">
        <Reveal>
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Serviços
          </span>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Tecnologia aplicada ao que realmente move o negócio.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-text-muted">
              A Mansonware desenvolve soluções digitais para empresas que precisam
              <span className="text-text"> vender, automatizar ou organizar melhor a operação</span>.
              O ponto de partida não é a tecnologia mais complexa: é a solução mais
              simples que resolve o problema e consegue ir para produção.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">
              O trabalho cobre do front-end ao back-end, APIs, bancos de dados,
              integrações, automações e deploy. Quando IA faz sentido, ela entra para
              reduzir trabalho manual ou aumentar capacidade — não só para adicionar
              uma funcionalidade chamativa.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {ABOUT_TOPICS.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text-muted"
                >
                  {topic}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-6">
            {PILLARS.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={0.15 + index * 0.1}>
                  <div className="group rounded-2xl border border-border bg-surface/60 p-6 transition-colors hover:border-accent/30 hover:bg-surface">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-semibold text-text">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">
                      {pillar.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
