import type { Metadata } from "next";
import { Shippori_Mincho, Noto_Sans_JP, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntroSequence from "@/components/IntroSequence";

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
// navigation and metadata, per the site's three-tier type system.
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chutokanga.com"),
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
  openGraph: {
    title: "中東閑雅 CHŪTŌ KANGA",
    description: "日本の美意識で、中東を紐解く。",
    url: "https://chutokanga.com",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${shipporiMincho.variable} ${notoSansJp.variable} ${playfairDisplay.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-paper font-sans text-ink antialiased">
        <IntroSequence />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
