import { Fragment, useState } from 'react';
import { listTemplates, createTemplate } from '../lib/api';
import { PageHeader, Card, Field, Input, Select, Button, Table } from '../ui';

const FIELD_TYPES = ['number', 'text'];

function emptyField() {
  return { name: '', unit: '', type: 'number' };
}

export default function TemplatesPage() {
  const [templates, setTemplates] = useState(listTemplates());
  const [name, setName] = useState('');
  const [brandModel, setBrandModel] = useState('');
  const [fields, setFields] = useState([emptyField()]);
  const [expandedId, setExpandedId] = useState(null);

  function updateField(index, patch) {
    setFields((f) => f.map((field, i) => (i === index ? { ...field, ...patch } : field)));
  }

  function addField() {
    setFields((f) => [...f, emptyField()]);
  }

  function removeField(index) {
    setFields((f) => f.filter((_, i) => i !== index));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const cleanFields = fields.filter((f) => f.name.trim());
    if (!name.trim() || cleanFields.length === 0) return;
    createTemplate({ name: name.trim(), brandModel: brandModel.trim(), fields: cleanFields });
    setTemplates(listTemplates());
    setName('');
    setBrandModel('');
    setFields([emptyField()]);
  }

  return (
    <div className="flex flex-col gap-4">
      <PageHeader title="Templates" />

      <Card>
        <h2 className="mb-3 text-sm font-semibold text-slate-700">Build New Template</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <Field label="Template Name">
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Jenbacher Standard Genset Template" required />
            </Field>
            <Field label="Brand / Model">
              <Input value={brandModel} onChange={(e) => setBrandModel(e.target.value)} placeholder="Jenbacher / JMS" />
            </Field>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-700">Fields</span>
            {fields.map((field, i) => (
              <div key={i} className="flex items-end gap-2">
                <div className="flex-1">
                  <Field label="Name">
                    <Input
                      value={field.name}
                      onChange={(e) => updateField(i, { name: e.target.value })}
                      placeholder="Oil Pressure"
                    />
                  </Field>
                </div>
                <div className="w-28">
                  <Field label="Unit">
                    <Input value={field.unit} onChange={(e) => updateField(i, { unit: e.target.value })} placeholder="Bar" />
                  </Field>
                </div>
                <div className="w-32">
                  <Field label="Type">
                    <Select value={field.type} onChange={(e) => updateField(i, { type: e.target.value })}>
                      {FIELD_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </Select>
                  </Field>
                </div>
                <Button type="button" variant="secondary" onClick={() => removeField(i)} disabled={fields.length === 1}>
                  Remove
                </Button>
              </div>
            ))}
            <div>
              <Button type="button" variant="secondary" onClick={addField}>
                + Add Field
              </Button>
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit">Save Template</Button>
          </div>
        </form>
      </Card>

      <Table
        columns={['Name', 'Brand/Model', 'Field Count', '']}
        rows={templates}
        renderRow={(t) => (
          <Fragment key={t.id}>
            <tr>
              <td className="px-3 py-2 font-medium text-slate-900">{t.name}</td>
              <td className="px-3 py-2">{t.brandModel}</td>
              <td className="px-3 py-2">{t.fields.length}</td>
              <td className="px-3 py-2">
                <Button variant="secondary" onClick={() => setExpandedId(expandedId === t.id ? null : t.id)}>
                  {expandedId === t.id ? 'Hide fields' : 'View fields'}
                </Button>
              </td>
            </tr>
            {expandedId === t.id && (
              <tr>
                <td colSpan={4} className="bg-slate-50 px-3 py-3">
                  <div className="flex flex-wrap gap-2">
                    {t.fields.map((f) => (
                      <span
                        key={f.name}
                        className="rounded border border-slate-300 bg-white px-2 py-1 text-xs text-slate-700"
                      >
                        {f.name} {f.unit ? `(${f.unit})` : ''}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            )}
          </Fragment>
        )}
      />
    </div>
  );
}
