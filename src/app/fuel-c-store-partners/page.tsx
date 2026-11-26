import type { Metadata } from "next";
import { Check } from "lucide-react";
import { ButtonLink, Container, ContactSection, SectionHead } from "@/components/ui";

export const metadata: Metadata = {
  title: "Fuel & C-Store Partners",
  description:
    "Have a car wash behind your pumps? Midwest Wash Partners leases it, funds the rebuild, runs it, and pays you rent, while wash members fill up and shop with you every week.",
};

const problems = [
  { title: "It isn't your core business", body: "Fuel and the store pay the bills. The wash gets attention only when it breaks." },
  { title: "Fixing it right is a big check", body: "Modern touchless equipment and a real bay rebuild cost far more than most operators want to spend on a side business." },
  { title: "When it goes down, it stays down", body: "Without a service network or parts on hand, one fault can mean a dark bay for days and customers who stop coming back." },
  { title: "No members, no marketing", body: "Pay-per-wash only, with no plan to bring drivers back each week." },
];

const steps = [
  { title: "Lease us the wash", body: "A long-term lease on the wash building and pad. The store and the pumps stay yours.", img: "/photos/step-lease.webp", alt: "An empty touchless wash bay with yellow safety bollards" },
  { title: "We rebuild it", body: "We fund the equipment and buildout, and our own crew does the work.", img: "/photos/step-rebuild.webp", alt: "New blue dryer equipment installed overhead in a rebuilt bay" },
  { title: "We run it", body: "We operate, service, and market the wash and build its membership base.", img: "/photos/step-run.webp", alt: "A car covered in green triple foam during a touchless wash" },
  { title: "You collect", body: "Rent every month, plus members filling up and shopping inside every week.", img: "/photos/step-collect.webp", alt: "A clean black car in the bay after its wash" },
];

const responsibilities: [string, "us" | "you" | "shared"][] = [
  ["Equipment and buildout capital", "us"],
  ["Repairs, service calls, and uptime", "us"],
  ["Daily operations, cleaning, and supplies", "us"],
  ["Memberships, pricing, and marketing", "us"],
  ["Wash utilities and insurance (sub-metered)", "us"],
  ["Cross-promotion at the pump and register", "shared"],
  ["Monthly rent", "you"],
];

const pump = [
  { title: "Members save at the pump", body: "A cents-off-per-gallon perk for wash members makes your station their regular stop." },
  { title: "Wash receipts sell inside", body: "Coffee, fountain drink, or snack offers on every wash receipt and member message." },
  { title: "Fleets fill up too", body: "The municipal and service fleets we sign for washes become regular fuel customers." },
];

// Express Suds figures: confirm against the CFO control panel before launch.
const caseFigures = [
  { figure: "358", label: "paying wash members" },
  { figure: "$0", label: "spent on marketing; growth came from word of mouth" },
  { figure: "Aug 2025", label: "opened, on a road carrying about 11,500 vehicles a day" },
];

const timeline = [
  { when: "Week 1", title: "Site walk", body: "We look at the bay, the traffic, and the equipment." },
  { when: "Weeks 2–3", title: "Proposal", body: "Rent, rebuild scope, and a signed letter of intent." },
  { when: "Weeks 4–6", title: "Lease", body: "Lease signed and equipment ordered." },
  { when: "Months 2–5", title: "Rebuild", body: "Our crew installs while your store stays open." },
  { when: "Opening", title: "Launch", body: "Member drive, signage, and a local push." },
];

function Mark() {
  return (
    <span className="inline-flex items-center gap-2">
      <Check size={16} strokeWidth={2.25} className="text-lake" aria-hidden="true" />
      <span className="sr-only">Yes</span>
    </span>
  );
}

