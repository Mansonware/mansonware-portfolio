import {
  ArrowDown, ArrowRight, ArrowUpRight, Bot, Braces, Check, Code2,
  Database, Github, Globe2, Layers3, Linkedin, MessageCircle, Monitor,
  ShieldCheck, ShoppingBag, Smartphone, Sparkles, Workflow,
} from "lucide-react";
import { LeadForm, PortfolioHeader } from "@/components/PortfolioInteractive";
import { PROJECTS, SOCIAL_LINKS } from "@/lib/data";
import "./portfolio.css";

const services = [
  { icon: Globe2, title: "Sites & e-commerce", detail: "Transforme visitas em oportunidades com sites rápidos, catálogos e experiências de compra pensadas para o celular.", items: ["Landing pages e sites institucionais", "Vitrines digitais e lojas", "SEO técnico e conversão"] },
  { icon: Bot, title: "IA & automação", detail: "Reduza tarefas repetitivas e conecte o atendimento à sua operação, com inteligência artificial onde ela realmente ajuda.", items: ["Atendimento pelo WhatsApp", "Assistentes com IA", "Integrações e fluxos de trabalho"] },
  { icon: Layers3, title: "Sistemas & SaaS", detail: "Tire uma ideia do papel ou substitua planilhas e processos improvisados por uma ferramenta feita para seu negócio.", items: ["MVPs e produtos digitais", "Dashboards e sistemas internos", "APIs e integrações"] },
];

const products = [
  { name: "Manson Cyber Lab", category: "Educação / Cibersegurança", description: "Plataforma de aprendizado prático em segurança digital, com desafios e laboratórios educacionais.", url: "https://manson-cyber-lab.vercel.app/", icon: ShieldCheck },
  { name: "Dev no Bolso", category: "EdTech / Programação", description: "Projeto para aprender programação, criar aplicações e publicar o primeiro projeto usando o celular e IA.", url: "https://dev-no-bolso.vercel.app", icon: Smartphone },
];

const process = [
  { title: "Diagnóstico", detail: "Entendemos a sua operação, o público e o resultado que você precisa alcançar." },
  { title: "Proposta", detail: "Definimos o escopo, as prioridades, o investimento e as etapas antes de começar." },
  { title: "Construção", detail: "Desenvolvemos a solução em etapas, com validação e testes em dispositivos reais." },
  { title: "Lançamento", detail: "Colocamos a solução no ar e alinhamos os próximos passos de evolução." },
];

const faqs = [
  { q: "Quanto custa um projeto?", a: "O investimento depende do escopo e das integrações necessárias. Após entender sua necessidade, apresento uma proposta com entregas e valores definidos. Podemos começar com uma versão enxuta." },
  { q: "Vocês atendem pequenos negócios?", a: "Sim. Sites, catálogos, atendimento e automações podem ser planejados para pequenas operações, com foco nas necessidades mais importantes primeiro." },
  { q: "É possível integrar com ferramentas que já uso?", a: "Sempre que houver uma API ou integração compatível, avaliamos como aproveitar suas ferramentas atuais. Não é necessário trocar tudo para melhorar um processo." },
  { q: "Como funcionam prazo e manutenção?", a: "O prazo é combinado de acordo com o escopo. Publicação, treinamento e manutenção são definidos na proposta, incluindo eventuais custos de serviços externos." },
];

function ExternalLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;
}

function Brand() {
  return <a className="mw-brand" href="#top" aria-label="Mansonware — início"><span className="mw-mark" aria-hidden="true"><svg width="25" height="25" viewBox="0 0 32 32" fill="none"><path d="M4 25V7L16 19 28 7v18" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>manson<span className="mw-brand-accent">ware</span><small>digital studio</small></span></a>;
}

function SectionTitle({ number, label, title, description }: { number: string; label: string; title: string; description: string }) {
  return <div className="mw-section-head"><div><p className="mw-eyebrow"><span>{number}</span> / {label}</p><h2>{title}</h2></div><p className="mw-section-desc">{description}</p></div>;
}

function HeroVisual() {
  return <div className="mw-hero-art" aria-hidden="true">
    <div className="mw-art-top"><span><i /> MANSONWARE / SYSTEMS</span><span>01 — 03</span></div>
    <div className="mw-art-content">
      <div className="mw-orbit mw-orbit-one"/><div className="mw-orbit mw-orbit-two"/>
      <div className="mw-flow-card mw-flow-input"><div className="mw-flow-icon"><MessageCircle size={19}/></div><div><small>01 / ENTRADA</small><strong>Atendimento</strong><span>Site · WhatsApp</span></div></div>
      <div className="mw-flow-line mw-line-one"/>
      <div className="mw-core"><div className="mw-core-inner"><Workflow size={33} strokeWidth={1.5}/></div><span>CORE / MW</span></div>
      <div className="mw-flow-line mw-line-two"/>
      <div className="mw-flow-card mw-flow-output"><div className="mw-flow-icon"><Database size={19}/></div><div><small>03 / SAÍDA</small><strong>Operação</strong><span>Dados · Sistemas</span></div></div>
      <div className="mw-flow-ai"><Sparkles size={15}/> <span>02 / IA + AUTOMAÇÃO</span></div>
    </div>
    <div className="mw-art-bottom"><span>EXEMPLO ILUSTRATIVO DE FLUXO</span><span><i/> CONECTADO</span></div>
  </div>;
}

