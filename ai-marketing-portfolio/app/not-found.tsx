import { SafeLink as Link } from "@/components/safe-link";
import { SiteShell } from "@/components/site-shell";
export default function NotFound(){return <SiteShell><main className="not-found"><div><span>404</span><h1>That page isn’t here.</h1><p>The link may be outdated, or the page may have moved.</p><div className="button-row"><Link className="button button-primary" href="/">Go to homepage</Link><Link className="button button-secondary" href="/contact">Contact me</Link></div></div></main></SiteShell>}
