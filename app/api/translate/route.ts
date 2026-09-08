import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

// Called from the Decap CMS admin panel's preSave hook (public/admin/index.html)
// whenever an editor saves an article that has no English fields yet. Translates
// title/dek/excerpt/body together so the English route has real content instead
// of falling back to the raw Japanese text.
export async function POST(request: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "ANTHROPIC_API_KEY is not configured." }, { status: 500 });
  }

  const { title, dek, excerpt, body } = await request.json();
  if (!title || !body) {
    return NextResponse.json({ error: "title and body are required." }, { status: 400 });
  }

  const anthropic = new Anthropic({ apiKey });

  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-5",
    max_tokens: 4096,
    system:
      "You translate Japanese magazine articles into polished, natural English for CHŪTŌ KANGA, an editorial publication that reads Middle Eastern culture and lifestyle through a Japanese sensibility. The tone is quiet, intelligent, and understated — never touristy or promotional. Preserve all markdown formatting exactly: **bold** markers, ![]() image syntax with the file path untouched, Instagram/social URLs left completely unchanged and on their own line, and paragraph breaks. Translate only the prose. Respond with nothing but a single JSON object with the keys titleEn, dekEn, excerptEn, and bodyEn — no commentary, no markdown code fence.",
    messages: [
      {
        role: "user",
        content: JSON.stringify({ title, dek, excerpt, body }),
      },
    ],
  });

  const block = message.content[0];
  if (block.type !== "text") {
    return NextResponse.json({ error: "Unexpected response from translation model." }, { status: 502 });
  }

  try {
    const parsed = JSON.parse(block.text);
    return NextResponse.json(parsed);
  } catch {
    return NextResponse.json({ error: "Could not parse translation output." }, { status: 502 });
  }
}
