"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  Database,
  Layers,
  Server,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { SKILLS } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = {
  Frontend: Layers,
  Backend: Server,
  Database: Database,
  DevOps: Boxes,
  Other: Sparkles,
};

export default function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="relative py-24 sm:py-32">
      <div className="section-container">
        <Reveal>
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Skills
          </span>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Um conjunto de ferramentas para construir de ponta a ponta.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((category, index) => {
            const Icon = ICONS[category.title] ?? Sparkles;
            return (
              <Reveal key={category.title} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface/60 p-6"
                >
                  <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon size={22} />
                  </div>
                  <h3 className="relative mt-5 text-lg font-semibold text-text">
                    {category.title}
                  </h3>
                  <div className="relative mt-4 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs font-medium text-text-muted transition-colors group-hover:border-accent/30 group-hover:text-text"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
