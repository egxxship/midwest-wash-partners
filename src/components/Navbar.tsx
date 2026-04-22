"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "How It Works", href: "#process" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-grey-200"
          : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-rust-600 flex items-center justify-center text-white font-bold text-sm">
              MW
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-grey-900 tracking-tight leading-tight">
                Midwest Wash
              </span>
              <span className="text-[10px] font-semibold text-grey-400 tracking-widest uppercase leading-tight">
                Partners
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-grey-500 hover:text-grey-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+11234567890"
              className="flex items-center gap-1.5 text-sm font-medium text-grey-500 hover:text-grey-900 transition-colors"
            >
              <Phone size={14} />
              (123) 456-7890
            </a>
            <a
              href="#contact"
              className="ml-1 inline-flex items-center rounded-lg bg-rust-600 px-5 py-2 text-sm font-semibold text-white hover:bg-rust-700 transition-colors"
            >
              Start Your Project
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-grey-600 hover:text-grey-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-grey-100">
          <div className="px-6 py-5 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-grey-600 hover:text-grey-900 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+11234567890"
              className="flex items-center gap-2 text-base font-medium text-rust-600"
            >
              <Phone size={16} />
              (123) 456-7890
            </a>
            <a
              href="#contact"
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-rust-600 px-5 py-3 text-sm font-semibold text-white hover:bg-rust-700 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Start Your Project
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
