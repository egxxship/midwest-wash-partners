const team = [
  {
    name: "Ian Cardosi",
    role: "Managing Partner",
    bio: "Ian runs the show. He sets the strategic direction for the firm, manages key partnerships, and stays close to every project — from deal sourcing through equipment commissioning and daily field ops. He comes from a deep construction background and owns and operates active car wash locations himself. Ian's the guy who'll be on-site at 6 AM troubleshooting a pump and in the conference room by noon closing a deal. That dual perspective — builder and business operator — is what makes the whole platform work.",
    specialties: [
      "Strategic Leadership & Deal Sourcing",
      "Partner & Investor Relations",
      "Construction & Field Operations",
      "Active Wash Ownership & Operations",
    ],
  },
  {
    name: "Steve",
    role: "Lead Architect & Project Management",
    bio: "Steve designs the washes and runs the builds. He brings years of commercial architecture experience and has designed multiple modern car wash facilities from the ground up. He owns the full project management lifecycle — concept, architectural plans, procurement, permitting, and construction oversight. If it's getting built, Steve's fingerprints are on every drawing and every punchlist.",
    specialties: [
      "Commercial Architecture & Facility Design",
      "Project Management & GC Oversight",
      "Equipment Procurement & Specification",
      "Permitting & Construction Administration",
    ],
  },
  {
    name: "Ezra",
    role: "Operations & Development",
    bio: "Ezra handles the numbers and the growth. He drives site selection, capital formation, financing, and operational strategy across the portfolio. Before car wash, he built and scaled a commercial laundromat chain and a pickup-and-delivery service across Chicagoland, and spent time in sell-side investment banking. He runs the analytical engine behind every deal — underwriting, financial modeling, KPI tracking, and performance optimization — and manages the fractional CFO function for managed properties.",
    specialties: [
      "Site Selection & Acquisition",
      "Capital Formation & Deal Structuring",
      "Financial Modeling & KPI Analytics",
      "Fractional CFO & Operational Scaling",
    ],
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-navy-950" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold text-gold-400 uppercase tracking-wider mb-3">
            Leadership
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            We Build What We Sell
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            No ivory tower. No slide decks without calluses. Our team has built,
            bought, operated, and scaled the kinds of businesses we work on
            every day — and we put our own money alongside yours.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="group rounded-2xl border border-navy-700/50 bg-navy-900/40 overflow-hidden hover:border-gold-500/30 transition-all duration-300"
            >
              {/* Avatar placeholder */}
              <div className="h-48 bg-gradient-to-br from-navy-800 to-navy-700 flex items-center justify-center">
                <div className="h-24 w-24 rounded-full bg-navy-600/50 border-2 border-navy-500/30 flex items-center justify-center">
                  <span className="text-3xl font-bold text-gold-400">
                    {member.name.charAt(0)}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-gold-400 mb-4">
                  {member.role}
                </p>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="inline-flex rounded-full bg-navy-800 border border-navy-700/50 px-3 py-1 text-xs text-slate-400"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
