const team = [
  {
    name: "Ian Cardosi",
    role: "Managing Partner",
    bio: "Ian runs the show — strategic direction, key partnerships, and direct involvement in every project from deal sourcing through daily field ops. Deep construction background, active car wash owner-operator. On-site at 6 AM troubleshooting a pump, in the conference room by noon closing a deal.",
    specialties: [
      "Strategic Leadership",
      "Construction & Field Ops",
      "Active Wash Operations",
    ],
  },
  {
    name: "Steve",
    role: "Lead Architect & Project Management",
    bio: "Steve designs the washes and runs the builds. Years of commercial architecture, multiple car wash facilities designed from the ground up. Owns the full PM lifecycle — concept through punchlist. If it's getting built, Steve's fingerprints are on every drawing.",
    specialties: [
      "Commercial Architecture",
      "Project Management",
      "Equipment Procurement",
    ],
  },
  {
    name: "Ezra",
    role: "Operations & Development",
    bio: "Ezra handles the numbers and the growth — site selection, capital formation, financing, and operational strategy. Background in sell-side banking and scaling multi-location service businesses across Chicagoland. Runs the analytical engine and fractional CFO function.",
    specialties: [
      "Site Selection & M&A",
      "Financial Modeling",
      "Fractional CFO",
    ],
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-rust-600 uppercase tracking-wider mb-2">
            Leadership
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-grey-900 tracking-tight mb-4">
            We Build What We Sell
          </h2>
          <p className="text-grey-500 leading-relaxed">
            No slide decks without calluses. Our team has built, bought, and
            operated the kinds of businesses we work on every day.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-xl border border-grey-200 bg-white overflow-hidden hover:border-rust-200 hover:shadow-sm transition-all"
            >
              {/* Avatar placeholder */}
              <div className="h-36 bg-grey-100 flex items-center justify-center">
                <div className="h-20 w-20 rounded-full bg-white border border-grey-200 flex items-center justify-center">
                  <span className="text-2xl font-bold text-rust-600">
                    {member.name.charAt(0)}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-base font-bold text-grey-900 mb-0.5">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-rust-600 mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-grey-500 leading-relaxed mb-4">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {member.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="inline-flex rounded-full bg-grey-100 px-2.5 py-0.5 text-xs text-grey-500"
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
