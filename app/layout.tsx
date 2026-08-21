import type { Metadata } from "next";
import { Shippori_Mincho, Noto_Sans_JP, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntroSequence from "@/components/IntroSequence";
import TravelpayoutsDrive from "@/components/TravelpayoutsDrive";
import { SITE_URL, SOCIAL_INSTAGRAM } from "@/lib/site";

const shipporiMincho = Shippori_Mincho({
  variable: "--font-shippori-mincho",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

// High-contrast editorial serif, used only for English titles/headlines —
// kept distinct from the Japanese Mincho and the neutral sans used for
// navigation and metadata, per the site's three-tier type system. Fraunces
// carries the fashion-editorial character (soft high-contrast, optical
// sizing) without reading as a generic templated "elegant blog" font.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "中東閑雅 CHŪTŌ KANGA | 日本の美意識で、中東を紐解く。",
    template: "%s | 中東閑雅 CHŪTŌ KANGA",
  },
  description:
    "中東閑雅（Chūtō Kanga）は、日本の視点から中東の文化とライフスタイルを紐解く独立系エディトリアルマガジン。ホテル、ダイニング、ファッション、アート、建築を独自の視点で伝えます。",
  keywords: [
    "中東",
    "文化",
    "ホテル",
    "ドバイ",
    "サウジアラビア",
    "中東旅行",
    "中東閑雅",
    "Middle East",
    "Japan",
  ],
  alternates: {
    canonical: "/",
  },
  verification: {
    google: [
      "KYc8yNUAZIySY8h-PNMC6pj-t0uoaX4Y3woT4tavUgY",
      "TSALxZ0_D1kGGqibONuqLPogFsZFoFo9MxVS8N2lfEw",
    ],
  },
  openGraph: {
    title: "中東閑雅 CHŪTŌ KANGA",
    description: "日本の美意識で、中東を紐解く。",
    url: SITE_URL,
    siteName: "中東閑雅 CHŪTŌ KANGA",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "中東閑雅 CHŪTŌ KANGA",
    description: "日本の美意識で、中東を紐解く。",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "中東閑雅 CHŪTŌ KANGA",
  alternateName: "Chūtō Kanga",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  sameAs: [SOCIAL_INSTAGRAM],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "中東閑雅 CHŪTŌ KANGA",
  url: SITE_URL,
  inLanguage: "ja-JP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${shipporiMincho.variable} ${notoSansJp.variable} ${fraunces.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-paper font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <TravelpayoutsDrive />
        <IntroSequence />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
