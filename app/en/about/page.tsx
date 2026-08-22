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

type Section = {
  title: string;
  lead?: string;
  paragraphs?: string[];
  points?: Point[];
  closing?: string;
};

const sections: Section[] = [
  {
    title: "What Is CHŪTŌ KANGA",
    paragraphs: [
      "Glossy hotel photography, towering skylines, claims of being the world's largest or the world's best — much of what's written about the Middle East today stops at consumer culture and material wealth. CHŪTŌ KANGA looks the other way: at historical and cultural context, at how people actually live and think, at the philosophy behind architecture and art. Across hotels, dining, fashion, art, architecture, and events, we look at the contemporary Middle East through an editorial lens. What matters here isn't speed or scale, but what we choose to cover, and how we choose to tell it.",
      "Our coverage rests on three pillars: information — practical knowledge told alongside the thinking behind it; lifestyle — the refined daily life of people living in the Middle East; and art — a dialogue between contemporary art, traditional craft, and Japanese aesthetics.",
    ],
  },
  {
    title: "Why A Japanese Perspective",
    lead: "Japan and the Middle East are distant places, both geographically and culturally. And yet, laying their aesthetic sensibilities side by side reveals unexpected points of contact.",
    points: [
      {
        label: "The Aesthetics of Space",
        body: "The emptiness of a tea room and the courtyard-centered design of Middle Eastern architecture both understand the value of nothing.",
      },
      {
        label: "The Value of Time",
        body: "Just as wabi-sabi cherishes the traces time leaves behind, a carefully brewed cup of Arabian coffee and a centuries-old building still in use both carry the same reverence for time.",
      },
      {
        label: "A Craftsman's Spirit",
        body: "A life spent mastering one thing. A calligrapher and a tea ceremony grand master face their details with the same posture.",
      },
      {
        label: "A Question of Essence",
        body: "What remains once the surface splendor is stripped away? Wabi-sabi and Middle Eastern simplicity are, in the end, questions facing the same direction.",
      },
    ],
    closing:
      "Part of why CHŪTŌ KANGA exists is to explore what becomes visible in the Middle East when seen through this Japanese cultural vantage point.",
  },
  {
    title: "The Meaning Of Kanga",
    paragraphs: [
      "Chūtō (中東) geographically refers to the UAE, Dubai, and the wider Middle East. But chū (中) also carries the sense of the mean — a state of balance — and tō (東) carries the wisdom of the East.",
      "Kan (閑) is not simple quietness. The character combines gate (門) with gap (間), originally meaning the space between two gates. From there it came to mean blank space, room to breathe, freedom from constraint — the same idea behind the Japanese sense of ma, the emptiness within wabi-sabi, the Zen notion of emptiness, the deliberate blankness of a garden's design. It echoes, too, in the vastness of the desert and in the spatial logic of Middle Eastern architecture.",
      "Ga (雅) comes from a character originally meaning an elegant bird. It doesn't describe opulence or spectacle, but aesthetic judgment shaped by knowledge and experience — a quality polished over time. It's the same word found in gagaku, Japan's court music, and gagō, an artist's honorific name: the vocabulary of the highest refinement.",
      "To search for the quiet, refined beauty of the Middle East. To discover and tell of the vast space (kan) of the region and the refined beauty (ga) hidden within it. That is the attitude this name points to.",
    ],
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
        body: "In an age of information overload, present the beauty of saying nothing.",
      },
      {
        label: "Bridge cultures",
        body: "Discover points of contact between Japan and the Middle East, and foster mutual understanding.",
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
              CHŪTŌ KANGA is an independent media platform that reads Middle Eastern culture,
              luxury, and lifestyle through a Japanese lens. It is not a news site, a travel
              guide, or a luxury blog. Behind what most coverage frames as the splendor of Dubai
              or the wealth of the Middle East lies a quiet, deeper aesthetic that has barely
              been told. CHŪTŌ KANGA exists to surface that overlooked beauty, filtered through a
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
            Beyond our editorial work, CHŪTŌ KANGA also produces articles, photography, video,
            and social content for hotels, restaurants, brands, events, and cultural
            institutions, and supports promotion aimed at the Japanese market.
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
