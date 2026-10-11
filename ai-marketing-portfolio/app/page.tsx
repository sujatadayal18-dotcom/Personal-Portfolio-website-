import { SafeLink as Link } from "@/components/safe-link";
import { Bot, Check, Compass, Lightbulb, PenTool, Sparkles, Target, TrendingUp } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services";
import { CtaSection } from "@/components/cta-section";

const helpAreas = [
  { icon:Compass, title:"Find the right direction", text:"Turn too many ideas and channels into a focused plan your business can actually follow." },
  { icon:Lightbulb, title:"Create with more purpose", text:"Build useful content around real customer questions, with AI helping where it genuinely saves time." },
  { icon:Target, title:"Attract better-fit leads", text:"Make your offer, message, and next step easier for the right people to understand." },
  { icon:Bot, title:"Simplify repeat work", text:"Use thoughtful automation to make follow-up and everyday marketing tasks more consistent." },
];

const differentiators = [
  ["Plain language", "Recommendations are explained clearly, without unnecessary jargon or trend-chasing."],
  ["Business before tools", "Technology is selected because it supports a goal—not simply because it is new."],
  ["Realistic scope", "The plan considers your time, budget, capacity, audience, and starting point."],
  ["Human judgment", "AI can assist the work, while customer understanding and quality review stay central."],
];

const serviceVisualMeta = [
  ["AI + HUMAN", "IDEA → CONTENT"],
  ["SOCIAL SIGNAL", "CONNECT + ENGAGE"],
  ["LEAD JOURNEY", "INTEREST → ACTION"],
  ["SMART FLOW", "TRIGGER → FOLLOW-UP"],
  ["WEB EXPERIENCE", "VISIT → CONVERT"],
  ["GROWTH MAP", "PLAN → PROGRESS"],
];

export default function HomePage() {
  return (
    <SiteShell>
      <main>
        <section className="ds-hero">
          <div className="container ds-hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><Sparkles size={15} aria-hidden="true" /> {siteConfig.tagline}</p>
              <h1>Turn smarter ideas into <span>digital growth.</span></h1>
              <p className="hero-lede">Practical AI and digital marketing strategies that help small businesses reach more people, attract better leads, and grow with confidence.</p>
              <div className="button-row">
                <Link className="button button-primary" href={siteConfig.consultationHref}>{siteConfig.primaryCta}</Link>
                <Link className="button button-secondary" href="/services">Explore Services</Link>
              </div>
              <div className="hero-proof" aria-label="Digital Sujata approach">
                <span><Check size={15} /> Clear priorities</span>
                <span><Check size={15} /> Practical systems</span>
                <span><Check size={15} /> Confident next steps</span>
              </div>
            </div>
            <div className="hero-visual-stack">
              <div className="hero-photo-card">
                <img src="/hero-sujata.png" alt="Sujata, the person behind Digital Sujata" width="1024" height="1535" fetchPriority="high" />
              </div>
              <div className="float-card float-card-growth"><TrendingUp/><div><span>GROWTH SIGNAL</span><strong>Ideas into action</strong></div><i/></div>
              <div className="float-card float-card-creative"><PenTool/><div><span>CREATIVE SYSTEM</span><strong>Human-led + AI-assisted</strong></div></div>
            </div>
          </div>
        </section>

        <section className="section ds-help"><div className="container">
          <div className="section-heading split"><div><p className="eyebrow">What Digital Sujata helps with</p><h2>Make your next marketing move easier to see.</h2></div><p>You do not need every tool or channel. You need a clear way to connect your business goal with the people you want to reach.</p></div>
          <div className="help-grid">{helpAreas.map(({icon:Icon,title,text},i)=><article key={title}><span>0{i+1}</span><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div></section>

        <section className="section section-navy practical-section"><div className="container practical-grid">
          <div><p className="eyebrow light">Why practical AI + digital marketing</p><h2>Smarter tools are useful when the strategy is clear.</h2></div>
          <div><p>AI can help organize ideas, speed up first drafts, and make repeat work more reliable. Digital marketing connects that support to a real audience, a useful message, and a measurable next step.</p><p>Digital Sujata brings the two together in a way that stays approachable, thoughtful, and grounded in how your business actually works.</p><Link className="text-link light-link" href="/about">See the approach</Link></div>
        </div></section>

        <section className="section"><div className="container">
          <div className="section-heading split"><div><p className="eyebrow">Services</p><h2>Focused support for clearer digital growth.</h2></div><p>Choose the area that is creating the most friction now. The scope can be shaped around the business rather than forced into a fixed package.</p></div>
          <div className="service-preview ds-services">{services.map(({icon:Icon,...service},i)=><article key={service.slug}><span>{String(i+1).padStart(2,"0")}</span><div className={`service-visual service-visual-${i+1}`} aria-hidden="true"><span className="service-visual-label">{serviceVisualMeta[i][0]}</span><div className="service-visual-scene"><i className="art-shape art-a"/><i className="art-shape art-b"/><i className="art-shape art-c"/><i className="art-shape art-d"/><Icon className="service-symbol"/></div><span className="service-visual-status"><b/>{serviceVisualMeta[i][1]}</span></div><h3>{service.title}</h3><p>{service.summary}</p><Link className="text-link" href={`/services#${service.slug}`}>Explore this service</Link></article>)}</div>
        </div></section>

        <section className="section section-tint"><div className="container">
          <div className="section-heading"><p className="eyebrow">A simple three-step process</p><h2>From unclear to ready to move.</h2></div>
          <div className="process-grid three-step">{[
            ["01","Clarify","Understand the business, audience, goal, and the real constraint behind the challenge."],
            ["02","Shape","Choose a focused strategy and the tools, content, or systems that support it."],
            ["03","Improve","Put the plan to work, learn from response, and refine the next move deliberately."],
          ].map(([num,title,text])=><article key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div></section>

        <section className="section"><div className="container difference-grid">
          <div><p className="eyebrow">What makes the approach different</p><h2>Support that feels clear, useful, and human.</h2><p>Good marketing should help you make better decisions—not leave you dependent on more complexity.</p></div>
          <div className="difference-list">{differentiators.map(([title,text])=><article key={title}><Check/><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </div></section>

        <section className="section value-section"><div className="container value-outcomes">
          <div className="value-kicker"><span>VALUE</span><strong>Not vanity metrics.</strong></div>
          <div><p className="eyebrow">Results without made-up promises</p><h2>The goal is better marketing capability.</h2><p>That can mean clearer priorities, a more consistent message, more relevant conversations, smoother follow-up, and a stronger understanding of what to improve next. Specific outcomes depend on the business, offer, audience, budget, and execution.</p></div>
        </div></section>

        <section className="section about-preview"><div className="container about-preview-grid">
          <div className="profile-frame profile-frame-photo"><img src="/about-sujata.png" alt="Sujata working at her desk" width="1128" height="1394" loading="lazy" /><div className="profile-frame-top"><span>MEET DIGITAL SUJATA</span><i/></div><div className="profile-frame-caption"><strong>Creative thinking.</strong><span>Practical action.</span></div></div>
          <div><p className="eyebrow">A personal approach</p><h2>Hello, I’m the person behind Digital Sujata.</h2><p>I created Digital Sujata to make AI and digital marketing feel more practical for small businesses. The work starts with listening, keeps the strategy grounded, and turns useful ideas into clear action.</p><p className="placeholder-copy"><strong>PLACEHOLDER:</strong> Add your verified personal story, background, and perspective before launch.</p><Link className="text-link" href="/about">More about Digital Sujata</Link></div>
        </div></section>

        <CtaSection />
      </main>
    </SiteShell>
  );
}
