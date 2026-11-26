import Link from "next/link";
import Wordmark from "./Wordmark";
import { site } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="bg-night text-night-2">
      <div className="mx-auto grid max-w-[76rem] gap-12 px-5 py-16 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <Wordmark inverse />
          <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed">
            Owner, operator, developer, and service provider of car washes in
            the Midwest.
          </p>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-sm font-semibold text-white">Service area</h2>
          <ul className="mt-4 space-y-2 text-[0.95rem]">
            {site.serviceArea.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h2 className="text-sm font-semibold text-white">Get in touch</h2>
          <ul className="mt-4 space-y-2 text-[0.95rem]">
            <li>
              <a className="text-white underline decoration-night-line hover:decoration-white" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li className="tnum">{site.phone}</li>
            <li>
              <Link className="hover:text-white" href="/fuel-c-store-partners">
                Fuel & C-Store Partners
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/team">
                Team
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-night-line">
        <div className="mx-auto flex max-w-[76rem] flex-col gap-2 px-5 py-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="tnum">© {new Date().getFullYear()} Midwest Wash Partners. All rights reserved.</p>
          <Link className="hover:text-white" href="/privacy">
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
