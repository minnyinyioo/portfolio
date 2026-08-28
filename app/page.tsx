"use client";

import { useState } from "react";
import { ArrowUpRight, Check, ChevronDown, Github, Mail, Moon, Sun } from "lucide-react";

const projects = [
  { name: "Goldfinder", type: "Product · PWA", year: "2026", description: "An offline-first field report system for geologists. Built for unreliable connectivity, structured observations, and the practical pace of work in the field.", details: "The project focuses on making sample records useful before a connection is available. The interface is designed around quick capture, legible information, and a workflow that does not ask the user to think like a database.", tags: ["Next.js", "TypeScript", "PWA"], href: "https://goldfinder.vercel.app", detail: "/projects/goldfinder", repo: "https://github.com/minnyinyioo/goldfinder", featured: true, tone: "ochre" },
  { name: "ShweZay", type: "Product · Finance", year: "2026", description: "A real-time gold, silver, and USD/MMK reference dashboard for Thailand and Myanmar, with charts and weight conversion.", details: "Available in English and Burmese, with light and dark themes. The product turns a frequently checked market question into a calm, responsive daily utility.", tags: ["HTML", "Charts", "EN / မြန်မာ"], href: "https://shwezay.vercel.app", detail: "/projects/shwezay", repo: "https://github.com/minnyinyioo/shwezay", featured: true, tone: "sage" },
  { name: "Burmesebridge", type: "Community · Web", year: "2026", description: "A multilingual information bridge for Burmese communities in Europe, with a focus on clarity, trust, and useful local context.", details: "A content-led project that treats language as part of the product experience rather than a setting hidden in a menu.", tags: ["Next.js", "TypeScript", "Multilingual"], href: "https://burmesebridge.eu.cc", repo: "https://github.com/minnyinyioo/Burmesebridge", featured: true, tone: "rose" },
  { name: "DevCommander OS", type: "Tool · Workflow", year: "2026", description: "A personal command center for planning, building, and shipping software without losing the thread between idea and release.", details: "The project is an experiment in making a solo builder’s working context visible: decisions, tasks, prompts, and product momentum in one place.", tags: ["TypeScript", "Workflow", "Vercel"], href: "https://devcommander-os.vercel.app", repo: "https://github.com/minnyinyioo/devcommander-os", featured: false, tone: "slate" },
  { name: "OriginGuard", type: "Concept · Trust", year: "2026", description: "An AI-assisted copyright defense and blockchain certification concept for establishing the origin of digital work.", details: "A research-minded prototype exploring how creators might document authorship and build a stronger chain of trust around original work.", tags: ["Python", "AI", "Blockchain"], href: "https://github.com/minnyinyioo/originguard-app", repo: "https://github.com/minnyinyioo/originguard-app", featured: false, tone: "blue" },
  { name: "Jonas CV", type: "Identity · Web", year: "2026", description: "A multilingual CV experience for Chinese, English, and Burmese audiences, with theme switching and a deliberately direct tone.", details: "The CV is designed as a small product: readable on a phone, easy to scan, and clear about what kind of work is a good fit.", tags: ["HTML", "CSS", "Accessibility"], href: "https://lewcv.vercel.app", repo: "https://github.com/minnyinyioo/jonas-cv", featured: false, tone: "lilac" },
];

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [dark, setDark] = useState(false);
  const visibleProjects = filter === "All" ? projects : projects.filter((project) => project.featured);
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState("sending");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("https://formsubmit.co/ajax/jonas@jtalk.eu.cc", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...payload, _subject: `Portfolio message from ${payload.name}`, _captcha: "false" }),
      });
      if (!response.ok) throw new Error("Message could not be sent");
      form.reset();
      setFormState("sent");
    } catch {
      setFormState("error");
    }
  }

  return <main className={dark ? "dark-mode" : ""}>
    <nav className="topbar shell"><a href="#top" className="signature">Jonas Li<span> / </span>Builder</a><div className="topbar-actions"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a><button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle color theme">{dark ? <Sun size={16} /> : <Moon size={16} />}</button></div></nav>

    <section id="top" className="intro shell"><div className="intro-meta"><span>Independent builder</span><span>Based online · UTC+07</span></div><div className="intro-grid"><h1>I make small,<br /><i>useful things.</i></h1><div className="intro-side"><p>I&apos;m Jonas, a self-taught developer interested in the space between a real problem and a working product.</p><a className="underlined-link" href="#work">See selected work <ArrowUpRight size={15} /></a></div></div><div className="intro-rule"><span>Next availability</span><strong>Open to junior roles, freelance work, and good collaborations.</strong></div></section>

    <section id="work" className="work shell"><div className="section-bar"><div><span className="label">01 — Selected work</span><h2>Things I&apos;ve<br /><i>put into the world.</i></h2></div><p>A collection of live projects, useful experiments, and work in progress. Each one started with a question I wanted to answer by building.</p></div><div className="filters"><button className={filter === "All" ? "active" : ""} onClick={() => setFilter("All")}>All projects <span>06</span></button><button className={filter === "Featured" ? "active" : ""} onClick={() => setFilter("Featured")}>Featured <span>03</span></button></div><div className="project-list">{visibleProjects.map((project, index) => <article className={`project-row ${project.tone}`} key={project.name}><div className="project-index">0{index + 1}</div><div className="project-preview"><div className="preview-header"><span /><span /><span /></div><div className="preview-shape" /></div><div className="project-main"><div className="project-title-line"><div><p>{project.type}</p><h3>{project.name}</h3></div><span>{project.year}</span></div><p className="project-copy">{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-actions"><a href={project.href}>Visit project <ArrowUpRight size={15} /></a>{project.detail && <a href={project.detail}>Case study <ArrowUpRight size={15} /></a>}<button onClick={() => setExpanded(expanded === project.name ? null : project.name)}>{expanded === project.name ? "Close notes" : "Read notes"}<ChevronDown className={expanded === project.name ? "rotated" : ""} size={15} /></button></div>{expanded === project.name && <div className="project-details"><Check size={15} />{project.details}</div>}</div></article>)}</div></section>

    <section id="about" className="about shell"><div className="label">02 — A little context</div><div className="about-grid"><h2>Learning by<br /><i>making.</i></h2><div className="about-copy"><p className="lead">I&apos;m a self-taught builder who uses AI as my coding partner — not to replace learning, but to accelerate it.</p><p>Instead of spending months on boilerplate, I focus on system architecture, user experience, and shipping fast. I review, debug, and integrate every line of generated code to ensure quality and understanding.</p><p>In August 2026, I reached 185 commits across four live projects, including an offline PWA for geologists and a real-time gold / FX tracker, both supporting multiple languages.</p><div className="stack"><span>Current stack</span><strong>Next.js · TypeScript · Python · Tailwind CSS · Supabase · Vercel · Streamlit · PWA</strong></div></div></div></section>

    <section id="contact" className="contact shell"><div className="label">03 — Open to possibilities</div><div className="contact-grid"><div><h2>Let&apos;s make<br /><i>something useful.</i></h2><p className="contact-note">Open to junior developer roles, freelance gigs, and collaborating on interesting projects.</p></div><form className="contact-form" onSubmit={handleSubmit}><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" required type="email" placeholder="you@example.com" /></label><label>Message<textarea name="message" required rows={4} placeholder="Tell me a little about the problem..." /></label><button className="contact-submit" disabled={formState === "sending"}>{formState === "sending" ? "Sending..." : formState === "sent" ? "Message sent" : "Send message"} <ArrowUpRight size={17} /></button>{formState === "sent" && <p className="form-feedback success">Thanks — your message is on its way.</p>}{formState === "error" && <p className="form-feedback error">Something went wrong. Please email jonas@jtalk.eu.cc instead.</p>}</form></div></section>

    <footer className="footer shell"><span>© 2026 Jonas Li</span><div><a href="https://github.com/minnyinyioo"><Github size={15} /> GitHub</a><a href="mailto:jonas@jtalk.eu.cc"><Mail size={15} /> Email</a></div><span>Built carefully, shipped openly.</span></footer>
  </main>;
}
