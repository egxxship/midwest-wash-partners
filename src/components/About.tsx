import { TrendingUp, Shield, Layers, Target } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "The Anti-Tunnel Thesis",
    description:
      "While the industry pours capital into express tunnels in saturated markets, we target high-yield IBAs and self-serve hybrids in secondary markets — capturing strong local demand at a fraction of the build cost. Our sites routinely target 40–50% EBITDA margins and ~20% cash-on-cash returns with significantly less capital at risk.",
  },
  {
    icon: Layers,
    title: "Vertically Integrated",
    description:
      "Development feeds Service. Service feeds Chemicals. All of it feeds a profitable asset portfolio. By capturing value at every stage — from the dirt to the soap dispenser — we generate returns traditionally reserved for operators running $5M tunnels.",
  },
  {
    icon: Shield,
    title: "Low-Labor, High-Margin",
    description:
      "IBAs and self-serve bays run lean by design. We layer on tech-enabled memberships via license plate recognition and mobile apps to build sticky, recurring revenue — all with minimal headcount and overhead.",
  },
  {
    icon: TrendingUp,
    title: "Operator-Led, Not Spreadsheet-Led",
    description:
      "We're not consultants who've never gotten their hands dirty. We own and operate active washes. We've scaled multi-location service businesses from scratch. We also bring sell-side banking rigor to every financial model, capital stack, and deal structure — but the foundation is operational, not theoretical.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-stone-50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-3">
            Our Thesis
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight mb-6">
            The Contrarian Cash Cow
          </h2>
          <p className="text-lg text-stone-500 leading-relaxed">
            The car wash industry is overrun with private equity shops deploying
            $4–6M into express friction tunnels on oversaturated metro corners —
            then fighting each other on price. We play a different game. We build
            high-margin In-Bay Automatics and self-serve hybrids in secondary
            markets where the math actually works, and we capture value at every
            stage of the lifecycle.
          </p>
        </div>

        {/* Pillar grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group rounded-2xl border border-stone-200 bg-white p-8 hover:border-stone-300 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-100 text-stone-700 mb-5 group-hover:bg-stone-200 transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-stone-500 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Value chain visual */}
        <div className="mt-16 rounded-2xl border border-stone-200 bg-white p-8 lg:p-12">
          <p className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-4">
            The Value Chain
          </p>
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-0">
            {[
              "Site Selection",
              "Development",
              "Equipment",
              "Chemicals",
              "Service",
              "Management",
            ].map((step, i) => (
              <div key={step} className="flex items-center gap-4 lg:flex-1">
                <div className="flex items-center gap-3 lg:flex-1">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-900 text-white text-sm font-bold">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-stone-800 whitespace-nowrap">
                    {step}
                  </span>
                </div>
                {i < 5 && (
                  <span className="hidden lg:block text-stone-300 text-lg mx-2">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-stone-400">
            Every stage feeds the next. Every stage generates revenue.
            That&apos;s what vertical integration looks like in car wash.
          </p>
        </div>
      </div>
    </section>
  );
}
