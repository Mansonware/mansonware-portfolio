import { Code2, Rocket, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import { ABOUT_TOPICS } from "@/lib/data";

const PILLARS = [
  {
    icon: Code2,
    title: "Full Stack de verdade",
    description:
      "Do banco de dados à interface, passando por arquitetura, APIs e deploy — end-to-end.",
  },
  {
    icon: Rocket,
    title: "Produtos, não apenas código",
    description:
      "Cada decisão técnica é guiada por impacto real no produto e na experiência do usuário.",
  },
  {
    icon: Sparkles,
    title: "Tecnologia + IA",
    description:
      "Uso estratégico de inteligência artificial para acelerar entregas e resolver problemas complexos.",
  },
];

export default function About() {
  return (
    <section id="sobre" aria-label="Sobre" className="relative py-24 sm:py-32">
      <div className="section-container">
        <Reveal>
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Sobre
          </span>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Trajetória construída resolvendo problemas reais.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-text-muted">
              Sou um desenvolvedor <span className="text-text">Full Stack</span>{" "}
              com trajetória construída em torno de produtos digitais que
              realmente resolvem problemas de negócio. Trabalho com{" "}
              <span className="text-text">React</span>,{" "}
              <span className="text-text">Next.js</span>,{" "}
              <span className="text-text">Java</span>,{" "}
              <span className="text-text">Spring Boot</span> e{" "}
              <span className="text-text">Node.js</span> para construir desde
              APIs robustas até interfaces refinadas.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">
              Minha stack inclui{" "}
              <span className="text-text">TypeScript</span>,{" "}
              <span className="text-text">PostgreSQL</span>,{" "}
              <span className="text-text">Docker</span>,{" "}
              <span className="text-text">Prisma</span> e{" "}
              <span className="text-text">Supabase</span>, aplicados na
              construção de SaaS, PWAs e arquiteturas escaláveis — sempre com
              olhar atento para performance, segurança e inteligência
              artificial aplicada.
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
