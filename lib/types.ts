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
}

export interface Article {
  slug: string;
  title: string;
  titleEn?: string;
  dek: string;
  excerpt: string;
  category: CategorySlug;
  location: string;
  date: string;
  author: string;
  photographyCredit?: string;
  readingTime: string;
  heroImage: string;
  featured?: boolean;
  body: string[];
}
