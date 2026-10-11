"use client";

import { SafeLink as Link } from "@/components/safe-link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

const nav = [{href:"/",label:"Home"},{href:"/about",label:"About"},{href:"/services",label:"Services"},{href:"/blog",label:"Blog"},{href:"/contact",label:"Contact"}];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" href="/" aria-label="Digital Sujata home"><span className="brand-mark" aria-hidden="true">DS</span><span><b>{siteConfig.displayBrandName}</b><small>{siteConfig.tagline}</small></span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">{nav.map(item=><Link key={item.href} className={pathname===item.href?"active":""} href={item.href}>{item.label}</Link>)}</nav>
        <Link className="button button-primary header-cta" href={siteConfig.consultationHref}>{siteConfig.primaryCta}</Link>
        <button className="menu-button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open?"Close navigation":"Open navigation"}>{open?<X />:<Menu />}</button>
      </div>
      {open && <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation">{nav.map(item=><Link key={item.href} href={item.href}>{item.label}</Link>)}<Link className="button button-primary" href={siteConfig.consultationHref}>{siteConfig.primaryCta}</Link></nav>}
    </header>
    <div id="main-content">{children}</div>
    <footer className="site-footer">
      <div className="container footer-grid">
        <div><Link className="brand footer-brand" href="/"><span className="brand-mark" aria-hidden="true">DS</span><span><b>{siteConfig.displayBrandName}</b><small>{siteConfig.tagline}</small></span></Link><p>Practical AI and digital marketing support for small businesses ready to grow with more clarity.</p></div>
        <div><h2>Explore</h2>{nav.slice(1).map(item=><Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
        <div><h2>Start a conversation</h2><p>Tell me what you want to improve, and we’ll identify a sensible next step.</p><Link className="footer-link" href={siteConfig.consultationHref}>Start a conversation</Link></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.displayBrandName}</span><Link href="/privacy">Privacy notice</Link><span>{siteConfig.location}</span></div>
    </footer>
  </>;
}
