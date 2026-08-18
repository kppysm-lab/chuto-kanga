"use client";

import { useState, FormEvent } from "react";
import { CONTACT_EMAIL } from "@/lib/site";

export default function Newsletter() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    const subject = "Newsletter Subscription — 中東閑雅";
    const body = `メールマガジンの購読を希望します。\n\n登録メールアドレス / Email: ${email}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <div className="mx-auto max-w-lg text-center">
      <p className="font-serif text-2xl text-ink md:text-3xl">中東閑雅から、週に一度。</p>
      <p className="mt-2 text-sm text-ink/50">Middle East stories, selected by Chūtō Kanga.</p>

      <form onSubmit={handleSubmit} className="mt-8 flex border border-line">
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          className="w-full bg-transparent px-4 py-3 text-sm text-ink outline-none placeholder:text-ink/30"
        />
        <button
          type="submit"
          className="shrink-0 border-l border-line px-5 text-xs tracking-[0.15em] text-ink uppercase transition-colors hover:bg-ink hover:text-paper"
        >
          Subscribe
        </button>
      </form>
      <p className="mt-3 text-xs text-ink/40">
        {sent
          ? "メールソフトが開きます。そのまま送信すると登録が完了します。"
          : "送信するとお使いのメールソフトが起動し、購読リクエストの下書きが作成されます。"}
      </p>
    </div>
  );
}
