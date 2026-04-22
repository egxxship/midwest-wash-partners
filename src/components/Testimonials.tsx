import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We had a wash that was limping along — equipment down every other week, chemicals all wrong, customers leaving one-star reviews. MWP came in, diagnosed every system in two days, and had us running clean inside a month. Their install crew doesn't cut corners. Period.",
    name: "Draft — Operator",
    role: "Owner / Operator",
    company: "IBA Location, Central IL",
    metric: "Back to 95%+ Uptime",
  },
  {
    quote:
      "I've worked with contractors who disappear after the install. These guys commissioned every piece of equipment themselves, dialed in the chemical ratios on-site, and didn't leave until the punch list was zeroed out. First wash came out perfect. That's rare in this industry.",
    name: "Draft — New Build Client",
    role: "Owner / Investor",
    company: "New Development, IL",
    metric: "Zero Punch List at Handoff",
  },
  {
    quote:
      "What sold me was the service side. When we had a pump failure on a Saturday morning, their tech was on-site before noon with the right parts. They don't just sell you equipment and hand you an 800 number — they actually stand behind the install with real support.",
    name: "Draft — Service Client",
    role: "Operator",
    company: "Self-Serve / IBA, Midwest",
    metric: "Same-Day Emergency Response",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-navy-900" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold text-gold-400 uppercase tracking-wider mb-3">
            From Our Clients
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            Don&apos;t Take Our Word for It
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Here&apos;s what operators and investors say about working with
            Midwest Wash Partners.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-navy-700/50 bg-navy-800/30 p-8 hover:border-gold-500/20 transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500/10 text-gold-400 mb-5">
                <Quote size={20} />
              </div>

              {/* Quote text */}
              <p className="text-slate-300 leading-relaxed mb-6 flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Metric badge */}
              <div className="mb-5">
                <span className="inline-flex rounded-full bg-gold-500/10 border border-gold-500/20 px-3 py-1 text-xs font-semibold text-gold-400">
                  {t.metric}
                </span>
              </div>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-5 border-t border-navy-700/50">
                <div className="h-10 w-10 rounded-full bg-navy-700/50 flex items-center justify-center text-sm font-bold text-gold-400">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