function CaseVisual({ slug }: { slug: string }) {
  const isStore = slug === "local-store-saas";
  const isAtelier = slug === "capivari-atelier";
  return <div className={"mw-case-visual " + (isStore ? "mw-case-store" : isAtelier ? "mw-case-atelier" : "mw-case-bot")} aria-hidden="true">
    <div className="mw-mock-window">
      <div className="mw-mock-bar"><span/><span/><span/><small>{isStore ? "LOCAL STORE" : isAtelier ? "CAPIVARI ATELIER" : "OFFERBOT"}</small></div>
      {isStore ? <div className="mw-mock-shop"><div className="mw-mock-shop-head"><ShoppingBag size={19}/><strong>Catálogo digital</strong><span>Ofertas</span></div><div className="mw-mock-products">{[1,2,3].map(n => <div key={n}><div className="mw-mock-image"><ShoppingBag size={24}/></div><b/><b/><i/></div>)}</div></div>
      : isAtelier ? <div className="mw-mock-atelier"><div><small>COLEÇÃO</small><strong>Design &amp;<br/>detalhes.</strong><span>Explorar coleção <ArrowRight size={10}/></span></div><div className="mw-atelier-art"><span/><span/><span/></div></div>
      : <div className="mw-mock-bot"><div><MessageCircle size={15}/><span>Canal de ofertas</span><small>SIMULAÇÃO</small></div><div className="mw-message">Nova oferta preparada</div><div className="mw-message right">Fluxo validado <Check size={12}/></div><div className="mw-mock-queue"><span/><span/><span/><small>Fila de processamento</small></div></div>}
    </div>
    <span className="mw-visual-caption">REPRESENTAÇÃO ILUSTRATIVA</span>
  </div>;
}

