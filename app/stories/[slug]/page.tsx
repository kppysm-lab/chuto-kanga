import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import ArticleCard from "@/components/ArticleCard";
import RevealImage from "@/components/motion/RevealImage";
import Reveal from "@/components/motion/Reveal";
import { articles, getArticle, getArticlesByCategory } from "@/lib/articles";
import { categoryHref, getCategory } from "@/lib/categories";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.heroImage],
      type: "article",
    },
  };
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const category = getCategory(article.category);
  const related = getArticlesByCategory(article.category)
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <article>
      <RevealImage
        src={article.heroImage}
        alt={article.title}
        className="h-[60vh] min-h-[420px] w-full bg-ink"
        imgClassName="opacity-90"
        priority
      />

      <Container className="max-w-3xl py-14 md:py-20">
        {category ? (
          <Link
            href={categoryHref(category.slug)}
            className="text-xs tracking-[0.25em] text-vermilion uppercase"
          >
            {category.nameEn}
          </Link>
        ) : null}

        <h1 className="mt-4 font-serif text-3xl leading-snug text-balance md:text-5xl">
          {article.title}
        </h1>
        {article.titleEn ? (
          <p className="mt-2 font-serif-en text-lg italic text-ink/50">{article.titleEn}</p>
        ) : null}
        <p className="mt-4 text-lg leading-relaxed text-ink/60">{article.dek}</p>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 border-b border-line pb-8 text-xs tracking-wide text-ink/40">
          <span>{article.location}</span>
          <span>
            {new Date(article.date).toLocaleDateString("ja-JP", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span>読了目安 {article.readingTime}</span>
          <span>文 — {article.author}</span>
          {article.photographyCredit ? <span>{article.photographyCredit}</span> : null}
        </div>

        <div className="prose-editorial mt-10 space-y-6">
          {article.body.map((paragraph, i) => (
            <p key={i} className="text-[17px] leading-[1.9] text-ink/85">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>

      {related.length > 0 ? (
        <section className="border-t border-line bg-paper-deep/40 py-16 md:py-20">
          <Container>
            <Reveal>
              <h2 className="font-serif text-2xl">関連するストーリー</h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((a, i) => (
                <Reveal key={a.slug} delay={i * 80}>
                  <ArticleCard article={a} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </article>
  );
}
