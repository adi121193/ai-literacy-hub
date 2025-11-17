const footerLinks = {
  solutions: [{
    label: "AI Management System",
    href: "#"
  }, {
    label: "Compliance Analyzer",
    href: "#"
  }],
  learning: [{
    label: "Courses",
    href: "#learning"
  }, {
    label: "Workshops",
    href: "#learning"
  }],
  company: [{
    label: "About",
    href: "#"
  }, {
    label: "Contact",
    href: "#"
  }, {
    label: "Privacy",
    href: "#"
  }, {
    label: "Terms",
    href: "#"
  }]
};
const Footer = () => {
  return <footer className="bg-[#0F172A] text-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">AI Literacy Labs

 </h3>
            <p className="text-sm text-gray-400">
              AI literacy & governance platform
            </p>
          </div>

          {/* Column 2 - Solutions */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Solutions
            </h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map(link => <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-smooth">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Column 3 - Learning */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Learning
            </h4>
            <ul className="space-y-2">
              {footerLinks.learning.map(link => <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-smooth">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Column 4 - Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map(link => <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-smooth">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © 2025 AI Literacy OS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;