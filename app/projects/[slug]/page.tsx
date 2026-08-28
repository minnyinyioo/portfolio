import { ArrowLeft, ArrowUpRight, Check, Globe2, WifiOff } from "lucide-react";
import Link from "next/link";

const caseStudies = {
  goldfinder: {
    name: "Goldfinder", type: "Product · Offline PWA", year: "2026", tone: "ochre", intro: "Field records that still work when the signal doesn’t.", description: "Goldfinder is an offline-first sample and field-report system for geologists. It turns observations made in difficult conditions into structured records that remain available before, during, and after a connection.", live: "https://goldfinder.vercel.app", repo: "https://github.com/minnyinyioo/goldfinder", role: "Product architecture · UI · implementation",
    challenge: "Field work is not a clean office workflow. Connectivity is intermittent, time is limited, and a form that feels slow or fragile quickly becomes a form people avoid. The product needed to respect the field instead of forcing the field to behave like a database.",
    architecture: [
      ["01", "Interface layer", "A compact, touch-friendly Next.js interface keeps capture close to the user’s immediate task: record a sample, add context, and move on."],
      ["02", "Local-first state", "Records are kept available on the device so the core workflow does not depend on a live request. The app can be used offline and synchronised when connectivity returns."],
      ["03", "Data model", "Sample identity, location, observations, notes, and report state are represented as structured fields rather than one large narrative input."],
      ["04", "Deployment", "The application is built as a web product and deployed on Vercel, with the PWA model keeping the experience close to a lightweight field tool."],
    ],
    stack: ["Next.js", "TypeScript", "PWA", "Offline-first UX", "Vercel"], icon: WifiOff,
  },
  shwezay: {
    name: "ShweZay", type: "Product · Market dashboard", year: "2026", tone: "sage", intro: "A calmer way to check the market.", description: "ShweZay is a real-time gold, silver, and currency reference dashboard for Thailand and Myanmar. It combines live market information with the practical conversions people actually need.", live: "https://shwezay.vercel.app", repo: "https://github.com/minnyinyioo/shwezay", role: "Product architecture · data UX · implementation",
    challenge: "Price dashboards often make a simple question feel like a trading terminal. ShweZay focuses on the daily use case: understand the current reference price, compare markets, convert weight, and do it in the language and theme that feels familiar.",
    architecture: [
      ["01", "Presentation layer", "A responsive HTML/CSS interface separates high-signal market values from supporting context, making the dashboard scannable on both phone and desktop."],
      ["02", "Market data flow", "Live gold, silver, Thailand gold, and USD/MMK reference values are normalised into display-ready values before reaching charts and summary cards."],
      ["03", "Interaction model", "Charts provide movement context while the weight converter translates between grams, ounces, and kyat — two different questions kept in one coherent flow."],
      ["04", "Internationalisation", "English and Burmese are treated as first-class content, alongside light and dark themes, so language and visual preference do not feel bolted on."],
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Charts", "EN / မြန်မာ", "Responsive UI"], icon: Globe2,
  },
};

type Slug = keyof typeof caseStudies;

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = caseStudies[params.slug as Slug] ?? caseStudies.goldfinder;
  const Icon = project.icon;
  return <main className={`case-page ${project.tone}`}><nav className="case-nav shell"><Link href="/#work" className="back-link"><ArrowLeft size={15} /> Back to work</Link><span>Case study / {project.name}</span><Link href={project.repo}>Source <ArrowUpRight size={14} /></Link></nav><header className="case-hero shell"><div><p className="case-kicker">{project.type} · {project.year}</p><h1>{project.intro}</h1><p className="case-description">{project.description}</p><div className="case-actions"><a href={project.live} className="case-button">Visit live project <ArrowUpRight size={16} /></a><a href={project.repo} className="case-text-link">View source <ArrowUpRight size={15} /></a></div></div><div className="case-symbol"><Icon size={52} strokeWidth={1.1} /><span>{project.name}</span></div></header><section className="case-summary shell"><div><span>My role</span><strong>{project.role}</strong></div><div><span>Focus</span><strong>Useful systems, clear interfaces</strong></div><div><span>Built for</span><strong>People working with real constraints</strong></div></section><section className="case-content shell"><div className="case-prose"><p className="case-label">01 — The problem</p><h2>Designing around<br /><i>the real conditions.</i></h2><p>{project.challenge}</p></div><div className="architecture"><p className="case-label">02 — Architecture</p>{project.architecture.map(([number, title, copy]) => <div className="architecture-row" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></section><section className="stack-section shell"><div><p className="case-label">03 — Technology</p><h2>The stack is a<br /><i>means, not the story.</i></h2></div><div className="stack-list">{project.stack.map((item) => <span key={item}><Check size={14} />{item}</span>)}</div></section><footer className="case-footer shell"><Link href="/#work"><ArrowLeft size={15} /> All projects</Link><span>Jonas Li / Independent builder</span><a href="mailto:jonas@jtalk.eu.cc">Start a conversation <ArrowUpRight size={14} /></a></footer></main>;
}
