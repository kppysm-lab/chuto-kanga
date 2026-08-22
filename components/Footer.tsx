"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { SOCIAL_INSTAGRAM } from "@/lib/site";
import { localizeHref } from "@/lib/lang";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="border-t border-line bg-paper">
      <Container className="py-16">
        <p className="font-serif text-2xl tracking-[0.1em] text-ink">中東閑雅</p>
        <p className="mt-1 text-[11px] font-medium tracking-[0.32em] text-ink/40 uppercase">
          Chūtō Kanga
        </p>
        <p className="mt-3 max-w-xs text-sm text-ink/50">日本の美意識で、中東を紐解く。</p>

        <nav className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-8 text-sm text-ink/70">
          <Link href={localizeHref(pathname, "/stories")} className="hover:text-vermilion">
            Stories
          </Link>
          <Link href={localizeHref(pathname, "/about")} className="hover:text-vermilion">
            About
          </Link>
          <Link href={localizeHref(pathname, "/partnerships")} className="hover:text-vermilion">
            Partnerships
          </Link>
          <a href={SOCIAL_INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-vermilion">
            Instagram
          </a>
          <Link href={localizeHref(pathname, "/contact")} className="hover:text-vermilion">
            Contact
          </Link>
        </nav>

        <div className="mt-10 border-t border-line pt-6 text-xs text-ink/40">
          <p>&copy; {new Date().getFullYear()} Chūtō Kanga / 中東閑雅.</p>
        </div>
      </Container>
    </footer>
  );
}
