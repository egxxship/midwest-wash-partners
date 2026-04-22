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
      "We learn about your project and determine fit. No pitch deck required.",
  },
  {
    icon: MapPin,
    number: "02",
    title: "Site Analysis & Feasibility",
    description:
      "Traffic studies, competitive mapping, zoning review, and a detailed pro forma — before you commit a dollar.",
  },
  {
    icon: Ruler,
    number: "03",
    title: "Design & Engineering",
    description:
      "Facility design optimized for throughput and maintainability. Equipment spec'd to match the site and market.",
  },
  {
    icon: Package,
    number: "04",
    title: "Equipment & Construction",
    description:
      "We source equipment, coordinate contractors, manage permitting, and oversee the build. One point of accountability.",
  },
  {
    icon: HardHat,
    number: "05",
    title: "Installation & Commissioning",
    description:
      "Equipment installed, chemical program dialed in, every system tested. Ready to wash on day one.",
  },
  {
    icon: Rocket,
    number: "06",
    title: "Launch & Ongoing Ops",
    description:
      "Grand opening, membership program launch, and ongoing principal-level management. We don't disappear after the ribbon cutting.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-20 lg:py-28 bg-grey-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-rust-600 uppercase tracking-wider mb-2">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-grey-900 tracking-tight mb-4">
            One Partner. Dirt to Doors.
          </h2>
          <p className="text-grey-500 leading-relaxed">
            Most car wash projects die from fragmentation — too many vendors, no
            one accountable. We put one team around the entire lifecycle.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group bg-white rounded-xl border border-grey-200 p-6 hover:border-rust-200 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rust-50 text-rust-600">
                    <Icon size={20} />
                  </div>
                  <span className="text-xs font-bold text-grey-300 tracking-wider">
                    STEP {step.number}
                  </span>
                </div>
                <h3 className="text-base font-bold text-grey-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-grey-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-sm text-grey-400">
            Most projects go from first call to breaking ground in 60–90 days.
          </p>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center rounded-lg bg-rust-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-rust-700 transition-colors"
          >
            Book a Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}
