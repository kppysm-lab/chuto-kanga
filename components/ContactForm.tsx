"use client";

import { useState, FormEvent } from "react";
import { CONTACT_EMAIL } from "@/lib/site";

const inquiryTypesJa = [
  "取材・掲載のご相談",
  "ブランドパートナーシップ",
  "コンテンツ制作のご相談",
  "ホテル・レストランのご相談",
  "イベントのご相談",
  "その他のお問い合わせ",
];

const inquiryTypesEn = [
  "Editorial / Press",
  "Brand Partnership",
  "Content Production",
  "Hotel / Restaurant",
  "Event",
  "Other",
];

const copy = {
  ja: {
    name: "お名前",
    email: "メールアドレス",
    type: "お問い合わせ種別",
    message: "メッセージ",
    submit: "送信する",
    note: "送信するとお使いのメールソフトが起動し、内容が入力された状態で下書きが作成されます。",
    subjectPrefix: "お問い合わせ",
    noName: "お名前未入力",
  },
  en: {
    name: "Name",
    email: "Email",
    type: "Inquiry Type",
    message: "Message",
    submit: "Send",
    note: "This opens your email app with the message pre-filled — just hit send.",
    subjectPrefix: "Inquiry",
    noName: "No name entered",
  },
};

export default function ContactForm({ lang = "ja" }: { lang?: "ja" | "en" }) {
  const inquiryTypes = lang === "en" ? inquiryTypesEn : inquiryTypesJa;
  const t = copy[lang];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiryType, setInquiryType] = useState(inquiryTypes[0]);
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = `[${inquiryType}] ${t.subjectPrefix} — ${name || t.noName}`;
    const body =
      lang === "en"
        ? `Name: ${name}\nEmail: ${email}\nType: ${inquiryType}\n\nMessage:\n${message}`
        : `お名前 / Name: ${name}\nメールアドレス / Email: ${email}\nお問い合わせ種別 / Type: ${inquiryType}\n\nメッセージ / Message:\n${message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs tracking-[0.15em] text-ink/50 uppercase">
            {t.name}
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
            {t.email}
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
          {t.type}
        </label>
        <select
          id="inquiryType"
          value={inquiryType}
          onChange={(e) => setInquiryType(e.target.value)}
          className="mt-2 w-full border-b border-line bg-transparent py-2 text-ink outline-none focus:border-vermilion"
        >
          {inquiryTypes.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-xs tracking-[0.15em] text-ink/50 uppercase">
          {t.message}
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
        {t.submit}
      </button>
      <p className="text-xs text-ink/40">{t.note}</p>
    </form>
  );
}
