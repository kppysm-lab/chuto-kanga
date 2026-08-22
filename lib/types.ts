export type CategorySlug =
  | "hotels"
  | "dining"
  | "fashion-beauty"
  | "events"
  | "art-culture"
  | "architecture-travel";

export interface Category {
  slug: CategorySlug;
  nameJa: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
}

export interface Article {
  slug: string;
  title: string;
  titleEn?: string;
  dek: string;
  dekEn?: string;
  excerpt: string;
  excerptEn?: string;
  category: CategorySlug;
  location: string;
  date: string;
  author: string;
  photographyCredit?: string;
  heroImage: string;
  heroImagePosition?: "top" | "center" | "bottom";
  featured?: boolean;
  body: string[];
  bodyEn?: string[];
}
