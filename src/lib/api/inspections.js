import * as db from './db';

export function listInspections(generatorId) {
  return db
    .getAll('inspectionEntries')
    .filter((e) => e.generatorId === generatorId)
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
}

export function addInspection({ generatorId, hours, values, enteredBy }) {
  return db.insert(
    'inspectionEntries',
    {
      generatorId,
      timestamp: new Date().toISOString(),
      hours: Number(hours),
      values: values ?? {},
      enteredBy: enteredBy ?? 'Unknown',
    },
    'insp'
  );
}
