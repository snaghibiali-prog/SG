import { NavLink, Outlet } from 'react-router-dom';
import { useRole } from '../state/RoleContext';

const adminLinks = [
  { to: '/admin/companies', label: 'Companies' },
  { to: '/admin/generators', label: 'Generators' },
  { to: '/admin/templates', label: 'Templates' },
  { to: '/admin/interval-rules', label: 'Interval Rules' },
  { to: '/admin/parts-catalog', label: 'Parts Catalog' },
];

const companyLinks = [{ to: '/app/dashboard', label: 'Dashboard' }];

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `rounded px-3 py-1.5 text-sm font-medium ${
          isActive ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-200'
        }`
      }
    >
      {label}
    </NavLink>
  );
}

export default function Layout() {
  const { role, setRole, companyId, setCompanyId, companies } = useRole();
  const links = role === 'admin' ? adminLinks : companyLinks;

  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-300 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-4 py-3">
          <span className="text-lg font-bold tracking-tight text-slate-900">CHP Maintenance</span>
          <nav className="flex flex-1 flex-wrap gap-1">
            {links.map((l) => (
              <NavItem key={l.to} {...l} />
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="rounded border border-slate-300 bg-white px-2 py-1 text-sm"
            >
              <option value="admin">Main Admin</option>
              <option value="company">Company User</option>
            </select>
            {role === 'company' && (
              <select
                value={companyId}
                onChange={(e) => setCompanyId(e.target.value)}
                className="rounded border border-slate-300 bg-white px-2 py-1 text-sm"
              >
                {companies.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
