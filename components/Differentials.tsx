"use client";

import { motion } from "framer-motion";
import { Crosshair, Gauge, Rocket, ScanSearch } from "lucide-react";
import Reveal from "@/components/Reveal";

const PROCESS = [
  {
    icon: ScanSearch,
    code: "01",
    title: "Entender o problema",
    description: "Antes do código: objetivo, público, operação atual e o que precisa mudar para o projeto valer dinheiro.",
  },
  {
    icon: Crosshair,
    code: "02",
    title: "Cortar até o essencial",
    description: "O MVP fica com o que vende, automatiza, reduz risco ou comprova a oportunidade. O resto espera.",
  },
  {
    icon: Gauge,
    code: "03",
    title: "Construir e testar rápido",
    description: "Entrega incremental, integração real e validação em mobile antes de polimento infinito.",
  },
  {
    icon: Rocket,
    code: "04",
    title: "Colocar no ar e medir",
    description: "Produção primeiro. Depois, dados e resposta do mercado decidem o que merece a próxima versão.",
  },
];

export default function Differentials() {
  return (
    <section
      id="diferenciais"
      aria-label="Processo de trabalho"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
      <div className="section-container relative">
        <Reveal className="max-w-4xl">
          <span className="section-kicker">Execution protocol</span>
          <h2 className="mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-text sm:text-5xl lg:text-6xl">
            Visual futurista.
            <span className="block text-gradient">Processo sem ficção científica.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
            A experiência pode ser ousada. A execução precisa continuar simples, mensurável e orientada ao que gera valor.
          </p>
        </Reveal>

        <div className="relative mt-16 grid gap-4 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-border lg:block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
              className="h-full origin-left bg-gradient-to-r from-accent via-cyan-200/70 to-accent/20 shadow-[0_0_16px_rgba(86,255,120,.35)]"
            />
          </div>

          {PROCESS.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.code} delay={index * 0.08}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 24 }}
                  className="holo-panel group relative h-full rounded-[1.5rem] p-6 pt-7"
                >
                  <div className="relative z-10 mb-8 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/25 bg-background text-accent shadow-[0_0_25px_rgba(86,255,120,.12)]">
                      <Icon size={19} />
                    </div>
                    <span className="font-mono text-2xl font-semibold tracking-[-0.08em] text-text-subtle transition-colors group-hover:text-accent/60">
                      {step.code}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-text">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{step.description}</p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
