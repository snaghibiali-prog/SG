import PageHero from '../components/ui/PageHero';
import SectionLabel from '../components/ui/SectionLabel';
import Card from '../components/ui/Card';
import Divider from '../components/ui/Divider';
import Button from '../components/ui/Button';

const PROCUREMENT_PROCESS = [
  'Platform generates end-of-cycle alert for a component',
  'Operator requests procurement support via the platform',
  'Genprima identifies OEM and aftermarket sourcing options',
  'Options presented to operator with recommendation',
  'Operator approves — Genprima manages the order',
  'Component delivered — operator logs the replacement in the platform',
];

const ADVISORY_SERVICES = [
  {
    title: 'Plant and System Design',
    body: 'Technical input for operators planning new CHP installations or modifications to existing sites. Advisory covers system architecture, capacity determination, equipment layout, fuel supply requirements, and specification documentation. Engagements are structured based on project stage — from initial feasibility through to procurement-ready specification.',
  },
  {
    title: 'Engine Selection',
    body: 'Selection advisory for operators evaluating CHP or genset equipment for a new or replacement installation. The engagement covers load profile assessment, fuel type suitability, manufacturer and model comparison, and preparation of a selection recommendation with supporting rationale. Genprima has no commercial relationship with equipment manufacturers and operates without referral incentives.',
  },
  {
    title: 'Performance Optimisation',
    body: 'Assessment of an existing operation to identify measurable efficiency improvements. Analysis covers fuel consumption patterns, heat recovery efficiency, load management strategy, and maintenance cost structure. Output is a written recommendations report with prioritised implementation steps and indicative impact estimates.',
  },
  {
    title: 'Troubleshooting and Diagnostics',
    body: 'Independent technical assessment for operators experiencing unresolved performance issues, recurring faults, or post-maintenance anomalies. The engagement is conducted independently of any OEM service channel or parts supplier. Output is a diagnostic report with identified probable causes and recommended corrective actions.',
  },
];

const ENGAGEMENT_PROCESS = [
  'Initial enquiry submitted via contact form',
  'Scope discussion conducted with Genprima technical team',
  'Engagement scope and fee agreed in writing',
  'Work conducted — output delivered within agreed timeline',
  "Follow-up support available at operator's request",
];

export default function Services() {
  return (
    <>
      <PageHero
        headline="Services"
        subheadline="Genprima provides two categories of service beyond the core platform: parts procurement, which is integrated into the platform workflow, and technical advisory, which is offered as a separate engagement for operators with specific project or operational requirements."
      />

      <section id="parts-procurement" className="bg-gp-dark py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <SectionLabel>Parts Procurement</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Component Sourcing at End-of-Cycle</h2>
          <p className="text-base text-gp-muted leading-relaxed mb-4">
            The Genprima platform identifies when components are approaching their replacement interval based on
            operating hours and manufacturer specifications. At that point, the operator can request that
            Genprima manage the procurement process directly.
          </p>
          <p className="text-base text-gp-muted leading-relaxed mb-10">
            Genprima assesses OEM and quality aftermarket sourcing options for the relevant component, advises
            the operator on the appropriate choice for their equipment and operating conditions, and manages the
            order through to delivery. The operator does not need to identify suppliers, negotiate terms, or
            manage import or delivery logistics.
          </p>

          <Card className="mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-gp-accent mb-6">Process</p>
            <ol className="flex flex-col gap-4">
              {PROCUREMENT_PROCESS.map((step, i) => (
                <li key={step} className="flex gap-4 text-sm text-gp-text">
                  <span className="text-gp-accent font-bold shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  {step}
                </li>
              ))}
            </ol>
          </Card>

          <div className="border border-gp-border p-6 mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-gp-muted mb-2">Important Note</p>
            <p className="text-sm text-gp-muted leading-relaxed">
              Parts procurement is a transactional service, priced per order. It is not included in the platform
              subscription. Pricing is provided at the point of procurement request based on component
              specification and sourcing.
            </p>
          </div>

          <Button to="/contact" variant="primary">
            Enquire About Parts Sourcing
          </Button>
        </div>
      </section>

      <Divider />

      <section id="advisory" className="bg-gp-black py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <SectionLabel>Technical Advisory</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Structured Engagements for Specific Operational Requirements
          </h2>
          <p className="text-base text-gp-muted leading-relaxed mb-10">
            Advisory services are offered as separate paid engagements, scoped and priced individually. They are
            not bundled with the platform subscription. Each engagement is defined at the outset with a clear
            scope, deliverable, and timeline.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {ADVISORY_SERVICES.map((service) => (
              <div key={service.title} className="border border-gp-border p-8">
                <h3 className="font-bold text-lg mb-3">{service.title}</h3>
                <p className="text-sm text-gp-muted leading-relaxed">{service.body}</p>
              </div>
            ))}
          </div>

          <Card className="mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-gp-accent mb-6">Engagement Process</p>
            <ol className="flex flex-col gap-4">
              {ENGAGEMENT_PROCESS.map((step, i) => (
                <li key={step} className="flex gap-4 text-sm text-gp-text">
                  <span className="text-gp-accent font-bold shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  {step}
                </li>
              ))}
            </ol>
          </Card>

          <Button to="/contact" variant="primary">
            Submit an Advisory Enquiry
          </Button>
        </div>
      </section>
    </>
  );
}
