"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does it cost to build a car wash?",
    answer:
      "It depends on the model. Express friction tunnels run $4–6M+ in metro markets. Our focus — IBAs and self-serve hybrids in secondary markets — typically ranges from $800K–$2M all-in. We build a detailed pro forma before you commit capital.",
  },
  {
    question: "How long from first call to grand opening?",
    answer:
      "Most projects move from discovery to breaking ground in 60–90 days, depending on zoning and permitting. Construction and installation typically run 4–8 months. Refurbishments are faster — 4–12 weeks. We'll give you a realistic timeline during feasibility, not an optimistic one.",
  },
  {
    question: "What makes IBAs more attractive than express tunnels?",
    answer:
      "Capital efficiency. An IBA site can target 40–50% EBITDA margins and ~20% cash-on-cash at a fraction of the tunnel build cost. Minimal labor (often unmanned), lower maintenance complexity, and strong performance in secondary markets where tunnel density doesn't justify a $5M+ build.",
  },
  {
    question: "Do you only work in Illinois?",
    answer:
      "We're based in Illinois with our pipeline concentrated across the Midwest. For consulting, fractional CFO, and equipment services, we work with operators nationwide. If you've got a project in the region, we're your first call. Outside it — reach out anyway.",
  },
  {
    question: "I already own a wash. Can you help?",
    answer:
      "That's a core part of what we do. We audit your operation — chemical costs, wash-per-car revenue, uptime, membership conversion and churn — and build a prioritized playbook to improve margins. We also provide ongoing service, chemical supply, and fractional CFO support.",
  },
  {
    question: "Are you buying existing car washes?",
    answer:
      "Yes. We acquire underperforming and distressed properties in our target markets. If you're looking to exit, or know of a neglected wash on good real estate, we'd like to hear about it. We move quickly and can provide a valuation within days.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 lg:py-28 bg-grey-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — header */}
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold text-rust-600 uppercase tracking-wider mb-2">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-grey-900 tracking-tight mb-4">
              Common Questions
            </h2>
            <p className="text-grey-500 leading-relaxed mb-6">
              The questions every operator and investor asks before picking up
              the phone. If yours isn&apos;t here, call us.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg bg-rust-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-rust-700 transition-colors"
            >
              Ask Us Directly
            </a>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-8">
            <div className="space-y-2">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={i}
                    className={`rounded-xl border bg-white transition-all ${
                      isOpen ? "border-rust-200" : "border-grey-200"
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span
                        className={`text-sm font-medium ${
                          isOpen ? "text-grey-900" : "text-grey-700"
                        }`}
                      >
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-grey-400 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-rust-600" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4">
                        <p className="text-sm text-grey-500 leading-relaxed">
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
