import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { categories, categoryHref } from "@/lib/categories";
import { getArticlesByCategory } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Categories",
  description: "ホテル、ダイニング、ファッション&ビューティー、イベント、アート&カルチャー、建築&トラベル——中東閑雅の6つのカテゴリー。",
  alternates: {
    canonical: "/categories",
  },
};

export default function CategoriesPage() {
  return (
    <Container className="py-16 md:py-24">
      <SectionHeading
        as="h1"
        eyebrow="Categories"
        title="6つのカテゴリー"
        description="中東の洗練を、6つの視点から紐解きます。"
      />

      <div className="mt-14 grid grid-cols-1 divide-y divide-line border-t border-line md:grid-cols-2 md:divide-x md:divide-y-0">
        {categories.map((c) => {
          const count = getArticlesByCategory(c.slug).length;
          return (
            <Link
              key={c.slug}
              href={categoryHref(c.slug)}
              className="group flex flex-col justify-between gap-6 p-8 transition-colors hover:bg-paper-deep/50 md:p-12"
            >
              <div>
                <p className="text-xs tracking-[0.2em] text-vermilion uppercase">
                  {c.nameEn}
                </p>
                <h3 className="mt-3 font-serif text-2xl text-ink group-hover:text-vermilion md:text-3xl">
                  {c.nameJa}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/60">
                  {c.description}
                </p>
              </div>
              <p className="text-xs text-ink/40">{count} 記事</p>
            </Link>
          );
        })}
      </div>
    </Container>
  );
}
