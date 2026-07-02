import { useMemo, useState } from 'react';
import { listPartsCatalog, createPartsCatalogEntry } from '../../lib/api';
import { PageHeader, Card, Field, Input, Select, Button, Table } from '../../components/ui';

export default function PartsCatalogPage() {
  const [parts, setParts] = useState(listPartsCatalog());
  const [form, setForm] = useState({ model: '', partNumber: '', partName: '' });
  const [modelFilter, setModelFilter] = useState('All');

  const models = useMemo(() => ['All', ...new Set(parts.map((p) => p.model))], [parts]);
  const filtered = modelFilter === 'All' ? parts : parts.filter((p) => p.model === modelFilter);

  function setField(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.model.trim() || !form.partNumber.trim() || !form.partName.trim()) return;
    createPartsCatalogEntry(form);
    setParts(listPartsCatalog());
    setForm({ model: '', partNumber: '', partName: '' });
  }

  return (
    <div className="flex flex-col gap-4">
      <PageHeader
        title="Parts Catalog"
        actions={
          <Field label="">
            <Select value={modelFilter} onChange={(e) => setModelFilter(e.target.value)}>
              {models.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </Select>
          </Field>
        }
      />

      <Card className="max-w-2xl">
        <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4 items-end">
          <Field label="Model">
            <Input value={form.model} onChange={(e) => setField('model', e.target.value)} placeholder="CAT G3516" required />
          </Field>
          <Field label="Part Number">
            <Input value={form.partNumber} onChange={(e) => setField('partNumber', e.target.value)} placeholder="CAT-SP-9981" required />
          </Field>
          <Field label="Part Name">
            <Input value={form.partName} onChange={(e) => setField('partName', e.target.value)} placeholder="Spark Plugs" required />
          </Field>
          <div className="col-span-3 flex justify-end">
            <Button type="submit">Add Part</Button>
          </div>
        </form>
      </Card>

      <Table
        columns={['Model', 'Part Number', 'Part Name']}
        rows={filtered}
        renderRow={(p) => (
          <tr key={p.id}>
            <td className="px-3 py-2 font-medium text-slate-900">{p.model}</td>
            <td className="px-3 py-2">{p.partNumber}</td>
            <td className="px-3 py-2">{p.partName}</td>
          </tr>
        )}
      />
    </div>
  );
}
