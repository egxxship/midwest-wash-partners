"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { inquiryTypes, site, type InquiryType } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "mt-2 block w-full rounded-[3px] border border-line-strong bg-paper px-3.5 py-3 text-[1rem] text-ink placeholder:text-ink-3 transition-colors hover:border-ink-3 focus:border-lake focus:outline-none focus:ring-2 focus:ring-lake/25 aria-[invalid=true]:border-[#b42318]";
const label = "block text-[0.9rem] font-medium text-ink";

export default function ContactForm({ defaultType }: { defaultType?: InquiryType }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [type, setType] = useState<string>(defaultType ?? "");

  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("topic");
    if (t && inquiryTypes.some((i) => i.value === t)) setType(t);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || "We couldn't send your message.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "We couldn't send your message.");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="border-t-2 border-lake pt-8">
        <h3 className="text-2xl font-semibold tracking-tight">Thanks, we have it.</h3>
        <p className="mt-3 max-w-md text-ink-2 leading-relaxed">
          Someone from our team will reply within one business day. If it&rsquo;s
          urgent, email{" "}
          <a className="text-lake underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-[0.95rem] font-semibold text-lake underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label htmlFor="type" className={label}>
          What brings you here?
        </label>
        <select
          id="type"
          name="type"
          required
          value={type}
          onChange={(e) => setType(e.target.value)}
          className={`${field} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22><path d=%22M1 1l5 5 5-5%22 fill=%22none%22 stroke=%22%2334445a%22 stroke-width=%221.6%22/></svg>')] bg-[length:12px_8px] bg-[right_1rem_center] bg-no-repeat pr-10`}
        >
          <option value="" disabled>
            Choose one
          </option>
          {inquiryTypes.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="name" className={label}>Name</label>
        <input id="name" name="name" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="company" className={label}>
          Company <span className="font-normal text-ink-3">(optional)</span>
        </label>
        <input id="company" name="company" autoComplete="organization" className={field} />
      </div>
      <div>
        <label htmlFor="email" className={label}>Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" className={field} />
      </div>
      <div>
        <label htmlFor="phone" className={label}>
          Phone <span className="font-normal text-ink-3">(optional)</span>
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={`${field} tnum`} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="location" className={label}>
          Site location <span className="font-normal text-ink-3">(city and state, if there is one)</span>
        </label>
        <input id="location" name="location" className={field} placeholder="e.g. Ottawa, IL" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className={label}>How can we help?</label>
        <textarea id="message" name="message" required rows={5} className={`${field} resize-y`} />
      </div>

      {/* Honeypot: hidden from people, filled by bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="sm:col-span-2">
        <label className="flex gap-3 text-[0.85rem] leading-relaxed text-ink-2">
          <input
            type="checkbox"
            name="smsConsent"
            value="yes"
            className="mt-1 h-4 w-4 shrink-0 accent-lake"
          />
          <span>
            Optional: I agree that Midwest Wash Partners may contact me by text
            message at the phone number above about my inquiry. Message and data
            rates may apply. Reply STOP to opt out. Consent is not a condition of
            any purchase.
          </span>
        </label>
      </div>

      <div className="sm:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[0.85rem] text-ink-3">
          We use what you send only to reply. See our{" "}
          <Link href="/privacy" className="underline hover:text-ink">privacy policy</Link>.
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-12 items-center justify-center rounded-[3px] bg-lake px-7 text-[1rem] font-semibold text-white transition-colors hover:bg-lake-deep disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
      </div>

      {status === "error" && (
        <p role="alert" className="sm:col-span-2 text-[0.95rem] text-[#b42318]">
          {error} Please try again, or email us directly at{" "}
          <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}
    </form>
  );
}
