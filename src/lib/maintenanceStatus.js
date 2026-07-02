import { listIntervalRulesByModel } from './api/intervalRules';
import { listPartChanges } from './api/partChanges';

export const DUE_SOON_THRESHOLD_HOURS = 500;

export const STATUS = {
  OK: 'OK',
  DUE_SOON: 'Due Soon',
  OVERDUE: 'Overdue',
};

const STATUS_RANK = { [STATUS.OK]: 0, [STATUS.DUE_SOON]: 1, [STATUS.OVERDUE]: 2 };

function statusFromRemaining(remainingHours, dueSoonThreshold) {
  if (remainingHours < 0) return STATUS.OVERDUE;
  if (remainingHours < dueSoonThreshold) return STATUS.DUE_SOON;
  return STATUS.OK;
}

// Returns one row per interval rule applying to the generator's model.
export function getPartStatuses(generator, { dueSoonThreshold = DUE_SOON_THRESHOLD_HOURS } = {}) {
  const rules = listIntervalRulesByModel(generator.model);
  const partChanges = listPartChanges(generator.id);

  return rules.map((rule) => {
    const changesForPart = partChanges
      .filter((c) => c.partName === rule.partName)
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    const lastChange = changesForPart[0] ?? null;

    const referenceHours = lastChange ? lastChange.hours : generator.baselineHours ?? 0;
    const dueAtHours = rule.intervalHours != null ? referenceHours + rule.intervalHours : null;
    const remainingHours = dueAtHours != null ? dueAtHours - generator.currentHours : null;
    const status =
      remainingHours != null ? statusFromRemaining(remainingHours, dueSoonThreshold) : STATUS.OK;

    return {
      rule,
      partName: rule.partName,
      lastChangedAt: lastChange?.timestamp ?? null,
      lastChangedHours: lastChange?.hours ?? null,
      hoursSince: generator.currentHours - referenceHours,
      dueAtHours,
      remainingHours,
      status,
    };
  });
}

export function getGeneratorStatus(generator, opts) {
  const parts = getPartStatuses(generator, opts);
  if (parts.length === 0) return STATUS.OK;
  return parts.reduce(
    (worst, p) => (STATUS_RANK[p.status] > STATUS_RANK[worst] ? p.status : worst),
    STATUS.OK
  );
}

export function getCompanyStatusCounts(generators, opts) {
  const counts = { [STATUS.OK]: 0, [STATUS.DUE_SOON]: 0, [STATUS.OVERDUE]: 0 };
  for (const g of generators) {
    counts[getGeneratorStatus(g, opts)] += 1;
  }
  return counts;
}
