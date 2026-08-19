import Link from "next/link";
import Container from "@/components/Container";
import ArticleCard from "@/components/ArticleCard";
import EditorialLink from "@/components/EditorialLink";
import EditorialMeta from "@/components/EditorialMeta";
import Reveal from "@/components/motion/Reveal";
import RevealImage from "@/components/motion/RevealImage";
import ParallaxImage from "@/components/motion/ParallaxImage";
import TiltWrapper from "@/components/motion/TiltWrapper";
import { getArticle, getLatestArticles } from "@/lib/articles";
import { getCategory } from "@/lib/categories";
import { events } from "@/lib/events";

export default function Home() {
  // The hero and "Latest" duo always show the three most recently
  // published stories, so a new article appears here automatically —
  // no code edit needed. The Culture/Dining/Travel sections below stay
  // hand-picked, the way a magazine editor lays out a front page.
  const [feature, latestA, latestB] = getLatestArticles(3);
  const featureCategory = getCategory(feature.category)!;

  const culture = getArticle("sharjah-calligraphy-revival")!;

  const diningA = getArticle("beirut-table-generational-recipes")!;
  const diningB = getArticle("riyadh-chefs-table-new-saudi-cuisine")!;

  const travel = getArticle("muscat-coastline-architecture")!;

  return (
    <>
      {/* Feature Story */}
      <section className="pt-8 md:pt-12">
        <Link href={`/stories/${feature.slug}`} aria-label={feature.title}>
          <TiltWrapper>
            <RevealImage
              src={feature.heroImage}
              alt={feature.title}
              className="h-[62vh] min-h-[420px] md:h-[80vh]"
              priority
              cursorLabel="VIEW"
              sizes="100vw"
              interactive
            />
          </TiltWrapper>
        </Link>
        <Container className="mt-8 md:mt-10">
          <Reveal>
            <EditorialMeta index={1} categoryEn={featureCategory.nameEn} date={feature.date} />
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.15] text-ink md:text-6xl lg:text-7xl">
              {feature.title}
            </h1>
          </Reveal>
          {feature.titleEn ? (
            <Reveal delay={140}>
              <p className="mt-3 font-serif-en text-lg italic text-ink/40 md:text-xl">
                {feature.titleEn}
              </p>
            </Reveal>
          ) : null}
          <Reveal delay={200}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink/60 line-clamp-2">
              {feature.dek}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-7">
              <EditorialLink href={`/stories/${feature.slug}`}>Read the Story</EditorialLink>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Latest — asymmetric duo */}
      <section className="py-24 md:py-32">
        <Container>
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-ink/40 uppercase">Latest</p>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-7">
              <Reveal>
                <ArticleCard
                  article={latestA}
                  aspect="landscape"
                  headlineSize="text-2xl md:text-3xl"
                  index={2}
                  sizes="(min-width: 768px) 58vw, 100vw"
                />
              </Reveal>
            </div>
            <div className="md:col-span-5 md:pt-20">
              <Reveal delay={120}>
                <ArticleCard
                  article={latestB}
                  aspect="portrait"
                  headlineSize="text-xl"
                  index={3}
                  sizes="(min-width: 768px) 42vw, 100vw"
                />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Culture — typography-led feature */}
      <section className="border-y border-line py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <Reveal>
                <EditorialMeta categoryEn="Culture" date={culture.date} />
              </Reveal>
              <Reveal delay={80}>
                <blockquote className="mt-6 font-serif text-3xl leading-snug text-ink md:text-5xl">
                  アラビア書道も日本の書も、線の勢いに精神が宿る。
                </blockquote>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-8 max-w-md text-sm leading-relaxed text-ink/60">
                  {culture.excerpt}
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div className="mt-7">
                  <EditorialLink href={`/stories/${culture.slug}`}>Read the Story</EditorialLink>
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-5">
              <Link href={`/stories/${culture.slug}`} aria-label={culture.title}>
                <RevealImage
                  src={culture.heroImage}
                  alt={culture.title}
                  className="aspect-[3/4]"
                  sizes="(min-width: 768px) 40vw, 100vw"
                  interactive
                />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Dining */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="flex items-baseline justify-between border-b border-line pb-6">
            <h2 className="font-serif text-2xl text-ink">Dining</h2>
            <EditorialLink href="/dining">View All</EditorialLink>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2">
            <Reveal>
              <ArticleCard
                article={diningA}
                aspect="landscape"
                headlineSize="text-lg"
                index={4}
                showExcerpt={false}
                sizes="(min-width: 640px) 50vw, 100vw"
              />
            </Reveal>
            <Reveal delay={100}>
              <ArticleCard
                article={diningB}
                aspect="landscape"
                headlineSize="text-lg"
                index={5}
                showExcerpt={false}
                sizes="(min-width: 640px) 50vw, 100vw"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Visual Interlude */}
      <section>
        <RevealImage
          src="/images/placeholders/interlude-1.svg"
          alt="アル・ウラ、サウジアラビア"
          className="h-[50vh] min-h-[320px] md:h-[85vh]"
        />
        <Container className="py-4">
          <p className="text-[11px] tracking-[0.15em] text-ink/40 uppercase">
            アル・ウラ、サウジアラビア
          </p>
        </Container>
      </section>

      {/* Travel / Hotels feature */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-5 md:pb-8">
              <Reveal>
                <EditorialMeta index={6} categoryEn="Travel" date={travel.date} />
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-4 font-serif text-3xl leading-snug text-ink md:text-5xl">
                  {travel.title}
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/60">
                  {travel.excerpt}
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div className="mt-7">
                  <EditorialLink href={`/stories/${travel.slug}`}>Read the Story</EditorialLink>
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <Link href={`/stories/${travel.slug}`} aria-label={travel.title}>
                <ParallaxImage
                  src={travel.heroImage}
                  alt={travel.title}
                  className="aspect-[4/3] md:aspect-[16/10]"
                  sizes="(min-width: 768px) 58vw, 100vw"
                  interactive
                />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Events — quiet list */}
      <section className="border-t border-line py-24 md:py-32">
        <Container>
          <h2 className="font-serif text-2xl text-ink">Events</h2>
          <ul className="mt-10 divide-y divide-line border-t border-line">
            {events.map((event, i) => (
              <Reveal key={event.title} delay={i * 60}>
                <li className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between">
                  <span className="font-serif text-lg text-ink">{event.title}</span>
                  <span className="text-xs tracking-[0.1em] text-ink/40 uppercase">
                    {event.location}／{event.date}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* For Brands & Partners — quiet, secondary CTA */}
      <section className="border-t border-line py-16 md:py-20">
        <Container className="max-w-2xl">
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-ink/40 uppercase">
              For Brands &amp; Partners
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink/60">
              中東閑雅では、ホテル、レストラン、ブランド、イベント、文化施設などを対象に、編集・コンテンツ制作・日本向けプロモーションを行っています。
            </p>
            <div className="mt-6">
              <EditorialLink href="/partnerships">View Partnerships</EditorialLink>
            </div>
          </Reveal>
        </Container>
      </section>

    </>
  );
}
