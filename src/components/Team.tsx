const team = [
  {
    name: "Ezra",
    role: "Head of Development",
    bio: "Leads site selection, capital formation, financing strategy, and long-term growth. Ezra brings a background in sell-side investment banking and a track record of scaling multi-location service businesses — including a commercial laundromat chain and pickup-and-delivery service across the Chicago metro. His analytical approach to real estate development, zoning, and capital allocation drives every deal from initial underwriting through stabilized operations.",
    specialties: [
      "Site Selection & Acquisition",
      "Capital Formation & Financing",
      "Operations Strategy",
      "Financial Modeling & M&A",
    ],
  },
  {
    name: "Ian Cardosi",
    role: "Infrastructure & Field Operations",
    bio: "Ian is a hands-on infrastructure engineer with a deep construction background and direct experience owning and operating active car wash locations. He oversees all technical field operations — from equipment installation and commissioning to preventative maintenance and emergency service. Ian's dual perspective as both builder and operator ensures that every project is engineered for real-world durability and operational efficiency.",
    specialties: [
      "Construction & Site Development",
      "Equipment Installation",
      "Preventative Maintenance",
      "Active Wash Operations",
    ],
  },
  {
    name: "Steve",
    role: "Lead Architect & Project Management",
    bio: "Steve is the lead architect behind our development projects, bringing extensive commercial design experience to every engagement. He has designed several modern car wash facilities and leads the full project management lifecycle — from initial concept and architectural planning through procurement, permitting, and construction oversight. Steve ensures that each facility is optimized for throughput, customer experience, and long-term maintainability.",
    specialties: [
      "Commercial Architecture",
      "Car Wash Facility Design",
      "Project Management",
      "Procurement & Permitting",
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
            Operators, Not Consultants
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Our team combines hands-on operational experience with financial
            rigor. We've built, managed, and scaled the types of businesses we
            advise on — and we put our own capital alongside yours.
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
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-xl font-bold text-white">
                    {member.name}
                  </h3>
                </div>
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
