"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Menu, MessageCircle, X } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/data";

export function PortfolioHeader() {
  const [open, setOpen] = useState(false);
  return <header className="mw-header" onKeyDown={event => { if (event.key === "Escape") setOpen(false); }}>
    <div className="mw-wrap mw-nav">
      <a className="mw-brand" href="#top" onClick={() => setOpen(false)} aria-label="Mansonware — início"><span className="mw-mark" aria-hidden="true"><svg width="25" height="25" viewBox="0 0 32 32" fill="none"><path d="M4 25V7L16 19 28 7v18" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>manson<span className="mw-brand-accent">ware</span><small>digital studio</small></span></a>
      <nav aria-label="Navegação principal" id="mw-navigation" className={open ? "mw-nav-links is-open" : "mw-nav-links"}>
        {NAV_LINKS.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
      </nav>
      <div className="mw-nav-actions"><a className="mw-nav-cta" href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer">Vamos conversar <ArrowUpRight size={16}/></a><button type="button" className="mw-menu" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="mw-navigation" onClick={() => setOpen(value => !value)}>{open ? <X size={22}/> : <Menu size={22}/>}</button></div>
    </div>
  </header>;
}

export function LeadForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const service = String(form.get("service") || "").trim();
    const detail = String(form.get("detail") || "").trim();
    const message = ["Olá! Vim pelo site da Mansonware e gostaria de conversar sobre um projeto.", name ? "Nome: " + name : "", "Interesse: " + service, detail ? "Descrição: " + detail : ""].filter(Boolean).join("\n\n");
    try {
      const url = new URL(SOCIAL_LINKS.whatsapp);
      if (url.protocol === "https:" && (url.hostname === "wa.me" || url.hostname === "api.whatsapp.com")) {
        url.searchParams.set("text", message);
        window.location.assign(url.toString());
        return;
      }
    } catch {
      // Preserve the configured contact link when it cannot accept prefilled text.
    }
    window.location.assign(SOCIAL_LINKS.whatsapp);
  }
  return <form className="mw-form" onSubmit={submit}>
    <div><p className="mw-kicker">BRIEFING RÁPIDO</p><h3>Vamos conversar.</h3><p>Preencha e continue no WhatsApp.</p></div>
    <label htmlFor="mw-name">Seu nome ou empresa <span>(opcional)</span></label><input id="mw-name" name="name" autoComplete="name" maxLength={100} placeholder="Ex.: Minha empresa"/>
    <label htmlFor="mw-service">O que você precisa?</label><select id="mw-service" name="service" defaultValue="" required><option value="" disabled>Selecione uma solução</option><option>Site ou e-commerce</option><option>Automação ou IA</option><option>Sistema sob medida ou SaaS</option><option>Outro projeto</option></select>
    <label htmlFor="mw-detail">Conte um pouco sobre o projeto <span>(opcional)</span></label><textarea id="mw-detail" name="detail" maxLength={1200} rows={4} placeholder="Qual problema você gostaria de resolver?"/>
    <button type="submit" className="mw-button mw-primary"><MessageCircle size={19}/> Continuar no WhatsApp <ArrowUpRight size={18}/></button>
    <small>As informações não são armazenadas neste site. Você revisa e envia a mensagem no WhatsApp.</small>
  </form>;
}
