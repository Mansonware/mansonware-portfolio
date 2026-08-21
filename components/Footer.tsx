import { ArrowUpRight, Github, Linkedin, MessageCircle } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SOCIAL_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contato" aria-label="Contato" className="relative overflow-hidden border-t border-border py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 cyber-grid opacity-25 [mask-image:radial-gradient(circle_at_50%_50%,black,transparent_72%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[130px]" />

      <div className="section-container relative z-10">
        <Reveal>
          <div className="holo-panel hud-corners scan-beam relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-10 sm:py-20 lg:px-16">
            <div className="absolute inset-0 cyber-grid opacity-20" />
            <div className="relative z-10 mx-auto max-w-4xl">
              <span className="section-kicker justify-center">Open channel</span>
              <h2 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.055em] text-text sm:text-5xl lg:text-7xl">
                Se a sua empresa ainda faz no manual,
                <span className="block text-gradient">provavelmente dá para melhorar.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
                Me mostre o problema. Eu te digo qual primeira versão faz sentido construir — sem empurrar complexidade que você não precisa.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-accent px-7 text-sm font-bold text-background shadow-[0_0_40px_rgba(86,255,120,.16)] transition-transform hover:scale-[1.025]"
                >
                  <MessageCircle size={18} />
                  Falar com a Mansonware
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#projetos"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-border bg-background/50 px-7 text-sm font-semibold text-text transition-colors hover:border-accent/35 hover:bg-accent/[0.05]"
                >
                  Rever cases
                </a>
              </div>

              <div className="mx-auto mt-10 flex max-w-xl items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-text-subtle">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
                contato direto / resposta humana
                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col gap-6 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-bold tracking-[0.08em] text-text">MANSONWARE</div>
            <div className="mt-1 font-mono text-[8px] uppercase tracking-[0.22em] text-text-subtle">
              sites / automações / sistemas
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/40 text-text-subtle transition-colors hover:border-accent/30 hover:text-accent"
            >
              <Github size={16} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/40 text-text-subtle transition-colors hover:border-accent/30 hover:text-accent"
            >
              <Linkedin size={16} />
            </a>
          </div>

          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-text-subtle">
            © {new Date().getFullYear()} / all systems reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
