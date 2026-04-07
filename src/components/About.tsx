import { TrendingUp, Shield, Layers, Target } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "The Anti-Tunnel Thesis",
    description:
      "While the industry chases $5M express tunnels in saturated metro markets, we focus on high-yield In-Bay Automatics and self-serve hybrids in secondary markets — capturing strong local demand with a fraction of the capital.",
  },
  {
    icon: Layers,
    title: "Vertically Integrated",
    description:
      "Development feeds Service. Service feeds Chemicals. All of it feeds a highly profitable asset portfolio. By capturing value at every stage, we generate revenue multiples traditionally reserved for express tunnels.",
  },
  {
    icon: Shield,
    title: "Low-Labor, High-Margin",
    description:
      "Our operations are built around the automated nature of IBAs and self-serve bays. Minimal headcount, tech-enabled memberships via LPR and mobile apps, and sticky recurring revenue.",
  },
  {
    icon: TrendingUp,
    title: "Operator-Led, Not Spreadsheet-Led",
    description:
      "We're not passive capital deployers. We bring an operational pedigree from scaling multi-location service businesses, paired with sell-side banking rigor on financial modeling, capital allocation, and deal structuring.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-900" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold text-gold-400 uppercase tracking-wider mb-3">
            Our Thesis
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            The Contrarian Cash Cow
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            The car wash industry is dominated by private equity firms deploying
            massive capital into express friction tunnels on expensive metro
            corners. We see the bigger opportunity in the spaces they ignore —
            and we've built an ecosystem to capture it end-to-end.
          </p>
        </div>

        {/* Pillar grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group rounded-2xl border border-navy-700/50 bg-navy-800/30 p-8 hover:border-gold-500/30 hover:bg-navy-800/50 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400 mb-5 group-hover:bg-gold-500/20 transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Value chain visual */}
        <div className="mt-16 rounded-2xl border border-navy-700/50 bg-navy-800/20 p-8 lg:p-12">
          <p className="text-sm font-semibold text-gold-400 uppercase tracking-wider mb-4">
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
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-500/20 text-gold-400 text-sm font-bold">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-white whitespace-nowrap">
                    {step}
                  </span>
                </div>
                {i < 5 && (
                  <span className="hidden lg:block text-navy-600 text-lg mx-2">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Every stage feeds the next. Every stage generates revenue. That's
            what vertical integration looks like in car wash.
          </p>
        </div>
      </div>
    </section>
  );
}
