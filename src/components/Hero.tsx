import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-grey-900 leading-[1.1] mb-6">
            Turnkey Car Wash Development.{" "}
            <span className="text-rust-600">Returns, Not Headaches.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-grey-500 max-w-2xl mb-8 leading-relaxed">
            We handle everything — site selection, design, equipment,
            construction, chemicals, and ongoing operations. One partner from
            dirt to grand opening and beyond. Low-labor, high-margin IBAs and
            self-serve washes in secondary markets.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-14">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-rust-600 px-7 py-3.5 text-base font-semibold text-white hover:bg-rust-700 transition-colors"
            >
              Start Your Project
              <ArrowRight size={18} />
            </a>
            <a
              href="tel:+11234567890"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-grey-200 bg-white px-7 py-3.5 text-base font-semibold text-grey-700 hover:border-grey-300 hover:bg-grey-50 transition-colors"
            >
              Call (123) 456-7890
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-grey-200">
            <div>
              <p className="text-2xl font-bold text-grey-900">40–50%</p>
              <p className="text-sm text-grey-400 mt-0.5">
                Target EBITDA Margins
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-grey-900">~20%</p>
              <p className="text-sm text-grey-400 mt-0.5">
                Target Cash-on-Cash
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-grey-900">Full Stack</p>
              <p className="text-sm text-grey-400 mt-0.5">
                Build · Equip · Manage
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
