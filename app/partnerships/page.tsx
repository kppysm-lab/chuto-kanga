import type { Metadata } from "next";
import Container from "@/components/Container";
import EditorialLink from "@/components/EditorialLink";
import Reveal from "@/components/motion/Reveal";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "中東閑雅とのパートナーシップについて。編集パートナーシップ、クリエイティブ制作、日本×中東のクロスカルチャープロジェクトのご相談。",
  alternates: {
    canonical: "/partnerships",
  },
};

const moodTone = {
  sand: "bg-sand",
  clay: "bg-clay",
  dune: "bg-dune",
  mist: "bg-mist",
  moss: "bg-moss",
} as const;

function Mood({
  tone,
  className = "",
}: {
  tone: keyof typeof moodTone;
  className?: string;
}) {
  return <div aria-hidden className={`${moodTone[tone]} ${className}`} />;
}

export default function PartnershipsPage() {
  const mediaKitHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    "Media Kit Request — 中東閑雅"
  )}&body=${encodeURIComponent(
    "貴社名 / Company name:\nご担当者名 / Contact name:\nご興味のある内容 / Area of interest:\n\nメディアキットの送付をお願いいたします。\n"
  )}`;

  return (
    <>
      <Container className="max-w-5xl pt-16 md:pt-24">
        <Reveal>
          <h1 className="text-xs tracking-[0.3em] text-vermilion uppercase">Partnerships</h1>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-4 max-w-md font-serif-en text-lg text-ink/70 md:text-xl">
            編集、文化、ホスピタリティにまたがる、限定的なコラボレーション。
          </p>
        </Reveal>

        <div className="relative mt-14 h-[280px] md:h-[420px]">
          <Mood tone="sand" className="absolute left-0 top-0 h-[70%] w-[58%]" />
          <Mood tone="clay" className="absolute left-[50%] top-[28%] h-[65%] w-[26%]" />
          <Mood tone="dune" className="absolute right-0 top-0 h-[26%] w-[16%]" />
          <span
            aria-hidden
            className="pointer-events-none absolute -left-2 top-4 select-none font-serif text-[120px] leading-none text-ink/10 mix-blend-multiply md:top-6 md:text-[220px]"
          >
            閑雅
          </span>
        </div>
      </Container>

      <Container className="mt-24 max-w-5xl md:mt-32">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <Mood
                tone="mist"
                className="-ml-6 aspect-[3/2] w-[calc(100%+1.5rem)] md:-ml-10 md:w-[calc(100%+2.5rem)]"
              />
            </div>
            <div className="md:col-span-5">
              <p className="text-xs tracking-[0.15em] text-ink/50 uppercase">
                Editorial Partnerships
              </p>
              <h2 className="mt-3 font-serif text-2xl text-ink">編集パートナーシップ</h2>
              <p className="mt-4 text-xs text-ink/40">
                記事広告　／　ブランドフィーチャー　／　インタビュー　／　デスティネーション特集
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink/70">
                ブランドや場所の背後にある文化とデザインを掘り下げる、編集としての基準を保った制作です。
              </p>
            </div>
          </div>
        </Reveal>
      </Container>

      <Container className="mt-24 max-w-5xl md:mt-32">
        <Reveal>
          <div className="flex gap-3">
            <Mood tone="moss" className="aspect-[16/9] w-[42%]" />
            <Mood tone="sand" className="aspect-[2/3] w-[18%]" />
            <Mood tone="dune" className="aspect-square w-[34%]" />
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-12">
            <p className="text-xs tracking-[0.15em] text-ink/50 uppercase md:col-span-3">
              Creative
            </p>
            <p className="text-sm leading-relaxed text-ink/70 md:col-span-9">
              写真、映像、ソーシャルコンテンツを、日本の読者を意識してプロジェクト単位で制作します。
            </p>
          </div>
        </Reveal>
      </Container>

      <Container className="mt-24 max-w-5xl md:mt-32">
        <Reveal>
          <div className="relative">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
              <div className="md:col-span-4">
                <Mood tone="clay" className="aspect-[4/5] w-full" />
              </div>
              <div className="md:col-span-8">
                <p className="text-xs tracking-[0.15em] text-ink/50 uppercase">
                  Experiences &amp; Cross-Cultural Projects
                </p>
                <h2 className="mt-3 font-serif text-2xl text-ink">
                  体験とクロスカルチャープロジェクト
                </h2>
                <p className="mt-4 text-xs text-ink/40">
                  イベント　／　ホテル&amp;ダイニング体験　／　メディアパートナーシップ
                </p>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/70">
                  日本と中東をつなぐプロジェクトへと、時間をかけて育てていきたい領域です。
                </p>
              </div>
            </div>
            <Mood tone="mist" className="absolute -bottom-6 right-[6%] hidden h-24 w-[14%] md:block" />
          </div>
        </Reveal>
      </Container>

      <Container className="mb-24 mt-28 max-w-5xl border-t border-line pt-10 md:mb-32 md:mt-36">
        <p className="text-xs tracking-[0.15em] text-ink/50 uppercase">Project Enquiries</p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/70">
          編集パートナーシップ、ホスピタリティ、イベント、カルチャープロジェクトについてのご相談を承っています。
        </p>
        <div className="mt-6 flex flex-wrap gap-10">
          <EditorialLink href="/contact">Contact</EditorialLink>
          <EditorialLink href={mediaKitHref}>Request Media Kit</EditorialLink>
        </div>
      </Container>
    </>
  );
}
