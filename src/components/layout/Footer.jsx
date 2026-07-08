import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gp-black border-t border-gp-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <img src="/logo.svg" alt="Genprima" className="h-6 mb-4" />
            <p className="text-gp-muted text-sm">
              Maintenance management for independent CHP and genset operators.
            </p>
          </div>

          <FooterColumn
            title="Platform"
            links={[
              { to: '/platform', label: 'Features' },
              { to: '/platform', label: 'How It Works' },
              { to: '/equipment', label: 'Supported Equipment' },
              { to: '/contact', label: 'Request a Demo' },
            ]}
          />

          <FooterColumn
            title="Services & Company"
            links={[
              { to: '/services', label: 'Parts Procurement' },
              { to: '/services', label: 'Advisory Services' },
              { to: '/distribution', label: 'Distribution Partners' },
              { to: '/about', label: 'About Genprima' },
            ]}
          />

          <FooterColumn
            title="Legal & Contact"
            links={[
              { to: '/contact', label: 'Contact' },
              { to: '/privacy', label: 'Privacy Policy' },
              { to: '/terms', label: 'Terms of Service' },
              { to: '/equipment', label: 'Equipment Disclaimer' },
            ]}
          />
        </div>

        <div className="border-t border-gp-border mt-12 pt-8 flex flex-col gap-2">
          <p className="text-gp-muted text-xs">© 2026 Genprima. All rights reserved.</p>
          <p className="text-gp-muted text-xs">
            CAT and Caterpillar are trademarks of Caterpillar Inc. INNIO and Jenbacher are trademarks of INNIO
            Group. Genprima is an independent platform and is not affiliated with, endorsed by, or a certified
            partner of Caterpillar Inc. or INNIO Group.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-widest text-gp-text mb-4">{title}</p>
      <div className="flex flex-col gap-3">
        {links.map((link, i) => (
          <Link key={i} to={link.to} className="text-sm text-gp-muted hover:text-gp-accent transition-colors">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
