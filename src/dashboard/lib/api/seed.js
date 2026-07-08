import * as db from './db';

const JENBACHER_TEMPLATE_FIELDS = [
  { name: 'P (Active)', unit: 'kW', type: 'number' },
  { name: 'Q (Reactive)', unit: 'kVAR', type: 'number' },
  { name: 'Frequency', unit: 'Hz', type: 'number' },
  { name: 'Cos φ', unit: '-', type: 'number' },
  { name: 'Ue (Excitation Voltage)', unit: 'V', type: 'number' },
  { name: 'Voltage L1-N', unit: 'V', type: 'number' },
  { name: 'Voltage L2-N', unit: 'V', type: 'number' },
  { name: 'Voltage L3-N', unit: 'V', type: 'number' },
  { name: 'Current L1', unit: 'A', type: 'number' },
  { name: 'Current L2', unit: 'A', type: 'number' },
  { name: 'Current L3', unit: 'A', type: 'number' },
  { name: 'Winding Temp U', unit: '°C', type: 'number' },
  { name: 'Winding Temp V', unit: '°C', type: 'number' },
  { name: 'Winding Temp W', unit: '°C', type: 'number' },
  { name: 'Gen. Bearing A Temp', unit: '°C', type: 'number' },
  { name: 'Gen. Bearing B Temp', unit: '°C', type: 'number' },
  { name: 'Return Water Temp', unit: '°C', type: 'number' },
  { name: 'Jacket Water Temp', unit: '°C', type: 'number' },
  { name: 'Jacket Water Pressure', unit: 'Bar', type: 'number' },
  { name: 'Oil Temp', unit: '°C', type: 'number' },
  { name: 'Oil Pressure', unit: 'Bar', type: 'number' },
  { name: 'Mixture Temp', unit: '°C', type: 'number' },
  { name: 'Boost Pressure', unit: 'Bar', type: 'number' },
  { name: 'Actuator Position', unit: '%', type: 'number' },
  { name: 'Bypass Position', unit: '%', type: 'number' },
  { name: 'Gas Mixture Position', unit: '%', type: 'number' },
  { name: 'Cylinder Temp Avg', unit: '°C', type: 'number' },
  { name: 'Cylinder Temp Max', unit: '°C', type: 'number' },
  { name: 'Cylinder Temp Min', unit: '°C', type: 'number' },
  { name: 'Ignition Point Avg', unit: 'kW', type: 'number' },
  { name: 'Ignition Point Max', unit: 'kW', type: 'number' },
  { name: 'Ignition Point Min', unit: 'kW', type: 'number' },
  { name: 'Valve Noise Avg', unit: 'mV', type: 'number' },
  { name: 'Valve Noise Max', unit: 'mV', type: 'number' },
  { name: 'Valve Noise Min', unit: 'mV', type: 'number' },
  { name: 'Ignition Voltage Avg', unit: 'KV', type: 'number' },
  { name: 'Ignition Voltage Max', unit: 'KV', type: 'number' },
  { name: 'Ignition Voltage Min', unit: 'KV', type: 'number' },
  { name: 'Inside Temp', unit: '°C', type: 'number' },
  { name: 'Outside Temp', unit: '°C', type: 'number' },
  { name: 'Trans Temp', unit: '°C', type: 'number' },
  { name: 'Turbo Temp', unit: '°C', type: 'number' },
  { name: 'ΔP Air Filter', unit: 'kPa', type: 'number' },
  { name: 'LT Line Pressure', unit: 'Bar', type: 'number' },
  { name: 'HT Line Pressure', unit: 'Bar', type: 'number' },
  { name: 'Engine Oil Level', unit: '-', type: 'text' },
  { name: 'Oil Filter Pressure', unit: 'Bar', type: 'number' },
  { name: 'Oil Hours', unit: 'h', type: 'number' },
  { name: 'Total Power', unit: 'MWh', type: 'number' },
  { name: 'Total MVar', unit: 'Mvar', type: 'number' },
  { name: 'Total Operation Hours', unit: 'h', type: 'number' },
  { name: 'Number of Starts', unit: '-', type: 'number' },
];

const CAT_TEMPLATE_FIELDS = [
  { name: 'Oil Pressure', unit: 'Bar', type: 'number' },
  { name: 'Oil Temp', unit: '°C', type: 'number' },
  { name: 'Jacket Water Temp', unit: '°C', type: 'number' },
  { name: 'Jacket Water Pressure', unit: 'Bar', type: 'number' },
  { name: 'Boost Pressure', unit: 'Bar', type: 'number' },
  { name: 'P (Active)', unit: 'kW', type: 'number' },
  { name: 'Frequency', unit: 'Hz', type: 'number' },
  { name: 'Total Operation Hours', unit: 'h', type: 'number' },
  { name: 'Number of Starts', unit: '-', type: 'number' },
];

