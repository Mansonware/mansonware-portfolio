"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { HERO_STACK, SOCIAL_LINKS } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Mansonware"
      className="relative flex min-h-[100vh] items-center overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute inset-0 bg-grid-pattern bg-[size:56px_56px] opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]" />
        <div className="noise absolute inset-0" />
        <div className="absolute left-1/2 top-[-10%] h-[500px] w-[500px] -translate-x-1/2 animate-float rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute right-[-10%] top-[30%] h-[300px] w-[300px] animate-pulse-slow rounded-full bg-emerald-400/10 blur-[100px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="section-container relative z-10 grid items-center gap-16 py-20 lg:grid-cols-[1.15fr_0.85fr]"
      >
        <div>
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium text-text-muted backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Projetos sob medida • atendimento direto
          </motion.div>

          <motion.h1
            variants={item}
            className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-text sm:text-5xl lg:text-6xl"
          >
            Soluções digitais para sua empresa{" "}
            <span className="text-gradient">vender melhor e trabalhar menos no manual.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-text-muted"
          >
            A <span className="font-medium text-text">Mansonware</span> cria sites,
            vitrines digitais, automações, integrações e sistemas sob medida com
            foco em colocar uma solução útil no ar rapidamente — sem complexidade
            desnecessária.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-2">
            {HERO_STACK.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text-muted transition-colors hover:border-accent/40 hover:text-text"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projetos"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background shadow-glow-sm transition-transform hover:scale-[1.03] hover:shadow-glow"
            >
              Ver projetos
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-text transition-colors hover:border-accent/40 hover:bg-surface-2"
            >
              <MessageCircle size={16} />
              Falar sobre meu projeto
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="relative mx-auto aspect-square w-full max-w-sm"
        >
          <div className="absolute inset-0 rounded-full bg-accent/20 blur-[80px]" />
          <div className="relative flex h-full w-full items-center justify-center rounded-[2rem] border border-border bg-surface/80 backdrop-blur">
            <div className="flex h-[85%] w-[85%] items-center justify-center rounded-[1.6rem] bg-gradient-to-br from-surface-2 to-background text-5xl font-bold tracking-tight text-accent shadow-glow">
              MW
            </div>
            <div className="absolute -bottom-4 -right-4 flex items-center gap-2 rounded-2xl border border-border bg-surface px-4 py-3 shadow-card backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-xs font-medium text-text">Disponível para projetos</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
