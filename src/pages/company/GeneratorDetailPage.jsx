import { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  getGenerator,
  getTemplate,
  updateCurrentHours,
  addInspection,
  addPartChange,
  listInspections,
  listPartChanges,
} from '../../lib/api';
import { getPartStatuses } from '../../lib/maintenanceStatus';
import { PageHeader, Card, Field, Input, Button, Table } from '../../components/ui';
import StatusBadge from '../../components/StatusBadge';

const TABS = ['Overview', 'Log Inspection', 'Log Part Change', 'History'];

export default function GeneratorDetailPage() {
  const { id } = useParams();
  const [tab, setTab] = useState('Overview');
  const [, forceRefresh] = useState(0);

  const generator = getGenerator(id);
  const template = generator ? getTemplate(generator.templateId) : null;

  if (!generator) {
    return (
      <div>
        <p className="text-slate-500">Generator not found.</p>
        <Link to="/app/dashboard" className="text-sm underline">
          Back to dashboard
        </Link>
      </div>
    );
  }

  function refresh() {
    forceRefresh((n) => n + 1);
  }

  return (
    <div className="flex flex-col gap-4">
      <PageHeader
        title={`${generator.brand} ${generator.model} — ${generator.serial}`}
        actions={
          <Link to="/app/dashboard" className="text-sm font-medium text-slate-600 underline">
            Back to dashboard
          </Link>
        }
      />

      <div className="flex gap-1 border-b border-slate-300">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-3 py-2 text-sm font-medium ${
              tab === t ? 'border-b-2 border-slate-900 text-slate-900' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === 'Overview' && <OverviewTab generator={generator} onUpdated={refresh} />}
      {tab === 'Log Inspection' && (
        <InspectionForm generator={generator} template={template} onSaved={() => setTab('History')} />
      )}
      {tab === 'Log Part Change' && <PartChangeForm generator={generator} onSaved={() => setTab('History')} />}
      {tab === 'History' && <HistoryTab generator={generator} />}
    </div>
  );
}

function OverviewTab({ generator, onUpdated }) {
  const [hours, setHours] = useState(generator.currentHours);
  const partStatuses = useMemo(() => getPartStatuses(generator), [generator]);

  function handleUpdateHours(e) {
    e.preventDefault();
    updateCurrentHours(generator.id, hours);
    onUpdated();
  }

  return (
    <div className="flex flex-col gap-4">
      <Card>
        <div className="grid grid-cols-4 gap-4 text-sm">
          <InfoField label="Model" value={generator.model} />
          <InfoField label="Serial" value={generator.serial} />
          <InfoField label="Site" value={generator.site} />
          <InfoField label="Install Date" value={generator.installDate} />
          <InfoField label="Current Hours" value={generator.currentHours.toLocaleString()} />
          <InfoField label="Last Updated" value={new Date(generator.lastUpdated).toLocaleString()} />
        </div>

        <form onSubmit={handleUpdateHours} className="mt-4 flex items-end gap-2 border-t border-slate-200 pt-4">
          <div className="w-48">
            <Field label="Update Current Hours">
              <Input type="number" min="0" value={hours} onChange={(e) => setHours(e.target.value)} />
            </Field>
          </div>
          <Button type="submit">Update</Button>
          <span className="text-xs text-slate-400">Stands in for an automated RTU/API pull.</span>
        </form>
      </Card>

      <Card>
        <h2 className="mb-2 text-sm font-semibold text-slate-700">Maintenance Status</h2>
        <Table
          columns={['Part / Task', 'Last Changed', 'Hours Since', 'Hours Remaining', 'Status']}
          rows={partStatuses}
          emptyText="No interval rules defined for this model."
          renderRow={(p) => (
            <tr key={p.rule.id}>
              <td className="px-3 py-2 font-medium text-slate-900">{p.partName}</td>
              <td className="px-3 py-2">{p.lastChangedAt ? new Date(p.lastChangedAt).toLocaleDateString() : 'Never (baseline)'}</td>
              <td className="px-3 py-2">{p.hoursSince.toLocaleString()}</td>
              <td className="px-3 py-2">{p.remainingHours != null ? p.remainingHours.toLocaleString() : '—'}</td>
              <td className="px-3 py-2">
                <StatusBadge status={p.status} />
              </td>
            </tr>
          )}
        />
      </Card>
    </div>
  );
}

