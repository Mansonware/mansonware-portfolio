"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Code,
  Gauge,
  Layers,
  MonitorSmartphone,
  Search,
  ShieldCheck,
  Sparkle,
  TrendingUp,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { DIFFERENTIALS } from "@/lib/data";

const ICONS = [
  TrendingUp,
  Code,
  Gauge,
  Sparkle,
  Search,
  Layers,
  MonitorSmartphone,
  ShieldCheck,
  Brain,
];

export default function Differentials() {
  return (
    <section
      id="diferenciais"
      aria-label="Diferenciais"
      className="relative py-24 sm:py-32"
    >
      <div className="section-container">
        <Reveal>
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Diferenciais
          </span>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            O que faz a diferença na entrega.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIALS.map((d, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <Reveal key={d.title} delay={index * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group h-full rounded-2xl border border-border bg-surface/60 p-6 transition-colors hover:border-accent/30"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform group-hover:scale-110">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-text">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {d.description}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
