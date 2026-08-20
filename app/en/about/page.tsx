import type { Metadata } from "next";
import Container from "@/components/Container";
import EditorialLink from "@/components/EditorialLink";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "About CHŪTŌ KANGA — an independent media platform reading Middle Eastern culture, luxury, and lifestyle through a Japanese lens.",
  alternates: {
    canonical: "/en/about",
  },
};

const sections = [
  {
    title: "What Is CHŪTŌ KANGA",
    body: "CHŪTŌ KANGA is a publication that looks at the contemporary Middle East through an editorial lens, across hotels, dining, fashion, art, architecture, and events. What matters here isn't speed or scale, but what we choose to cover, and how we choose to tell it.",
  },
  {
    title: "Why a Japanese Perspective",
    body: "Japan and the Middle East are distant places, both geographically and culturally. And yet, in hospitality, in respect for handcraft, in the relationship between architecture and ornament, in food and ritual, in fragrance, in dress, and in the tension between tradition and modernity — laying the two side by side reveals unexpected points of contact and contrast. Part of why CHŪTŌ KANGA exists is to explore what becomes visible in the Middle East when seen through this Japanese cultural vantage point.",
  },
  {
    title: "The Meaning of Kanga",
    body: "Kanga (閑雅) describes a kind of refinement found within quietness. The name CHŪTŌ KANGA carries an editorial stance: not to speak of this region only through its most spectacular surface. To look at the context behind the splendor, the meaning behind the speed, the culture behind consumption — that is the attitude the name points to.",
  },
  {
    title: "Editorial Approach",
    body: "CHŪTŌ KANGA doesn't cover something simply because it's new, expensive, or trending. Our editorial question is closer to this: what does this place, this person, this building, this dish, this brand, this event tell us about the Middle East today — the culture, history, design, people, ideas, and social change behind it. Rather than compete on speed, we want to create value through the quality of our perspective, our choices, and our interpretation.",
  },
  {
    title: "What We Cover",
    body: "Hotels, dining, fashion & beauty, art & culture, events, architecture & travel. These aren't simply content categories — they're different lenses for understanding the contemporary Middle East.",
  },
];

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
              guide, or a luxury blog.
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
                <p className="mt-4 text-[17px] leading-[1.9] text-ink/80">{s.body}</p>
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
            <EditorialLink href="/partnerships">Explore Partnerships</EditorialLink>
            <EditorialLink href="/contact">Contact Us</EditorialLink>
          </div>
        </div>
      </Container>
    </>
  );
}
