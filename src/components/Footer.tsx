export default function Footer() {
  return (
    <footer className="relative border-t border-navy-800">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center text-navy-950 font-bold text-sm">
              MW
            </div>
            <span className="text-sm font-semibold text-white">
              Midwest Wash Partners
            </span>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6">
            {["About", "Capabilities", "Portfolio", "Team", "Contact"].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {link}
                </a>
              )
            )}
          </div>

          {/* Copyright */}
          <p className="text-sm text-slate-600">
            &copy; {new Date().getFullYear()} Midwest Wash Partners. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
