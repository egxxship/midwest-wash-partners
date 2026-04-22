"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does it cost to build a car wash?",
    answer:
      "It depends heavily on the model. An express friction tunnel in a metro market can run $4–6M+. Our focus is on In-Bay Automatics and self-serve hybrids in secondary markets, which typically range from $800K–$2M all-in depending on land, site conditions, and equipment package. We build a detailed pro forma for every project before you commit capital, so you know the numbers upfront.",
  },
  {
    question: "How long does a typical project take from first call to grand opening?",
    answer:
      "Most projects move from discovery call to breaking ground within 60–90 days, depending on zoning and permitting timelines (which vary by municipality). Construction and installation typically run 4–8 months from there. Refurbishments and equipment retrofits are faster — usually 4–12 weeks depending on scope. We'll give you a realistic timeline during the feasibility phase, not an optimistic one.",
  },
  {
    question: "What makes IBAs more attractive than express tunnels?",
    answer:
      "Capital efficiency. An IBA site can target 40–50% EBITDA margins and ~20% cash-on-cash returns at a fraction of the build cost of an express tunnel. They require minimal labor (often unmanned), have lower maintenance complexity, and perform extremely well in secondary markets where tunnel density doesn't justify a $5M+ build. The trade-off is lower gross revenue per site — but the return on invested capital is often significantly higher.",
  },
  {
    question: "Do you only work in Illinois?",
    answer:
      "We're based in Illinois and our development pipeline is concentrated across the Midwest — Illinois, Indiana, Iowa, and Wisconsin. For consulting, fractional CFO, and chemical/equipment services, we work with operators nationwide. If you've got a project in the Midwest, we're your first call. If you're outside the region, reach out anyway — we'll tell you honestly whether we can help.",
  },
  {
    question: "I already own a wash. Can you help me optimize it?",
    answer:
      "Absolutely — that's a core part of what we do. Our consulting and financial ops team will audit your current operation: chemical costs per car, wash-per-car revenue, equipment uptime, membership conversion and churn rates, and overall P&L. From there we build a prioritized playbook to improve margins. We also provide ongoing equipment service, chemical supply, and fractional CFO support if you want a long-term partner rather than a one-time engagement.",
  },
  {
    question: "Are you looking to acquire existing car washes?",
    answer:
      "Yes. We actively acquire underperforming and distressed car wash properties — what we call 'zombie' washes — sitting on strong real estate in our target markets. If you're an owner looking to exit, or you know of a wash that's been neglected, we'd like to hear about it. We move quickly and can provide a straightforward valuation within days of receiving basic property and financial information.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-navy-950" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left — header */}
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold text-gold-400 uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
              Common Questions
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              The questions every operator, investor, and landowner asks before
              picking up the phone. If yours isn&apos;t here, call us — we&apos;ll
              answer it straight.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/20"
            >
              Ask Us Directly
            </a>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-8">
            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={i}
                    className={`rounded-xl border transition-all duration-300 ${
                      isOpen
                        ? "border-gold-500/30 bg-navy-800/40"
                        : "border-navy-700/50 bg-navy-900/30 hover:border-navy-600/50"
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span
                        className={`text-base font-medium transition-colors ${
                          isOpen ? "text-white" : "text-slate-300"
                        }`}
                      >
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-slate-500 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-gold-400" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5">
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
