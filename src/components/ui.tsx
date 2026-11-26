import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ContactForm from "./ContactForm";
import { site, type InquiryType } from "@/lib/site";

export function Container({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`mx-auto w-full max-w-[76rem] px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "inverse";
}) {
  const styles = {
    primary: "bg-lake text-white hover:bg-lake-deep",
    secondary: "border border-line-strong text-ink hover:border-ink hover:bg-mist",
    inverse: "bg-white text-ink hover:bg-lake-tint",
  }[variant];
  return (
    <Link
      href={href}
      className={`group inline-flex h-12 items-center justify-center gap-2 rounded-[3px] px-6 text-[1rem] font-semibold transition-colors ${styles}`}
    >
      {children}
      <ArrowRight size={17} strokeWidth={2} className="transition-transform duration-300 ease-out group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  );
}

export function TextLink({ href, children, inverse = false }: { href: string; children: React.ReactNode; inverse?: boolean }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 font-semibold ${inverse ? "text-white" : "text-lake"} hover:underline`}
    >
      {children}
      <ArrowRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  );
}

export function SectionHead({
  title,
  lede,
  id,
  inverse = false,
}: {
  title: string;
  lede?: React.ReactNode;
  id?: string;
  inverse?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <h2 id={id} className={`text-[clamp(1.9rem,1.2rem+2.2vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.025em] ${inverse ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {lede && (
        <p className={`mt-5 text-[1.125rem] leading-relaxed ${inverse ? "text-night-2" : "text-ink-2"}`}>{lede}</p>
      )}
    </div>
  );
}

export function ContactSection({
  title = "Start a conversation.",
  lede = "Tell us what you're working on. Every message is read by a principal, not a call center, and we reply within one business day.",
  defaultType,
}: {
  title?: string;
  lede?: string;
  defaultType?: InquiryType;
}) {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line bg-mist py-24 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHead id="contact-title" title={title} lede={lede} />
          <dl className="mt-10 space-y-6 text-[0.95rem]">
            <div>
              <dt className="font-semibold text-ink">Email</dt>
              <dd className="mt-1">
                <a className="text-lake underline" href={`mailto:${site.email}`}>{site.email}</a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Phone</dt>
              <dd className="tnum mt-1 text-ink-2">{site.phone}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Where we work</dt>
              <dd className="mt-1 text-ink-2">{site.serviceArea.join(" · ")}</dd>
            </div>
          </dl>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <div className="rounded-[4px] border border-line bg-paper p-6 shadow-[0_1px_2px_rgba(12,26,43,0.04),0_8px_24px_-12px_rgba(12,26,43,0.12)] sm:p-10">
            <ContactForm defaultType={defaultType} />
          </div>
        </div>
      </Container>
    </section>
  );
}
