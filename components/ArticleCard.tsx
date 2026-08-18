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
}: {
  article: Article;
  aspect?: keyof typeof aspectClass;
  headlineSize?: string;
  index?: number;
  showExcerpt?: boolean;
  sizes?: string;
}) {
  const category = getCategory(article.category);

  return (
    <Link href={`/stories/${article.slug}`} className="group block">
      <RevealImage
        src={article.heroImage}
        alt={article.title}
        className={`bg-paper-deep ${aspectClass[aspect]}`}
        sizes={sizes}
        interactive
      />
      <div className="mt-4">
        <EditorialMeta
          index={index}
          categoryEn={category?.nameEn ?? ""}
          location={article.location}
        />
        <h3
          className={`mt-2 font-serif leading-snug text-balance text-ink transition-opacity group-hover:opacity-60 ${headlineSize}`}
        >
          {article.title}
        </h3>
        {showExcerpt ? (
          <p className="mt-2 text-sm leading-relaxed text-ink/60 line-clamp-2">
            {article.excerpt}
          </p>
        ) : null}
      </div>
    </Link>
  );
}
