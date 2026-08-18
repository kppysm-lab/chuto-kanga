import type { Metadata } from "next";
import CategoryArchive from "@/components/CategoryArchive";
import { getCategory } from "@/lib/categories";

const category = getCategory("dining")!;

export const metadata: Metadata = {
  title: category.nameJa,
  description: category.description,
};

export default function DiningPage() {
  return <CategoryArchive category={category} />;
}
