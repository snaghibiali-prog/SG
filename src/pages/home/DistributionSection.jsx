import SectionLabel from '../../components/ui/SectionLabel';
import Button from '../../components/ui/Button';

const TERMS = [
  'Exclusive territorial rights — one distributor per country',
  'Full technical onboarding and training',
  'Co-branding options available',
  'Direct access to Genprima product and support teams',
  'First-mover position in a market with no equivalent independent solution',
];

export default function DistributionSection() {
  return (
    <section className="bg-gp-dark py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionLabel>Distribution Partners</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Exclusive Country Distribution.</h2>
        <p className="text-base text-gp-muted leading-relaxed mb-4">
          Genprima is available for deployment across international markets through an exclusive
          single-country distributor model. One distributor is appointed per country. The appointed distributor
          operates as the sole licensed provider of the Genprima platform within that territory.
        </p>
        <p className="text-base text-gp-muted leading-relaxed mb-8">
          Distribution agreements are offered to qualified organisations with an established presence in the
          CHP, genset, or energy services sector in their market. The distributor manages client relationships
          and local go-to-market activity. Genprima provides the platform, technical support, and ongoing product
          development.
        </p>

        <ul className="flex flex-col gap-3 mb-10">
          {TERMS.map((term) => (
            <li key={term} className="flex gap-3 text-sm text-gp-text">
              <span className="text-gp-accent">—</span>
              {term}
            </li>
          ))}
        </ul>

        <Button to="/distribution" variant="primary">
          Enquire About Distribution Rights
        </Button>
      </div>
    </section>
  );
}
