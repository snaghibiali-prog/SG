import PageHero from '../components/ui/PageHero';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import BulletList from '../components/ui/BulletList';

const PROVIDED = [
  'Exclusive territorial rights — no competing Genprima channel in the country',
  'Full platform access and configuration rights for client accounts',
  'Technical training for distributor team members',
  'Onboarding support for each new client account',
  "Co-branding options under distributor's company identity",
  'Direct line to Genprima product and technical teams',
  'Input into product roadmap based on regional operator requirements',
  'Marketing materials and technical documentation in agreed formats',
];

const SUITABLE_APPLICANTS = [
  'Equipment dealers and service companies operating in the CHP or genset sector',
  'Energy consultancies with an established client base of independent plant operators',
  'Maintenance service providers looking to extend their offering with a software layer',
  'Industrial technology distributors with sector-specific relationships',
];

const MINIMUM_CRITERIA = [
  'Established commercial presence in the target country',
  'Existing relationships with CHP plant operators, genset operators, or energy asset owners',
  'Capacity to manage client onboarding and first-line support independently',
  'Commitment to exclusive representation — Genprima does not appoint distributors who represent directly competing platforms',
];

const APPLICATION_PROCESS = [
  'Initial enquiry submitted via the distribution enquiry form',
  'Introductory call with Genprima team to assess fit and discuss terms',
  'Formal application submitted with company and market documentation',
  'Agreement reviewed, negotiated, and executed',
  'Onboarding and training conducted with distributor team',
  'Market launch supported by Genprima',
];

export default function Distribution() {
  return (
    <>
      <PageHero
        headline="Exclusive Country Distribution"
        subheadline="Genprima operates a single-distributor model for international markets. One organisation is appointed as the exclusive distributor for each country. Applications are assessed against defined criteria and agreements are structured as formal exclusive distribution contracts."
      />

      <section className="bg-gp-dark py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">How Distribution Works</h2>
          <p className="text-base text-gp-muted leading-relaxed mb-4">
            Genprima sells directly to operators in markets where no distributor agreement is in place. When a
            distributor is appointed for a country, they become the sole licensed channel for that market.
            Genprima does not sell directly to operators in territories under active distribution agreement.
          </p>
          <p className="text-base text-gp-muted leading-relaxed">
            The distributor manages client acquisition, onboarding, and account relationships within their
            territory. Genprima provides the platform, technical support infrastructure, product training, and
            ongoing development. The arrangement is designed to give the distributor a genuine commercial
            advantage in their market — not a reseller relationship with margin compressed by direct competition.
          </p>
        </div>
      </section>

      <section className="bg-gp-black py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">What Is Provided</h2>
          <Card>
            <ul className="flex flex-col gap-4">
              {PROVIDED.map((item) => (
                <li key={item} className="text-sm text-gp-text border-b border-gp-border pb-4 last:border-0 last:pb-0">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section className="bg-gp-dark py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">Who Should Apply</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gp-accent mb-4">Suitable Applicants</p>
              <BulletList items={SUITABLE_APPLICANTS} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gp-accent mb-4">Minimum Criteria</p>
              <BulletList items={MINIMUM_CRITERIA} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gp-black py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Application Process</h2>
          <Card className="mb-10">
            <ol className="flex flex-col gap-4">
              {APPLICATION_PROCESS.map((step, i) => (
                <li key={step} className="flex gap-4 text-sm text-gp-text">
                  <span className="text-gp-accent font-bold shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  {step}
                </li>
              ))}
            </ol>
          </Card>
          <Button to="/contact" variant="primary">
            Submit a Distribution Enquiry
          </Button>
        </div>
      </section>
    </>
  );
}
