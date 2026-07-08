import PageHero from '../components/ui/PageHero';
import SectionLabel from '../components/ui/SectionLabel';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const DATA_INPUTS = [
  'Equipment datasheet — uploaded once at onboarding to establish baseline configuration',
  'RTU data feed — live operating hour readings via direct connection',
  'API integration — operating hour data via third-party system API',
  'Manual entry — operating hour input by operator where live feed is unavailable',
  'Inspection logs — structured entries submitted by company users',
  'Part change records — component replacement entries submitted by company users',
];

export default function Platform() {
  return (
    <>
      <PageHero
        headline="The Platform"
        subheadline="A maintenance management system built specifically for CAT and Jenbacher CHP and genset equipment. Not adapted from a generic template. Designed from the operational requirements of this equipment category."
      />

      <section className="bg-gp-dark py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Operational Scope</h2>
          <p className="text-base text-gp-muted leading-relaxed mb-4">
            Genprima manages three core functions for every generator under its administration: maintenance
            interval tracking, service event logging, and parts change recording. These three functions are
            linked — part changes update the interval clock, service logs are referenced against interval
            history, and the interval engine drives what appears on the operator's dashboard.
          </p>
          <p className="text-base text-gp-muted leading-relaxed">
            The platform does not manage procurement, vendor relationships, work orders, or predictive
            analytics. It does what maintenance management for this equipment category actually requires:
            precise interval tracking, structured record-keeping, and clear visibility across the fleet.
          </p>
        </div>
      </section>

      <section className="bg-gp-black py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">How Interval Tracking Works</h2>
          <p className="text-base text-gp-muted leading-relaxed mb-4">
            Each generator is configured with a set of service intervals on onboarding. Intervals are defined in
            operating hours and correspond to the manufacturer's published maintenance schedule for that specific
            model. When the platform receives an operating hour update — either via live data feed or manual
            entry — it calculates the hours elapsed since the last recorded service event for each interval type.
          </p>
          <p className="text-base text-gp-muted leading-relaxed mb-6">
            When a unit approaches a defined threshold, the platform surfaces a maintenance task. When the task
            is completed and logged, the interval clock resets from the recorded service date. The process
            repeats continuously for the operational life of the unit on the platform.
          </p>
          <p className="text-sm text-gp-muted italic">
            Interval thresholds are configured by the platform administrator at onboarding and can be updated to
            reflect manufacturer guidance changes or field experience.
          </p>
        </div>
      </section>

      <section className="bg-gp-dark py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">Two Operational Roles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gp-border">
            <div className="bg-gp-card p-8">
              <h3 className="font-bold text-lg mb-3">Platform Administrator</h3>
              <p className="text-sm text-gp-muted leading-relaxed">
                The platform administrator manages the back-end configuration of the system. This includes
                generator onboarding, service template definition, interval rule configuration, and parts
                catalogue management. Generator core configuration is locked to the administrator role to
                maintain data integrity across the platform.
              </p>
            </div>
            <div className="bg-gp-card p-8">
              <h3 className="font-bold text-lg mb-3">Company User</h3>
              <p className="text-sm text-gp-muted leading-relaxed">
                Company users are the operators and maintenance staff working with the platform day to day. Their
                view is scoped to their assigned generators. They log inspections, record service events, submit
                part change entries, and view their fleet dashboard. They cannot modify generator configuration
                or platform-level settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gp-black py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <SectionLabel>Data Inputs</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">How Data Enters the Platform</h2>
          <Card>
            <ul className="flex flex-col gap-4">
              {DATA_INPUTS.map((item) => (
                <li key={item} className="text-sm text-gp-text border-b border-gp-border pb-4 last:border-0 last:pb-0">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section className="bg-gp-dark py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="text-base text-gp-muted leading-relaxed mb-8">
            Genprima is available for a structured demonstration against your equipment and operational
            configuration.
          </p>
          <Button to="/contact" variant="primary">
            Request a Demo
          </Button>
        </div>
      </section>
    </>
  );
}
