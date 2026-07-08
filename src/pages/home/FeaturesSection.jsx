import SectionLabel from '../../components/ui/SectionLabel';

const FEATURES = [
  {
    title: 'Maintenance Interval Engine',
    body: 'Calculates service tasks based on actual operating hours mapped against manufacturer-specified intervals. Tasks are generated automatically when a unit approaches or reaches a defined threshold. No manual calculation is required from the operator.',
  },
  {
    title: 'Live Operating Hour Tracking',
    body: "Receives operating hour data via RTU connection or live API feed. Hours are updated continuously and used directly to advance each unit's maintenance schedule. The platform reflects the current operational state of the equipment at all times.",
  },
  {
    title: 'Inspection and Service Logs',
    body: 'Provides structured forms for logging inspections, service events, and maintenance activities. Each entry is timestamped and associated with the relevant generator. The cumulative record forms a complete service history for the unit.',
  },
  {
    title: 'Parts Catalogue',
    body: 'Maintains a model-specific parts reference for each equipment type. Part changes are recorded against this catalogue, capturing component identification and replacement timing. Separate catalogue structures are maintained for CAT and Jenbacher equipment.',
  },
  {
    title: 'Fleet Dashboard',
    body: "Provides a consolidated view of all generators under management. Service status, upcoming tasks, and overdue items are visible across the entire fleet from a single screen. Units requiring immediate attention are surfaced without manual review.",
  },
  {
    title: 'Multi-Company Management',
    body: 'The platform supports multiple company accounts within a single administrative environment. Data is separated between accounts. Role-based access controls define what each user can view and modify within their assigned company.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-gp-dark py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionLabel>Platform Capabilities</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-bold mb-12">Core Functions.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gp-border">
          {FEATURES.map((feature, i) => (
            <div key={feature.title} className="bg-gp-card p-8">
              <p className="text-gp-accent font-black text-2xl mb-4">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="font-bold text-lg mb-3">{feature.title}</h3>
              <p className="text-sm text-gp-muted leading-relaxed">{feature.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
