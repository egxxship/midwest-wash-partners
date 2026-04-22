import { Building, MapPin, ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Express Suds LLC",
    location: "Illinois",
    status: "Active",
    type: "IBA / Self-Serve",
    scope: "Acquisition, full revamp & ongoing management",
    description:
      "Acquired underperforming wash on strong real estate. Full mechanical and cosmetic overhaul, modern membership program with LPR, now under principal-level management.",
  },
  {
    name: "Mike's Express Wash",
    location: "Illinois",
    status: "Active",
    type: "In-Bay Automatic",
    scope: "Equipment, chemical supply & consulting",
    description:
      "Ongoing equipment service and chemical supply. Technical maintenance, wash quality optimization, and operational consulting driving membership growth.",
  },
  {
    name: "Princeton Development",
    location: "Princeton, IL",
    status: "In Process",
    type: "Ground-Up Development",
    scope: "Full lifecycle — site selection through build-out",
    description:
      "Ground-up development project. Site entitlement, architectural design, equipment specification, and construction oversight — dirt to doors.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 lg:py-28 bg-grey-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-rust-600 uppercase tracking-wider mb-2">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-grey-900 tracking-tight mb-4">
            Active &amp; In-Process Projects
          </h2>
          <p className="text-grey-500 leading-relaxed">
            Acquisitions, ground-up development, and management engagements
            across Illinois and the Midwest.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-white rounded-xl border border-grey-200 p-6 hover:border-rust-200 hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-grey-100 text-grey-500">
                  <Building size={20} />
                </div>
                <span
                  className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    project.status === "Active"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-rust-50 text-rust-700 border border-rust-200"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <h3 className="text-base font-bold text-grey-900 mb-1">
                {project.name}
              </h3>
              <div className="flex items-center gap-1 text-xs text-grey-400 mb-3">
                <MapPin size={12} />
                {project.location}
              </div>

              <div className="text-xs text-grey-400 mb-1">
                <span className="font-semibold uppercase tracking-wider">
                  Type
                </span>{" "}
                {project.type}
              </div>
              <div className="text-xs text-grey-400 mb-3">
                <span className="font-semibold uppercase tracking-wider">
                  Scope
                </span>{" "}
                {project.scope}
              </div>

              <p className="text-sm text-grey-500 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-rust-600 hover:text-rust-700 transition-colors"
          >
            Have a site, a wash, or a question? Let&apos;s talk
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
