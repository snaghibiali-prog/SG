import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRole } from '../state/RoleContext';
import { listGeneratorsByCompany } from '../lib/api';
import { getGeneratorStatus, STATUS } from '../lib/maintenanceStatus';
import { PageHeader, Card, Select, Table } from '../ui';
import StatusBadge from '../StatusBadge';

export default function DashboardPage() {
  const { companyId } = useRole();
  const [statusFilter, setStatusFilter] = useState('All');
  const [sortKey, setSortKey] = useState('serial');

  const generators = useMemo(() => {
    if (!companyId) return [];
    return listGeneratorsByCompany(companyId).map((g) => ({ ...g, status: getGeneratorStatus(g) }));
  }, [companyId]);

  const counts = useMemo(() => {
    const c = { [STATUS.OK]: 0, [STATUS.DUE_SOON]: 0, [STATUS.OVERDUE]: 0 };
    generators.forEach((g) => (c[g.status] += 1));
    return c;
  }, [generators]);

  const filtered = useMemo(() => {
    let list = statusFilter === 'All' ? generators : generators.filter((g) => g.status === statusFilter);
    list = [...list].sort((a, b) => {
      if (sortKey === 'currentHours') return b.currentHours - a.currentHours;
      return String(a[sortKey]).localeCompare(String(b[sortKey]));
    });
    return list;
  }, [generators, statusFilter, sortKey]);

  if (!companyId) {
    return <p className="text-slate-500">Select a company to view its dashboard.</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      <PageHeader title="Generator Dashboard" />

      <div className="grid grid-cols-3 gap-4">
        {Object.entries(counts).map(([status, count]) => (
          <Card key={status}>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-600">{status}</span>
              <StatusBadge status={status} />
            </div>
            <p className="mt-2 text-3xl font-bold text-slate-900">{count}</p>
          </Card>
        ))}
      </div>

      <div className="flex gap-3">
        <Select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="All">All Statuses</option>
          <option value={STATUS.OK}>OK</option>
          <option value={STATUS.DUE_SOON}>Due Soon</option>
          <option value={STATUS.OVERDUE}>Overdue</option>
        </Select>
        <Select value={sortKey} onChange={(e) => setSortKey(e.target.value)}>
          <option value="serial">Sort by Serial</option>
          <option value="site">Sort by Site</option>
          <option value="currentHours">Sort by Current Hours</option>
        </Select>
      </div>

      <Table
        columns={['Serial', 'Brand', 'Model', 'Site', 'Current Hours', 'Status', '']}
        rows={filtered}
        renderRow={(g) => (
          <tr key={g.id}>
            <td className="px-3 py-2 font-medium text-slate-900">{g.serial}</td>
            <td className="px-3 py-2">{g.brand}</td>
            <td className="px-3 py-2">{g.model}</td>
            <td className="px-3 py-2">{g.site}</td>
            <td className="px-3 py-2">{g.currentHours.toLocaleString()}</td>
            <td className="px-3 py-2">
              <StatusBadge status={g.status} />
            </td>
            <td className="px-3 py-2">
              <Link to={`/dashboard/app/generators/${g.id}`} className="text-sm font-medium text-slate-700 underline hover:text-slate-900">
                View
              </Link>
            </td>
          </tr>
        )}
      />
    </div>
  );
}
