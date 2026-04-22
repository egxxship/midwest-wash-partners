import {
  Phone,
  MapPin,
  Ruler,
  Package,
  HardHat,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Discovery Call",
    description:
      "We learn about your project — new build, refurb, or acquisition — and determine if we're the right fit. No pitch deck required.",
  },
  {
    icon: MapPin,
    number: "02",
    title: "Site Analysis & Feasibility",
    description:
      "Traffic studies, competitive mapping, zoning review, and a detailed pro forma. You'll know the numbers before you commit a dollar.",
  },
  {
    icon: Ruler,
    number: "03",
    title: "Design & Engineering",
    description:
      "Our architect designs a facility optimized for throughput, customer experience, and maintainability. Equipment is spec'd to match the site and market.",
  },
  {
    icon: Package,
    number: "04",
    title: "Equipment & Construction",
    description:
      "We source equipment, coordinate contractors, manage permitting, and oversee the build. One point of accountability — not six vendors and a prayer.",
  },
  {
    icon: HardHat,
    number: "05",
    title: "Installation & Commissioning",
    description:
      "Our technical team installs equipment, dials in the chemical program, tests every system, and punches out the list. Ready to wash on day one.",
  },
  {
    icon: Rocket,
    number: "06",
    title: "Launch & Ongoing Operations",
    description:
      "Grand opening strategy, membership program launch, and ongoing principal-level management. We don't disappear after the ribbon cutting.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-navy-950" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold text-gold-400 uppercase tracking-wider mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            One Partner. Dirt to Doors.
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Most car wash projects die from fragmentation — too many vendors,
            misaligned timelines, and no one accountable for the outcome. Our
            process puts one team around the entire lifecycle.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div className="hidden lg:block absolute left-[39px] top-8 bottom-8 w-px bg-gradient-to-b from-gold-500/40 via-gold-500/20 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="group flex gap-6 lg:gap-8 items-start"
                >
                  {/* Number + icon */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-navy-700/50 bg-navy-800/50 group-hover:border-gold-500/30 group-hover:bg-navy-800 transition-all duration-300">
                      <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-gold-500 text-navy-950 text-xs font-bold">
                        {step.number}
                      </span>
                      <Icon size={28} className="text-gold-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-2 pb-6 lg:pb-0">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 pt-8 border-t border-navy-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <p className="text-slate-400">
              Ready to start? Most projects go from first call to breaking
              ground in 60–90 days.
            </p>
            <a
              href="#contact"
              className="shrink-0 inline-flex items-center rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/20"
            >
              Book a Discovery Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
