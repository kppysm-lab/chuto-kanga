import Script from "next/script";

// Travelpayouts "Drive" scans site content site-wide to place affiliate
// booking links automatically, so it's loaded in the root layout rather
// than gated per page.
export default function TravelpayoutsDrive() {
  return <Script src="https://tpembars.com/NTY0ODU2.js?t=564856" strategy="afterInteractive" />;
}
