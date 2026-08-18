import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "placeholders");
mkdirSync(outDir, { recursive: true });

const INK = "#14120f";
const PAPER = "#faf9f5";
const VERMILION = "#b7312f";

function escapeXml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Simple deterministic pseudo-random generator so each image is stable across re-runs.
function seeded(seed) {
  let value = seed;
  return () => {
    value = (value * 1103515245 + 12345) & 0x7fffffff;
    return value / 0x7fffffff;
  };
}

function arch(cx, baseY, width, height) {
  const left = cx - width / 2;
  const right = cx + width / 2;
  const top = baseY - height;
  const radius = width / 2;
  return `M${left},${baseY} L${left},${top + radius} A${radius},${radius} 0 0 1 ${right},${top + radius} L${right},${baseY}`;
}

function makePlaceholder({ seed, label, sublabel, tone }) {
  const rnd = seeded(seed);
  const width = 1600;
  const height = 1200;

  const bg = tone === "ink" ? INK : PAPER;
  const fg = tone === "ink" ? PAPER : INK;
  const accent = VERMILION;

  const archCount = 3 + Math.floor(rnd() * 3);
  const archWidth = width / archCount;
  let arches = "";
  for (let i = 0; i < archCount; i++) {
    const cx = archWidth * i + archWidth / 2;
    const h = height * (0.42 + rnd() * 0.18);
    const w = archWidth * (0.5 + rnd() * 0.2);
    const opacity = 0.08 + rnd() * 0.1;
    const color = i % 3 === 0 ? accent : fg;
    arches += `<path d="${arch(cx, height * 0.86, w, h)}" fill="none" stroke="${color}" stroke-width="2" opacity="${opacity.toFixed(2)}" />`;
  }

  // Sun / moon disc motif
  const discX = width * (0.72 + rnd() * 0.15);
  const discY = height * (0.28 + rnd() * 0.12);
  const discR = 70 + rnd() * 40;

  const grainId = `grain-${seed}`;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <linearGradient id="bg-${seed}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${bg}" />
      <stop offset="1" stop-color="${tone === "ink" ? "#1f1c17" : "#f2f0e8"}" />
    </linearGradient>
    <filter id="${grainId}">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" result="noise" />
      <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.03 0" />
    </filter>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg-${seed})" />
  <circle cx="${discX}" cy="${discY}" r="${discR}" fill="none" stroke="${accent}" stroke-width="1.5" opacity="0.5" />
  ${arches}
  <line x1="0" y1="${height - 140}" x2="${width}" y2="${height - 140}" stroke="${fg}" stroke-width="1" opacity="0.15" />
  <text x="80" y="${height - 90}" font-family="Georgia, 'Shippori Mincho', serif" font-size="30" fill="${fg}" opacity="0.85">${escapeXml(label)}</text>
  <text x="80" y="${height - 56}" font-family="Helvetica, Arial, sans-serif" font-size="14" letter-spacing="4" fill="${accent}">${escapeXml(sublabel)}</text>
  <rect width="${width}" height="${height}" filter="url(#${grainId})" opacity="0.6" />
</svg>`;

  return svg;
}

const specs = [
  { file: "hotels-1", seed: 11, label: "アル・ウラ", sublabel: "HOTELS", tone: "ink" },
  { file: "hotels-2", seed: 12, label: "マディナ・ジュメイラ", sublabel: "HOTELS", tone: "paper" },
  { file: "dining-1", seed: 21, label: "ベイルートの食卓", sublabel: "DINING", tone: "paper" },
  { file: "dining-2", seed: 22, label: "リヤドの新星", sublabel: "DINING", tone: "ink" },
  { file: "fashion-1", seed: 31, label: "アバヤの再解釈", sublabel: "FASHION & BEAUTY", tone: "paper" },
  { file: "events-1", seed: 41, label: "アル・ウラ・アート・フェスティバル", sublabel: "EVENTS", tone: "ink" },
  { file: "art-1", seed: 51, label: "ジェッダ・ビエンナーレ", sublabel: "ART & CULTURE", tone: "paper" },
  { file: "art-2", seed: 52, label: "シャルジャの書", sublabel: "ART & CULTURE", tone: "ink" },
  { file: "architecture-1", seed: 61, label: "マスカット海岸線", sublabel: "ARCHITECTURE & TRAVEL", tone: "paper" },
  { file: "architecture-2", seed: 62, label: "砂漠のモダニズム", sublabel: "ARCHITECTURE & TRAVEL", tone: "ink" },
  { file: "interlude-1", seed: 71, label: "アル・ウラ", sublabel: "SAUDI ARABIA", tone: "paper" },
];

for (const spec of specs) {
  const svg = makePlaceholder(spec);
  writeFileSync(path.join(outDir, `${spec.file}.svg`), svg, "utf8");
  console.log(`wrote ${spec.file}.svg`);
}
