"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  Braces,
  Cpu,
  MessageCircle,
  Orbit,
  Radio,
  Sparkles,
} from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";

const signals = [
  "SITES QUE CONVERTEM",
  "AUTOMAÇÕES",
  "WHATSAPP",
  "IA APLICADA",
  "INTEGRAÇÕES",
  "SISTEMAS SOB MEDIDA",
];

const metrics = [
  { label: "MODELO", value: "MVP ENXUTO" },
  { label: "FOCO", value: "VENDA + OPERAÇÃO" },
  { label: "ENTREGA", value: "PRODUÇÃO RÁPIDA" },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const copyY = useTransform(scrollYProgress, [0, 0.35], [0, reduceMotion ? 0 : -70]);
  const coreY = useTransform(scrollYProgress, [0, 0.35], [0, reduceMotion ? 0 : 95]);
  const coreRotate = useTransform(scrollYProgress, [0, 0.35], [0, reduceMotion ? 0 : 18]);

  return (
    <section
      id="top"
      aria-label="Mansonware"
      className="relative isolate min-h-[100svh] overflow-hidden border-b border-border pt-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 cyber-grid opacity-70" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_35%,rgba(86,255,120,0.12),transparent_28%),linear-gradient(180deg,transparent_62%,#050705_100%)]" />
      <div className="noise pointer-events-none absolute inset-0 -z-10" />

      <motion.div
        aria-hidden
        animate={reduceMotion ? undefined : { x: [0, 24, -12, 0], y: [0, -18, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-28 top-36 -z-10 h-72 w-72 rounded-full bg-accent/10 blur-[110px]"
      />
      <motion.div
        aria-hidden
        animate={reduceMotion ? undefined : { x: [0, -30, 18, 0], y: [0, 22, -10, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-20 top-20 -z-10 h-80 w-80 rounded-full bg-cyan-300/10 blur-[120px]"
      />

      <div className="section-container relative grid min-h-[calc(100svh-6rem)] items-center gap-14 pb-16 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-24">
        <motion.div style={{ y: copyY }} className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-accent/20 bg-accent/[0.055] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-accent backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative h-2 w-2 rounded-full bg-accent shadow-[0_0_14px_rgba(86,255,120,.85)]" />
            </span>
            Mansonware // systems online
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl text-[clamp(3rem,8vw,7.25rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-text"
          >
            Software que
            <span className="block text-gradient glitch-text">parece do futuro.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 grid max-w-3xl gap-6 border-l border-accent/30 pl-5 sm:grid-cols-[1fr_auto] sm:items-end sm:pl-7"
          >
            <p className="max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg lg:text-xl">
              Sites, automações e sistemas que transformam atenção em ação.
              <span className="text-text"> A Mansonware projeta experiências digitais marcantes</span>{" "}
              sem carregar complexidade que não gera resultado.
            </p>
            <div className="hidden font-mono text-[9px] uppercase leading-5 tracking-[0.2em] text-text-subtle sm:block">
              build / launch<br />measure / evolve
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex min-h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-accent px-7 text-sm font-bold text-[#031005] shadow-[0_0_0_1px_rgba(86,255,120,.5),0_0_40px_rgba(86,255,120,.18)] transition-transform hover:scale-[1.025]"
            >
              <span className="absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-20deg] bg-white/25 transition-transform duration-700 group-hover:translate-x-[340%]" />
              <MessageCircle size={18} />
              Quero uma solução assim
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projetos"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-border bg-surface/55 px-7 text-sm font-semibold text-text backdrop-blur transition-colors hover:border-accent/40 hover:bg-accent/[0.06]"
            >
              Ver cases reais
              <ArrowDownRight size={17} className="text-accent transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4 }}
            className="mt-12 grid max-w-3xl grid-cols-1 overflow-hidden border-y border-border sm:grid-cols-3"
          >
            {metrics.map((metric) => (
              <div key={metric.label} className="border-border py-4 sm:border-r sm:px-5 first:sm:pl-0 last:sm:border-r-0">
                <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-text-subtle">
                  {metric.label}
                </span>
                <span className="mt-1 block text-xs font-semibold tracking-wide text-text">
                  {metric.value}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: coreY, rotate: coreRotate }}
          initial={{ opacity: 0, scale: 0.86 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto flex aspect-square w-full max-w-[560px] items-center justify-center"
        >
          <div className="absolute inset-[4%] rounded-full border border-accent/10 [animation:pulse-ring_5s_ease-in-out_infinite]" />
          <div className="absolute inset-[12%] rounded-full border border-dashed border-accent/20 [animation:orbit-spin_26s_linear_infinite]" />
          <div className="absolute inset-[22%] rounded-full border border-cyan-300/15 [animation:orbit-spin-reverse_19s_linear_infinite]" />
          <div className="absolute inset-[30%] rounded-full border border-accent/30 shadow-[0_0_70px_rgba(86,255,120,.12)]" />

          <div className="absolute inset-[6%] [animation:orbit-spin_19s_linear_infinite]">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full border border-accent/30 bg-background/90 p-2.5 text-accent shadow-[0_0_24px_rgba(86,255,120,.18)]">
              <Cpu size={17} />
            </div>
          </div>
          <div className="absolute inset-[18%] [animation:orbit-spin-reverse_14s_linear_infinite]">
            <div className="absolute bottom-[8%] right-0 rounded-full border border-cyan-300/25 bg-background/90 p-2.5 text-cyan-200">
              <Braces size={16} />
            </div>
          </div>
          <div className="absolute inset-[11%] [animation:orbit-spin_23s_linear_infinite]">
            <div className="absolute bottom-[18%] left-0 rounded-full border border-accent/25 bg-background/90 p-2.5 text-accent">
              <Radio size={16} />
            </div>
          </div>

          <div className="scan-beam holo-panel hud-corners relative flex h-[48%] w-[48%] items-center justify-center overflow-hidden rounded-[2rem]">
            <div className="absolute inset-4 rounded-[1.45rem] border border-accent/10" />
            <div className="absolute inset-8 rounded-[1.05rem] border border-dashed border-accent/15 [animation:orbit-spin_18s_linear_infinite]" />
            <div className="relative z-10 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent shadow-[0_0_45px_rgba(86,255,120,.18)]">
                <Orbit size={30} />
              </div>
              <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.28em] text-text-subtle">core</div>
              <div className="mt-1 text-3xl font-black tracking-[-0.08em] text-text">MW</div>
            </div>
          </div>

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
            className="holo-panel absolute left-[2%] top-[18%] hidden rounded-xl px-3 py-2.5 md:block"
          >
            <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-text-muted">
              <Sparkles size={12} className="text-accent" /> conversion layer
            </div>
          </motion.div>

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="holo-panel absolute bottom-[12%] right-[0%] hidden rounded-xl px-3 py-2.5 md:block"
          >
            <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-text-muted">
              <Radio size={12} className="text-cyan-200" /> live systems
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative border-y border-border bg-background/70 py-3 backdrop-blur">
        <div className="overflow-hidden">
          <div className="marquee-track gap-10 pr-10">
            {[...signals, ...signals].map((signal, index) => (
              <span
                key={`${signal}-${index}`}
                className="flex shrink-0 items-center gap-3 font-mono text-[10px] uppercase tracking-[0.23em] text-text-subtle"
              >
                <span className="h-1 w-1 rounded-full bg-accent shadow-[0_0_8px_rgba(86,255,120,.8)]" />
                {signal}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
