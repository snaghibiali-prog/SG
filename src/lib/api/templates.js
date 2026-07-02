import * as db from './db';

export function listTemplates() {
  return db.getAll('templates');
}

export function getTemplate(id) {
  return db.getById('templates', id);
}

// fields: [{ name, unit, type }]
export function createTemplate({ name, brandModel, fields }) {
  return db.insert('templates', { name, brandModel, fields: fields ?? [] }, 'tpl');
}

export function updateTemplate(id, patch) {
  return db.update('templates', id, patch);
}
