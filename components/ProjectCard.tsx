"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Radio } from "lucide-react";
import type { Project } from "@/lib/data";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), {
    stiffness: 180,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), {
    stiffness: 180,
    damping: 22,
  });
  const glowX = useTransform(x, [-0.5, 0.5], ["10%", "90%"]);
  const glowY = useTransform(y, [-0.5, 0.5], ["10%", "90%"]);

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    if (reduceMotion) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const spanClass = index === 0 ? "lg:col-span-2" : index === 2 ? "lg:col-span-2 lg:col-start-2" : "";

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 1200 }}
      initial={{ opacity: 0, y: 44, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`holo-panel hud-corners group relative overflow-hidden rounded-[1.8rem] ${spanClass}`}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-px z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(86,255,120,0.16), transparent 42%)`,
        }}
      />

      <div className={`relative overflow-hidden border-b border-border bg-gradient-to-br ${project.gradient} p-6 sm:p-8`}>
        <div className="absolute inset-0 cyber-grid opacity-25" />
        <div className="absolute inset-x-0 top-1/2 h-px signal-line bg-accent/10" />
        <div className="relative z-10 flex min-h-52 flex-col justify-between sm:min-h-60">
          <div className="flex items-start justify-between gap-4">
            <span className="rounded-full border border-border bg-background/60 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.17em] text-text-muted backdrop-blur">
              {project.category}
            </span>
            <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-accent">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-accent" />
                <span className="relative rounded-full bg-accent" />
              </span>
              {project.demo ? "live" : "system"}
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-text-subtle">
              <Radio size={12} className="text-accent" /> case / 0{index + 1}
            </div>
            <h3 className="max-w-3xl text-3xl font-semibold tracking-[-0.05em] text-text sm:text-4xl lg:text-5xl">
              {project.name}
            </h3>
          </div>
        </div>
      </div>

      <div className="relative z-10 grid gap-7 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
            {project.description}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="border-l border-accent/25 pl-4">
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-subtle">problema</div>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{project.challenge}</p>
            </div>
            <div className="border-l border-cyan-300/20 pl-4">
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-subtle">estado</div>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{project.result}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6 lg:border-l lg:border-border lg:pl-7">
          <div>
            <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-subtle">stack signal</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-background/50 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {(project.demo || project.github) && (
            <div className="flex flex-wrap gap-3">
              {project.demo && (
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-4 text-sm font-semibold text-background transition-transform hover:scale-[1.025]"
                >
                  Abrir projeto
                  <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              )}
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-background/50 px-4 text-sm font-medium text-text transition-colors hover:border-accent/30"
                >
                  <Github size={15} /> GitHub
                </Link>
              )}
              {!project.demo && !project.github && (
                <span className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-background/50 px-4 text-sm font-medium text-text-muted">
                  <ExternalLink size={15} /> Case técnico
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
