import SectionLabel from '../../components/ui/SectionLabel';

export default function PlatformIntroSection() {
  return (
    <section className="bg-gp-dark py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionLabel>Genprima</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
          A Maintenance Management Platform Built Specifically for CHP and Genset Operations.
        </h2>
        <p className="text-base text-gp-muted leading-relaxed mt-8">
          Genprima connects to your live equipment data, tracks operating hours in real time, and maps them
          against manufacturer-defined service intervals for CAT and Jenbacher units. It provides a structured
          environment for logging inspections, recording part changes, and maintaining a complete service history
          for every generator in your fleet.
        </p>
        <p className="text-base text-gp-muted leading-relaxed mt-6">
          This is not a general purpose CMMS with CHP equipment added as a category. The maintenance logic,
          inspection templates, and parts catalogue structure are built around how this equipment actually
          operates and what its manufacturers actually require.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gp-border mt-12">
          {['Manufacturer-Specific Logic', 'Real-Time Operating Data', 'Complete Auditable History'].map((item) => (
            <div key={item} className="bg-gp-card p-8">
              <p className="font-bold">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
