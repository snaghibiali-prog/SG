import { useState } from 'react';
import { listIntervalRules, createIntervalRule } from '../lib/api';
import { PageHeader, Card, Field, Input, Button, Table } from '../ui';

export default function IntervalRulesPage() {
  const [rules, setRules] = useState(listIntervalRules());
  const [form, setForm] = useState({ model: '', partName: '', intervalHours: '' });

  function setField(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.model.trim() || !form.partName.trim() || !form.intervalHours) return;
    createIntervalRule(form);
    setRules(listIntervalRules());
    setForm({ model: '', partName: '', intervalHours: '' });
  }

  return (
    <div className="flex flex-col gap-4">
      <PageHeader title="Interval Rules" />

      <Card className="max-w-2xl">
        <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4 items-end">
          <Field label="Model">
            <Input value={form.model} onChange={(e) => setField('model', e.target.value)} placeholder="JMS 320" required />
          </Field>
          <Field label="Part / Task Name">
            <Input value={form.partName} onChange={(e) => setField('partName', e.target.value)} placeholder="Spark Plugs" required />
          </Field>
          <Field label="Interval (Hours)">
            <Input
              type="number"
              min="0"
              value={form.intervalHours}
              onChange={(e) => setField('intervalHours', e.target.value)}
              placeholder="4000"
              required
            />
          </Field>
          <div className="col-span-3 flex justify-end">
            <Button type="submit">Add Rule</Button>
          </div>
        </form>
      </Card>

      <Table
        columns={['Model', 'Part / Task', 'Interval (Hours)']}
        rows={rules}
        renderRow={(r) => (
          <tr key={r.id}>
            <td className="px-3 py-2 font-medium text-slate-900">{r.model}</td>
            <td className="px-3 py-2">{r.partName}</td>
            <td className="px-3 py-2">{r.intervalHours?.toLocaleString() ?? '—'}</td>
          </tr>
        )}
      />
    </div>
  );
}
