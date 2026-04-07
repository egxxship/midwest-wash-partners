import { ArrowRight, TrendingUp, BarChart3, Wrench } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white" />
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(168,162,158,0.3) 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-stone-100 px-4 py-1.5 mb-8">
            <span className="h-2 w-2 rounded-full bg-stone-700 animate-pulse" />
            <span className="text-xs font-semibold text-stone-700 uppercase tracking-wider">
              Turnkey Development, Redevelopment, Management &amp; Financial Services
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-stone-900 leading-[1.1] mb-6">
            We Build, Equip &amp; Optimize{" "}
            <span className="text-stone-500">
              High-Yield Car Washes
            </span>{" "}
            — So You Don&apos;t Have To
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-stone-500 max-w-2xl mb-10 leading-relaxed">
            Whether you&apos;re breaking ground on a new site, refurbishing an
            aging wash, or trying to squeeze more profit out of an existing
            operation — we handle the full lifecycle. Site selection. Equipment.
            Chemicals. Service. Management. One call.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-stone-900 px-8 py-4 text-base font-semibold text-white hover:bg-stone-800 transition-colors shadow-lg shadow-stone-900/15"
            >
              Start Your Project
              <ArrowRight size={18} />
            </a>
            <a
              href="#capabilities"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-300 bg-white px-8 py-4 text-base font-semibold text-stone-700 hover:border-stone-400 hover:text-stone-900 transition-colors"
            >
              See Our Capabilities
            </a>
          </div>

          {/* Stats / proof bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-stone-200">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-stone-100 text-stone-700">
                <TrendingUp size={22} />
              </div>
              <div>
                <p className="text-2xl font-bold text-stone-900">40–50%</p>
                <p className="text-sm text-stone-500">Target EBITDA Margins</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-stone-100 text-stone-700">
                <BarChart3 size={22} />
              </div>
              <div>
                <p className="text-2xl font-bold text-stone-900">~20%</p>
                <p className="text-sm text-stone-500">
                  Target Cash-on-Cash Returns
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-stone-100 text-stone-700">
                <Wrench size={22} />
              </div>
              <div>
                <p className="text-2xl font-bold text-stone-900">Full Stack</p>
                <p className="text-sm text-stone-500">
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
