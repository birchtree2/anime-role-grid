// Cloudflare Pages Function: Image proxy to avoid browser CORS/Referer restrictions
// Usage: /img?url=<encoded_source_url>&output=png&n=-1
// This fetches via the worker and streams the image back with permissive CORS.

export const onRequestGet = async ({ request }: { request: Request }) => {
  try {
    const url = new URL(request.url);
    const target = url.searchParams.get("url");

    if (!target) {
      return new Response("Missing 'url' query param", { status: 400 });
    }

    // Build wsrv.nl URL (keeps existing optional params like output, n, t)
    const params = new URLSearchParams(url.search);
    // Ensure only expected params are forwarded
    const wsrvParams = new URLSearchParams();
    wsrvParams.set("url", target);
    if (params.has("output")) wsrvParams.set("output", params.get("output")!);
    if (params.has("n")) wsrvParams.set("n", params.get("n")!);
    if (params.has("t")) wsrvParams.set("t", params.get("t")!);

    const wsrvUrl = `https://wsrv.nl/?${wsrvParams.toString()}`;

    // Perform server-side fetch to bypass client-origin checks
    const resp = await fetch(wsrvUrl, {
      // Avoid sending your site as Origin/Referer to wsrv.nl from the browser
      // Worker fetch runs server-side, so it won't include browser headers
      headers: {
        // Optional: explicitly no referer
        Referer: "",
        // Accept any image format
        Accept: "image/avif,image/webp,image/apng,image/*;q=0.8,*/*;q=0.5",
      },
    });

    if (!resp.ok) {
      return new Response(`Proxy fetch failed: ${resp.status}`, { status: resp.status });
    }

    // Clone headers and add permissive CORS for your Pages domain
    const headers = new Headers(resp.headers);
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
    headers.set("Cache-Control", headers.get("Cache-Control") ?? "public, max-age=86400");

    // Stream the body back to the client
    return new Response(resp.body, {
      status: resp.status,
      headers,
    });
  } catch (err: any) {
    return new Response(`Proxy error: ${err?.message ?? String(err)}`, { status: 500 });
  }
};
