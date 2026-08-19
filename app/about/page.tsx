import type { Metadata } from "next";
import Container from "@/components/Container";
import EditorialLink from "@/components/EditorialLink";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "中東閑雅とは。日本の視点から中東の文化、ラグジュアリー、ライフスタイルを読み解く独立系メディアの成り立ちと編集方針。",
  alternates: {
    canonical: "/about",
  },
};

const sections = [
  {
    title: "中東閑雅とは",
    en: "What Is CHŪTŌ KANGA",
    body: "中東閑雅は、ホテル、ダイニング、ファッション、アート、建築、イベントといった領域を通じて、いまの中東を編集の視点で見つめるパブリケーションです。速報性や規模の大きさではなく、何をどう選び、どう語るかに価値を置いています。",
  },
  {
    title: "なぜ日本の視点か",
    en: "Why A Japanese Perspective",
    body: "日本と中東は、地理的にも文化的にも遠い場所にあります。けれど、もてなしの作法、手仕事への敬意、建築と装飾の関係、食と儀礼、香り、装い、そして伝統と近代性のあいだにある緊張感——両者を重ねてみると、思いがけない接点と対比が見えてきます。中東閑雅は、日本という文化的な視座を通した時、中東の何が見えてくるのかを探ることを、一つの存在意義としています。",
  },
  {
    title: "閑雅という言葉",
    en: "The Meaning Of Kanga",
    body: "「閑雅」は、静けさの中にある品位を指す言葉です。中東閑雅という名前には、この地域を最も華やかな表層だけで語らない、という編集姿勢を込めています。壮麗さの向こうにある文脈を、速さの向こうにある意味を、消費の向こうにある文化を見つめること。それが、この名前が示す態度です。",
  },
  {
    title: "編集の姿勢",
    en: "Editorial Approach",
    body: "中東閑雅は、新しいから、高価だから、話題だからという理由だけで、対象を取り上げることはありません。その場所、その人、その建築、その料理、そのブランド、その出来事が、いまの中東について何を語っているのか——そこにある文化、歴史、デザイン、人、思想、社会の変化を、編集の問いとしています。速報性で競うのではなく、視点と選択と解釈の質によって、価値をつくっていきたいと考えています。",
  },
  {
    title: "扱う領域",
    en: "What We Cover",
    body: "ホテル、ダイニング、ファッション&ビューティー、アート&カルチャー、イベント、建築&トラベル。これらは単なるコンテンツのカテゴリーではなく、現代の中東を理解するための、それぞれ異なる視点です。",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-16 md:pt-24">
        <Container className="max-w-2xl">
          <Reveal>
            <p className="text-xs tracking-[0.3em] text-vermilion uppercase">About</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 font-serif text-4xl leading-[1.3] text-ink md:text-5xl">
              日本から、中東を見る。
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-3 font-serif-en text-lg italic text-ink/40">
              Looking at the Middle East from Japan.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 text-[17px] leading-[1.9] text-ink/80">
              中東閑雅（CHŪTŌ KANGA）は、日本の視点から中東の文化、ラグジュアリー、ライフスタイルを読み解く、独立系のメディアです。ニュースサイトでも、旅行ガイドでも、ラグジュアリー系ブログでもありません。
            </p>
          </Reveal>
        </Container>
      </section>

      <Container className="max-w-2xl py-16 md:py-24">
        <div className="space-y-14">
          {sections.map((s) => (
            <Reveal key={s.en}>
              <div className="border-t border-line pt-8">
                <p className="text-xs tracking-[0.2em] text-vermilion uppercase">{s.en}</p>
                <h2 className="mt-2 font-serif text-2xl text-ink">{s.title}</h2>
                <p className="mt-4 text-[17px] leading-[1.9] text-ink/80">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 border-t border-line pt-8">
          <p className="text-[17px] leading-[1.9] text-ink/80">
            中東閑雅では編集活動に加え、ホテル、レストラン、ブランド、イベント、文化施設などを対象に、記事・写真・映像・SNSコンテンツの制作、日本市場向けのプロモーションを行っています。
          </p>
          <div className="mt-8 flex flex-wrap gap-10">
            <EditorialLink href="/partnerships">Explore Partnerships</EditorialLink>
            <EditorialLink href="/contact">Contact Us</EditorialLink>
          </div>
        </div>
      </Container>
    </>
  );
}
