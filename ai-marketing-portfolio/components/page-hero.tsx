export function PageHero({ eyebrow, title, intro }: { eyebrow:string; title:string; intro:string }) {
  return <section className="page-hero"><div className="container page-hero-grid"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1></div><p>{intro}</p></div></section>;
}
