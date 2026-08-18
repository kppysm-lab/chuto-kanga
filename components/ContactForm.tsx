"use client";

import { useState, FormEvent } from "react";
import { CONTACT_EMAIL } from "@/lib/site";

const inquiryTypes = [
  "取材・掲載のご相談",
  "メディアキットのご請求",
  "ブランドパートナーシップ",
  "その他のお問い合わせ",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiryType, setInquiryType] = useState(inquiryTypes[0]);
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = `[${inquiryType}] お問い合わせ — ${name || "お名前未入力"}`;
    const body = `お名前 / Name: ${name}\nメールアドレス / Email: ${email}\nお問い合わせ種別 / Type: ${inquiryType}\n\nメッセージ / Message:\n${message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs tracking-[0.15em] text-ink/50 uppercase">
            お名前
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full border-b border-line bg-transparent py-2 text-ink outline-none focus:border-vermilion"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-xs tracking-[0.15em] text-ink/50 uppercase">
            メールアドレス
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full border-b border-line bg-transparent py-2 text-ink outline-none focus:border-vermilion"
          />
        </div>
      </div>

      <div>
        <label htmlFor="inquiryType" className="text-xs tracking-[0.15em] text-ink/50 uppercase">
          お問い合わせ種別
        </label>
        <select
          id="inquiryType"
          value={inquiryType}
          onChange={(e) => setInquiryType(e.target.value)}
          className="mt-2 w-full border-b border-line bg-transparent py-2 text-ink outline-none focus:border-vermilion"
        >
          {inquiryTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-xs tracking-[0.15em] text-ink/50 uppercase">
          メッセージ
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-2 w-full resize-none border-b border-line bg-transparent py-2 text-ink outline-none focus:border-vermilion"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 bg-ink px-7 py-3 text-sm tracking-[0.08em] text-paper uppercase transition-colors hover:bg-vermilion"
      >
        送信する
      </button>
      <p className="text-xs text-ink/40">
        送信するとお使いのメールソフトが起動し、内容が入力された状態で下書きが作成されます。
      </p>
    </form>
  );
}
