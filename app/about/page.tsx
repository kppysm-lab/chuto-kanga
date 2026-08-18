import type { Metadata } from "next";
import Container from "@/components/Container";
import EditorialLink from "@/components/EditorialLink";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "中東閑雅について。日本の視点から中東の文化とライフスタイルを紐解く、独立系エディトリアルマガジンの成り立ちと編集方針。",
  alternates: {
    canonical: "/about",
  },
};

const values = [
  {
    title: "静けさ",
    en: "Quietness",
    body: "誇張や煽りを避け、対象そのものの佇まいを静かに伝える。",
  },
  {
    title: "敬意",
    en: "Respect",
    body: "中東の文化、宗教、慣習への敬意を、編集の出発点とする。",
  },
  {
    title: "審美眼",
    en: "Discernment",
    body: "流行ではなく、時間をかけて磨かれた仕事に価値を置く。",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-16 md:pt-24">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="text-xs tracking-[0.3em] text-vermilion uppercase">About</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 font-serif text-4xl leading-[1.3] text-ink md:text-5xl">
              美意識は、翻訳できる。
            </h1>
          </Reveal>
        </Container>
      </section>

      <Container className="max-w-3xl py-16 md:py-24">
        <div className="space-y-6 text-[17px] leading-[1.9] text-ink/80">
          <p>中東閑雅は、日本の視点から中東を読み解く、独立系の雑誌です。</p>
          <p>
            「閑雅」は、静けさの中にある品位を指す言葉。中東を消費するのではなく、その土地の美意識と手仕事を、日本人読者の感覚と重ねながら伝えています。
          </p>
          <p>
            ホテル、ダイニング、ファッション、アート、建築。6つの領域から、いま中東で起きている変化を追っています。
          </p>
          <p>
            運営するのは、東京の小さな編集チーム。広告代理店でも旅行会社でもありません。日本と中東、双方にとって信頼できる書き手でありたいと思っています。
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-line pt-14 sm:grid-cols-3">
          {values.map((v) => (
            <div key={v.title}>
              <p className="text-xs tracking-[0.2em] text-vermilion uppercase">{v.en}</p>
              <h2 className="mt-2 font-serif text-xl">{v.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{v.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-10 border-t border-line pt-14">
          <EditorialLink href="/work-with-us">Work With Us</EditorialLink>
          <EditorialLink href="/contact">Contact Us</EditorialLink>
        </div>
      </Container>
    </>
  );
}
