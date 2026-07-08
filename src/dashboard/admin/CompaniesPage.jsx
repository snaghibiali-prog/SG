import { useState } from 'react';
import { listCompanies, createCompany } from '../lib/api';
import { PageHeader, Card, Button, Field, Input, Table } from '../ui';

export default function CompaniesPage() {
  const [companies, setCompanies] = useState(listCompanies());
  const [name, setName] = useState('');

  function handleCreate(e) {
    e.preventDefault();
    if (!name.trim()) return;
    createCompany({ name: name.trim() });
    setCompanies(listCompanies());
    setName('');
  }

  return (
    <div className="flex flex-col gap-4">
      <PageHeader title="Companies" />

      <Card className="max-w-lg">
        <form onSubmit={handleCreate} className="flex items-end gap-2">
          <div className="flex-1">
            <Field label="New company name">
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Acme Energy Co." />
            </Field>
          </div>
          <Button type="submit">Add Company</Button>
        </form>
      </Card>

      <Table
        columns={['Name', 'ID']}
        rows={companies}
        renderRow={(c) => (
          <tr key={c.id}>
            <td className="px-3 py-2 font-medium text-slate-900">{c.name}</td>
            <td className="px-3 py-2 text-slate-500">{c.id}</td>
          </tr>
        )}
      />
    </div>
  );
}
