"use client";
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { ArticleCard } from "@/components/article-card";
import type { Article } from "@/content/articles";

export function BlogExplorer({ articles }: { articles:Article[] }) {
  const [query,setQuery]=useState(""); const [category,setCategory]=useState("All");
  const categories=["All",...Array.from(new Set(articles.map(a=>a.category)))];
  const filtered=useMemo(()=>articles.filter(a=>(category==="All"||a.category===category)&&(`${a.title} ${a.summary}`.toLowerCase().includes(query.toLowerCase()))),[articles,query,category]);
  return <div className="blog-explorer">
    <div className="blog-tools"><label className="search-box"><Search size={18}/><span className="sr-only">Search articles</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search practical guides" />{query&&<button onClick={()=>setQuery("")} aria-label="Clear search"><X size={17}/></button>}</label><div className="filter-row" aria-label="Filter articles by category">{categories.map(item=><button key={item} onClick={()=>setCategory(item)} className={category===item?"active":""}>{item}</button>)}</div></div>
    {filtered.length?<div className="article-grid">{filtered.map(article=><ArticleCard key={article.slug} article={article}/>)}</div>:<div className="empty-state"><Search size={30}/><h2>No articles match those filters</h2><p>Try a different search term or show all categories.</p><button className="button button-secondary" onClick={()=>{setQuery("");setCategory("All")}}>Clear filters</button></div>}
  </div>;
}
