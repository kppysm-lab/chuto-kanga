import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content", "articles");
const outFile = path.join(process.cwd(), "lib", "articles-data.json");

function toDateString(value) {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return value;
}

const files = readdirSync(contentDir).filter((f) => f.endsWith(".md"));

const articles = files.map((file) => {
  const raw = readFileSync(path.join(contentDir, file), "utf-8");
  const { data, content } = matter(raw);

  const body = content
    .trim()
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  const bodyEn = data.bodyEn
    ? data.bodyEn
        .trim()
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean)
    : undefined;

  return {
    slug: data.slug,
    title: data.title,
    titleEn: data.titleEn || undefined,
    dek: data.dek,
    dekEn: data.dekEn || undefined,
    excerpt: data.excerpt,
    excerptEn: data.excerptEn || undefined,
    category: data.category,
    location: data.location,
    date: toDateString(data.date),
    author: data.author,
    photographyCredit: data.photographyCredit || undefined,
    heroImage: data.heroImage,
    featured: data.featured || undefined,
    body,
    bodyEn,
  };
});

articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

writeFileSync(outFile, JSON.stringify(articles, null, 2) + "\n");
console.log(`Built ${articles.length} articles -> lib/articles-data.json`);
