import { Phone, Mail } from "lucide-react";

const serviceLinks = [
  { label: "Site Selection", href: "#capabilities" },
  { label: "Development & Build", href: "#capabilities" },
  { label: "Acquisitions & Revamps", href: "#capabilities" },
  { label: "Consulting & Financial Ops", href: "#capabilities" },
  { label: "Equipment & Service", href: "#capabilities" },
  { label: "Soap & Chemicals", href: "#capabilities" },
];

const companyLinks = [
  { label: "About / Our Thesis", href: "#about" },
  { label: "How It Works", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const serviceAreas = [
  "Illinois",
  "Indiana",
  "Iowa",
  "Wisconsin",
  "Midwest Region",
  "Nationwide (Consulting)",
];

export default function Footer() {
  return (
    <footer className="relative border-t border-navy-800">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand column */}
          <div>
            <a href="#" className="flex items-center gap-3 mb-5">
              <div className="h-9 w-9 rounded-md bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center text-navy-950 font-bold text-sm">
                MW
              </div>
              <span className="text-sm font-semibold text-white">
                Midwest Wash Partners
              </span>
            </a>
            <p className="text-sm text-slate-500 leading-relaxed mb-5">
              Vertically integrated car wash development, equipment, service,
              and management across the Midwest.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+11234567890"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-gold-400 transition-colors"
              >
                <Phone size={14} />
                (123) 456-7890
              </a>
              <a
                href="mailto:info@midwestwashpartners.com"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-gold-400 transition-colors"
              >
                <Mail size={14} />
                info@midwestwashpartners.com
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas column */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Service Areas
            </h4>
            <ul className="space-y-2.5">
              {serviceAreas.map((area) => (
                <li key={area} className="text-sm text-slate-500">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">
            &copy; {new Date().getFullYear()} Midwest Wash Partners. All rights
            reserved.
          </p>
          <p className="text-xs text-slate-700">
            Based in Illinois. Built for the Midwest.
          </p>
        </div>
      </div>
    </footer>
  );
}
