import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
const base=process.env.NEXT_PUBLIC_SITE_URL||"https://example.com";
export default function sitemap():MetadataRoute.Sitemap{return ["","/about","/services","/blog","/contact","/privacy"].map(path=>({url:`${base}${path}`,lastModified:new Date()})).concat(articles.filter(a=>a.status==="published").map(a=>({url:`${base}/blog/${a.slug}`,lastModified:new Date(a.date)})))}
