import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useRole } from './state/RoleContext';
import { logout } from '../auth/authClient';

const adminLinks = [
  { to: '/dashboard/admin/companies', label: 'Companies' },
  { to: '/dashboard/admin/generators', label: 'Generators' },
  { to: '/dashboard/admin/templates', label: 'Templates' },
  { to: '/dashboard/admin/interval-rules', label: 'Interval Rules' },
  { to: '/dashboard/admin/parts-catalog', label: 'Parts Catalog' },
];

const companyLinks = [{ to: '/dashboard/app/dashboard', label: 'Dashboard' }];

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
  const navigate = useNavigate();

  function handleRoleChange(newRole) {
    setRole(newRole);
    navigate(newRole === 'admin' ? '/dashboard/admin/companies' : '/dashboard/app/dashboard');
  }

  function handleLogout() {
    logout();
    navigate('/', { replace: true });
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
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
              onChange={(e) => handleRoleChange(e.target.value)}
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
            <button
              onClick={handleLogout}
              className="rounded border border-slate-300 bg-white px-3 py-1 text-sm font-medium text-slate-600 hover:bg-slate-100"
            >
              Log Out
            </button>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