export function seedIfEmpty() {
  if (db.hasData()) return;

  const companies = [
    db.insert('companies', { name: 'Riverside Energy Co.' }, 'co'),
    db.insert('companies', { name: 'Northfield Industrial Park' }, 'co'),
  ];

  const templates = [
    db.insert(
      'templates',
      { name: 'Jenbacher Standard Genset Template', brandModel: 'Jenbacher / JMS', fields: JENBACHER_TEMPLATE_FIELDS },
      'tpl'
    ),
    db.insert(
      'templates',
      { name: 'CAT Standard Genset Template', brandModel: 'CAT / G3500', fields: CAT_TEMPLATE_FIELDS },
      'tpl'
    ),
  ];

  const generators = [
    db.insert(
      'generators',
      {
        companyId: companies[0].id,
        brand: 'Jenbacher',
        model: 'JMS 320',
        serial: 'JMS320-0091',
        site: 'Riverside Plant 1',
        installDate: '2019-03-14',
        templateId: templates[0].id,
        baselineHours: 0,
        currentHours: 18450,
        lastUpdated: new Date().toISOString(),
      },
      'gen'
    ),
    db.insert(
      'generators',
      {
        companyId: companies[0].id,
        brand: 'CAT',
        model: 'CAT G3516',
        serial: 'CATG3516-2277',
        site: 'Riverside Plant 1',
        installDate: '2020-07-01',
        templateId: templates[1].id,
        baselineHours: 0,
        currentHours: 9120,
        lastUpdated: new Date().toISOString(),
      },
      'gen'
    ),
    db.insert(
      'generators',
      {
        companyId: companies[1].id,
        brand: 'Jenbacher',
        model: 'JMS 320',
        serial: 'JMS320-0142',
        site: 'Northfield Site A',
        installDate: '2018-11-20',
        templateId: templates[0].id,
        baselineHours: 0,
        currentHours: 25980,
        lastUpdated: new Date().toISOString(),
      },
      'gen'
    ),
    db.insert(
      'generators',
      {
        companyId: companies[1].id,
        brand: 'CAT',
        model: 'CAT G3512',
        serial: 'CATG3512-5561',
        site: 'Northfield Site B',
        installDate: '2021-02-05',
        templateId: templates[1].id,
        baselineHours: 0,
        currentHours: 3010,
        lastUpdated: new Date().toISOString(),
      },
      'gen'
    ),
  ];

  db.insert('intervalRules', { model: 'JMS 320', partName: 'Spark Plugs', intervalHours: 4000 }, 'rule');
  db.insert('intervalRules', { model: 'JMS 320', partName: 'Oil Change', intervalHours: 2000 }, 'rule');
  db.insert('intervalRules', { model: 'JMS 320', partName: 'Ignition System Inspection', intervalHours: 8000 }, 'rule');
  db.insert('intervalRules', { model: 'CAT G3516', partName: 'Oil Change', intervalHours: 1500 }, 'rule');
  db.insert('intervalRules', { model: 'CAT G3516', partName: 'Spark Plugs', intervalHours: 4500 }, 'rule');
  db.insert('intervalRules', { model: 'CAT G3512', partName: 'Oil Change', intervalHours: 1500 }, 'rule');
  db.insert('intervalRules', { model: 'CAT G3512', partName: 'Air Filter', intervalHours: 3000 }, 'rule');

  db.insert('partsCatalog', { model: 'JMS 320', partNumber: 'JB-SP-4401', partName: 'Spark Plugs' }, 'part');
  db.insert('partsCatalog', { model: 'JMS 320', partNumber: 'JB-OIL-1120', partName: 'Oil Filter Kit' }, 'part');
  db.insert('partsCatalog', { model: 'CAT G3516', partNumber: 'CAT-SP-9981', partName: 'Spark Plugs' }, 'part');
  db.insert('partsCatalog', { model: 'CAT G3516', partNumber: 'CAT-OIL-3350', partName: 'Oil Filter Kit' }, 'part');
  db.insert('partsCatalog', { model: 'CAT G3512', partNumber: 'CAT-AF-2210', partName: 'Air Filter' }, 'part');

  db.insert(
    'partChangeLogs',
    { generatorId: generators[0].id, partName: 'Spark Plugs', partNumber: 'JB-SP-4401', timestamp: '2025-09-10T00:00:00.000Z', hours: 14300 },
    'pc'
  );
  db.insert(
    'partChangeLogs',
    { generatorId: generators[2].id, partName: 'Oil Change', partNumber: 'JB-OIL-1120', timestamp: '2026-05-01T00:00:00.000Z', hours: 24800 },
    'pc'
  );

  db.insert(
    'inspectionEntries',
    {
      generatorId: generators[0].id,
      timestamp: '2026-06-28T08:00:00.000Z',
      hours: 18400,
      values: { 'P (Active)': 3200, Frequency: 50, 'Oil Pressure': 4.1, 'Oil Temp': 78 },
      enteredBy: 'J. Ramirez',
    },
    'insp'
  );
}
