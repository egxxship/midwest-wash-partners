"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";

const interestOptions = [
  "I want to build a new car wash",
  "I need to refurbish or upgrade my wash",
  "I need help with financing or capital formation",
  "I need consulting, service, or chemical supply",
  "I'm interested in selling my wash property",
  "I want to invest in car washes (LP)",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — copy */}
          <div>
            <p className="text-sm font-semibold text-rust-600 uppercase tracking-wider mb-2">
              Get in Touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-grey-900 tracking-tight mb-4">
              Let&apos;s Talk About Your Wash
            </h2>
            <p className="text-grey-500 leading-relaxed mb-8">
              Building, refurbishing, optimizing, or selling — we&apos;d like to
              hear from you. No pitch deck required.
            </p>

            {/* Urgency */}
            <div className="rounded-xl border border-rust-200 bg-rust-50 p-4 mb-8">
              <div className="flex items-start gap-3">
                <Clock
                  size={16}
                  className="text-rust-600 shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-sm font-semibold text-rust-700 mb-0.5">
                    Limited Project Capacity
                  </p>
                  <p className="text-sm text-rust-600/80">
                    We take on 4–6 development projects per year. Planning for
                    2026–2027? Now is the time to start the conversation.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              <a
                href="tel:+11234567890"
                className="flex items-center gap-3 group"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-grey-100 text-grey-500 group-hover:bg-rust-50 group-hover:text-rust-600 transition-colors">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium text-grey-900">
                    (123) 456-7890
                  </p>
                </div>
              </a>
              <a
                href="mailto:info@midwestwashpartners.com"
                className="flex items-center gap-3 group"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-grey-100 text-grey-500 group-hover:bg-rust-50 group-hover:text-rust-600 transition-colors">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium text-grey-900">
                    info@midwestwashpartners.com
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-grey-100 text-grey-500">
                  <MapPin size={16} />
                </div>
                <p className="text-sm text-grey-500">
                  Based in Illinois. Active across the Midwest. Consulting
                  nationwide.
                </p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="rounded-xl border border-grey-200 bg-grey-50 p-6 lg:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="h-14 w-14 rounded-full bg-green-50 flex items-center justify-center mb-3">
                  <Send size={24} className="text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-grey-900 mb-1">
                  Message Sent
                </h3>
                <p className="text-sm text-grey-500">
                  We&apos;ll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-grey-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-lg border border-grey-200 bg-white px-3.5 py-2.5 text-sm text-grey-900 placeholder-grey-400 focus:border-rust-500 focus:ring-1 focus:ring-rust-500/30 outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-grey-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-lg border border-grey-200 bg-white px-3.5 py-2.5 text-sm text-grey-900 placeholder-grey-400 focus:border-rust-500 focus:ring-1 focus:ring-rust-500/30 outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-grey-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full rounded-lg border border-grey-200 bg-white px-3.5 py-2.5 text-sm text-grey-900 placeholder-grey-400 focus:border-rust-500 focus:ring-1 focus:ring-rust-500/30 outline-none transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-grey-700 mb-1">
                    I&apos;m Interested In *
                  </label>
                  <select
                    required
                    value={formData.interest}
                    onChange={(e) =>
                      setFormData({ ...formData, interest: e.target.value })
                    }
                    className="w-full rounded-lg border border-grey-200 bg-white px-3.5 py-2.5 text-sm text-grey-900 focus:border-rust-500 focus:ring-1 focus:ring-rust-500/30 outline-none transition-colors appearance-none"
                  >
                    <option value="" disabled>
                      Select an option...
                    </option>
                    {interestOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-grey-700 mb-1">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full rounded-lg border border-grey-200 bg-white px-3.5 py-2.5 text-sm text-grey-900 placeholder-grey-400 focus:border-rust-500 focus:ring-1 focus:ring-rust-500/30 outline-none transition-colors resize-none"
                    placeholder="Location, budget range, timeline..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-rust-600 px-5 py-3 text-sm font-semibold text-white hover:bg-rust-700 transition-colors"
                >
                  Send Message
                  <Send size={15} />
                </button>
                <p className="text-xs text-grey-400 text-center">
                  Confidential. Never shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
