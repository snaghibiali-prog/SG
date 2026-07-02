import * as db from './db';

export function listPartsCatalog() {
  return db.getAll('partsCatalog');
}

export function listPartsCatalogByModel(model) {
  return db.getAll('partsCatalog').filter((p) => p.model === model);
}

export function createPartsCatalogEntry({ model, partNumber, partName }) {
  return db.insert('partsCatalog', { model, partNumber, partName }, 'part');
}

export function updatePartsCatalogEntry(id, patch) {
  return db.update('partsCatalog', id, patch);
}
