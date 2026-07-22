import Reveal from "@/components/Reveal";
import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experiencia"
      aria-label="Experiência"
      className="relative py-24 sm:py-32"
    >
      <div className="section-container">
        <Reveal>
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Experiência
          </span>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Atuação Full Stack, de ponta a ponta.
          </h2>
        </Reveal>

        <ol className="relative mt-14 space-y-10 border-l border-border pl-8 sm:pl-10">
          {EXPERIENCE.map((exp, index) => (
            <Reveal key={exp.title} delay={index * 0.06}>
              <li className="relative">
                <span className="absolute -left-[41px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-background bg-accent shadow-glow-sm sm:-left-[49px]" />
                <span className="text-xs font-mono uppercase tracking-widest text-text-subtle">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 text-xl font-semibold text-text">
                  {exp.title}
                </h3>
                <p className="mt-2 max-w-2xl text-text-muted">
                  {exp.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
