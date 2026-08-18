import type { Metadata } from "next";
import CategoryArchive from "@/components/CategoryArchive";
import { getCategory } from "@/lib/categories";

const category = getCategory("art-culture")!;

export const metadata: Metadata = {
  title: category.nameJa,
  description: category.description,
};

export default function CulturePage() {
  return <CategoryArchive category={category} />;
}
