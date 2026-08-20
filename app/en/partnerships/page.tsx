import type { Metadata } from "next";
import Container from "@/components/Container";
import EditorialLink from "@/components/EditorialLink";
import Reveal from "@/components/motion/Reveal";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "Partnerships with CHŪTŌ KANGA — sponsored editorial, content production, and social, hospitality, and event promotion.",
  alternates: {
    canonical: "/en/partnerships",
  },
};

const services = [
  {
    en: "Sponsored Editorial",
    body: "Sponsored features, interviews, and profiles of hotels, restaurants, and brands, told through an editorial lens.",
  },
  {
    en: "Content Production",
    body: "Articles, photography, video, and social assets, produced to the same standard as our editorial work.",
  },
  {
    en: "Social Media Promotion",
    body: "Reaching audiences through CHŪTŌ KANGA's own social channels on behalf of a brand, property, or event.",
  },
  {
    en: "Hospitality Promotion",
    body: "Promotion aimed at the Japanese market for hotels, resorts, restaurants, spas, and destinations.",
  },
  {
    en: "Event Promotion",
    body: "From pre-event announcements through on-the-day coverage, social posts, and after-the-fact reporting.",
  },
  {
    en: "Japan-facing Promotion",
    body: "Communication support for Japanese readers, travelers, and customers, built around Japanese-language content.",
  },
];

const moodTone = {
  sand: "bg-sand",
  clay: "bg-clay",
  dune: "bg-dune",
} as const;

function Mood({ tone, className = "" }: { tone: keyof typeof moodTone; className?: string }) {
  return <div aria-hidden className={`${moodTone[tone]} ${className}`} />;
}

export default function PartnershipsPageEn() {
  const mediaKitHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    "Media Kit Request — CHŪTŌ KANGA"
  )}&body=${encodeURIComponent(
    "Company name:\nContact name:\nArea of interest:\n\nPlease send over your media kit.\n"
  )}`;

  return (
    <>
      <Container className="max-w-5xl pt-16 md:pt-24">
        <Reveal>
          <h1 className="text-xs tracking-[0.3em] text-vermilion uppercase">Partnerships</h1>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-4 max-w-md font-serif-en text-lg text-ink/70 md:text-xl">
            Selected collaborations across editorial, culture, and hospitality.
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
            Carrying our editorial perspective through into production and promotion for
            brands, hotels, restaurants, and events.
          </p>
        </Reveal>
        <ul className="mt-10 divide-y divide-line border-t border-line">
          {services.map((s, i) => (
            <Reveal key={s.en} delay={i * 40}>
              <li className="grid grid-cols-1 gap-2 py-8 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-4">
                  <h2 className="font-serif-en text-xl text-ink">{s.en}</h2>
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
          We welcome enquiries about sponsored editorial, content production, and social,
          hospitality, and event promotion.
        </p>
        <div className="mt-6 flex flex-wrap gap-10">
          <EditorialLink href="/en/contact">Contact</EditorialLink>
          <EditorialLink href={mediaKitHref}>Request Media Kit</EditorialLink>
        </div>
      </Container>
    </>
  );
}
