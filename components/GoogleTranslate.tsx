"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: {
          new (
            options: {
              pageLanguage: string;
              includedLanguages: string;
              autoDisplay: boolean;
              layout: number;
            },
            elementId: string
          ): unknown;
          InlineLayout: { SIMPLE: number };
        };
      };
    };
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    if (document.getElementById("google-translate-script")) return;

    window.googleTranslateElementInit = () => {
      if (!window.google) return;
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "ja",
          includedLanguages: "en",
          autoDisplay: false,
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div
        id="google_translate_element"
        className="notranslate [&_.goog-te-gadget]:!font-sans [&_.goog-te-gadget]:!text-[11px] [&_.goog-te-gadget]:!text-ink/50 [&_.goog-te-gadget-simple]:!border-none [&_.goog-te-gadget-simple]:!bg-transparent"
      />
      <style>{`
        .goog-te-banner-frame { display: none !important; }
        body { top: 0 !important; }
        .goog-te-gadget-simple { padding: 0 !important; }
        .goog-te-gadget-icon { display: none !important; }
      `}</style>
    </>
  );
}
