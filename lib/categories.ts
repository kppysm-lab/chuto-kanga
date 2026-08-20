import { Category, CategorySlug } from "./types";

export const categories: Category[] = [
  {
    slug: "hotels",
    nameJa: "ホテル",
    nameEn: "Hotels",
    description:
      "静けさと様式美が交差する、中東の名だたるホテル、リゾート、邸宅を巡る。",
    descriptionEn:
      "A tour through the Middle East's storied hotels, resorts, and residences, where quietness meets formal beauty.",
  },
  {
    slug: "dining",
    nameJa: "ダイニング",
    nameEn: "Dining",
    description:
      "香辛料と海、砂漠と都市。中東の食文化を形づくる料理人とレストランの物語。",
    descriptionEn:
      "Spice and sea, desert and city — stories of the chefs and restaurants shaping Middle Eastern food culture.",
  },
  {
    slug: "fashion-beauty",
    nameJa: "ファッション & ビューティー",
    nameEn: "Fashion & Beauty",
    description:
      "伝統工芸と現代デザインが呼応する、中東発のファッションと美意識。",
    descriptionEn:
      "Fashion and aesthetics from the Middle East, where traditional craft meets contemporary design.",
  },
  {
    slug: "events",
    nameJa: "イベント",
    nameEn: "Events",
    description:
      "アートフェアから王室行事まで、いま中東で起きている文化的瞬間の記録。",
    descriptionEn:
      "From art fairs to royal ceremonies, a record of the cultural moments unfolding across the Middle East today.",
  },
  {
    slug: "art-culture",
    nameJa: "アート & カルチャー",
    nameEn: "Art & Culture",
    description:
      "美術館、ギャラリー、作家たち。中東の現代アートシーンを日本の視点で読み解く。",
    descriptionEn:
      "Museums, galleries, and artists — reading the Middle East's contemporary art scene through a Japanese lens.",
  },
  {
    slug: "architecture-travel",
    nameJa: "建築 & トラベル",
    nameEn: "Architecture & Travel",
    description:
      "砂漠と海岸線に立つ建築、そしてそこへ至る旅。空間と光の記録。",
    descriptionEn:
      "Architecture standing in desert and coastline, and the journeys that lead there — a record of space and light.",
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

// The four categories surfaced in primary navigation get clean, dedicated
// top-level routes. The rest (hotels, events) remain reachable at
// /categories/[slug] as a general archive mechanism.
const cleanRoutes: Partial<Record<CategorySlug, string>> = {
  "fashion-beauty": "/fashion",
  "architecture-travel": "/travel",
  dining: "/dining",
  "art-culture": "/culture",
};

export function categoryHref(slug: CategorySlug) {
  return cleanRoutes[slug] ?? `/categories/${slug}`;
}

// English equivalents exist only for the four clean-route categories.
const cleanRoutesEn: Partial<Record<CategorySlug, string>> = {
  "fashion-beauty": "/en/fashion",
  "architecture-travel": "/en/travel",
  dining: "/en/dining",
  "art-culture": "/en/culture",
};

export function categoryHrefEn(slug: CategorySlug) {
  return cleanRoutesEn[slug] ?? `/en/stories?category=${slug}`;
}
