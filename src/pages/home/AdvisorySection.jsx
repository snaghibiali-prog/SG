import SectionLabel from '../../components/ui/SectionLabel';
import Button from '../../components/ui/Button';

const SERVICES = [
  {
    title: 'Plant & System Design',
    body: 'Technical advisory for new CHP installations and site expansions. Covers system configuration, capacity planning, equipment layout, and specification documentation. Engagements are scoped based on project stage and complexity.',
  },
  {
    title: 'Engine Selection',
    body: 'Evaluation and selection support for operators assessing CHP or genset equipment. Covers load profile analysis, fuel type considerations, manufacturer comparison, and procurement preparation.',
  },
  {
    title: 'Performance Optimisation',
    body: 'Assessment of existing operations to identify efficiency improvements across fuel consumption, heat recovery, and load management. Output is a structured recommendations report with implementation priorities.',
  },
  {
    title: 'Troubleshooting & Diagnostics',
    body: 'Independent diagnostic assessment for operators experiencing performance issues, recurring faults, or post-maintenance anomalies. Conducted independently of any OEM service channel.',
  },
];

export default function AdvisorySection() {
  return (
    <section id="advisory" className="bg-gp-black py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionLabel>Advisory</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Technical Advisory for Operators Who Need More Than a Platform.
        </h2>
        <p className="text-base text-gp-muted leading-relaxed max-w-3xl mb-12">
          For operational decisions that fall outside the scope of maintenance management software, Genprima
          provides direct technical advisory services. These are separate engagements from the platform
          subscription, scoped and priced individually based on the work required.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {SERVICES.map((service) => (
            <div key={service.title} className="border border-gp-border p-8">
              <h3 className="font-bold text-lg mb-3">{service.title}</h3>
              <p className="text-sm text-gp-muted leading-relaxed">{service.body}</p>
            </div>
          ))}
        </div>

        <Button to="/contact" variant="secondary">
          Discuss an Advisory Engagement
        </Button>
      </div>
    </section>
  );
}
