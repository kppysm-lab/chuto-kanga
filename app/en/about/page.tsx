import type { Metadata } from "next";
import Container from "@/components/Container";
import EditorialLink from "@/components/EditorialLink";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "About CHŪTŌ KANGA — reading the essence of Middle Eastern culture, architecture, and lifestyle through the Japanese aesthetics of ma and miyabi.",
  alternates: {
    canonical: "/en/about",
  },
};

type Point = { label: string; body: string };
type GlossaryEntry = { char: string; body: string };

type Section = {
  title: string;
  lead?: string;
  paragraphs?: string[];
  points?: Point[];
  pillars?: Point[];
  glossary?: GlossaryEntry[];
  closing?: string;
};

const sections: Section[] = [
  {
    title: "What Is CHŪTŌ KANGA",
    paragraphs: [
      "Glossy hotel photography, towering skylines, claims of being the world's largest or the world's best — much of what's written about the Middle East leans on consumption and scale. CHŪTŌ KANGA looks further: at historical and cultural context, how people actually live and think, the philosophy behind architecture and art. Across hotels, dining, fashion, art, architecture, and events, we look at the contemporary Middle East through an editorial lens. What matters here isn't speed or scale, but what we choose to cover, and how we choose to tell it.",
    ],
    pillars: [
      { label: "Information", body: "Practical knowledge, told alongside the thinking behind it." },
      { label: "Lifestyle", body: "The daily life of people living in the Middle East." },
      { label: "Art", body: "A dialogue between contemporary art, craft, and Japanese aesthetics." },
    ],
  },
  {
    title: "Why A Japanese Perspective",
    lead: "Japan and the Middle East are distant places, geographically and culturally. Yet laying their aesthetic sensibilities side by side reveals unexpected points of contact.",
    points: [
      {
        label: "The Aesthetics of Space",
        body: "The emptiness of a tea room and the courtyard-centered design of Middle Eastern architecture both understand the value of nothing.",
      },
      {
        label: "The Value of Time",
        body: "Just as wabi-sabi cherishes the traces time leaves behind, a carefully brewed cup of Arabian coffee and an old building still in use carry the same reverence for time.",
      },
      {
        label: "A Craftsman's Spirit",
        body: "A life spent mastering one thing. A calligrapher and a tea ceremony grand master face their details with the same posture.",
      },
      {
        label: "A Question of Essence",
        body: "What remains once the surface splendor is stripped away? Wabi-sabi and Middle Eastern simplicity are questions facing the same direction.",
      },
    ],
    closing: "Seeing the Middle East from this vantage point is one of the things CHŪTŌ KANGA holds onto.",
  },
  {
    title: "The Meaning Of Kanga",
    lead: "Kanga (閑雅) describes a bearing that is graceful and refined, or a stillness that carries quiet atmosphere. In chūtō (中東), chū (中) carries the sense of the mean, and tō (東) carries the wisdom of the East. CHŪTŌ KANGA currently looks at the Middle East from the UAE and Dubai as a starting point — a view that stays open to Saudi Arabia, Qatar, Oman, and the wider region beyond.",
    glossary: [
      {
        char: "閑",
        body: "The character depicts a gate closed with wood. From there it came to mean stillness, calm, room to breathe — the same sense behind the Japanese ma, the emptiness within wabi-sabi, the Zen notion of emptiness. It echoes, too, in the openness of the desert and the way Middle Eastern architecture handles space.",
      },
      {
        char: "雅",
        body: "The character originally named a bird. It later came to mean correctness, and then elegance and refinement — not opulence, but aesthetic judgment shaped by knowledge and experience. It's the same word found in gagaku, Japan's court music, and gagō, an artist's honorific name.",
      },
    ],
    closing:
      "To find the vastness of the Middle East (kan) and the refinement hidden within it (ga), and to tell of it. That is the attitude this name holds.",
  },
  {
    title: "Editorial Approach",
    lead: "There are three things CHŪTŌ KANGA holds close.",
    points: [
      {
        label: "Look at the essence",
        body: "Dig into the design thinking and cultural context behind the splendor.",
      },
      {
        label: "Respect space and silence",
        body: "In an age of information overload, value the beauty of saying nothing.",
      },
      {
        label: "Connect across cultures",
        body: "Find points of contact between Japan and the Middle East, and deepen mutual understanding.",
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
                <p className="font-serif-en text-base text-ink md:text-lg">{p.label}</p>
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
              <p className="font-serif-en text-base text-ink">{p.label}</p>
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

export default function AboutPageEn() {
  return (
    <>
      <section className="pt-16 md:pt-24">
        <Container className="max-w-2xl">
          <Reveal>
            <p className="text-xs tracking-[0.3em] text-vermilion uppercase">About</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 font-serif-en text-4xl leading-[1.3] text-ink md:text-5xl">
              Looking at the Middle East from Japan.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 text-[17px] leading-[1.9] text-ink/80">
              CHŪTŌ KANGA reads Middle Eastern culture and lifestyle through a Japanese lens.
              Behind what much coverage frames as the splendor of Dubai lies a quiet aesthetic
              that has barely been told. CHŪTŌ KANGA surfaces that overlooked beauty through a
              Japanese sensibility.
            </p>
          </Reveal>
        </Container>
      </section>

      <Container className="max-w-2xl py-16 md:py-24">
        <div className="space-y-14">
          {sections.map((s) => (
            <Reveal key={s.title}>
              <div className="border-t border-line pt-8">
                <h2 className="font-serif-en text-2xl text-ink">{s.title}</h2>
                <SectionBody s={s} />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 border-t border-line pt-8">
          <p className="text-[17px] leading-[1.9] text-ink/80">
            CHŪTŌ KANGA was founded by a Japanese person living in Dubai — daily life there is
            what sharpens the view of what&apos;s ordinary here.
          </p>
          <p className="mt-4 text-[17px] leading-[1.9] text-ink/80">
            This perspective doesn&apos;t stop at the page. CHŪTŌ KANGA brings the same lens to
            storytelling for hotels, restaurants, brands, events, and cultural institutions,
            through articles, photography, video, and social content, and through promotion
            aimed at the Japanese market.
          </p>
          <div className="mt-8 flex flex-wrap gap-10">
            <EditorialLink href="/en/partnerships">Explore Partnerships</EditorialLink>
            <EditorialLink href="/en/contact">Contact Us</EditorialLink>
          </div>
        </div>
      </Container>
    </>
  );
}
