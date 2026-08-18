"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { articles } from "@/lib/articles";
import { getCategory } from "@/lib/categories";

export default function SearchOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClose() {
    setQuery("");
    onClose();
  }

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") handleClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return articles
      .filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.location.toLowerCase().includes(q)
      )
      .slice(0, 6);
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[150] bg-paper">
      <div className="mx-auto flex h-full max-w-3xl flex-col px-6 pt-28 md:px-10">
        <div className="flex items-center gap-4 border-b border-line pb-4">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="キーワードを入力…"
            className="w-full bg-transparent font-serif text-2xl text-ink outline-none placeholder:text-ink/30 md:text-4xl"
          />
          <button
            type="button"
            onClick={handleClose}
            aria-label="検索を閉じる"
            className="shrink-0 text-xs tracking-[0.2em] text-ink/50 uppercase hover:text-vermilion"
          >
            Close
          </button>
        </div>

        <div className="mt-8 flex-1 overflow-y-auto pb-16">
          {query.trim() && results.length === 0 ? (
            <p className="text-sm text-ink/40">該当する記事が見つかりませんでした。</p>
          ) : null}
          <ul className="space-y-6">
            {results.map((article) => {
              const category = getCategory(article.category);
              return (
                <li key={article.slug} className="border-b border-line pb-6">
                  <Link href={`/stories/${article.slug}`} onClick={handleClose} className="group block">
                    {category ? (
                      <p className="text-xs tracking-[0.2em] text-vermilion uppercase">
                        {category.nameEn}
                      </p>
                    ) : null}
                    <p className="mt-2 font-serif text-xl text-ink group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4 md:text-2xl">
                      {article.title}
                    </p>
                    <p className="mt-1 text-xs text-ink/40">{article.location}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
