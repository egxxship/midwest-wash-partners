import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Midwest Wash Partners collects, uses, and protects information submitted through this website.",
};

// DRAFT template. Have counsel review before launch.
const EFFECTIVE = "November 26, 2026";

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "Who we are",
    body: (
      <p>
        This policy covers the website of Midwest Wash Partners (&ldquo;MWP,&rdquo;
        &ldquo;we,&rdquo; &ldquo;us&rdquo;). It explains what information we collect
        through this site, how we use it, and the choices you have.
      </p>
    ),
  },
  {
    title: "Information we collect",
    body: (
      <>
        <p>
          <strong>Information you give us.</strong> When you use our contact form,
          we collect what you enter: your name, company, email address, phone
          number, site location, the type of inquiry, your message, and whether
          you agreed to receive text messages.
        </p>
        <p>
          <strong>Information collected automatically.</strong> Like most
          websites, our hosting provider records basic technical information
          when you visit, such as your IP address, browser type, pages
          requested, and the date and time of your visit. We use it to operate
          and secure the site.
        </p>
      </>
    ),
  },
  {
    title: "How we use it",
    body: (
      <ul>
        <li>To reply to your inquiry and discuss a potential business relationship.</li>
        <li>To follow up by email or phone, and by text message only if you opted in.</li>
        <li>To operate, maintain, and protect this website.</li>
        <li>To comply with legal obligations.</li>
      </ul>
    ),
  },
  {
    title: "Text messages",
    body: (
      <p>
        If you check the text-message box on our form, you agree that we may
        text you at the number you provided about your inquiry. Message and
        data rates may apply, and message frequency varies. Reply STOP to opt
        out at any time, or HELP for help. Consent to texts is not a condition
        of any purchase. We do not sell or share your phone number or
        text-message consent with third parties for their marketing.
      </p>
    ),
  },
  {
    title: "How we share it",
    body: (
      <>
        <p>We do not sell your personal information. We share it only:</p>
        <ul>
          <li>
            With service providers that help us run the site and deliver
            messages, such as our website host and email delivery provider,
            who may use it only to provide those services to us.
          </li>
          <li>With our team members and advisors who need it to respond to you.</li>
          <li>If required by law, or to protect our rights, property, or safety.</li>
          <li>In connection with a merger, financing, or sale of all or part of our business.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Cookies",
    body: (
      <p>
        This site does not use advertising or tracking cookies. If we add
        analytics or similar tools in the future, we will update this policy.
      </p>
    ),
  },
  {
    title: "How long we keep it",
    body: (
      <p>
        We keep inquiry information for as long as needed to respond and
        maintain a record of our business relationship, and then delete or
        de-identify it unless the law requires us to keep it longer.
      </p>
    ),
  },
  {
    title: "Security",
    body: (
      <p>
        We use reasonable administrative, technical, and physical safeguards
        to protect your information. No method of transmission or storage is
        completely secure, so we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    title: "Your choices",
    body: (
      <p>
        You can ask us to access, correct, or delete the personal information
        you have given us, or to stop contacting you, by emailing{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>. Depending on where
        you live, you may have additional rights under state law.
      </p>
    ),
  },
  {
    title: "Children",
    body: (
      <p>
        This site is intended for business audiences and is not directed to
        children under 13. We do not knowingly collect information from
        children.
      </p>
    ),
  },
  {
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy from time to time. The effective date at the
        top of this page shows when it was last changed.
      </p>
    ),
  },
  {
    title: "Contact",
    body: (
      <p>
        Questions about this policy? Email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <section aria-labelledby="privacy-title" className="py-16 sm:py-20">
      <Container className="max-w-[48rem]">
        <h1 id="privacy-title" className="text-[clamp(2.2rem,1.4rem+2.6vw,3rem)] font-semibold leading-tight tracking-[-0.03em] text-ink">
          Privacy policy
        </h1>
        <p className="tnum mt-4 text-ink-3">Effective {EFFECTIVE}</p>
        <div className="mt-12 space-y-12">
          {sections.map((s) => (
            <section key={s.title} aria-label={s.title}>
              <h2 className="text-[1.35rem] font-semibold tracking-[-0.015em] text-ink">{s.title}</h2>
              <div className="mt-4 space-y-4 leading-relaxed text-ink-2 [&_a]:text-lake [&_a]:underline [&_li]:mt-2 [&_strong]:text-ink [&_ul]:list-disc [&_ul]:pl-5">
                {s.body}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
}
