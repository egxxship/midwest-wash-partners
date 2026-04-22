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
    description:
      "High-traffic, defensible locations in secondary markets. Traffic counts, competitive mapping, zoning navigation, and full feasibility.",
  },
  {
    icon: HardHat,
    title: "Development & Build-to-Suit",
    description:
      "Concept through grand opening — architectural design, equipment procurement, GC oversight, and turnkey delivery.",
  },
  {
    icon: Building,
    title: "Acquisitions & Revamps",
    description:
      "We buy underperforming washes on strong real estate, execute full revamps, and implement modern membership programs. Owners looking to exit — talk to us.",
  },
  {
    icon: BarChart3,
    title: "Consulting & Financial Ops",
    description:
      "Fractional CFO, KPI dashboarding (WPC, ARPM, uptime, churn), chemical optimization, and membership growth strategy.",
  },
  {
    icon: Settings,
    title: "Management",
    description:
      "Principal-level operational management — not absentee oversight. We run it with the intensity of an owner-operator. Because we are one.",
  },
  {
    icon: Wrench,
    title: "Equipment & Service",
    description:
      "Preventative maintenance, installation, commissioning, and emergency repair across platforms including Petit Auto Wash and Dencar Systems.",
  },
  {
    icon: Droplets,
    title: "Soap & Chemicals",
    description:
      "We engineer the right chemical program for your equipment and water conditions. Right chemistry, right dilution, maintained and supplied.",
  },
];

const partners = [
  "Petit Auto Wash",
  "Dencar Systems",
  "Cat Pumps",
  "Hydra-Flex",
  "Innovative Control Systems",
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-rust-600 uppercase tracking-wider mb-2">
            Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-grey-900 tracking-tight mb-4">
            A Car Wash in a Box
          </h2>
          <p className="text-grey-500 leading-relaxed">
            New build, refurb, acquisition, or optimization — we bring the
            expertise, equipment, chemicals, and boots on the ground.
          </p>
        </div>

        {/* Value chain flow */}
        <div className="mb-12 flex flex-wrap items-center gap-2">
          {[
            "Site Selection",
            "Development",
            "Equipment",
            "Chemicals",
            "Service",
            "Management",
          ].map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-grey-100 px-3 py-1 text-xs font-semibold text-grey-600">
                {step}
              </span>
              {i < 5 && <span className="text-grey-300">→</span>}
            </div>
          ))}
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group rounded-xl border border-grey-200 bg-white p-6 hover:border-rust-200 hover:shadow-sm transition-all"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rust-50 text-rust-600 mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-bold text-grey-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-grey-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Partner strip */}
        <div className="mt-12 pt-8 border-t border-grey-200">
          <p className="text-xs font-semibold text-grey-400 uppercase tracking-wider mb-4 text-center">
            Equipment &amp; Distribution Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {partners.map((partner) => (
              <span
                key={partner}
                className="inline-flex rounded-full border border-grey-200 bg-grey-50 px-4 py-1.5 text-xs font-medium text-grey-500"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
