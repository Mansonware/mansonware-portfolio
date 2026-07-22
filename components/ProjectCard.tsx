"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/data";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  });
  const glowX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-surface/70"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-px z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(34,197,94,0.18), transparent 60%)`,
        }}
      />

      <div
        className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${project.gradient} border-b border-border`}
      >
        <span className="text-4xl font-bold text-text/10">
          {project.name}
        </span>
        <span className="absolute left-5 top-5 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-text-muted backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="relative z-10 flex flex-col gap-5 p-7">
        <div>
          <h3 className="text-xl font-semibold text-text">{project.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-xs font-medium text-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <dl className="grid gap-3 border-t border-border pt-5 text-sm">
          <div>
            <dt className="font-medium text-text">Desafio</dt>
            <dd className="mt-1 text-text-muted">{project.challenge}</dd>
          </div>
          <div>
            <dt className="font-medium text-text">Solução</dt>
            <dd className="mt-1 text-text-muted">{project.solution}</dd>
          </div>
          <div>
            <dt className="font-medium text-accent">Resultado</dt>
            <dd className="mt-1 text-text-muted">{project.result}</dd>
          </div>
        </dl>

        <div className="mt-2 flex gap-3">
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-4 py-2 text-sm font-medium text-text transition-colors hover:border-text-subtle"
          >
            <Github size={16} />
            GitHub
          </Link>
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
            >
              Demo
              <ArrowUpRight size={16} />
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
