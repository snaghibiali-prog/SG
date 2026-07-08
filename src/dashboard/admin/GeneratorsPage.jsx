import { Link } from 'react-router-dom';
import { listGenerators, listCompanies } from '../lib/api';
import { getGeneratorStatus } from '../lib/maintenanceStatus';
import { PageHeader, Table, Button } from '../ui';
import StatusBadge from '../StatusBadge';

export default function GeneratorsPage() {
  const generators = listGenerators();
  const companies = listCompanies();
  const companyName = (id) => companies.find((c) => c.id === id)?.name ?? '—';

  return (
    <div className="flex flex-col gap-4">
      <PageHeader
        title="Generators"
        actions={
          <Link to="onboard">
            <Button>Onboard New Generator</Button>
          </Link>
        }
      />

      <Table
        columns={['Serial', 'Brand', 'Model', 'Company', 'Site', 'Current Hours', 'Status']}
        rows={generators}
        renderRow={(g) => (
          <tr key={g.id}>
            <td className="px-3 py-2 font-medium text-slate-900">{g.serial}</td>
            <td className="px-3 py-2">{g.brand}</td>
            <td className="px-3 py-2">{g.model}</td>
            <td className="px-3 py-2">{companyName(g.companyId)}</td>
            <td className="px-3 py-2">{g.site}</td>
            <td className="px-3 py-2">{g.currentHours.toLocaleString()}</td>
            <td className="px-3 py-2">
              <StatusBadge status={getGeneratorStatus(g)} />
            </td>
          </tr>
        )}
      />
    </div>
  );
}
