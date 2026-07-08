// Thin persistence layer over localStorage. Swap this module for real HTTP
// calls later — every entity is exposed through the same CRUD shape.
const STORAGE_KEY = 'chp-maintenance-db-v1';

const COLLECTIONS = [
  'companies',
  'generators',
  'templates',
  'inspectionEntries',
  'partChangeLogs',
  'intervalRules',
  'partsCatalog',
];

function emptyDb() {
  return Object.fromEntries(COLLECTIONS.map((c) => [c, []]));
}

function load() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return emptyDb();
  try {
    const parsed = JSON.parse(raw);
    return { ...emptyDb(), ...parsed };
  } catch {
    return emptyDb();
  }
}

let db = load();

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
}

function genId(prefix) {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

export function getAll(collection) {
  return [...db[collection]];
}

export function getById(collection, id) {
  return db[collection].find((item) => item.id === id) ?? null;
}

export function insert(collection, item, idPrefix) {
  const record = { id: item.id ?? genId(idPrefix ?? collection), ...item };
  db[collection] = [...db[collection], record];
  persist();
  return record;
}

export function update(collection, id, patch) {
  let updated = null;
  db[collection] = db[collection].map((item) => {
    if (item.id === id) {
      updated = { ...item, ...patch };
      return updated;
    }
    return item;
  });
  persist();
  return updated;
}

export function replaceAll(collection, items) {
  db[collection] = items;
  persist();
}

export function resetDb(newDb) {
  db = newDb ? { ...emptyDb(), ...newDb } : emptyDb();
  persist();
}

export function hasData() {
  return COLLECTIONS.some((c) => db[c].length > 0);
}
