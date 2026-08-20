import type { Metadata } from "next";
import CategoryArchive from "@/components/CategoryArchive";
import { getCategory } from "@/lib/categories";

const category = getCategory("art-culture")!;

export const metadata: Metadata = {
  title: category.nameEn,
  description: category.descriptionEn,
  alternates: {
    canonical: "/en/culture",
  },
};

export default function CulturePageEn() {
  return <CategoryArchive category={category} lang="en" />;
}
