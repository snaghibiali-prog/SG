import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { listCompanies, listTemplates, onboardGenerator } from '../lib/api';
import { PageHeader, Card, Field, Input, Select, Button } from '../ui';

export default function OnboardGeneratorPage() {
  const navigate = useNavigate();
  const companies = listCompanies();
  const templates = listTemplates();

  const [form, setForm] = useState({
    companyId: companies[0]?.id ?? '',
    brand: '',
    model: '',
    serial: '',
    site: '',
    installDate: '',
    templateId: templates[0]?.id ?? '',
    baselineHours: 0,
  });

  function setField(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onboardGenerator(form);
    navigate('/dashboard/admin/generators');
  }

  return (
    <div className="flex flex-col gap-4">
      <PageHeader title="Onboard New Generator" />
      <Card className="max-w-2xl">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <Field label="Company">
            <Select value={form.companyId} onChange={(e) => setField('companyId', e.target.value)} required>
              {companies.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </Select>
          </Field>
          <Field label="Assigned Template">
            <Select value={form.templateId} onChange={(e) => setField('templateId', e.target.value)} required>
              {templates.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </Select>
          </Field>
          <Field label="Brand">
            <Input value={form.brand} onChange={(e) => setField('brand', e.target.value)} placeholder="Jenbacher / CAT" required />
          </Field>
          <Field label="Model">
            <Input value={form.model} onChange={(e) => setField('model', e.target.value)} placeholder="JMS 320" required />
          </Field>
          <Field label="Serial Number">
            <Input value={form.serial} onChange={(e) => setField('serial', e.target.value)} required />
          </Field>
          <Field label="Site">
            <Input value={form.site} onChange={(e) => setField('site', e.target.value)} required />
          </Field>
          <Field label="Install Date">
            <Input type="date" value={form.installDate} onChange={(e) => setField('installDate', e.target.value)} required />
          </Field>
          <Field label="Baseline / Starting Hours">
            <Input
              type="number"
              min="0"
              value={form.baselineHours}
              onChange={(e) => setField('baselineHours', e.target.value)}
              required
            />
          </Field>

          <div className="col-span-2 flex justify-end gap-2">
            <Button type="submit">Onboard Generator</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