export default function FuelPage() {
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="fuel-title" className="border-b border-line">
        <Container className="grid gap-12 pb-20 pt-12 sm:pt-16 lg:grid-cols-12 lg:pb-24 lg:pt-20">
          <div className="lg:col-span-8">
            <h1
              id="fuel-title"
              className="text-[clamp(2.4rem,1.3rem+4vw,4rem)] font-semibold leading-[1.03] tracking-[-0.035em] text-ink"
            >
              Turn the wash behind your pumps into rent and repeat customers.
            </h1>
            <p className="mt-7 max-w-2xl text-[1.2rem] leading-relaxed text-ink-2">
              We lease your car wash, fund the rebuild, and run it, with no
              capital from you. You collect rent, and every weekly wash member is
              another visit to your pumps and your store.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="?topic=fuel#contact">Let&rsquo;s walk your wash</ButtonLink>
              <ButtonLink href="#how-it-works" variant="secondary">See how it works</ButtonLink>
            </div>
          </div>
          <aside className="self-end lg:col-span-4">
            <img
              src="/photos/wash-in-action.webp"
              width={1200}
              height={1600}
              alt="A pickup truck inside a touchless wash bay, mid-wash under colored lighting"
              className="mb-6 aspect-[3/4] w-full rounded-[4px] object-cover"
              fetchPriority="high"
            />
            <ul className="space-y-4 border-t-2 border-ink pt-6 text-[1.05rem] text-ink">
              <li><span className="font-semibold">No capital</span> <span className="text-ink-2">from you for the rebuild</span></li>
              <li><span className="font-semibold">Uptime</span> <span className="text-ink-2">backed by our own service techs</span></li>
              <li><span className="font-semibold">Memberships</span> <span className="text-ink-2">that bring drivers back weekly</span></li>
              <li><span className="font-semibold">Monthly rent</span> <span className="text-ink-2">paid to you</span></li>
            </ul>
          </aside>
        </Container>
      </section>

      {/* Problem */}
      <section aria-labelledby="problem-title" className="py-24 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead
              id="problem-title"
              title="It sits behind your pumps, and nobody really owns it."
              lede="Most station washes we see have the same problems. None of them are about the location."
            />
          </div>
          <dl className="grid gap-x-10 sm:grid-cols-2 lg:col-span-7">
            {problems.map((p) => (
              <div key={p.title} className="border-t border-line py-7">
                <dt className="text-[1.15rem] font-semibold tracking-[-0.01em] text-ink">{p.title}</dt>
                <dd className="mt-2 leading-relaxed text-ink-2">{p.body}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* How it works */}
      <section id="how-it-works" aria-labelledby="how-title" className="border-t border-line bg-mist py-24 sm:py-28">
        <Container>
          <SectionHead
            id="how-title"
            title="You lease us the wash. We take it from there."
          />
          <ol className="mt-16 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="bg-paper">
                <img
                  src={s.img}
                  width={1200}
                  height={750}
                  loading="lazy"
                  alt={s.alt}
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="p-7">
                  <span className="tnum text-[0.95rem] font-semibold text-lake">Step {i + 1}</span>
                  <h3 className="mt-3 text-[1.3rem] font-semibold tracking-[-0.015em] text-ink">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-2">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <figure className="mt-16">
            <video
              className="aspect-[1080/608] w-full rounded-[4px] bg-ink object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/video/wash-foam-poster.webp"
              aria-label="Video: a car moving through a rebuilt touchless bay, covered in green triple foam"
            >
              <source src="/video/wash-foam.mp4" type="video/mp4" />
            </video>
            <figcaption className="mt-3 text-[0.9rem] text-ink-3">
              Triple foam in a rebuilt bay — Express Suds, Ottawa, IL.
            </figcaption>
          </figure>

          <div className="mt-20 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h3 className="text-[1.6rem] font-semibold leading-tight tracking-[-0.02em] text-ink">
                Who does what
              </h3>
              <p className="mt-4 leading-relaxed text-ink-2">
                Almost everything is on us. Each site gets its own lease, priced on
                its traffic and condition: fixed monthly rent plus a share of
                revenue above an agreed level.
              </p>
            </div>
            <div className="min-w-0 overflow-x-auto lg:col-span-8">
              <table className="w-full border-collapse text-left text-[1rem]">
                <caption className="sr-only">Responsibilities of Midwest Wash Partners and the station operator</caption>
                <thead>
                  <tr className="border-b-2 border-ink">
                    <th scope="col" className="py-3 pr-4 font-semibold text-ink">Responsibility</th>
                    <th scope="col" className="w-16 py-3 text-center font-semibold text-ink sm:w-28">MWP</th>
                    <th scope="col" className="w-16 py-3 text-center font-semibold text-ink sm:w-28">You</th>
                  </tr>
                </thead>
                <tbody>
                  {responsibilities.map(([r, who]) => (
                    <tr key={r} className="border-b border-line">
                      <th scope="row" className="py-4 pr-4 font-normal text-ink-2">{r}</th>
                      <td className="py-4 text-center">
                        {who === "us" || who === "shared" ? <Mark /> : <span className="text-ink-3" aria-label="No">—</span>}
                      </td>
                      <td className="py-4 text-center">
                        {who === "you" ? (
                          <span className="text-[0.9rem] font-semibold text-ink sm:text-[1rem]">You collect</span>
                        ) : who === "shared" ? (
                          <Mark />
                        ) : (
                          <span className="text-ink-3" aria-label="No">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* Partner at the pump */}
      <section aria-labelledby="pump-title" className="border-t border-line py-24 sm:py-28">
        <Container>
          <SectionHead
            id="pump-title"
            title="Partner at the pump."
            lede="A member who washes three or four times a month is a regular at your station. We set up the wash so it sends customers to your pumps and your register."
          />
          <ul className="mt-14 grid gap-x-10 md:grid-cols-3">
            {pump.map((p) => (
              <li key={p.title} className="border-t-2 border-ink py-7">
                <h3 className="text-[1.2rem] font-semibold tracking-[-0.01em] text-ink">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-2">{p.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Case study */}
      <section aria-labelledby="case-title" className="bg-night py-24 text-white sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="case-title" className="text-[clamp(2rem,1.2rem+2.6vw,3rem)] font-semibold leading-[1.06] tracking-[-0.03em]">
              A station wash, rebuilt and filled with members.
            </h2>
            <p className="mt-6 text-[1.1rem] leading-relaxed text-night-2">
              <span className="font-semibold text-white">Express Suds, Ottawa, Illinois.</span>{" "}
              A touchless in-bay wash inside a branded fuel station, opened with
              modern equipment and a membership program from day one.
            </p>
            <img
              src="/photos/station-exterior.webp"
              width={1500}
              height={1263}
              loading="lazy"
              alt="The Express Suds wash bay beside the station's convenience store"
              className="mt-8 aspect-[4/3] w-full rounded-[4px] object-cover"
            />
          </div>
          <dl className="self-start divide-y divide-night-line border-y border-night-line lg:col-span-6 lg:col-start-7">
            {caseFigures.map((f) => (
              <div key={f.label} className="flex items-baseline gap-6 py-7">
                <dd className="w-40 shrink-0 whitespace-nowrap text-[clamp(1.8rem,1.4rem+1.2vw,2.4rem)] font-semibold leading-none tracking-[-0.03em] text-bolt">{f.figure}</dd>
                <dt className="order-last text-[1.05rem] leading-snug text-night-2">{f.label}</dt>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Dixon conversion */}
      <section aria-labelledby="dixon-title" className="py-24 sm:py-28">
        <Container>
          <SectionHead
            id="dixon-title"
            title="Next up: Dixon, Illinois."
            lede={
              <>
                A leased station wash we&rsquo;re rebuilding into a Stella&rsquo;s
                Car Wash, our consumer wash brand — new touchless equipment,
                24-hour operation, and memberships.
              </>
            }
          />
          <div className="mt-14 grid gap-x-6 gap-y-10 md:grid-cols-3">
            <figure>
              <img
                src="/photos/wash-as-found.webp"
                width={1500}
                height={1125}
                loading="lazy"
                alt="The Dixon wash as leased: a dated building under an overcast sky"
                className="aspect-[16/10] w-full rounded-[4px] object-cover"
              />
              <figcaption className="mt-3 text-[0.9rem] text-ink-3">
                <span className="font-semibold text-ink">As leased.</span> The
                wash as we found it.
              </figcaption>
            </figure>
            <figure>
              <img
                src="/photos/dixon-render-approach.webp"
                width={1500}
                height={844}
                loading="lazy"
                alt="Rendering of the rebuilt Dixon site with fresh signage, landscaping, and a pay station"
                className="aspect-[16/10] w-full rounded-[4px] object-cover"
              />
              <figcaption className="mt-3 text-[0.9rem] text-ink-3">
                <span className="font-semibold text-ink">Rendering.</span> The
                same site, rebuilt and rebranded.
              </figcaption>
            </figure>
            <figure>
              <img
                src="/photos/dixon-render-interior.webp"
                width={1500}
                height={844}
                loading="lazy"
                alt="Rendering of the rebuilt bay interior with new touchless equipment"
                className="aspect-[16/10] w-full rounded-[4px] object-cover"
              />
              <figcaption className="mt-3 text-[0.9rem] text-ink-3">
                <span className="font-semibold text-ink">Rendering.</span> Inside
                the rebuilt bay.
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section aria-labelledby="timeline-title" className="border-t border-line py-24 sm:py-28">
        <Container>
          <SectionHead
            id="timeline-title"
            title="From site walk to grand opening in about five months."
          />
          <ol className="mt-16 grid gap-y-10 md:grid-cols-5 md:gap-x-6">
            {timeline.map((t) => (
              <li key={t.title} className="relative border-t-2 border-line pt-6 md:pr-2">
                <span aria-hidden="true" className="absolute -top-[7px] left-0 h-3 w-3 rounded-full bg-bolt" />
                <p className="tnum text-[0.9rem] font-semibold text-lake">{t.when}</p>
                <h3 className="mt-2 text-[1.2rem] font-semibold tracking-[-0.01em] text-ink">{t.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-2">{t.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <ContactSection
        title="Let's walk your wash."
        lede="Thirty minutes on site and we'll tell you what your wash can become, and what we'd pay to lease it."
        defaultType="fuel"
      />
    </>
  );
}
