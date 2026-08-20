import type { Metadata } from "next";
import CategoryArchive from "@/components/CategoryArchive";
import { getCategory } from "@/lib/categories";

const category = getCategory("dining")!;

export const metadata: Metadata = {
  title: category.nameEn,
  description: category.descriptionEn,
  alternates: {
    canonical: "/en/dining",
  },
};

export default function DiningPageEn() {
  return <CategoryArchive category={category} lang="en" />;
}
