import { SafeLink as Link } from "@/components/safe-link";
import { CalendarCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function CtaSection({ compact=false }: { compact?: boolean }) {
  return <section className={compact?"cta-section compact":"cta-section"}>
    <div className="container cta-panel">
      <div className="cta-icon"><CalendarCheck aria-hidden="true" /></div>
      <div><p className="eyebrow">A clear next step</p><h2>Let’s make your digital growth feel more manageable.</h2><p>Share the challenge you are working through. We can use the first conversation to clarify the goal, identify useful opportunities, and decide what makes sense next.</p></div>
      <Link className="button button-light" href={siteConfig.consultationHref}>{siteConfig.primaryCta}</Link>
    </div>
  </section>;
}
