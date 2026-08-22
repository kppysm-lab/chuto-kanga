import type { Metadata } from "next";
import Container from "@/components/Container";
import EditorialLink from "@/components/EditorialLink";
import Reveal from "@/components/motion/Reveal";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "中東閑雅とのパートナーシップについて。Sponsored Editorial、コンテンツ制作、SNS・ホスピタリティ・イベントプロモーションなどのご相談。",
  alternates: {
    canonical: "/partnerships",
  },
};

const services = [
  {
    en: "Sponsored Editorial",
    title: "タイアップ記事",
    body: "タイアップ記事、インタビュー、ホテル・レストラン・ブランドの紹介など、編集の視点によるコンテンツです。",
  },
  {
    en: "Content Production",
    title: "コンテンツ制作",
    body: "記事、写真、映像、SNS用素材など、Editorialと同じ基準で制作します。",
  },
  {
    en: "Social Media Promotion",
    title: "SNSプロモーション",
    body: "中東閑雅のSNSを通じて、ブランド・施設・イベントを発信します。",
  },
  {
    en: "Hospitality Promotion",
    title: "ホスピタリティプロモーション",
    body: "ホテル、リゾート、レストラン、スパ、デスティネーションの日本向けプロモーションです。",
  },
  {
    en: "Event Promotion",
    title: "イベントプロモーション",
    body: "開催前の告知から、当日の取材・撮影、SNS発信、レポート記事までを担います。",
  },
  {
    en: "Japan-facing Promotion",
    title: "日本市場向けプロモーション",
    body: "日本語コンテンツの制作を通じて、日本の読者・旅行者・顧客とのコミュニケーションを支援します。",
  },
];

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
          <p className="max-w-lg text-sm leading-relaxed text-ink/70">
            編集としての視点をそのままに、ブランド・ホテル・レストラン・イベントのための制作とプロモーションを行っています。表層的な訴求ではなく、その場所や体験が持つ本質的な価値を見つめること――それが、中東閑雅のタイアップコンテンツが持つ強みです。
          </p>
        </Reveal>
        <ul className="mt-10 divide-y divide-line border-t border-line">
          {services.map((s, i) => (
            <Reveal key={s.en} delay={i * 40}>
              <li className="grid grid-cols-1 gap-2 py-8 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-4">
                  <p className="text-xs tracking-[0.15em] text-ink/50 uppercase">{s.en}</p>
                  <h2 className="mt-2 font-serif text-xl text-ink">{s.title}</h2>
                </div>
                <p className="text-sm leading-relaxed text-ink/70 md:col-span-8">{s.body}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>

      <Container className="mb-24 mt-16 max-w-5xl border-t border-line pt-10 md:mb-32 md:mt-20">
        <p className="text-xs tracking-[0.15em] text-ink/50 uppercase">Project Enquiries</p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/70">
          Sponsored Editorial、コンテンツ制作、SNS・ホスピタリティ・イベントプロモーションについてのご相談を承っています。
        </p>
        <div className="mt-6 flex flex-wrap gap-10">
          <EditorialLink href="/contact">Contact</EditorialLink>
          <EditorialLink href={mediaKitHref}>Request Media Kit</EditorialLink>
        </div>
      </Container>
    </>
  );
}
