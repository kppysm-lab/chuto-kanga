import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import ArticleCard from "@/components/ArticleCard";
import ArticleBody from "@/components/ArticleBody";
import RevealImage from "@/components/motion/RevealImage";
import Reveal from "@/components/motion/Reveal";
import { articles, getArticle, getArticlesByCategory } from "@/lib/articles";
import { getCategory } from "@/lib/categories";
import { SITE_URL } from "@/lib/site";
import { formatDate } from "@/lib/format";

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

  const title = article.titleEn || article.title;
  const description = article.excerptEn || article.excerpt;

  return {
    title,
    description,
    alternates: {
      canonical: `/en/stories/${article.slug}`,
    },
    openGraph: {
      title,
      description,
      images: [article.heroImage],
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function StoryPageEn({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const title = article.titleEn || article.title;
  const dek = article.dekEn || article.dek;
  const body = article.bodyEn || article.body;

  const category = getCategory(article.category);
  const related = getArticlesByCategory(article.category)
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: article.excerptEn || article.excerpt,
    image: [`${SITE_URL}${article.heroImage}`],
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "CHŪTŌ KANGA",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/en/stories/${article.slug}`,
    },
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <RevealImage
        src={article.heroImage}
        alt={title}
        className="h-[60vh] min-h-[420px] w-full bg-ink"
        imgClassName="opacity-90"
        priority
      />

      <Container className="max-w-3xl py-14 md:py-20">
        <p className="text-xs tracking-[0.25em] uppercase">
          {category ? (
            <Link href={`/en/stories?category=${category.slug}`} className="text-vermilion">
              {category.nameEn}
            </Link>
          ) : null}
          <span className="text-ink/40">　・　{formatDate(article.date)}</span>
        </p>

        <h1 className="mt-4 font-serif-en text-3xl leading-snug text-balance md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 border-b border-line pb-8 text-lg leading-relaxed text-ink/60">
          {dek}
        </p>

        <ArticleBody body={body} />
      </Container>

      {related.length > 0 ? (
        <section className="border-t border-line bg-paper-deep/40 py-16 md:py-20">
          <Container>
            <Reveal>
              <h2 className="font-serif-en text-2xl">Related Stories</h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((a, i) => (
                <Reveal key={a.slug} delay={i * 80}>
                  <ArticleCard article={a} lang="en" />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </article>
  );
}
