import { Building, MapPin, ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Express Suds LLC",
    location: "Illinois",
    status: "Active",
    type: "IBA / Self-Serve",
    scope: "Acquisition, revamp & ongoing management",
    description:
      "Acquired underperforming asset on strong real estate. Executed full mechanical and cosmetic revamp, implemented membership program, and transitioned to tech-enabled operations with LPR integration.",
  },
  {
    name: "Mike's Express Wash",
    location: "Illinois",
    status: "Active",
    type: "In-Bay Automatic",
    scope: "Equipment, service & operational consulting",
    description:
      "Ongoing equipment service and chemical supply relationship. Providing technical maintenance, wash quality optimization, and operational consulting to drive membership growth and margin improvement.",
  },
  {
    name: "Princeton Development",
    location: "Princeton, IL",
    status: "In Process",
    type: "Ground-Up Development",
    scope: "Full lifecycle — site selection through build-out",
    description:
      "Active ground-up development project demonstrating the full vertical integration model. Managing site entitlement, architectural design, equipment specification, and construction oversight.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-navy-900" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold text-gold-400 uppercase tracking-wider mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            Active & In-Process Projects
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Our portfolio spans acquisitions, ground-up development, and ongoing
            management engagements across Illinois and the broader Midwest.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group rounded-2xl border border-navy-700/50 bg-navy-800/30 overflow-hidden hover:border-gold-500/30 transition-all duration-300"
            >
              {/* Card header */}
              <div className="p-8 pb-0">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-700/50 text-gold-400">
                    <Building size={22} />
                  </div>
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                      project.status === "Active"
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        : "bg-gold-500/10 text-gold-400 border border-gold-500/20"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {project.name}
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-slate-500 mb-4">
                  <MapPin size={14} />
                  {project.location}
                </div>
              </div>

              {/* Card body */}
              <div className="px-8 pb-8">
                <div className="mb-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider shrink-0 pt-0.5">
                      Type
                    </span>
                    <span className="text-sm text-slate-300">
                      {project.type}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider shrink-0 pt-0.5">
                      Scope
                    </span>
                    <span className="text-sm text-slate-300">
                      {project.scope}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
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
            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-medium transition-colors"
          >
            Interested in our pipeline? Let's talk
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
