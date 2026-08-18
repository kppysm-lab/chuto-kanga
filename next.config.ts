import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Locally-generated placeholder illustrations are served as SVG; these
    // are trusted (built by our own script, not user-uploaded), so it's safe
    // to allow next/image to serve them under the standard sandboxed CSP.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return [
      { source: "/categories/fashion-beauty", destination: "/fashion", permanent: true },
      { source: "/categories/architecture-travel", destination: "/travel", permanent: true },
      { source: "/categories/dining", destination: "/dining", permanent: true },
      { source: "/categories/art-culture", destination: "/culture", permanent: true },
    ];
  },
};

export default nextConfig;
