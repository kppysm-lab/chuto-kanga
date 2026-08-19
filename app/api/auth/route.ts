import { NextRequest, NextResponse } from "next/server";

// Step 1 of the Decap CMS "github" backend OAuth flow: send the editor to
// GitHub's authorize screen. GitHub redirects back to /api/callback with a
// one-time code, which is exchanged for an access token there.
export async function GET(request: NextRequest) {
  const clientId = process.env.OAUTH_CLIENT_ID;
  if (!clientId) {
    return new NextResponse("OAUTH_CLIENT_ID is not configured.", { status: 500 });
  }

  const redirectUri = `${request.nextUrl.origin}/api/callback`;
  const authorizeUrl = new URL("https://github.com/login/oauth/authorize");
  authorizeUrl.searchParams.set("client_id", clientId);
  authorizeUrl.searchParams.set("redirect_uri", redirectUri);
  authorizeUrl.searchParams.set("scope", "repo,user");

  return NextResponse.redirect(authorizeUrl.toString());
}
