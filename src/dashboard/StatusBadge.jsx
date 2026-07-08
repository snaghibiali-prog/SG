import { STATUS } from './lib/maintenanceStatus';

const STYLES = {
  [STATUS.OK]: 'bg-emerald-100 text-emerald-800 border-emerald-300',
  [STATUS.DUE_SOON]: 'bg-amber-100 text-amber-800 border-amber-300',
  [STATUS.OVERDUE]: 'bg-red-100 text-red-800 border-red-300',
};

export default function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex items-center rounded border px-2 py-0.5 text-xs font-semibold uppercase tracking-wide ${STYLES[status] ?? STYLES[STATUS.OK]}`}
    >
      {status}
    </span>
  );
}
