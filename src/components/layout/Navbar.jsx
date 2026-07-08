import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';

const NAV_LINKS = [
  { to: '/platform', label: 'Platform' },
  { to: '/services', label: 'Services', hasDropdown: true },
  { to: '/equipment', label: 'Equipment' },
  { to: '/distribution', label: 'Partners' },
  { to: '/about', label: 'About' },
];

const SERVICES_DROPDOWN = [
  { to: '/services#parts-procurement', label: 'Parts Procurement' },
  {
    to: '/services#advisory',
    label: 'Advisory Services',
    children: [
      'Plant & System Design',
      'Engine Selection',
      'Performance Optimisation',
      'Troubleshooting & Diagnostics',
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesAccordionOpen, setServicesAccordionOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled ? 'bg-gp-black border-b border-gp-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="shrink-0">
            <img src="/logo.svg" alt="Genprima" className="h-6" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) =>
              link.hasDropdown ? (
                <div key={link.to} className="relative group">
                  <NavLink
                    to={link.to}
                    className="flex items-center gap-1 text-sm font-medium text-gp-text hover:text-gp-accent transition-colors"
                  >
                    {link.label}
                    <ChevronDown size={14} />
                  </NavLink>
                  <div className="absolute left-0 top-full pt-3 hidden group-hover:block">
                    <div className="bg-gp-card border border-gp-border min-w-[260px] p-2">
                      {SERVICES_DROPDOWN.map((item) => (
                        <div key={item.to}>
                          <Link
                            to={item.to}
                            className="block px-4 py-2 text-sm text-gp-text hover:text-gp-accent transition-colors"
                          >
                            {item.label}
                          </Link>
                          {item.children && (
                            <div className="pl-8 pb-1">
                              {item.children.map((child) => (
                                <div key={child} className="py-1 text-xs text-gp-muted">
                                  {child}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="text-sm font-medium text-gp-text hover:text-gp-accent transition-colors"
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <Link to="/login" className="text-sm font-medium text-gp-text hover:text-gp-accent transition-colors">
              Login
            </Link>
            <Link to="/contact" className="text-sm font-medium text-gp-text hover:text-gp-accent transition-colors">
              Contact
            </Link>
            <Button to="/contact" className="px-6 py-3">
              Request a Demo
            </Button>
          </div>

          <button
            className="lg:hidden text-gp-text"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-gp-black overflow-y-auto">
          <div className="flex flex-col px-6 py-8 gap-6">
            {NAV_LINKS.map((link) =>
              link.hasDropdown ? (
                <div key={link.to}>
                  <button
                    className="flex items-center justify-between w-full text-lg font-medium text-gp-text"
                    onClick={() => setServicesAccordionOpen((v) => !v)}
                  >
                    {link.label}
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${servicesAccordionOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {servicesAccordionOpen && (
                    <div className="pl-4 mt-4 flex flex-col gap-3 border-l border-gp-border">
                      {SERVICES_DROPDOWN.map((item) => (
                        <div key={item.to}>
                          <Link to={item.to} className="text-sm text-gp-text">
                            {item.label}
                          </Link>
                          {item.children && (
                            <div className="pl-4 mt-2 flex flex-col gap-2">
                              {item.children.map((child) => (
                                <span key={child} className="text-xs text-gp-muted">
                                  {child}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink key={link.to} to={link.to} className="text-lg font-medium text-gp-text">
                  {link.label}
                </NavLink>
              )
            )}
            <Link to="/login" className="text-lg font-medium text-gp-text">
              Login
            </Link>
            <Link to="/contact" className="text-lg font-medium text-gp-text">
              Contact
            </Link>
            <Button to="/contact" className="w-full mt-4">
              Request a Demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
