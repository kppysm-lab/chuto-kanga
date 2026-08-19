"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Container from "./Container";
import MobileMenu from "./MobileMenu";
import SearchOverlay from "./SearchOverlay";
import { primaryNav } from "@/lib/nav";
import { getLangSwitch } from "@/lib/lang";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const langSwitch = getLangSwitch(pathname);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex flex-col leading-none" onClick={() => setMenuOpen(false)}>
          <span className="font-serif text-lg tracking-[0.15em] text-ink">中東閑雅</span>
          <span className="mt-1 font-sans text-[10px] font-medium tracking-[0.32em] text-ink/40 uppercase">
            Chūtō Kanga
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {primaryNav.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-[0.05em] transition-colors ${
                  active ? "text-vermilion" : "text-ink/70 hover:text-vermilion"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="text-xs tracking-[0.15em] text-ink/50 uppercase transition-colors hover:text-vermilion"
          >
            Search
          </button>
          <Link
            href={langSwitch.href}
            className="text-xs tracking-[0.15em] text-ink/50 uppercase transition-colors hover:text-vermilion"
          >
            {langSwitch.label}
          </Link>
        </nav>

        <button
          type="button"
          aria-label="メニューを開く"
          onClick={() => setMenuOpen(true)}
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className="block h-px w-6 bg-ink" />
          <span className="block h-px w-6 bg-ink" />
        </button>
      </Container>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onSearch={() => setSearchOpen(true)}
      />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
