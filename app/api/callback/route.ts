import { NextRequest, NextResponse } from "next/server";

function htmlResponse(body: string) {
  return new NextResponse(body, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

// Step 2 of the Decap CMS "github" backend OAuth flow: exchange the code
// GitHub sent back for an access token, then hand it to the CMS popup via
// postMessage — this exact message format is what decap-cms's github
// backend listens for.
export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const clientId = process.env.OAUTH_CLIENT_ID;
  const clientSecret = process.env.OAUTH_CLIENT_SECRET;

  if (!code || !clientId || !clientSecret) {
    return htmlResponse("<p>認証に必要な情報が不足しています。</p>");
  }

  const redirectUri = `${request.nextUrl.origin}/api/callback`;

  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      redirect_uri: redirectUri,
    }),
  });

  const tokenData: { access_token?: string; error_description?: string } =
    await tokenRes.json();

  if (!tokenData.access_token) {
    return htmlResponse(
      `<p>ログインに失敗しました: ${tokenData.error_description ?? "unknown error"}</p>`
    );
  }

  const payload = { token: tokenData.access_token, provider: "github" };

  return htmlResponse(`<!DOCTYPE html>
<html><body>
<script>
(function() {
  function receiveMessage(e) {
    window.opener.postMessage(
      'authorization:github:success:' + JSON.stringify(${JSON.stringify(payload)}),
      e.origin
    );
    window.removeEventListener("message", receiveMessage, false);
  }
  window.addEventListener("message", receiveMessage, false);
  window.opener.postMessage("authorizing:github", "*");
})();
</script>
</body></html>`);
}
