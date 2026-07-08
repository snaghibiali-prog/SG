import PageHero from '../components/ui/PageHero';
import Card from '../components/ui/Card';

const PRINCIPLES = [
  'No OEM affiliation — Genprima has no commercial relationship with Caterpillar, INNIO, or any equipment manufacturer',
  'No directed procurement — operators are free to source parts and services from any provider',
  'No proprietary data lock-in — operators retain ownership of their operational data',
  'No generic logic — maintenance templates are specific to the equipment, not approximated from a general framework',
];

export default function About() {
  return (
    <>
      <PageHero headline="About Genprima" />

      <section className="bg-gp-dark py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">The Gap This Platform Was Built to Close</h2>
          <p className="text-base text-gp-muted leading-relaxed mb-4">
            Independent CHP plant and genset operators occupy a specific position in the energy sector. They own
            and operate generating equipment — often CAT or Jenbacher units — without the maintenance engineering
            infrastructure of a large utility and without the OEM service relationship that larger operators use
            to manage interval compliance.
          </p>
          <p className="text-base text-gp-muted leading-relaxed mb-4">
            The tools available to these operators fall into two categories: generic asset management software
            that requires significant configuration to approximate CHP maintenance logic, and OEM-provided
            platforms that are designed to support the manufacturer's service network rather than the independent
            operator's autonomy.
          </p>
          <p className="text-base text-gp-muted leading-relaxed">
            Genprima was built to address that gap directly. A platform purpose-built for CHP and genset
            maintenance management, independent of any OEM, configured for the actual maintenance requirements of
            CAT and Jenbacher equipment, and designed for operators managing their own maintenance without a
            dedicated engineering function.
          </p>
        </div>
      </section>

      <section className="bg-gp-black py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">A Software Company</h2>
          <p className="text-base text-gp-muted leading-relaxed mb-4">
            Genprima is a software business. The platform is the product. Advisory services and parts
            procurement exist to support operators whose requirements go beyond what software alone can address —
            but they are secondary to the platform and do not define what Genprima is.
          </p>
          <p className="text-base text-gp-muted leading-relaxed">
            The platform is built to be deployable across any market, scalable across any fleet size, and
            independent of any equipment manufacturer's commercial interests. These are properties of the
            software, not of a service business.
          </p>
        </div>
      </section>

      <section className="bg-gp-dark py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Operating Principles</h2>
          <Card>
            <ul className="flex flex-col gap-4">
              {PRINCIPLES.map((item) => (
                <li key={item} className="text-sm text-gp-text border-b border-gp-border pb-4 last:border-0 last:pb-0">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>
    </>
  );
}
