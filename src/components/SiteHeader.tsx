"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Wordmark from "./Wordmark";

const nav = [
  { href: "/fuel-c-store-partners", label: "Fuel & C-Store Partners" },
  { href: "/team", label: "Team" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-paper/95 backdrop-blur-sm transition-[border-color] duration-300 border-b ${scrolled || open ? "border-line" : "border-transparent"}`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-[76rem] items-center justify-between px-5 sm:px-8">
        <Wordmark />

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-[0.95rem] transition-colors ${active ? "text-ink font-semibold" : "text-ink-2 hover:text-ink"}`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/#contact"
            className="inline-flex h-10 items-center rounded-[3px] bg-ink px-5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-lake-deep"
          >
            Contact us
          </Link>
        </nav>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="border-t border-line bg-paper px-5 pb-6 pt-2 md:hidden"
        >
          <ul className="divide-y divide-line">
            {[...nav, { href: "/#contact", label: "Contact us" }].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-4 text-lg font-medium text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
