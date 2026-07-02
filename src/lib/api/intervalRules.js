import * as db from './db';

export function listIntervalRules() {
  return db.getAll('intervalRules');
}

export function listIntervalRulesByModel(model) {
  return db.getAll('intervalRules').filter((r) => r.model === model);
}

export function createIntervalRule({ model, partName, intervalHours, intervalCalendarDays }) {
  return db.insert(
    'intervalRules',
    {
      model,
      partName,
      intervalHours: intervalHours != null ? Number(intervalHours) : null,
      intervalCalendarDays: intervalCalendarDays != null ? Number(intervalCalendarDays) : null,
    },
    'rule'
  );
}

export function updateIntervalRule(id, patch) {
  return db.update('intervalRules', id, patch);
}
