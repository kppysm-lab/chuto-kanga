import Link from "next/link";
import { ReactNode } from "react";

export default function EditorialLink({
  href,
  children,
  tone = "dark",
}: {
  href: string;
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-sm tracking-[0.05em] ${
        tone === "light" ? "text-paper" : "text-ink"
      }`}
    >
      <span className="border-b border-current pb-0.5 transition-opacity group-hover:opacity-60">
        {children}
      </span>
      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </Link>
  );
}
