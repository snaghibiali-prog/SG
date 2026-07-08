import * as db from './db';

export function listCompanies() {
  return db.getAll('companies');
}

export function getCompany(id) {
  return db.getById('companies', id);
}

export function createCompany({ name }) {
  return db.insert('companies', { name }, 'co');
}

export function updateCompany(id, patch) {
  return db.update('companies', id, patch);
}
