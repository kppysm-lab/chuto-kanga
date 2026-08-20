import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { categories, categoryHref } from "@/lib/categories";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/stories",
    "/categories",
    "/about",
    "/partnerships",
    "/contact",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  const categoryRoutes = categories.map((c) => ({
    url: `${SITE_URL}${categoryHref(c.slug)}`,
    lastModified: new Date(),
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${SITE_URL}/stories/${a.slug}`,
    lastModified: a.date,
  }));

  const enRoutes = [
    { url: `${SITE_URL}/en`, lastModified: new Date() },
    { url: `${SITE_URL}/en/stories`, lastModified: new Date() },
    { url: `${SITE_URL}/en/about`, lastModified: new Date() },
    ...articles.map((a) => ({
      url: `${SITE_URL}/en/stories/${a.slug}`,
      lastModified: a.date,
    })),
  ];

  return [...staticRoutes, ...categoryRoutes, ...articleRoutes, ...enRoutes];
}
