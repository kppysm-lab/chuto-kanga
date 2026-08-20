// Keeps in-site navigation (logo, primary nav) within the current language
// section when an English equivalent of that route exists.
export function localizeHref(pathname: string, href: string) {
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  if (!isEn) return href;
  if (href === "/") return "/en";
  if (href === "/stories") return "/en/stories";
  if (href === "/about") return "/en/about";
  return href;
}

export function getLangSwitch(pathname: string) {
  const isEn = pathname === "/en" || pathname.startsWith("/en/");

  if (isEn) {
    const rest = pathname.replace(/^\/en/, "");
    if (rest.startsWith("/stories/")) {
      return { label: "日本語", href: `/stories/${rest.split("/")[2]}` };
    }
    if (rest === "/stories") return { label: "日本語", href: "/stories" };
    if (rest === "/about") return { label: "日本語", href: "/about" };
    return { label: "日本語", href: "/" };
  }

  if (pathname.startsWith("/stories/")) {
    return { label: "English", href: `/en/stories/${pathname.split("/")[2]}` };
  }
  if (pathname === "/stories") return { label: "English", href: "/en/stories" };
  if (pathname === "/about") return { label: "English", href: "/en/about" };
  return { label: "English", href: "/en" };
}
