import * as db from './db';

export function listPartChanges(generatorId) {
  return db
    .getAll('partChangeLogs')
    .filter((e) => e.generatorId === generatorId)
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
}

export function addPartChange({ generatorId, partName, partNumber, hours }) {
  return db.insert(
    'partChangeLogs',
    {
      generatorId,
      partName,
      partNumber: partNumber ?? null,
      timestamp: new Date().toISOString(),
      hours: Number(hours),
    },
    'pc'
  );
}