function InfoField({ label, value }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</p>
      <p className="font-medium text-slate-900">{value}</p>
    </div>
  );
}

function InspectionForm({ generator, template, onSaved }) {
  const [hours, setHours] = useState(generator.currentHours);
  const [values, setValues] = useState({});
  const [enteredBy, setEnteredBy] = useState('');

  if (!template) return <p className="text-slate-500">No template assigned to this generator.</p>;

  function setValue(fieldName, value) {
    setValues((v) => ({ ...v, [fieldName]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addInspection({ generatorId: generator.id, hours, values, enteredBy: enteredBy || 'Unknown' });
    onSaved();
  }

  return (
    <Card>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Hours at Inspection">
            <Input type="number" min="0" value={hours} onChange={(e) => setHours(e.target.value)} required />
          </Field>
          <Field label="Entered By">
            <Input value={enteredBy} onChange={(e) => setEnteredBy(e.target.value)} placeholder="Your name" />
          </Field>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {template.fields.map((f) => (
            <Field key={f.name} label={`${f.name}${f.unit ? ` (${f.unit})` : ''}`}>
              <Input
                type={f.type === 'number' ? 'number' : 'text'}
                value={values[f.name] ?? ''}
                onChange={(e) => setValue(f.name, e.target.value)}
              />
            </Field>
          ))}
        </div>

        <div className="flex justify-end">
          <Button type="submit">Save Inspection</Button>
        </div>
      </form>
    </Card>
  );
}

function PartChangeForm({ generator, onSaved }) {
  const [partName, setPartName] = useState('');
  const [partNumber, setPartNumber] = useState('');
  const [hours, setHours] = useState(generator.currentHours);

  function handleSubmit(e) {
    e.preventDefault();
    if (!partName.trim()) return;
    addPartChange({ generatorId: generator.id, partName: partName.trim(), partNumber: partNumber.trim(), hours });
    onSaved();
  }

  return (
    <Card className="max-w-xl">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Field label="Part Name">
          <Input value={partName} onChange={(e) => setPartName(e.target.value)} placeholder="Spark Plugs" required />
        </Field>
        <Field label="Part Number (optional)">
          <Input value={partNumber} onChange={(e) => setPartNumber(e.target.value)} placeholder="JB-SP-4401" />
        </Field>
        <Field label="Hours at Change">
          <Input type="number" min="0" value={hours} onChange={(e) => setHours(e.target.value)} required />
        </Field>
        <div className="flex justify-end">
          <Button type="submit">Log Part Change</Button>
        </div>
      </form>
    </Card>
  );
}

function HistoryTab({ generator }) {
  const inspections = listInspections(generator.id);
  const partChanges = listPartChanges(generator.id);

  return (
    <div className="flex flex-col gap-4">
      <Card>
        <h2 className="mb-2 text-sm font-semibold text-slate-700">Inspection History</h2>
        <Table
          columns={['Date', 'Hours', 'Entered By', 'Readings']}
          rows={inspections}
          renderRow={(insp) => (
            <tr key={insp.id}>
              <td className="px-3 py-2">{new Date(insp.timestamp).toLocaleString()}</td>
              <td className="px-3 py-2">{insp.hours.toLocaleString()}</td>
              <td className="px-3 py-2">{insp.enteredBy}</td>
              <td className="px-3 py-2 text-xs text-slate-500">
                {Object.entries(insp.values)
                  .filter(([, v]) => v !== '')
                  .map(([k, v]) => `${k}: ${v}`)
                  .join(', ') || '—'}
              </td>
            </tr>
          )}
        />
      </Card>

      <Card>
        <h2 className="mb-2 text-sm font-semibold text-slate-700">Part Change History</h2>
        <Table
          columns={['Date', 'Part', 'Part Number', 'Hours at Change']}
          rows={partChanges}
          renderRow={(pc) => (
            <tr key={pc.id}>
              <td className="px-3 py-2">{new Date(pc.timestamp).toLocaleString()}</td>
              <td className="px-3 py-2 font-medium text-slate-900">{pc.partName}</td>
              <td className="px-3 py-2">{pc.partNumber || '—'}</td>
              <td className="px-3 py-2">{pc.hours.toLocaleString()}</td>
            </tr>
          )}
        />
      </Card>
    </div>
  );
}
