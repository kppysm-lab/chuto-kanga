import type { Metadata } from "next";
import CategoryArchive from "@/components/CategoryArchive";
import { getCategory } from "@/lib/categories";

const category = getCategory("architecture-travel")!;

export const metadata: Metadata = {
  title: category.nameJa,
  description: category.description,
};

export default function TravelPage() {
  return <CategoryArchive category={category} />;
}
