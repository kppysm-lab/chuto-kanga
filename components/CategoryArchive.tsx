import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ArticleCard from "@/components/ArticleCard";
import CategoryPill from "@/components/CategoryPill";
import { categories, categoryHref } from "@/lib/categories";
import { getArticlesByCategory } from "@/lib/articles";
import { Category } from "@/lib/types";

export default function CategoryArchive({ category }: { category: Category }) {
  const articles = getArticlesByCategory(category.slug);
  const otherCategories = categories.filter((c) => c.slug !== category.slug);

  return (
    <Container className="py-16 md:py-24">
      <SectionHeading
        as="h1"
        eyebrow={category.nameEn}
        title={category.nameJa}
        description={category.description}
      />

      {articles.length > 0 ? (
        <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-ink/50">このカテゴリーの記事は準備中です。</p>
      )}

      <div className="mt-20 border-t border-line pt-10">
        <p className="text-xs tracking-[0.2em] text-ink/40 uppercase">他のカテゴリー</p>
        <div className="mt-5 flex flex-wrap gap-3">
          {otherCategories.map((c) => (
            <CategoryPill key={c.slug} href={categoryHref(c.slug)} label={c.nameJa} />
          ))}
        </div>
      </div>
    </Container>
  );
}
