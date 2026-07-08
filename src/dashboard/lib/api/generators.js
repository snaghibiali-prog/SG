import * as db from './db';

export function listGenerators() {
  return db.getAll('generators');
}

export function listGeneratorsByCompany(companyId) {
  return db.getAll('generators').filter((g) => g.companyId === companyId);
}

export function getGenerator(id) {
  return db.getById('generators', id);
}

// Main Admin onboarding — creates the core, locked record.
export function onboardGenerator({
  companyId,
  brand,
  model,
  serial,
  site,
  installDate,
  templateId,
  baselineHours,
}) {
  return db.insert(
    'generators',
    {
      companyId,
      brand,
      model,
      serial,
      site,
      installDate,
      templateId,
      baselineHours: Number(baselineHours) || 0,
      currentHours: Number(baselineHours) || 0,
      lastUpdated: new Date().toISOString(),
    },
    'gen'
  );
}

// Company users may only push the current-hours reading (stands in for an
// automated RTU/API pull) — never the core setup fields.
export function updateCurrentHours(id, hours) {
  return db.update('generators', id, {
    currentHours: Number(hours),
    lastUpdated: new Date().toISOString(),
  });
}

// Main Admin only — editing locked core fields.
export function updateGeneratorCore(id, patch) {
  return db.update('generators', id, patch);
}
