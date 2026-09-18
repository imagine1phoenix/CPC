import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json({ error: "Registration endpoint is not configured" }, { status: 503 });
  }

  const message = [
    "**New CPC registration**",
    `Name: ${payload.name}`,
    `Handle: ${payload.handle}`,
    `Why CPC: ${payload.why}`,
    `Source: ${payload.source ?? "website"}`,
  ].join("\n");

  const response = await fetch(webhookUrl, {
    body: JSON.stringify({ content: message }),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  });

  if (!response.ok) return NextResponse.json({ error: "Webhook rejected the registration" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
