"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Github, Linkedin, Menu, MessageCircle, X } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 28, mass: 0.2 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5"
    >
      <div
        className={cn(
          "relative mx-auto max-w-7xl overflow-hidden rounded-2xl border transition-all duration-300",
          scrolled
            ? "border-accent/15 bg-background/80 shadow-[0_14px_45px_rgba(0,0,0,.28)] backdrop-blur-2xl"
            : "border-white/[0.045] bg-background/40 backdrop-blur-xl"
        )}
      >
        <motion.div
          style={{ scaleX: progress }}
          className="absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-accent via-cyan-200 to-accent shadow-[0_0_12px_rgba(86,255,120,.6)]"
        />

        <nav aria-label="Navegação principal" className="flex h-16 items-center justify-between px-4 sm:px-5">
          <a href="#top" className="group flex items-center gap-3" aria-label="Mansonware - início">
            <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-accent/20 bg-accent/[0.07] font-mono text-xs font-black text-accent shadow-[0_0_25px_rgba(86,255,120,.08)]">
              <span className="absolute inset-0 cyber-grid opacity-35" />
              <span className="relative">M</span>
            </span>
            <div>
              <div className="text-xs font-bold tracking-[0.08em] text-text">MANSONWARE</div>
              <div className="font-mono text-[7px] uppercase tracking-[0.23em] text-text-subtle">digital systems</div>
            </div>
          </a>

          <ul className="hidden items-center gap-1 rounded-full border border-border bg-surface/45 p-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-full px-4 py-2 text-[11px] font-medium text-text-muted transition-colors hover:bg-accent/[0.07] hover:text-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/40 text-text-subtle transition-colors hover:border-accent/25 hover:text-accent"
            >
              <Github size={15} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/40 text-text-subtle transition-colors hover:border-accent/25 hover:text-accent"
            >
              <Linkedin size={15} />
            </a>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-10 items-center gap-2 rounded-full bg-accent px-4 text-[11px] font-bold text-background shadow-[0_0_24px_rgba(86,255,120,.12)] transition-transform hover:scale-[1.025]"
            >
              <MessageCircle size={15} />
              Iniciar projeto
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/50 text-text md:hidden"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border bg-background/95 backdrop-blur-2xl md:hidden"
          >
            <div className="px-4 py-5">
              <ul className="grid gap-1">
                {NAV_LINKS.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-xl border border-transparent px-3 py-3 text-sm text-text-muted hover:border-border hover:bg-surface/40 hover:text-text"
                    >
                      {link.label}
                      <span className="font-mono text-[9px] text-text-subtle">0{index + 1}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-5 text-sm font-bold text-background"
              >
                <MessageCircle size={16} /> Iniciar projeto no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
