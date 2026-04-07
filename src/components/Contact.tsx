"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const interestOptions = [
  "I want to build a new car wash",
  "I need to refurbish or upgrade my wash",
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
    // In production, this would POST to an API endpoint
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-stone-50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — copy */}
          <div>
            <p className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-3">
              Get in Touch
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight mb-6">
              Let&apos;s Talk About Your Wash
            </h2>
            <p className="text-lg text-stone-500 leading-relaxed mb-10">
              Whether you&apos;re looking to build a new wash, refurbish an
              existing site, optimize your operations, or explore selling your
              property — we&apos;d like to hear from you. No pitch deck
              required.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-stone-200 text-stone-700">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-stone-900">
                    Midwest-Focused
                  </p>
                  <p className="text-sm text-stone-500">
                    Based in Illinois. Active across the Midwest. Consulting
                    available nationwide.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-stone-200 text-stone-700">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-stone-900">Email</p>
                  <p className="text-sm text-stone-500">
                    info@midwestwashpartners.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-stone-200 text-stone-700">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-stone-900">Phone</p>
                  <p className="text-sm text-stone-500">By appointment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="rounded-2xl border border-stone-200 bg-white p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="h-16 w-16 rounded-full bg-stone-100 flex items-center justify-center mb-4">
                  <Send size={28} className="text-stone-700" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  Message Sent
                </h3>
                <p className="text-stone-500">
                  We&apos;ll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 placeholder-stone-400 focus:border-stone-500 focus:ring-1 focus:ring-stone-500/50 outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                {/* Email + Phone row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 placeholder-stone-400 focus:border-stone-500 focus:ring-1 focus:ring-stone-500/50 outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 placeholder-stone-400 focus:border-stone-500 focus:ring-1 focus:ring-stone-500/50 outline-none transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Interest */}
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">
                    I&apos;m Interested In *
                  </label>
                  <select
                    required
                    value={formData.interest}
                    onChange={(e) =>
                      setFormData({ ...formData, interest: e.target.value })
                    }
                    className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 focus:border-stone-500 focus:ring-1 focus:ring-stone-500/50 outline-none transition-colors appearance-none"
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

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 placeholder-stone-400 focus:border-stone-500 focus:ring-1 focus:ring-stone-500/50 outline-none transition-colors resize-none"
                    placeholder="Location, budget range, timeline, or any other details..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-stone-900 px-6 py-3.5 text-sm font-semibold text-white hover:bg-stone-800 transition-colors"
                >
                  Send Message
                  <Send size={16} />
                </button>
                <p className="text-xs text-stone-400 text-center">
                  Your information is kept confidential and never shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
