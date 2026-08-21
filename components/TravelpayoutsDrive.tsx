import Script from "next/script";

// Affiliate tracking for Travelpayouts "Drive" — only loaded on articles
// that opt in via the "affiliateWidget" field, since it's unrelated to any
// other page and shouldn't run site-wide.
export default function TravelpayoutsDrive() {
  return <Script src="https://tpembars.com/NTY0ODU2.js?t=564856" strategy="afterInteractive" />;
}