export default function Home() {
  return (
    <div className="mw-site" id="top">
      <a className="mw-skip" href="#conteudo">Pular para o conteúdo</a>
      <PortfolioHeader />
      <main id="conteudo">
        <section className="mw-hero mw-wrap">
          <div className="mw-hero-copy">
            <p className="mw-status"><span/> Estúdio digital independente · Brasil</p>
            <h1>Seu negócio.<br/>Mais <em>inteligente.</em></h1>
            <p className="mw-hero-description">Sites que vendem, automações que economizam tempo e sistemas que conectam tudo. Engenharia de software com foco em resultados reais.</p>
            <div className="mw-actions"><ExternalLink href={SOCIAL_LINKS.whatsapp} className="mw-button mw-primary"><MessageCircle size={19}/> Solicitar orçamento <ArrowUpRight size={18}/></ExternalLink><a href="#projetos" className="mw-button mw-secondary">Explorar projetos <ArrowDown size={18}/></a></div>
            <div className="mw-hero-note"><ShieldCheck size={16}/> Escopo claro · Desenvolvimento sob medida · Contato direto</div>
          </div>
          <HeroVisual />
        </section>
        <div className="mw-strip"><div className="mw-wrap mw-strip-inner"><span><Code2 size={18}/> Desenvolvimento Full Stack</span><span><Bot size={18}/> Inteligência artificial</span><span><Workflow size={18}/> Automação &amp; APIs</span><span><Monitor size={18}/> Experiência mobile</span></div></div>

        <section className="mw-section mw-wrap" id="sobre">
          <SectionTitle number="01" label="Serviços" title="Tecnologia que resolve." description="Da presença digital à operação automatizada. Escolha o que seu negócio precisa e começamos pelo que gera mais valor."/>
          <div className="mw-services">
            {services.map(({icon: Icon, title, detail, items}, index) => <article className="mw-service" key={title}><div className="mw-service-top"><span className="mw-icon"><Icon size={25} strokeWidth={1.7}/></span><span>0{index+1}</span></div><h3>{title}</h3><p>{detail}</p><ul>{items.map(item => <li key={item}><Check size={15}/>{item}</li>)}</ul><a href="#contato" className="mw-text-link">Conversar sobre o projeto <ArrowUpRight size={17}/></a></article>)}
          </div>
        </section>

        <section className="mw-section mw-work" id="projetos"><div className="mw-wrap">
          <SectionTitle number="02" label="Portfólio" title="Projetos que saíram do papel." description="Conheça soluções desenvolvidas para necessidades diferentes — de comércio digital a automação e produtos próprios."/>
          <div className="mw-cases">
            {PROJECTS.map(project => <article className="mw-case" key={project.slug}><CaseVisual slug={project.slug}/><div className="mw-case-body"><p className="mw-kicker">{project.category}</p><h3>{project.name}</h3><p>{project.description}</p><div className="mw-case-result"><strong>{project.slug === "whatsapp-offer-bot" ? "Prova de conceito" : "Entrega"}</strong><span>{project.result}</span></div><div className="mw-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>{project.demo ? <ExternalLink href={project.demo} className="mw-text-link">Visitar projeto <ArrowUpRight size={17}/></ExternalLink> : <a href="#contato" className="mw-text-link">Conhecer solução <ArrowUpRight size={17}/></a>}</div></article>)}
          </div>
          <div className="mw-product-header"><div><p className="mw-kicker">MANSONWARE / PRODUTOS</p><h3>Construindo o próximo.</h3></div><ExternalLink href={SOCIAL_LINKS.github} className="mw-text-link"><Github size={18}/> Mais projetos no GitHub <ArrowUpRight size={16}/></ExternalLink></div>
          <div className="mw-products">{products.map(({name, category, description, url, icon: Icon}) => <ExternalLink href={url} className="mw-product" key={name}><span className="mw-icon"><Icon size={24}/></span><div><p className="mw-kicker">{category}</p><h3>{name}</h3><p>{description}</p></div><ArrowUpRight className="mw-product-arrow" size={19}/></ExternalLink>)}</div>
        </div></section>

        <section className="mw-section mw-wrap" id="diferenciais">
          <SectionTitle number="03" label="Como funciona" title="Da ideia ao lançamento." description="Um processo objetivo, sem complexidade desnecessária. Você sabe o que está sendo construído e por quê."/>
          <div className="mw-process">{process.map((step, index) => <article key={step.title}><span className="mw-step">0{index+1}</span><h3>{step.title}</h3><p>{step.detail}</p></article>)}</div>
          <div className="mw-principles"><div><p className="mw-kicker">ENGENHARIA COM PROPÓSITO</p><h3>Bonito por fora.<br/>Sólido por dentro.</h3><p>Design, código e segurança pensados juntos, com custos proporcionais ao estágio do projeto.</p></div><div className="mw-principle-items"><span><Smartphone size={20}/> <strong>Mobile-first</strong> Interfaces pensadas para todos os dispositivos.</span><span><ShieldCheck size={20}/> <strong>Segurança</strong> Boas práticas desde a primeira versão.</span><span><Braces size={20}/> <strong>Base evolutiva</strong> Software preparado para crescer com a demanda.</span></div></div>
        </section>

        <section className="mw-section mw-faq-section"><div className="mw-wrap mw-faq-grid"><div><p className="mw-eyebrow"><span>04</span> / Dúvidas</p><h2>Antes de começar.</h2><p>Tem outra pergunta? Vamos conversar diretamente.</p><ExternalLink href={SOCIAL_LINKS.whatsapp} className="mw-text-link">Falar no WhatsApp <ArrowUpRight size={16}/></ExternalLink></div><div className="mw-faq">{faqs.map(faq => <details key={faq.q}><summary>{faq.q}<span aria-hidden="true">+</span></summary><p>{faq.a}</p></details>)}</div></div></section>

        <section id="contato" className="mw-section mw-wrap"><div className="mw-contact"><div><p className="mw-eyebrow"><span>05</span> / Vamos construir</p><h2>O próximo projeto<br/>pode ser o <em>seu.</em></h2><p>Conte o que você precisa. Vamos identificar a solução mais adequada e definir um próximo passo sem complicação.</p><ExternalLink href={SOCIAL_LINKS.whatsapp} className="mw-text-link"><MessageCircle size={18}/> Prefiro conversar diretamente <ArrowUpRight size={16}/></ExternalLink><div className="mw-contact-social"><ExternalLink href={SOCIAL_LINKS.github}><Github size={18}/> GitHub</ExternalLink><ExternalLink href={SOCIAL_LINKS.linkedin}><Linkedin size={18}/> LinkedIn</ExternalLink></div></div><LeadForm/></div></section>
      </main>
      <footer className="mw-footer"><div className="mw-wrap"><Brand/><p>© {new Date().getFullYear()} Mansonware. Design, software &amp; automação.</p><a href="#top" className="mw-text-link">Voltar ao topo <ArrowUpRight size={15}/></a></div></footer>
    </div>
  );
}
