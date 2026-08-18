import type { Metadata } from "next";
import CategoryArchive from "@/components/CategoryArchive";
import { getCategory } from "@/lib/categories";

const category = getCategory("fashion-beauty")!;

export const metadata: Metadata = {
  title: category.nameJa,
  description: category.description,
};

export default function FashionPage() {
  return <CategoryArchive category={category} />;
}
