import {
  MapPin,
  HardHat,
  Building,
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
      "We identify high-traffic, defensible locations in secondary markets where IBAs can dominate. Our process covers traffic counts, competitive mapping, demographic analysis, and full zoning navigation — from initial feasibility through entitlement and permit.",
    details: [
      "Traffic & demographic analysis",
      "Competitive landscape mapping",
      "Zoning & entitlement support",
      "Site feasibility & pro forma modeling",
    ],
  },
  {
    icon: HardHat,
    title: "Development & Build-to-Suit",
    subtitle: "Dirt to Grand Opening",
    description:
      "We handle the full development cycle: concept design, architectural plans, equipment specification and procurement, general contracting oversight, and grand opening strategy. We build turnkey spec washes ready to wash cars on day one.",
    details: [
      "Concept design & architecture",
      "Equipment specification & procurement",
      "GC oversight & project management",
      "Grand opening playbook",
    ],
  },
  {
    icon: Building,
    title: "Acquisitions & Revamps",
    subtitle: "Zombie Revival",
    description:
      "We actively acquire underperforming and distressed car wash properties sitting on strong real estate. Our playbook: acquire the asset, execute a full mechanical and cosmetic revamp, implement modern membership programs, and transition to tech-enabled operations. If you're an owner looking to exit, we'd like to talk.",
    details: [
      "Distressed property sourcing & underwriting",
      "Full mechanical & cosmetic revamp",
      "Membership program implementation",
      "Operational transition & stabilization",
    ],
  },
  {
    icon: BarChart3,
    title: "Consulting & Financial Ops",
    subtitle: "Optimize Everything",
    description:
      "We help existing operators find margin they didn't know they had. Our fractional CFO and analytics function tracks the KPIs that matter — wash-per-car revenue, chemical cost per car, equipment uptime, membership conversion rate, churn, and average revenue per member — then builds the playbook to move them.",
    details: [
      "KPI dashboarding (WPC, ARPM, uptime, churn)",
      "Fractional bookkeeping & CFO services",
      "Chemical & equipment optimization",
      "Marketing & membership growth strategy",
    ],
  },
  {
    icon: Settings,
    title: "Management",
    subtitle: "Principal-Level Ops",
    description:
      "We provide ongoing, principal-level operational management — not absentee oversight. Our team manages day-to-day operations, vendor relationships, and continuous improvement with the intensity of an owner-operator. Because that's what we are.",
    details: [
      "Day-to-day operations management",
      "Vendor & supplier management",
      "Performance monitoring & KPI reporting",
      "Continuous improvement programs",
    ],
  },
  {
    icon: Wrench,
    title: "Equipment & Service",
    subtitle: "The Trojan Horse",
    description:
      "Our technical services arm handles preventative maintenance, installation, and ongoing support across leading equipment platforms including Petit Auto Wash and Dencar Systems. This is our entry point into operator relationships — once we're servicing your equipment, you see the full value of our platform.",
    details: [
      "Preventative maintenance programs",
      "Equipment installation & commissioning",
      "Emergency repair & technical support",
      "Multi-platform equipment expertise",
    ],
  },
  {
    icon: Droplets,
    title: "Soap & Chemicals",
    subtitle: "Chemistry That Performs",
    description:
      "We don't sell a proprietary chemical line — we do something more useful. We engineer the right chemical program for your specific equipment, water conditions, and customer expectations. The right chemistry at the right dilution ratios, dialed in and maintained. Clean cars, lower cost per wash, fewer callbacks.",
    details: [
      "Chemical program engineering",
      "Water condition & dilution optimization",
      "Wash quality management",
      "Recurring supply & replenishment",
    ],
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-white" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-3">
            Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight mb-6">
            A Car Wash in a Box
          </h2>
          <p className="text-lg text-stone-500 leading-relaxed">
            Building from scratch. Refurbishing a tired wash. Optimizing an
            existing operation. Acquiring a distressed property. Whatever the
            starting point, we bring the expertise, equipment, chemicals, and
            boots on the ground to get it running right.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative rounded-2xl border border-stone-200 bg-stone-50 p-8 hover:border-stone-300 hover:shadow-sm transition-all duration-300 flex flex-col"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-200 text-stone-700 mb-5 group-hover:bg-stone-300 transition-colors">
                  <Icon size={24} />
                </div>

                {/* Content */}
                <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">
                  {service.subtitle}
                </p>
                <h3 className="text-xl font-bold text-stone-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>

                {/* Detail list */}
                <ul className="space-y-2 pt-5 border-t border-stone-200">
                  {service.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-center gap-2 text-sm text-stone-400"
                    >
                      <span className="h-1 w-1 rounded-full bg-stone-400 shrink-0" />
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
