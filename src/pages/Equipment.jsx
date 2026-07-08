import PageHero from '../components/ui/PageHero';
import Divider from '../components/ui/Divider';
import Button from '../components/ui/Button';

const CAT_ITEMS = [
  'Model-specific service interval templates',
  'CAT SIS-referenced parts catalogue',
  'Inspection parameter sets for gas and diesel variants',
  'Operating hour tracking against CAT-defined thresholds',
];

const JENBACHER_ITEMS = [
  'Series-specific service interval templates',
  'Jenbacher inspection parameter sets',
  'Gas engine-specific operational parameters',
  'Parts catalogue maintained against Jenbacher component specifications',
];

export default function Equipment() {
  return (
    <>
      <PageHero
        headline="Supported Equipment."
        subheadline="Genprima is configured for CAT and INNIO Jenbacher CHP and genset equipment. Maintenance templates, inspection parameter sets, and parts catalogue structures are built specifically for these two equipment families — not adapted from a generic framework."
      />

      <section className="bg-gp-dark py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <img src="/cat-logo.svg" alt="CAT" className="h-12 mb-8 grayscale hover:grayscale-0 transition-all" />
          <h2 className="text-2xl md:text-3xl font-bold mb-3">CAT (Caterpillar) — Gas and Diesel Gensets and CHP Units</h2>
          <p className="text-base text-gp-muted leading-relaxed mb-4">
            CAT reciprocating engine gensets and CHP units are configured in Genprima using service interval data
            sourced from CAT SIS (Service Information System) specifications. Maintenance templates reflect CAT's
            published interval structure for the relevant model series.
          </p>
          <p className="text-base text-gp-muted leading-relaxed mb-8">
            Parts catalogue entries for CAT equipment are maintained against CAT part numbers and specifications.
            Operators using Genprima for CAT equipment can record part replacements against the correct component
            reference for their specific model.
          </p>
          <ul className="flex flex-col gap-3">
            {CAT_ITEMS.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-gp-text">
                <span className="text-gp-accent">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Divider />

      <section className="bg-gp-black py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <img
            src="/jenbacher-logo.svg"
            alt="INNIO Jenbacher"
            className="h-12 mb-8 grayscale hover:grayscale-0 transition-all"
          />
          <h2 className="text-2xl md:text-3xl font-bold mb-3">INNIO Jenbacher — Gas Engine CHP Systems</h2>
          <p className="text-base text-gp-muted leading-relaxed mb-4">
            Jenbacher gas engine CHP systems operate on different maintenance interval structures and inspection
            parameter sets compared to CAT equipment. Genprima maintains separate template configurations for
            Jenbacher units, reflecting the specific requirements of Jenbacher Series 2, 3, 4, 6, and 9 engines.
          </p>
          <p className="text-base text-gp-muted leading-relaxed mb-8">
            Inspection parameters tracked for Jenbacher units include those specific to gas engine operation —
            parameters not applicable to diesel genset configurations and therefore not present in CAT templates.
            This separation ensures that operators running mixed fleets are not working from a
            lowest-common-denominator template.
          </p>
          <ul className="flex flex-col gap-3">
            {JENBACHER_ITEMS.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-gp-text">
                <span className="text-gp-accent">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Divider />

      <section className="bg-gp-dark py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Other Equipment.</h2>
          <p className="text-base text-gp-muted leading-relaxed mb-8">
            Support for additional CHP and genset equipment brands is under development. Operators running
            equipment not currently listed should contact Genprima directly. Configuration for additional brands
            is assessed on a case-by-case basis and added to the platform roadmap based on operator demand.
          </p>
          <Button to="/contact" variant="primary">
            Enquire About Your Equipment
          </Button>
        </div>
      </section>
    </>
  );
}
