import { Category, CategorySlug } from "./types";

export const categories: Category[] = [
  {
    slug: "hotels",
    nameJa: "ホテル",
    nameEn: "Hotels",
    description:
      "静けさと様式美が交差する、中東の名だたるホテル、リゾート、邸宅を巡る。",
  },
  {
    slug: "dining",
    nameJa: "ダイニング",
    nameEn: "Dining",
    description:
      "香辛料と海、砂漠と都市。中東の食文化を形づくる料理人とレストランの物語。",
  },
  {
    slug: "fashion-beauty",
    nameJa: "ファッション & ビューティー",
    nameEn: "Fashion & Beauty",
    description:
      "伝統工芸と現代デザインが呼応する、中東発のファッションと美意識。",
  },
  {
    slug: "events",
    nameJa: "イベント",
    nameEn: "Events",
    description:
      "アートフェアから王室行事まで、いま中東で起きている文化的瞬間の記録。",
  },
  {
    slug: "art-culture",
    nameJa: "アート & カルチャー",
    nameEn: "Art & Culture",
    description:
      "美術館、ギャラリー、作家たち。中東の現代アートシーンを日本の視点で読み解く。",
  },
  {
    slug: "architecture-travel",
    nameJa: "建築 & トラベル",
    nameEn: "Architecture & Travel",
    description:
      "砂漠と海岸線に立つ建築、そしてそこへ至る旅。空間と光の記録。",
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
