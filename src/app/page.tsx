import ServiceMap from "@/components/ServiceMap";
import { ButtonLink, Container, ContactSection, SectionHead, TextLink } from "@/components/ui";

const proof = [
  { figure: "3", label: "Sites" },
  { figure: "2,500", label: "Wash members" },
  { figure: "25+", label: "Washes serviced" },
];

const operatorPoints = [
  {
    title: "Touchless, in-bay automatic and self-serve",
    body: "We focus on the washes most owners already have: in-bay automatics and self-serve bays on good real estate, modernized instead of torn down for a tunnel.",
  },
  {
    title: "Memberships that bring drivers back",
    body: "Unlimited plans, license-plate entry, and local marketing turn one-time customers into members who visit every week.",
  },
  {
    title: "Our own crew on the equipment",
    body: "In-house construction, engineering, install, and service techs. When a bay goes down, we fix it in hours, not weeks.",
  },
];

const capabilities = [
  {
    group: "Build",
    items: [
      { name: "Built-to-suit", body: "Turnkey project management. You own the wash; we deliver it ready to open." },
      { name: "Design / build", body: "From idea to opening: site planning, entitlement, engineering, construction, and install." },
      { name: "Equipment distribution", body: "We scope, source, and deliver the full equipment package for a new wash or a retool." },
    ],
  },
  {
    group: "Run",
    items: [
      { name: "Service & repair", body: "Preventive maintenance and emergency repair to keep every bay up and washing." },
      { name: "Soap calibration & supply", body: "The right chemistry on site and in stock, tuned for wash quality and cost per car." },
      { name: "Wash management", body: "Day-to-day operations, marketing and memberships, accounting, and staffing, handled." },
    ],
  },
  {
    group: "Fund",
    items: [
      { name: "Project financing", body: "We help arrange and structure capital for new projects and growth plans, drawing on our relationships with lenders and capital partners." },
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-title" className="overflow-hidden">
        <Container className="grid items-center gap-12 pb-16 pt-12 sm:pt-16 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-20">
          <div className="lg:col-span-6">
            <h1
              id="hero-title"
              className="text-[clamp(2.5rem,1.4rem+4.2vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-ink"
            >
              We own, run, build, and fix car washes across the Midwest.
            </h1>
            <p className="mt-7 max-w-xl text-[1.2rem] leading-relaxed text-ink-2">
              Midwest Wash Partners operates its own washes, then brings the same
              crew, equipment, and playbook to wash owners, developers, and fuel
              retailers who want theirs to perform.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/#contact">Partner with us</ButtonLink>
              <ButtonLink href="/?topic=site#contact" variant="secondary">
                Have a site in mind?
              </ButtonLink>
            </div>

            <dl className="mt-14 grid max-w-lg grid-cols-3 border-t border-line pt-6">
              {proof.map((p, i) => (
                <div key={p.label} className={`flex flex-col ${i > 0 ? "border-l border-line pl-5" : "pr-5"}`}>
                  <dt className="text-[0.85rem] text-ink-3">{p.label}</dt>
                  <dd className="order-first mt-1 text-[2rem] font-semibold leading-none tracking-[-0.03em] text-ink">
                    {p.figure}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ServiceMap className="mx-auto max-w-[30rem] lg:max-w-none" />
          </div>
        </Container>
      </section>

      {/* Owner-operator */}
      <section aria-labelledby="operator-title" className="border-t border-line py-24 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHead
                id="operator-title"
                title="We run washes. That's why owners call us."
                lede="Every service we sell is one we depend on at our own sites. Our playbook comes from running washes every day, and so does our advice."
              />
              <div className="mt-8">
                <TextLink href="/team">Meet the team</TextLink>
              </div>
            </div>
            <ul className="divide-y divide-line border-y border-line lg:col-span-6 lg:col-start-7">
              {operatorPoints.map((p) => (
                <li key={p.title} className="py-7">
                  <h3 className="text-[1.2rem] font-semibold tracking-[-0.01em] text-ink">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-2">{p.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            <figure>
              <img
                src="/photos/wash-as-found.webp"
                width={1500}
                height={1125}
                loading="lazy"
                alt="A dated self-serve car wash building under an overcast sky, before renovation"
                className="aspect-[4/3] w-full rounded-[4px] object-cover"
              />
              <figcaption className="mt-3 text-[0.9rem] text-ink-3">
                <span className="font-semibold text-ink">As found.</span> A tired
                wash on good real estate — the sites we look for.
              </figcaption>
            </figure>
            <figure>
              <img
                src="/photos/bay-after.webp"
                width={1500}
                height={1125}
                loading="lazy"
                alt="A bright, rebuilt touchless wash bay with modern equipment and clean walls"
                className="aspect-[4/3] w-full rounded-[4px] object-cover"
              />
              <figcaption className="mt-3 text-[0.9rem] text-ink-3">
                <span className="font-semibold text-ink">After our rebuild.</span>{" "}
                Express Suds, Ottawa, IL — modern touchless equipment and a
                membership program.
              </figcaption>
            </figure>
          </div>

          <div className="mt-16 grid gap-8 rounded-[4px] bg-ink px-7 py-10 text-white sm:px-12 sm:py-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <h3 className="text-[clamp(1.5rem,1.1rem+1.4vw,2rem)] font-semibold leading-tight tracking-[-0.02em]">
                Thinking about selling your wash?
              </h3>
              <p className="mt-3 max-w-2xl text-[1.05rem] leading-relaxed text-night-2">
                We buy in-bay automatic and self-serve washes across the region,
                including ones that need work. The conversation stays
                confidential, and we&rsquo;ll give you a straight answer on value.
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <ButtonLink href="/?topic=selling#contact" variant="inverse">
                Talk to us about selling
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section aria-labelledby="capabilities-title" className="border-t border-line bg-mist py-24 sm:py-28">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHead
              id="capabilities-title"
              title="Everything a wash needs, from one team."
              lede="Hire us for one piece or the whole project. Design, equipment, service, soap, and management all come from the same people, so nothing falls between vendors."
            />
            <div className="shrink-0">
              <ButtonLink href="/?topic=site#contact">Have a site in mind?</ButtonLink>
            </div>
          </div>

          <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.group}>
                <h3 className="border-b-2 border-ink pb-3 text-[1.5rem] font-semibold tracking-[-0.02em] text-ink">
                  {c.group}
                </h3>
                <dl className="divide-y divide-line">
                  {c.items.map((it) => (
                    <div key={it.name} className="py-6">
                      <dt className="font-semibold text-ink">{it.name}</dt>
                      <dd className="mt-1.5 leading-relaxed text-ink-2">{it.body}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Fuel & C-Store teaser */}
      <section aria-labelledby="fuel-teaser-title" className="bg-night py-24 text-white sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2
              id="fuel-teaser-title"
              className="text-[clamp(2rem,1.2rem+2.8vw,3.25rem)] font-semibold leading-[1.06] tracking-[-0.03em]"
            >
              Got a wash behind your pumps? We&rsquo;ll lease it, rebuild it, and run it.
            </h2>
            <p className="mt-6 max-w-2xl text-[1.15rem] leading-relaxed text-night-2">
              Fuel and convenience-store operators collect rent and more visits
              to the pump and the store. We put up the capital for the rebuild,
              and we handle the operations.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <ButtonLink href="/fuel-c-store-partners" variant="inverse">
              Fuel & C-Store Partners
            </ButtonLink>
          </div>
        </Container>
      </section>

      <ContactSection />
    </>
  );
}
