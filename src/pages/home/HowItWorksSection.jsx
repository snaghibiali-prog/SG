import SectionLabel from '../../components/ui/SectionLabel';

const STEPS = [
  {
    number: '01',
    title: 'Equipment Onboarding',
    body: 'Each generator is configured once at the point of onboarding. The operator uploads the equipment datasheet and the platform administrator sets up the service template, inspection parameter set, and parts catalogue entries for that specific model. CAT and Jenbacher units are configured to separate template structures reflecting their different maintenance requirements.',
    footnote: 'This initial configuration establishes the baseline from which all maintenance scheduling and history recording operates. It is a one-time process per unit.',
  },
  {
    number: '02',
    title: 'Live Data Integration',
    body: "Genprima connects to the operator's RTU or live data API to receive operating hour readings. These readings update the platform continuously, advancing each unit's maintenance schedule in real time against its configured service intervals.",
    footnote: 'Where live data feeds are not available, manual hour entry is supported as an input method. The maintenance logic operates identically regardless of data source.',
  },
  {
    number: '03',
    title: 'Maintenance Execution and Recording',
    body: "The platform surfaces upcoming and overdue service tasks based on current operating hours. Operators log inspections and service events through structured entry forms. Part changes are recorded against the relevant unit's parts catalogue, including component identification and replacement date.",
    footnote: "All entries are retained as a permanent, auditable service history for each generator. Records are accessible at any time and form a complete operational log of the unit's maintenance from the date of onboarding.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-gp-black py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionLabel>How the Platform Operates</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-bold mb-12">Three Operational Phases</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-gp-border">
          {STEPS.map((step) => (
            <div key={step.number} className="py-8 md:py-0 md:px-8 first:md:pl-0 last:md:pr-0">
              <p className="text-5xl font-black text-gp-accent mb-4">{step.number}</p>
              <h3 className="font-bold text-lg mb-3">{step.title}</h3>
              <p className="text-sm text-gp-muted leading-relaxed mb-4">{step.body}</p>
              <p className="text-sm text-gp-muted leading-relaxed italic">{step.footnote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
