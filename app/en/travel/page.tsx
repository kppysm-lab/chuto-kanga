import type { Metadata } from "next";
import CategoryArchive from "@/components/CategoryArchive";
import { getCategory } from "@/lib/categories";

const category = getCategory("architecture-travel")!;

export const metadata: Metadata = {
  title: category.nameEn,
  description: category.descriptionEn,
  alternates: {
    canonical: "/en/travel",
  },
};

export default function TravelPageEn() {
  return <CategoryArchive category={category} lang="en" />;
}
