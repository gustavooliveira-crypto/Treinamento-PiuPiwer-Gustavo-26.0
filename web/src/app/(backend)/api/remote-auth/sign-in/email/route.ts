import { NextRequest, NextResponse } from "next/server";

const DEFAULT_REMOTE =
  process.env.REMOTE_AUTH_URL ||
  "https://treinamento-piu-piwer-gustavo-26-0.vercel.app";

export async function POST(request: NextRequest) {
  const upstreamUrl = `${DEFAULT_REMOTE}/api/auth/sign-in/email`;

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