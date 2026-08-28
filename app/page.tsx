import {
  ArrowUpRight,
  CircleDot,
  Github,
  Mail,
  Sparkles,
} from "lucide-react";

const projects = [
  { number: "01", name: "Burmesebridge", eyebrow: "Language & community", description: "A multilingual bridge for Burmese communities in Europe, designed to make useful information feel clear, local, and human.", tags: ["Next.js", "TypeScript", "Multilingual"], href: "https://burmesebridge.eu.cc", repo: "https://github.com/minnyinyioo/Burmesebridge", accent: "coral" },
  { number: "02", name: "GoldFinder", eyebrow: "Field intelligence", description: "A practical field-report system for gold prospecting samples, turning scattered observations into structured, searchable records.", tags: ["TypeScript", "Data systems", "Vercel"], href: "https://goldfinder.vercel.app", repo: "https://github.com/minnyinyioo/goldfinder", accent: "gold" },
  { number: "03", name: "ShweZay", eyebrow: "Market utility", description: "A real-time gold and silver dashboard for Thailand and Myanmar, with charts, weight conversion, themes, and English/Burmese support.", tags: ["HTML", "Charts", "EN / မြန်မာ"], href: "https://shwezay.vercel.app", repo: "https://github.com/minnyinyioo/shwezay", accent: "mint" },
  { number: "04", name: "DevCommander OS", eyebrow: "Builder tooling", description: "A focused command center for shipping software with AI: part operating system, part launchpad for a fast-moving solo builder.", tags: ["TypeScript", "AI-native", "Productivity"], href: "https://devcommander-os.vercel.app", repo: "https://github.com/minnyinyioo/devcommander-os", accent: "violet" },
  { number: "05", name: "OriginGuard", eyebrow: "Trust infrastructure", description: "An AI-powered copyright defense and blockchain certification concept for helping creators establish the origin of their digital work.", tags: ["Python", "AI", "Blockchain"], href: "https://github.com/minnyinyioo/originguard-app", repo: "https://github.com/minnyinyioo/originguard-app", accent: "blue" },
  { number: "06", name: "Jonas CV", eyebrow: "Personal identity", description: "A multilingual, theme-aware CV experience built for clarity across Chinese, English, and Burmese audiences.", tags: ["HTML", "CSS", "Accessibility"], href: "https://lewcv.vercel.app", repo: "https://github.com/minnyinyioo/jonas-cv", accent: "pink" },
];

const principles = [
  ["01", "Start with the signal", "Every screen begins with the user’s real question, not a feature checklist."],
  ["02", "Ship the useful version", "Small, coherent tools compound faster than half-finished platforms."],
  ["03", "Make complexity legible", "Good interfaces turn technical depth into confident next steps."],
];

export default function Home() {
  return (
    <main>
      <nav className="site-nav shell"><a className="wordmark" href="#top"><span className="wordmark-mark">J</span><span>Jonas Li<span className="wordmark-dot">.</span></span></a><div className="nav-links"><a href="#work">Selected work</a><a href="#approach">Approach</a><a className="nav-cta" href="mailto:jonas@jtalk.eu.cc">Let&apos;s talk <ArrowUpRight size={15} /></a></div></nav>

      <section id="top" className="hero shell"><div className="hero-copy"><p className="kicker"><CircleDot size={13} /> Independent product builder · 2026</p><h1>Useful software<br /><em>for real life.</em></h1><p className="hero-lede">I&apos;m Jonas — a self-taught builder turning messy, meaningful problems into focused digital products with AI, code, and a bias toward shipping.</p><div className="hero-actions"><a className="button button-dark" href="#work">Explore the work <ArrowUpRight size={17} /></a><a className="text-link" href="https://github.com/minnyinyioo">GitHub profile <Github size={16} /></a></div></div><div className="hero-art" aria-label="Abstract system diagram" role="img"><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-core"><Sparkles size={29} /><span>BUILD<br />WITH<br />INTENT</span></div><span className="art-label label-one">AI / 01</span><span className="art-label label-two">SHIP / 02</span><span className="art-label label-three">LEARN / 03</span><div className="art-line line-one" /><div className="art-line line-two" /></div></section>

      <section className="signal-strip"><div className="shell signal-grid"><div><strong>09</strong><span>public repositories</span></div><div><strong>03</strong><span>languages in the work</span></div><div><strong>∞</strong><span>curiosity in progress</span></div><p>Designing systems, prompting AI,<br />and learning in public.</p></div></section>

      <section id="work" className="work-section shell"><div className="section-heading"><div><p className="section-index">01 / SELECTED WORK</p><h2>Small tools.<br /><span>Clear outcomes.</span></h2></div><p className="section-intro">A selection of products and experiments across fintech, geoscience, community, and the creator economy.</p></div><div className="project-grid">{projects.map((project) => <article className={`project-card ${project.accent}`} key={project.name}><div className="card-top"><span>{project.number}</span><a href={project.repo} aria-label={`${project.name} source code`}><Github size={17} /></a></div><div className="project-visual"><div className="visual-window"><span /><span /><span /></div><div className="visual-mark">{project.name.slice(0, 1)}</div><div className="visual-grid" /></div><p className="project-eyebrow">{project.eyebrow}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="card-link" href={project.href}>View project <ArrowUpRight size={16} /></a></article>)}</div></section>

      <section id="approach" className="approach-section"><div className="shell approach-layout"><div><p className="section-index">02 / HOW I WORK</p><h2>Less noise.<br /><span>More signal.</span></h2></div><div className="principles">{principles.map(([number, title, copy]) => <div className="principle" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></div></section>

      <section className="contact-section shell"><div className="contact-card"><div><p className="section-index">03 / OPEN CHANNEL</p><h2>Have a problem<br /><em>worth building?</em></h2></div><div className="contact-side"><p>I&apos;m always interested in useful ideas, thoughtful collaborators, and the next hard problem hiding in plain sight.</p><a className="button button-light" href="mailto:jonas@jtalk.eu.cc">Start a conversation <Mail size={16} /></a></div></div></section>

      <footer className="site-footer shell"><span>© 2026 Jonas Li</span><span className="footer-status"><i /> Available for thoughtful work</span><div><a href="https://github.com/minnyinyioo">GitHub</a><a href="https://burmesebridge.com">Burmesebridge</a></div></footer>
    </main>
  );
}
