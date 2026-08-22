import type { Metadata } from "next";
import Container from "@/components/Container";
import EditorialLink from "@/components/EditorialLink";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "中東閑雅とは。日本の「間」「雅」の美意識を通して、中東の文化・建築・ライフスタイルの本質を読み解くメディア。",
  alternates: {
    canonical: "/about",
  },
};

type Point = { label: string; body: string };
type GlossaryEntry = { char: string; body: string };

type Section = {
  title: string;
  en: string;
  lead?: string;
  paragraphs?: string[];
  points?: Point[];
  pillars?: Point[];
  glossary?: GlossaryEntry[];
  closing?: string;
};

const sections: Section[] = [
  {
    title: "中東閑雅とは",
    en: "What Is CHŪTŌ KANGA",
    paragraphs: [
      "高級ホテルの写真、超高層ビル、「世界最大」「世界最高」という比較級――いまの中東の情報の多くは、消費文化と物質的な豊かさを強調するところで止まっています。中東閑雅が見つめているのは、その対極です。",
      "歴史・文化的な背景、地元の人々の生活と思考、建築やアートの背後にある哲学。ホテル、ダイニング、ファッション、アート、建築、イベントといった領域を通じて、いまの中東を編集の視点で見つめる。速報性や規模の大きさではなく、何をどう選び、どう語るかに価値を置いています。",
    ],
    pillars: [
      { label: "情報", body: "背景にある思想とともに紹介する実用情報。" },
      { label: "ライフスタイル", body: "中東で暮らす人々の洗練された日常。" },
      { label: "芸術", body: "現代アート、伝統工芸と日本の美学との対話。" },
    ],
  },
  {
    title: "なぜ日本の視点か",
    en: "Why A Japanese Perspective",
    lead: "日本と中東は、地理的にも文化的にも遠い場所にあります。けれど、両者の美意識を重ねてみると、思いがけない接点が見えてきます。",
    points: [
      {
        label: "空間の美学",
        body: "茶室の余白と、中東建築が中庭を中心に据える設計は、どちらも「何もない空間」の価値を理解しています。",
      },
      {
        label: "時間の価値",
        body: "わび・さびが時間の刻んだ痕跡を愛でるように、丁寧に淹れられるアラビアンコーヒーや、数百年前の建築がいまも使われ続けていることには、同じ時間への敬意があります。",
      },
      {
        label: "職人精神",
        body: "一つのものを極める人生。カリグラフィーの職人と、茶道の大師匠は、同じ姿勢で細部と向き合っています。",
      },
      {
        label: "本質への問い",
        body: "表面的な豪華さを剥ぎ取ったときに、何が残るのか。わび・さびと、中東のシンプリシティは、同じ方向を向いた問いです。",
      },
    ],
    closing:
      "中東閑雅は、日本という文化的な視座を通した時、中東の何が見えてくるのかを探ることを、一つの存在意義としています。",
  },
  {
    title: "閑雅という言葉",
    en: "The Meaning Of Kanga",
    lead: "「中東」は地理的にはUAE・ドバイを中心とした地域を指しますが、同時に「中」は中庸（バランスの取れた状態）を、「東」は東方の叡智を含んでいます。",
    glossary: [
      {
        char: "閑",
        body: "単なる静けさではありません。字は「門」と「間」からなり、もとは門のあいだの隙間を意味しました。そこから「余白」「空間」「心の余裕」「束縛からの解放」へと転じています。日本美学でいう「間」や余白、茶道のわび・さび、禅の「空」、庭園設計にみられる余白――そのすべてに通じる概念であり、砂漠の広大さや、中東建築の空間設計にも重なります。",
      },
      {
        char: "雅",
        body: "優雅な鳥を意味する字から生まれました。単なる豪華さや派手さではなく、知識と経験に基づいた美的判断、時間をかけて磨かれた品質。日本の「雅楽」「雅号」に通じる、最高級の美学の言葉です。",
      },
    ],
    closing:
      "中東（という地）の、静かで洗練された美を探求する。中東の広大な空間（閑）と、その中に隠された洗練された美（雅）を発見し、伝えること。それが、この名前が示す態度です。",
  },
  {
    title: "編集の姿勢",
    en: "Editorial Approach",
    lead: "中東閑雅が大切にしていることが、三つあります。",
    points: [
      {
        label: "本質を見つめること",
        body: "豪華さの背後にある設計思想や文化的背景を掘り下げること。",
      },
      {
        label: "空間と沈黙を尊重すること",
        body: "情報過多の時代に、何も言わないことの美しさを提示すること。",
      },
      {
        label: "文化の橋渡しをすること",
        body: "日本と中東の共通点を発見し、相互理解を促進すること。",
      },
    ],
  },
];

function SectionBody({ s }: { s: Section }) {
  return (
    <>
      {s.lead ? <p className="mt-4 text-[17px] leading-[1.9] text-ink/80">{s.lead}</p> : null}
      {s.paragraphs?.map((p, i) => (
        <p key={i} className="mt-4 text-[17px] leading-[1.9] text-ink/80">
          {p}
        </p>
      ))}
      {s.glossary ? (
        <div className="mt-8 space-y-8">
          {s.glossary.map((g) => (
            <div key={g.char} className="flex items-start gap-6">
              <span className="shrink-0 font-serif text-5xl leading-none text-vermilion md:text-6xl">
                {g.char}
              </span>
              <p className="mt-1 text-[15px] leading-[1.8] text-ink/70">{g.body}</p>
            </div>
          ))}
        </div>
      ) : null}
      {s.points ? (
        <div className="mt-6 space-y-6">
          {s.points.map((p, i) => (
            <div key={p.label} className="flex gap-4 md:gap-6">
              <span className="mt-1.5 shrink-0 font-serif-en text-xs tabular-nums text-vermilion">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-serif text-base text-ink md:text-lg">{p.label}</p>
                <p className="mt-1.5 text-[15px] leading-[1.8] text-ink/70">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      ) : null}
      {s.pillars ? (
        <div className="mt-6 grid grid-cols-1 gap-6 border-t border-line pt-6 sm:grid-cols-3">
          {s.pillars.map((p) => (
            <div key={p.label}>
              <p className="font-serif text-base text-ink">{p.label}</p>
              <p className="mt-1.5 text-[14px] leading-[1.7] text-ink/60">{p.body}</p>
            </div>
          ))}
        </div>
      ) : null}
      {s.closing ? (
        <p className="mt-6 text-[17px] leading-[1.9] text-ink/80">{s.closing}</p>
      ) : null}
    </>
  );
}

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
              中東閑雅（CHŪTŌ KANGA）は、日本の視点から中東の文化、ラグジュアリー、ライフスタイルを読み解く、独立系のメディアです。ニュースサイトでも、旅行ガイドでも、ラグジュアリー系ブログでもありません。多くのメディアが語る「ドバイの豪華さ」「中東の富」の裏側には、まだほとんど語られていない、静かで深い美学があります。中東閑雅は、この見落とされてきた美を、日本の感性というフィルターを通して発信するメディアです。
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
                <SectionBody s={s} />
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
