import SectionLabel from '../../components/ui/SectionLabel';
import Button from '../../components/ui/Button';

const STEPS = [
  'OEM and quality aftermarket sourcing',
  'Component specification verified against equipment model',
  'Procurement initiated from within the platform at end-of-cycle alert',
  'Single point of contact for parts orders',
];

export default function ProcurementSection() {
  return (
    <section id="parts-procurement" className="bg-gp-dark py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3">
          <SectionLabel>Parts Procurement</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Parts Sourcing, Managed Directly from the Platform.
          </h2>
          <p className="text-base text-gp-muted leading-relaxed mb-4">
            When the platform identifies a component approaching its replacement interval, Genprima can manage
            the procurement process on the operator's behalf. OEM and quality aftermarket options are assessed
            against the specific equipment and operating context. The operator is advised on the appropriate
            choice before any order is placed.
          </p>
          <p className="text-base text-gp-muted leading-relaxed mb-8">
            Procurement is handled directly by Genprima. There is no third-party marketplace. The operator does
            not need to source suppliers, negotiate pricing, or manage import logistics independently.
          </p>
          <Button to="/contact" variant="primary">
            Enquire About Parts Procurement
          </Button>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-gp-card border border-gp-border p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-gp-accent mb-6">Service Points</p>
            <ul className="flex flex-col gap-4">
              {STEPS.map((step) => (
                <li key={step} className="text-sm text-gp-text border-b border-gp-border pb-4 last:border-0 last:pb-0">
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
