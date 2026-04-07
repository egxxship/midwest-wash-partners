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
      <div className="absolute inset-0 bg-navy-900" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 to-transparent" />
      {/* Accent glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — copy */}
          <div>
            <p className="text-sm font-semibold text-gold-400 uppercase tracking-wider mb-3">
              Get in Touch
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
              Let&apos;s Talk About Your Wash
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-10">
              Whether you&apos;re looking to build a new wash, refurbish an
              existing site, optimize your operations, or explore selling your
              property — we&apos;d like to hear from you. No pitch deck
              required.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-800 text-gold-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    Midwest-Focused
                  </p>
                  <p className="text-sm text-slate-400">
                    Based in Illinois. Active across the Midwest. Consulting
                    available nationwide.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-800 text-gold-400">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <p className="text-sm text-slate-400">
                    info@midwestwashpartners.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-800 text-gold-400">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Phone</p>
                  <p className="text-sm text-slate-400">By appointment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="rounded-2xl border border-navy-700/50 bg-navy-800/30 p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="h-16 w-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
                  <Send size={28} className="text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Message Sent
                </h3>
                <p className="text-slate-400">
                  We&apos;ll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-lg border border-navy-600 bg-navy-900/50 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/50 outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                {/* Email + Phone row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-lg border border-navy-600 bg-navy-900/50 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/50 outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full rounded-lg border border-navy-600 bg-navy-900/50 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/50 outline-none transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Interest */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">
                    I&apos;m Interested In *
                  </label>
                  <select
                    required
                    value={formData.interest}
                    onChange={(e) =>
                      setFormData({ ...formData, interest: e.target.value })
                    }
                    className="w-full rounded-lg border border-navy-600 bg-navy-900/50 px-4 py-3 text-sm text-white focus:border-gold-500 focus:ring-1 focus:ring-gold-500/50 outline-none transition-colors appearance-none"
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
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full rounded-lg border border-navy-600 bg-navy-900/50 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/50 outline-none transition-colors resize-none"
                    placeholder="Location, budget range, timeline, or any other details..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gold-500 px-6 py-3.5 text-sm font-semibold text-navy-950 hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/20"
                >
                  Send Message
                  <Send size={16} />
                </button>
                <p className="text-xs text-slate-500 text-center">
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
