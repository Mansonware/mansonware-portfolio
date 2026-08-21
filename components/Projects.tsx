import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projetos"
      aria-label="Cases e projetos"
      className="relative overflow-hidden border-y border-border bg-[#050805] py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 cyber-grid opacity-25 [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-12 h-56 w-[70%] -translate-x-1/2 rounded-full bg-accent/[0.045] blur-[100px]" />

      <div className="section-container relative z-10">
        <Reveal className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <span className="section-kicker">Selected systems</span>
            <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-text sm:text-5xl lg:text-6xl">
              Não é conceito.
              <span className="block text-gradient">Tem coisa real no ar.</span>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-text-muted sm:text-lg lg:justify-self-end">
            Cases com objetivos diferentes: vender produto, organizar descoberta e atendimento, ou criar infraestrutura para automação.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
