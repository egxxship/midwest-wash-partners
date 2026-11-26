import type { Metadata } from "next";
import { ButtonLink, Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The Midwest Wash Partners team: in-house construction, engineering, install, service, and operations, under one roof.",
};

// Headshots pending. Swap the initials block for a photo when available.
const team = [
  {
    name: "Ian Cardosi",
    role: "Development & Construction",
    bio: "Leads our in-house general contracting, including entitlement, engineering, and permitting. An electrical engineer who has built car washes for other operators.",
  },
  {
    name: "Steve Keutzer",
    role: "Architecture & Engineering",
    bio: "More than 20 years in architecture and construction. Owns design, bidding, and project management on every build.",
  },
  {
    name: "Steve Foes",
    role: "Install, Maintenance & Operations",
    bio: "Runs equipment installation, maintenance, and day-to-day operations across our sites. A lifelong resident of the area he serves.",
  },
  {
    name: "Michael Sullivan",
    role: "Operations",
    bio: "Handles daily operations, maintenance, and construction support. A long-time member of the community with deep ties across the region's small businesses.",
  },
  {
    name: "Ezra Simons",
    role: "Strategy & Development",
    bio: "Leads strategy, acquisitions, and development. Previously grew Laundry Growth Partners from 5 to 23 laundromats and co-founded a healthcare M&A advisory firm.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("");
}

export default function TeamPage() {
  return (
    <>
      <section aria-labelledby="team-title" className="border-b border-line">
        <Container className="pb-16 pt-12 sm:pt-16 lg:pb-20 lg:pt-20">
          <h1
            id="team-title"
            className="max-w-4xl text-[clamp(2.4rem,1.3rem+4vw,4rem)] font-semibold leading-[1.03] tracking-[-0.035em] text-ink"
          >
            The people who build, fix, and run our washes.
          </h1>
          <p className="mt-7 max-w-2xl text-[1.2rem] leading-relaxed text-ink-2">
            Construction, engineering, installation, service, and operations
            are all handled in-house. When you work with us, you work with the
            people doing the work.
          </p>
        </Container>
      </section>

      <section aria-label="Team members" className="py-20 sm:py-24">
        <Container>
          <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <li key={m.name}>
                <div
                  aria-hidden="true"
                  className="flex aspect-[4/3] items-end rounded-[4px] bg-mist p-6"
                >
                  <span className="text-[3.5rem] font-semibold leading-none tracking-[-0.04em] text-line-strong">
                    {initials(m.name)}
                  </span>
                </div>
                <h2 className="mt-6 text-[1.4rem] font-semibold tracking-[-0.02em] text-ink">{m.name}</h2>
                <p className="mt-1 font-medium text-lake">{m.role}</p>
                <p className="mt-3 leading-relaxed text-ink-2">{m.bio}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="team-cta" className="border-t border-line bg-mist py-20">
        <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <h2 id="team-cta" className="max-w-xl text-[clamp(1.75rem,1.2rem+1.8vw,2.4rem)] font-semibold leading-tight tracking-[-0.025em] text-ink">
            Have a wash, a site, or a station in mind? Let&rsquo;s talk.
          </h2>
          <ButtonLink href="/#contact">Contact us</ButtonLink>
        </Container>
      </section>
    </>
  );
}
