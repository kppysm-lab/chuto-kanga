import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryArchive from "@/components/CategoryArchive";
import { getCategory } from "@/lib/categories";

// Only categories without a dedicated top-level route are served here
// (fashion, travel, dining, culture redirect to their clean routes — see
// next.config.ts).
const slugsServedHere = ["hotels", "events"];

export function generateStaticParams() {
  return slugsServedHere.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};

  return {
    title: category.nameJa,
    description: category.description,
    alternates: {
      canonical: `/categories/${slug}`,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!slugsServedHere.includes(slug)) notFound();

  const category = getCategory(slug);
  if (!category) notFound();

  return <CategoryArchive category={category} />;
}
