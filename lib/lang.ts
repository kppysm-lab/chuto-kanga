// Static routes that have a direct English equivalent under /en.
const staticPairs: [string, string][] = [
  ["/", "/en"],
  ["/stories", "/en/stories"],
  ["/about", "/en/about"],
  ["/partnerships", "/en/partnerships"],
  ["/contact", "/en/contact"],
  ["/fashion", "/en/fashion"],
  ["/travel", "/en/travel"],
  ["/dining", "/en/dining"],
  ["/culture", "/en/culture"],
];

const jaToEn = new Map(staticPairs);
const enToJa = new Map(staticPairs.map(([ja, en]) => [en, ja]));

// Keeps in-site navigation (logo, primary nav, footer) within the current
// language section when an English equivalent of that route exists.
export function localizeHref(pathname: string, href: string) {
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  if (!isEn) return href;
  return jaToEn.get(href) ?? href;
}

export function getLangSwitch(pathname: string) {
  const isEn = pathname === "/en" || pathname.startsWith("/en/");

  if (isEn) {
    if (pathname.startsWith("/en/stories/")) {
      return { label: "日本語", href: `/stories/${pathname.split("/")[3]}` };
    }
    return { label: "日本語", href: enToJa.get(pathname) ?? "/" };
  }

  if (pathname.startsWith("/stories/")) {
    return { label: "English", href: `/en/stories/${pathname.split("/")[2]}` };
  }
  return { label: "English", href: jaToEn.get(pathname) ?? "/en" };
}
