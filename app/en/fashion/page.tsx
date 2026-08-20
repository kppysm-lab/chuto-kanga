import type { Metadata } from "next";
import CategoryArchive from "@/components/CategoryArchive";
import { getCategory } from "@/lib/categories";

const category = getCategory("fashion-beauty")!;

export const metadata: Metadata = {
  title: category.nameEn,
  description: category.descriptionEn,
  alternates: {
    canonical: "/en/fashion",
  },
};

export default function FashionPageEn() {
  return <CategoryArchive category={category} lang="en" />;
}
