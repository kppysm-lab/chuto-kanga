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
      "高級ホテルの写真、超高層ビル、「世界最大」「世界最高」という比較――中東を語る言葉の多くは、消費と規模の大きさに偏っています。中東閑雅が見ているのは、その先にあるものです。歴史や文化的背景、そこに暮らす人々の思考、建築やアートに宿る哲学。ホテル、ダイニング、ファッション、アート、建築、イベントを通じて、いまの中東を編集の視点で見つめています。速さや規模ではなく、何をどう選び、どう語るかに価値を置いています。",
    ],
    pillars: [
      { label: "情報", body: "背景にある思想とともに紹介する実用情報。" },
      { label: "ライフスタイル", body: "中東で暮らす人々の日常。" },
      { label: "芸術", body: "現代アートと伝統工芸、日本の美意識との対話。" },
    ],
  },
  {
    title: "なぜ日本の視点か",
    en: "Why A Japanese Perspective",
    lead: "日本と中東は、地理的にも文化的にも遠い場所です。けれど美意識を重ねると、思いがけない接点が見えてきます。",
    points: [
      {
        label: "空間の美学",
        body: "茶室の余白と、中庭を中心に据える中東建築の設計は、どちらも「何もない空間」の価値を知っています。",
      },
      {
        label: "時間の価値",
        body: "わび・さびが時間の痕跡を愛でるように、丁寧に淹れるアラビアンコーヒーや、使われ続ける古い建築にも、同じ時間への敬意があります。",
      },
      {
        label: "職人精神",
        body: "一つのものを極める人生。カリグラフィーの職人と茶道の大師匠は、同じ姿勢で細部と向き合っています。",
      },
      {
        label: "本質への問い",
        body: "表面の豪華さを剥ぎ取ったとき、何が残るのか。わび・さびと中東のシンプリシティは、同じ方向を向いた問いです。",
      },
    ],
    closing: "中東閑雅は、この視座から中東を見つめ続けることを、ひとつの軸としています。",
  },
  {
    title: "閑雅という言葉",
    en: "The Meaning Of Kanga",
    lead: "閑雅（かんが）とは、姿かたちがしとやかで優雅なこと、あるいはもの静かで趣があることを意味する言葉です。「中東」の「中」は中庸、「東」は東方の叡智を含む言葉でもあります。中東閑雅では、いまUAE・ドバイを起点として中東を見つめていますが、この視点はサウジアラビアやカタール、オマーンなど、より広い地域へも開かれています。",
    glossary: [
      {
        char: "閑",
        body: "門を木で閉じるさまを表す字です。そこから静けさや落ち着き、心の余裕という意味が生まれました。日本美学の「間」や余白、茶道のわび・さび、禅の「空」に通じる感覚であり、砂漠の広がりや中東建築の空間づかいにも、どこか重なるものがあります。",
      },
      {
        char: "雅",
        body: "もとは鳥を表す字でした。そこから「正統」「みやび」「洗練」という意味へと転じ、単なる豪華さではなく、知識と経験に基づいた美意識を指す言葉になりました。日本の「雅楽」「雅号」に通じる、品格を表す言葉です。",
      },
    ],
    closing:
      "中東の広さ（閑）と、その中にひそむ品格（雅）を見つけ、伝えること。それが、この名前に込めた姿勢です。",
  },
  {
    title: "編集の姿勢",
    en: "Editorial Approach",
    lead: "中東閑雅が大切にしていることは、三つあります。",
    points: [
      {
        label: "本質を見つめること",
        body: "豪華さの背後にある設計思想や文化的背景を掘り下げること。",
      },
      {
        label: "空間と沈黙を尊重すること",
        body: "情報が多い時代に、何も言わないことの美しさを大切にすること。",
      },
      {
        label: "文化をつなぐ視点を持つこと",
        body: "日本と中東の共通点を見つけ、互いの理解を深めること。",
      },
    ],
  },
];

// Breaks Japanese body text onto a new line after every 。, so dense
// paragraphs read as short, scannable lines instead of one unbroken block.
function Sentences({ text }: { text: string }) {
  const sentences = text.split("。").filter(Boolean);
  return (
    <>
      {sentences.map((sentence, i) => (
        <span key={i}>
          {sentence}
          {"。"}
          {i < sentences.length - 1 ? <br /> : null}
        </span>
      ))}
    </>
  );
}

function SectionBody({ s }: { s: Section }) {
  return (
    <>
      {s.lead ? (
        <p className="mt-4 text-[17px] leading-[1.9] text-ink/80">
          <Sentences text={s.lead} />
        </p>
      ) : null}
      {s.paragraphs?.map((p, i) => (
        <p key={i} className="mt-4 text-[17px] leading-[1.9] text-ink/80">
          <Sentences text={p} />
        </p>
      ))}
      {s.glossary ? (
        <div className="mt-8 space-y-8">
          {s.glossary.map((g) => (
            <div key={g.char} className="flex items-start gap-6">
              <span className="shrink-0 font-serif text-5xl leading-none text-vermilion md:text-6xl">
                {g.char}
              </span>
              <p className="mt-1 text-[15px] leading-[1.8] text-ink/70">
                <Sentences text={g.body} />
              </p>
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
                <p className="mt-1.5 text-[15px] leading-[1.8] text-ink/70">
                  <Sentences text={p.body} />
                </p>
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
        <p className="mt-6 text-[17px] leading-[1.9] text-ink/80">
          <Sentences text={s.closing} />
        </p>
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
              <Sentences text="中東閑雅（CHŪTŌ KANGA）は、日本の視点から中東の文化とライフスタイルを読み解くメディアです。多くの発信が伝える「ドバイの豪華さ」の裏側には、まだ語られていない静かな美学があります。中東閑雅は、その見落とされてきた美を、日本の感性というレンズを通して伝えています。" />
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
            <Sentences text="中東閑雅は、ドバイに暮らす日本人によって立ち上げられました。現地での日々があるからこそ見える解像度を大切にしています。" />
          </p>
          <p className="mt-4 text-[17px] leading-[1.9] text-ink/80">
            <Sentences text="ここまでの視点は、編集の外でも変わりません。中東閑雅では、ホテル、レストラン、ブランド、イベント、文化施設のストーリーテリングにも、同じまなざしで携わっています。記事・写真・映像・SNSコンテンツの制作、日本市場向けのプロモーションを通じて、その場所や体験が持つ本質を伝えています。" />
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
