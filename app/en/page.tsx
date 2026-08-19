import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import ArticleCard from "@/components/ArticleCard";
import EditorialLink from "@/components/EditorialLink";
import EditorialMeta from "@/components/EditorialMeta";
import Reveal from "@/components/motion/Reveal";
import RevealImage from "@/components/motion/RevealImage";
import { getCategory } from "@/lib/categories";
import { getLatestArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "CHŪTŌ KANGA | Exploring the Middle East through a Japanese lens",
  description:
    "CHŪTŌ KANGA is an independent editorial platform exploring Middle Eastern hotels, dining, fashion, art, and architecture through a Japanese lens.",
  alternates: {
    canonical: "/en",
  },
};

export default function HomeEn() {
  const latest = getLatestArticles(7);
  const [feature, ...rest] = latest;
  const featureCategory = getCategory(feature.category)!;

  return (
    <>
      <section className="pt-8 md:pt-12">
        <Link href={`/en/stories/${feature.slug}`} aria-label={feature.titleEn || feature.title}>
          <RevealImage
            src={feature.heroImage}
            alt={feature.titleEn || feature.title}
            className="h-[62vh] min-h-[420px] md:h-[80vh]"
            priority
            cursorLabel="VIEW"
            sizes="100vw"
            interactive
          />
        </Link>
        <Container className="mt-8 md:mt-10">
          <Reveal>
            <EditorialMeta index={1} categoryEn={featureCategory.nameEn} date={feature.date} />
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 max-w-3xl font-serif-en text-4xl leading-[1.15] text-ink md:text-6xl lg:text-7xl">
              {feature.titleEn || feature.title}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink/60 line-clamp-2">
              {feature.excerptEn || feature.excerpt}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-7">
              <EditorialLink href={`/en/stories/${feature.slug}`}>Read the Story</EditorialLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-ink/40 uppercase">Latest</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((article, i) => (
              <Reveal key={article.slug} delay={i * 80}>
                <ArticleCard article={article} index={i + 2} lang="en" />
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-16 flex justify-center">
              <EditorialLink href="/en/stories">View All Stories</EditorialLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-line py-12">
        <Container className="max-w-2xl">
          <p className="text-sm text-ink/50">
            日本語版はこちら —{" "}
            <Link href="/" className="text-ink underline decoration-1 underline-offset-4 hover:text-vermilion">
              中東閑雅 CHŪTŌ KANGA
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}
