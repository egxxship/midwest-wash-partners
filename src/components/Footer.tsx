import { Phone, Mail } from "lucide-react";

const serviceLinks = [
  "Site Selection",
  "Development & Build",
  "Acquisitions & Revamps",
  "Consulting & Financial Ops",
  "Equipment & Service",
  "Soap & Chemicals",
];

const companyLinks = [
  { label: "How It Works", href: "#process" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-grey-200 bg-grey-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="h-8 w-8 rounded-md bg-rust-600 flex items-center justify-center text-white font-bold text-xs">
                MW
              </div>
              <span className="text-sm font-semibold text-grey-900">
                Midwest Wash Partners
              </span>
            </a>
            <p className="text-sm text-grey-400 leading-relaxed mb-4">
              Turnkey car wash development, equipment, service, and management.
            </p>
            <div className="space-y-1.5">
              <a
                href="tel:+11234567890"
                className="flex items-center gap-2 text-sm text-grey-500 hover:text-rust-600 transition-colors"
              >
                <Phone size={13} />
                (123) 456-7890
              </a>
              <a
                href="mailto:info@midwestwashpartners.com"
                className="flex items-center gap-2 text-sm text-grey-500 hover:text-rust-600 transition-colors"
              >
                <Mail size={13} />
                info@midwestwashpartners.com
              </a>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-sm font-semibold text-grey-900 mb-3">
              Capabilities
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#capabilities"
                    className="text-sm text-grey-400 hover:text-grey-600 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-grey-900 mb-3">
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-grey-400 hover:text-grey-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h4 className="text-sm font-semibold text-grey-900 mb-3">
              Service Areas
            </h4>
            <ul className="space-y-2">
              {[
                "Illinois",
                "Indiana",
                "Iowa",
                "Wisconsin",
                "Midwest Region",
                "Nationwide (Consulting)",
              ].map((area) => (
                <li key={area} className="text-sm text-grey-400">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-grey-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-grey-400">
            &copy; {new Date().getFullYear()} Midwest Wash Partners. All rights
            reserved.
          </p>
          <p className="text-xs text-grey-300">
            Based in Illinois. Built for the Midwest.
          </p>
        </div>
      </div>
    </footer>
  );
}
