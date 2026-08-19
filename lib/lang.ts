export function getLangSwitch(pathname: string) {
  const isEn = pathname === "/en" || pathname.startsWith("/en/");

  if (isEn) {
    const rest = pathname.replace(/^\/en/, "");
    if (rest.startsWith("/stories/")) {
      return { label: "日本語", href: `/stories/${rest.split("/")[2]}` };
    }
    if (rest === "/stories") return { label: "日本語", href: "/stories" };
    return { label: "日本語", href: "/" };
  }

  if (pathname.startsWith("/stories/")) {
    return { label: "English", href: `/en/stories/${pathname.split("/")[2]}` };
  }
  if (pathname === "/stories") return { label: "English", href: "/en/stories" };
  return { label: "English", href: "/en" };
}
