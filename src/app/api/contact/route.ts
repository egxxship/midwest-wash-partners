import { inquiryTypes } from "@/lib/site";

// Sends contact-form submissions by email through Resend's REST API.
// Required environment variables (set in Vercel, never in code):
//   RESEND_API_KEY  – Resend API key
//   CONTACT_FROM    – verified sender, e.g. "MWP Website <web@midwestwashpartners.com>"
// Optional:
//   CONTACT_TO      – destination inbox (defaults to esimons@midwestwashpartners.com)

const DEFAULT_TO = "esimons@midwestwashpartners.com";

function clean(v: unknown, max = 2000) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: pretend success for bots.
  if (clean(body.website)) return Response.json({ ok: true });

  const data = {
    type: clean(body.type, 40),
    name: clean(body.name, 200),
    company: clean(body.company, 200),
    email: clean(body.email, 320),
    phone: clean(body.phone, 40),
    location: clean(body.location, 200),
    message: clean(body.message, 5000),
    smsConsent: clean(body.smsConsent, 5) === "yes",
  };

  const typeLabel = inquiryTypes.find((t) => t.value === data.type)?.label;
  if (!typeLabel || !data.name || !data.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return Response.json({ error: "Please fill in the required fields." }, { status: 422 });
  }

  const key = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM;
  if (!key || !from) {
    console.error("Contact form is not configured: RESEND_API_KEY / CONTACT_FROM missing.");
    return Response.json({ error: "Our contact form is temporarily unavailable." }, { status: 503 });
  }

  const rows: [string, string][] = [
    ["Inquiry", typeLabel],
    ["Name", data.name],
    ["Company", data.company || "—"],
    ["Email", data.email],
    ["Phone", data.phone || "—"],
    ["Site location", data.location || "—"],
    ["Text-message consent", data.smsConsent ? "Yes" : "No"],
  ];
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\n${data.message}`;
  const html =
    `<table cellpadding="4">${rows.map(([k, v]) => `<tr><td><b>${esc(k)}</b></td><td>${esc(v)}</td></tr>`).join("")}</table>` +
    `<p style="white-space:pre-wrap">${esc(data.message)}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [process.env.CONTACT_TO || DEFAULT_TO],
      reply_to: data.email,
      subject: `Website inquiry — ${typeLabel} — ${data.name}`,
      text,
      html,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text().catch(() => ""));
    return Response.json({ error: "We couldn't send your message." }, { status: 502 });
  }
  return Response.json({ ok: true });
}
