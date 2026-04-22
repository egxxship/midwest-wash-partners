import { ArrowRight, TrendingUp, BarChart3, Wrench } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(200,152,44,0.4) 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Accent glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-gold-500/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-navy-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-40 pb-24">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 mb-8">
            <span className="h-2 w-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-xs font-semibold text-gold-400 uppercase tracking-wider">
              Turnkey Car Wash Development &amp; Operations
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Turnkey Car Wash Development for Operators Who Want{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
              Returns, Not Headaches
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-5 leading-relaxed">
            The car wash industry has a coordination problem — equipment
            companies sell machines, contractors build structures, and you&apos;re
            left managing the mess. We fix that.
          </p>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-medium">
            One partner. Site selection through stabilized operations. IBAs and
            self-serve in secondary markets — not $6M tunnel builds on
            oversaturated corners.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-500 px-8 py-4 text-base font-semibold text-navy-950 hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/25"
            >
              Start Your Project
              <ArrowRight size={18} />
            </a>
            <a
              href="tel:+11234567890"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-navy-600 bg-navy-800/50 px-8 py-4 text-base font-semibold text-slate-300 hover:border-gold-500/50 hover:text-white transition-colors"
            >
              Call (123) 456-7890
            </a>
          </div>

          {/* Stats / proof bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-navy-800">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-800 text-gold-400">
                <TrendingUp size={22} />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">40–50%</p>
                <p className="text-sm text-slate-400">Target EBITDA Margins</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-800 text-gold-400">
                <BarChart3 size={22} />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">~20%</p>
                <p className="text-sm text-slate-400">
                  Target Cash-on-Cash Returns
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-800 text-gold-400">
                <Wrench size={22} />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Full Stack</p>
                <p className="text-sm text-slate-400">
                  Build · Equip · Service · Manage
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
