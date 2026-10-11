import type { Metadata } from "next";
import { SafeLink as Link } from "@/components/safe-link";
import { Check, CircleAlert } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

export const metadata:Metadata={title:"Services",description:"Practical AI-assisted content, social strategy, lead generation, automation, website support, and digital planning from Digital Sujata."};
export default function ServicesPage(){return <SiteShell><main><PageHero eyebrow="Digital Sujata services" title="Practical support for your next stage of growth." intro="Start with the challenge creating the most friction. The work is shaped around your goals, audience, time, budget, and current marketing—not a one-size-fits-all package."/>
  <section className="section service-directory"><div className="container service-list">{services.map(({icon:Icon,...service},i)=><article id={service.slug} key={service.slug} className="service-row"><div className="service-number">{String(i+1).padStart(2,"0")}</div><div className="service-title"><Icon/><h2>{service.title}</h2><p>{service.summary}</p></div><div className="service-detail"><h3>The business problem</h3><p>{service.problem}</p><h3>Typical deliverables</h3><ul>{service.deliverables.map(item=><li key={item}><Check/>{item}</li>)}</ul></div><div className="service-detail"><h3>Intended benefits</h3><ul>{service.benefits.map(item=><li key={item}><Check/>{item}</li>)}</ul><Link className="text-link" href={siteConfig.consultationHref}>Discuss this service</Link></div></article>)}</div></section>
  <section className="section"><div className="container note-panel"><CircleAlert/><div><h2>Recommendations are shaped around the business.</h2><p>The right scope depends on your goals, audience, budget, capacity, and current activity. No unsupported result, price, or timeline is promised before those factors are understood.</p></div></div></section><CtaSection/></main></SiteShell>}
