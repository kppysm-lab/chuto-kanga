import Link from "next/link";
import { Article } from "@/lib/types";
import { getCategory } from "@/lib/categories";
import RevealImage from "@/components/motion/RevealImage";
import EditorialMeta from "@/components/EditorialMeta";

const aspectClass = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[3/2]",
  wide: "aspect-[16/9]",
  square: "aspect-square",
};

export default function ArticleCard({
  article,
  aspect = "landscape",
  headlineSize = "text-xl",
  index,
  showExcerpt = true,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  lang = "ja",
}: {
  article: Article;
  aspect?: keyof typeof aspectClass;
  headlineSize?: string;
  index?: number;
  showExcerpt?: boolean;
  sizes?: string;
  lang?: "ja" | "en";
}) {
  const category = getCategory(article.category);
  const title = lang === "en" ? article.titleEn || article.title : article.title;
  const excerpt = lang === "en" ? article.excerptEn || article.excerpt : article.excerpt;
  const href = lang === "en" ? `/en/stories/${article.slug}` : `/stories/${article.slug}`;

  return (
    <Link href={href} className="group block">
      <RevealImage
        src={article.heroImage}
        alt={title}
        className={`bg-paper-deep ${aspectClass[aspect]}`}
        imgClassName={
          article.heroImagePosition === "top"
            ? "object-top"
            : article.heroImagePosition === "bottom"
              ? "object-bottom"
              : ""
        }
        sizes={sizes}
        interactive
      />
      <div className="mt-4">
        <EditorialMeta index={index} categoryEn={category?.nameEn ?? ""} date={article.date} />
        <h3
          className={`mt-2 font-serif leading-snug text-balance text-ink transition-opacity group-hover:opacity-60 ${headlineSize}`}
        >
          {title}
        </h3>
        {showExcerpt ? (
          <p className="mt-2 text-sm leading-relaxed text-ink/60 line-clamp-2">{excerpt}</p>
        ) : null}
      </div>
    </Link>
  );
}
