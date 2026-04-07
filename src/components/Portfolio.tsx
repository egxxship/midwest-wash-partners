import { Building, MapPin, ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Express Suds LLC",
    location: "Illinois",
    status: "Active",
    type: "IBA / Self-Serve",
    scope: "Acquisition, full revamp & ongoing management",
    description:
      "Acquired an underperforming wash on strong real estate. Executed a full mechanical and cosmetic overhaul, implemented a modern membership program with LPR, and transitioned to tech-enabled operations. Now under active principal-level management.",
  },
  {
    name: "Mike's Express Wash",
    location: "Illinois",
    status: "Active",
    type: "In-Bay Automatic",
    scope: "Equipment, chemical supply & operational consulting",
    description:
      "Ongoing equipment service and chemical supply engagement. Providing technical maintenance, wash quality optimization, and hands-on operational consulting to drive membership growth and improve per-car economics.",
  },
  {
    name: "Princeton Development",
    location: "Princeton, IL",
    status: "In Process",
    type: "Ground-Up Development",
    scope: "Full lifecycle — site selection through build-out",
    description:
      "Active ground-up development demonstrating the full vertical integration model. Managing site entitlement, architectural design, equipment specification, and construction oversight from dirt to doors.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-stone-50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight mb-6">
            Active &amp; In-Process Projects
          </h2>
          <p className="text-lg text-stone-500 leading-relaxed">
            Our portfolio spans acquisitions, ground-up development,
            refurbishments, and ongoing management engagements across Illinois
            and the broader Midwest. Results for active projects are being
            tracked and will be published as they mature.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group rounded-2xl border border-stone-200 bg-white overflow-hidden hover:border-stone-300 hover:shadow-sm transition-all duration-300"
            >
              {/* Card header */}
              <div className="p-8 pb-0">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-100 text-stone-700">
                    <Building size={22} />
                  </div>
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                      project.status === "Active"
                        ? "bg-stone-100 text-stone-700 border border-stone-300"
                        : "bg-stone-100 text-stone-500 border border-stone-200"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-stone-900 mb-1">
                  {project.name}
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-stone-400 mb-4">
                  <MapPin size={14} />
                  {project.location}
                </div>
              </div>

              {/* Card body */}
              <div className="px-8 pb-8">
                <div className="mb-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider shrink-0 pt-0.5">
                      Type
                    </span>
                    <span className="text-sm text-stone-600">
                      {project.type}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider shrink-0 pt-0.5">
                      Scope
                    </span>
                    <span className="text-sm text-stone-600">
                      {project.scope}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-stone-700 hover:text-stone-900 font-medium transition-colors"
          >
            Have a site, a wash, or a question? Let&apos;s talk
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
