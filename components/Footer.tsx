import { Github, Linkedin, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SOCIAL_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      id="contato"
      aria-label="Contato"
      className="relative border-t border-border py-24 sm:py-32"
    >
      <div className="section-container">
        <Reveal className="flex flex-col items-center text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Contato
          </span>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Vamos construir o próximo produto de impacto?
          </h2>
          <p className="mt-4 max-w-lg text-lg text-text-muted">
            Estou disponível para novos projetos e oportunidades. Entre em
            contato e vamos conversar sobre a sua ideia.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={SOCIAL_LINKS.email}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03] hover:shadow-glow-sm"
            >
              <Mail size={16} />
              Enviar e-mail
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-text transition-colors hover:border-text-subtle hover:bg-surface-2"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-text transition-colors hover:border-text-subtle hover:bg-surface-2"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </Reveal>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-text-subtle sm:flex-row">
          <p>© {new Date().getFullYear()} Manson. Todos os direitos reservados.</p>
          <p>Construído com Next.js, TypeScript &amp; TailwindCSS.</p>
        </div>
      </div>
    </footer>
  );
}
