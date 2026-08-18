import type { Metadata } from "next";
import Container from "@/components/Container";
import EditorialLink from "@/components/EditorialLink";
import Reveal from "@/components/motion/Reveal";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work With Us",
  description:
    "中東閑雅とのパートナーシップについて。ブランドパートナーシップ、記事広告、コンテンツ制作、ホテル&レストランプロモーション、イベントパートナーシップ、日本×中東マーケティング。",
  alternates: {
    canonical: "/work-with-us",
  },
};

const offerings = [
  {
    title: "ブランドパートナーシップ",
    en: "Brand Partnerships",
    body: "編集の視点を通じた、継続的なブランドストーリーテリング。",
  },
  {
    title: "記事広告",
    en: "Sponsored Content",
    body: "編集チームが取材・執筆する、広告色を抑えたエディトリアル記事。",
  },
  {
    title: "コンテンツ制作",
    en: "Content Production",
    body: "写真・映像・コピーライティングを含む、日本人読者向けの企画制作。",
  },
  {
    title: "ホテル&レストランプロモーション",
    en: "Hotel & Restaurant Promotion",
    body: "現地取材に基づく、ホテルやレストランの特集記事。",
  },
  {
    title: "イベントパートナーシップ",
    en: "Event Partnerships",
    body: "アートフェアやフェスティバルの取材・レポーティング。",
  },
  {
    title: "日本×中東マーケティング",
    en: "Japan × Middle East Marketing",
    body: "日本市場に精通した編集チームによる、コミュニケーション設計のご相談。",
  },
];

export default function WorkWithUsPage() {
  const mediaKitHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    "Media Kit Request — 中東閑雅"
  )}&body=${encodeURIComponent(
    "貴社名 / Company name:\nご担当者名 / Contact name:\nご興味のある内容 / Area of interest:\n\nメディアキットの送付をお願いいたします。\n"
  )}`;

  return (
    <>
      <section className="pt-16 md:pt-24">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="text-xs tracking-[0.3em] text-vermilion uppercase">Work With Us</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 font-serif text-4xl leading-[1.3] text-ink md:text-5xl">
              日本の読者へ、確かな声で。
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink/60">
              中東閑雅は、ホテル・レストラン・ブランド・文化機関の皆様と、編集の視点を大切にしたパートナーシップを構築しています。詳細と料金についてはお問い合わせください。
            </p>
          </Reveal>
        </Container>
      </section>

      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((o) => (
            <div key={o.en} className="flex flex-col bg-paper p-8">
              <p className="text-xs tracking-[0.2em] text-vermilion uppercase">{o.en}</p>
              <h3 className="mt-3 font-serif text-xl leading-snug">{o.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink/60">{o.body}</p>
            </div>
          ))}
        </div>
      </Container>

      <section id="media-kit" className="border-t border-line py-20 md:py-28 scroll-mt-20">
        <Container className="max-w-2xl">
          <h2 className="font-serif text-2xl text-ink md:text-3xl">
            メディアキットのご請求
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/60">
            読者データ、掲載メニュー、過去の実績についてまとめたメディアキットをご用意しています。
          </p>
          <div className="mt-8 flex flex-wrap gap-10">
            <EditorialLink href={mediaKitHref}>Request Media Kit</EditorialLink>
            <EditorialLink href="/contact">Contact Us</EditorialLink>
          </div>
        </Container>
      </section>
    </>
  );
}
