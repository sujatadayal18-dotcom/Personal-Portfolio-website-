import { SafeLink as Link } from "@/components/safe-link";
import { Clock } from "lucide-react";
import type { Article } from "@/content/articles";

export function ArticleCard({ article }: { article:Article }) {
  return <article className="article-card">
    <div className="article-card-top"><span className="category-tag">{article.category}</span>{article.status==="draft"&&<span className="draft-tag">Draft</span>}</div>
    <h3><Link href={`/blog/${article.slug}`}>{article.title}</Link></h3><p>{article.summary}</p>
    <div className="article-meta"><time dateTime={article.date}>{new Date(`${article.date}T00:00:00`).toLocaleDateString("en",{year:"numeric",month:"short",day:"numeric"})}</time><span><Clock size={14}/>{article.readingTime}</span></div>
    <Link className="text-link" href={`/blog/${article.slug}`}>Read article</Link>
  </article>;
}
