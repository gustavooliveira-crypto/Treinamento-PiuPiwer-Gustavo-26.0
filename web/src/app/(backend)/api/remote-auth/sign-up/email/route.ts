import { NextRequest, NextResponse } from "next/server";

const DEFAULT_REMOTE =
  "https://piupiuwer-monorepo-web.vercel.app";

export async function POST(request: NextRequest) {
  const base = DEFAULT_REMOTE;
  const upstreamUrl = `${base}/api/auth/sign-up/email`;

  const body = await request.text();

  const upstream = await fetch(upstreamUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  const text = await upstream.text();
  const contentType =
    upstream.headers.get("content-type") ?? "application/json";

  return new NextResponse(text, {
    status: upstream.status,
    headers: {
      "Content-Type": contentType,
    },
  });
}