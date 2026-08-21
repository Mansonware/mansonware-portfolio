import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SOCIAL_LINKS } from "@/lib/data";

export default function Footer() {
  const primaryHref = SOCIAL_LINKS.whatsapp || SOCIAL_LINKS.email;
  const primaryLabel = SOCIAL_LINKS.whatsapp ? "Falar no WhatsApp" : "Enviar e-mail";
  const PrimaryIcon = SOCIAL_LINKS.whatsapp ? MessageCircle : Mail;

  return (
    <footer
      id="contato"
      aria-label="Contato"
      className="relative border-t border-border py-24 sm:py-32"
    >
      <div className="section-container">
        <Reveal className="flex flex-col items-center text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Vamos conversar
          </span>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Tem uma ideia, processo manual ou projeto que precisa sair do papel?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-text-muted">
            Conte o problema, o objetivo e o que já existe hoje. Eu te ajudo a definir
            uma primeira versão enxuta e o caminho mais rápido para colocar a solução no ar.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={primaryHref}
              target={SOCIAL_LINKS.whatsapp ? "_blank" : undefined}
              rel={SOCIAL_LINKS.whatsapp ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03] hover:shadow-glow-sm"
            >
              <PrimaryIcon size={16} />
              {primaryLabel}
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
          <p>© {new Date().getFullYear()} Mansonware. Todos os direitos reservados.</p>
          <p>Sites • automações • integrações • sistemas sob medida.</p>
        </div>
      </div>
    </footer>
  );
}
