"use client";

import Link from "next/link";
import { primaryNav } from "@/lib/nav";

export default function MobileMenu({
  open,
  onClose,
  onSearch,
}: {
  open: boolean;
  onClose: () => void;
  onSearch: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[140] flex flex-col bg-paper md:hidden">
      <div className="flex h-20 shrink-0 items-center justify-between px-6">
        <span className="font-serif text-lg tracking-[0.15em] text-ink">中東閑雅</span>
        <button
          type="button"
          onClick={onClose}
          aria-label="メニューを閉じる"
          className="text-xs tracking-[0.2em] text-ink/50 uppercase"
        >
          Close
        </button>
      </div>

      <nav className="flex flex-1 flex-col justify-center gap-1 px-6">
        {primaryNav.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="border-b border-line py-4 font-serif text-4xl leading-tight text-ink"
          >
            {link.label}
          </Link>
        ))}
        <button
          type="button"
          onClick={() => {
            onClose();
            onSearch();
          }}
          className="border-b border-line py-4 text-left font-serif text-4xl leading-tight text-ink"
        >
          Search
        </button>
      </nav>

      <div className="flex shrink-0 flex-col gap-3 px-6 pb-10 text-sm text-ink/50">
        <Link href="/work-with-us" onClick={onClose} className="hover:text-vermilion">
          Work With Us
        </Link>
        <Link href="/contact" onClick={onClose} className="hover:text-vermilion">
          Contact
        </Link>
      </div>
    </div>
  );
}
