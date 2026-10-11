import type { Metadata } from "next";
import { SafeLink as Link } from "@/components/safe-link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { CtaSection } from "@/components/cta-section";
import { ArticleCard } from "@/components/article-card";
import { getArticle, publishedArticles } from "@/content/articles";

export function generateStaticParams(){return publishedArticles.map(article=>({slug:article.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const article=getArticle(slug);return article?.status==="published"?{title:article.title,description:article.summary}:{title:"Article not found"}}
export default async function ArticlePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const article=getArticle(slug);if(!article||article.status!=="published")notFound();const related=publishedArticles.filter(item=>item.slug!==slug).slice(0,2);return <SiteShell><main><article className="article-page"><header className="article-header"><div className="article-narrow"><Link className="back-link" href="/blog"><ArrowLeft/>All guides</Link><div className="article-card-top"><span className="category-tag">{article.category}</span></div><h1>{article.title}</h1><p className="article-intro">{article.summary}</p><div className="article-meta"><time dateTime={article.date}>{new Date(`${article.date}T00:00:00`).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}</time><span><Clock size={15}/>{article.readingTime}</span></div></div></header><div className="article-narrow article-body"><p className="lead-paragraph">{article.intro}</p>{article.sections.map(section=><section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs?.map(p=><p key={p}>{p}</p>)}{section.bullets&&<ul>{section.bullets.map(item=><li key={item}>{item}</li>)}</ul>}</section>)}</div></article>{related.length>0&&<><CtaSection compact/><section className="section"><div className="container"><div className="section-heading"><p className="eyebrow">Continue reading</p><h2>Related practical guides</h2></div><div className="article-grid two">{related.map(item=><ArticleCard key={item.slug} article={item}/>)}</div></div></section></>}</main></SiteShell>}
