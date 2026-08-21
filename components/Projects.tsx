import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projetos"
      aria-label="Projetos"
      className="relative py-24 sm:py-32"
    >
      <div className="section-container">
        <Reveal>
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Projetos
          </span>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Soluções construídas para problemas de negócio diferentes.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-text-muted">
            Alguns exemplos de como produto, automação e desenvolvimento podem
            virar uma solução simples de entender e usar.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
