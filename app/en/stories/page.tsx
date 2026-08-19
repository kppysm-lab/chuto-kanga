import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ArticleCard from "@/components/ArticleCard";
import { categories, getCategory } from "@/lib/categories";
import { getLatestArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "CHŪTŌ KANGA's stories on Middle Eastern hotels, dining, fashion, art, and architecture.",
  alternates: {
    canonical: "/en/stories",
  },
};

export default async function StoriesPageEn({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category: categorySlug } = await searchParams;
  const activeCategory = categorySlug ? getCategory(categorySlug) : undefined;

  const articles = getLatestArticles().filter((a) =>
    activeCategory ? a.category === activeCategory.slug : true
  );

  return (
    <Container className="py-16 md:py-24">
      <SectionHeading
        as="h1"
        eyebrow="Stories"
        title={activeCategory ? activeCategory.nameEn : "All Stories"}
        description={
          activeCategory
            ? undefined
            : "The Middle East's refinement, unpacked — every story from CHŪTŌ KANGA."
        }
      />

      <div className="mt-10 flex flex-wrap gap-3 border-b border-line pb-10">
        <Link
          href="/en/stories"
          className={`px-4 py-1.5 text-xs tracking-[0.1em] uppercase transition-colors ${
            !activeCategory
              ? "bg-ink text-paper"
              : "border border-line text-ink/70 hover:border-vermilion hover:text-vermilion"
          }`}
        >
          All
        </Link>
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/en/stories?category=${c.slug}`}
            className={`px-4 py-1.5 text-xs tracking-[0.1em] uppercase transition-colors ${
              activeCategory?.slug === c.slug
                ? "bg-ink text-paper"
                : "border border-line text-ink/70 hover:border-vermilion hover:text-vermilion"
            }`}
          >
            {c.nameEn}
          </Link>
        ))}
      </div>

      {articles.length > 0 ? (
        <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} lang="en" />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-ink/50">No stories in this category yet.</p>
      )}
    </Container>
  );
}
