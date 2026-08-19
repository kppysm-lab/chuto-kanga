import { Article } from "./types";
import data from "./articles-data.json";

// Source of truth is content/articles/*.md (edited via /admin or by hand).
// `npm run build` / `npm run dev` regenerate this JSON from those files —
// see scripts/build-articles.mjs. Do not edit articles-data.json directly.
export const articles: Article[] = data as Article[];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(categorySlug: string) {
  return articles.filter((a) => a.category === categorySlug);
}

export function getFeaturedArticles() {
  return articles.filter((a) => a.featured);
}

export function getLatestArticles(count?: number) {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return count ? sorted.slice(0, count) : sorted;
}
