import {
  MapPin,
  HardHat,
  BarChart3,
  Settings,
  Wrench,
  Droplets,
} from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Site Selection",
    subtitle: "Find the Moat",
    description:
      "We identify high-traffic, defensible locations in secondary markets where IBAs can dominate. Our process includes traffic analysis, competitive mapping, demographic studies, and full zoning navigation — from entitlement through permit.",
    details: ["Traffic & demographic analysis", "Competitive landscape mapping", "Zoning & entitlement support", "Site feasibility & pro forma modeling"],
  },
  {
    icon: HardHat,
    title: "Development & Build-to-Suit",
    subtitle: "Dirt to Grand Opening",
    description:
      "We handle the full development cycle: concept design, architectural plans, equipment specification and procurement, general contracting oversight, and grand opening strategy. We build turnkey spec washes ready to operate on day one.",
    details: ["Concept design & architecture", "Equipment specification & procurement", "GC oversight & project management", "Grand opening playbook"],
  },
  {
    icon: BarChart3,
    title: "Consulting & Financial Ops",
    subtitle: "Optimize Everything",
    description:
      "From chemical and equipment optimization to fractional CFO services, we help existing operators improve margins and scale. Our analytical approach to budgeting, marketing, and membership building drives measurable results.",
    details: ["Wash optimization (chemicals & equipment)", "Fractional bookkeeping & CFO", "Budgeting & financial modeling", "Marketing & membership strategy"],
  },
  {
    icon: Settings,
    title: "Management",
    subtitle: "Principal-Level Ops",
    description:
      "We provide ongoing, principal-level operational management — not absentee oversight. Our team manages day-to-day operations, staffing, vendor relationships, and continuous improvement with the intensity of an owner-operator.",
    details: ["Day-to-day operations management", "Vendor & supplier management", "Performance monitoring & reporting", "Continuous improvement programs"],
  },
  {
    icon: Wrench,
    title: "Equipment & Service",
    subtitle: "The Trojan Horse",
    description:
      "Our technical services arm provides preventative maintenance, installation, and ongoing support. This is our entry point into operator relationships — once we're servicing your equipment, you see the full value of our platform.",
    details: ["Preventative maintenance programs", "Equipment installation", "Emergency repair & support", "Equipment lifecycle planning"],
  },
  {
    icon: Droplets,
    title: "Soap & Chemicals",
    subtitle: "Soap-as-a-Service",
    description:
      "Proprietary chemical formulations and supply programs optimized for each wash type. We don't just sell soap — we engineer the entire chemical program around your equipment, water conditions, and customer expectations.",
    details: ["Proprietary chemical formulations", "Water condition analysis", "Wash quality optimization", "Recurring supply programs"],
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-navy-950" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold text-gold-400 uppercase tracking-wider mb-3">
            Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            A Car Wash in a Box
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Whether you're building from scratch, acquiring a distressed
            property, or optimizing an existing operation — we provide the
            expertise, equipment, and ongoing support to maximize returns at
            every stage.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative rounded-2xl border border-navy-700/50 bg-navy-900/50 p-8 hover:border-gold-500/30 transition-all duration-300 flex flex-col"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-gold-400 mb-5 group-hover:bg-gold-500/15 transition-colors">
                  <Icon size={24} />
                </div>

                {/* Content */}
                <p className="text-xs font-semibold text-gold-500 uppercase tracking-wider mb-1">
                  {service.subtitle}
                </p>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>

                {/* Detail list */}
                <ul className="space-y-2 pt-5 border-t border-navy-700/50">
                  {service.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-center gap-2 text-sm text-slate-500"
                    >
                      <span className="h-1 w-1 rounded-full bg-gold-500/60 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
