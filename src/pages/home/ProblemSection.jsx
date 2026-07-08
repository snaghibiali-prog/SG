import SectionLabel from '../../components/ui/SectionLabel';

const CARDS = [
  {
    title: 'No Interval Tracking System',
    body: 'Manufacturer service intervals for CAT and Jenbacher equipment are defined in hours, not calendar dates. Without a system tracking actual operating hours against those thresholds, intervals are missed — not through negligence, but through lack of tooling.',
  },
  {
    title: 'Service History Stored Informally',
    body: 'Inspection records, part change logs, and service events are typically stored in spreadsheets, email threads, or paper files. When equipment changes hands, when staff turn over, or when a fault needs diagnosing, that history is either incomplete or inaccessible.',
  },
  {
    title: 'No Visibility Across Multiple Units',
    body: 'Operators running more than one generator or managing more than one site have no consolidated view of fleet maintenance status. Each unit is managed in isolation with no mechanism to prioritise across the fleet.',
  },
  {
    title: 'OEM Software Does Not Serve Independent Operators',
    body: "Manufacturer-provided platforms are designed to support OEM service revenue. They work within the manufacturer's service ecosystem. Independent operators running mixed fleets, sourcing their own parts, or using independent service providers are not the intended user.",
  },
  {
    title: 'Parts Replacement Driven by Failure, Not Schedule',
    body: 'Without operating hour data linked to manufacturer part replacement intervals, components are typically replaced reactively — after a failure — rather than proactively at the correct service point. The cost differential between planned and unplanned replacement is significant.',
  },
  {
    title: 'No Standard for Multi-Brand Fleet Management',
    body: 'CAT and Jenbacher equipment use different inspection parameters, different service interval structures, and different parts catalogues. There is no independent platform purpose-built to manage both within a single operational view.',
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-gp-black py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionLabel>The Operational Reality</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-bold max-w-4xl">
          Independent Operators Carry Risk That Larger Organisations Distribute Across Departments.
        </h2>
        <p className="text-base text-gp-muted leading-relaxed max-w-3xl mt-6">
          When you own or operate CHP plant or genset equipment without a dedicated maintenance engineering
          function, the responsibility for service interval compliance, parts tracking, and service records sits
          with whoever has time to manage it. In most independent operations, that means it is managed
          inconsistently — or not at all.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gp-border mt-12">
          {CARDS.map((card) => (
            <div key={card.title} className="bg-gp-card p-8">
              <h3 className="font-bold text-lg mb-3">{card.title}</h3>
              <p className="text-sm text-gp-muted leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
