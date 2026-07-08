import SectionLabel from '../../components/ui/SectionLabel';

const ROWS = [
  { capability: 'CAT & Jenbacher interval logic', cmms: 'Manual configuration', oem: 'Jenbacher only / CAT only', genprima: 'Built in' },
  { capability: 'Live operating hour integration', cmms: 'Varies', oem: 'Yes (own brand only)', genprima: 'Yes' },
  { capability: 'Independent parts sourcing', cmms: 'Yes', oem: 'Directed to OEM', genprima: 'Yes' },
  { capability: 'Multi-brand fleet support', cmms: 'Yes (generic)', oem: 'No', genprima: 'Yes' },
  { capability: 'Independent service providers', cmms: 'Yes', oem: 'Restricted', genprima: 'Yes' },
  { capability: 'No OEM affiliation', cmms: 'Yes', oem: 'No', genprima: 'Yes' },
  { capability: 'Purpose-built for CHP/genset', cmms: 'No', oem: 'Partial', genprima: 'Yes' },
];

export default function WhyNotOEMSection() {
  return (
    <section className="bg-gp-black py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionLabel>On OEM Platforms</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-bold max-w-4xl">
          Manufacturer Software Is Designed to Serve the Manufacturer.
        </h2>
        <p className="text-base text-gp-muted leading-relaxed max-w-3xl mt-6">
          OEM-provided maintenance platforms are built within the OEM's service infrastructure. They are
          optimised for operations where the manufacturer's service network is the primary or sole maintenance
          provider. The data flows, alert structures, and procurement integrations within those platforms direct
          work back to OEM-certified channels.
        </p>
        <p className="text-base text-gp-muted leading-relaxed max-w-3xl mt-4">
          Independent operators — those sourcing their own parts, using independent service providers, or running
          mixed fleets — are operating outside the model those platforms were designed for. The result is a
          toolset that is either partially applicable or misaligned with how the operation actually runs. Genprima
          is built with no OEM affiliation. There is no service network it directs work toward. Maintenance
          decisions, parts sourcing, and service provider selection remain entirely with the operator.
        </p>

        <div className="overflow-x-auto mt-12">
          <table className="w-full border border-gp-border text-sm min-w-[640px]">
            <thead>
              <tr className="bg-gp-card">
                <th className="text-left p-4 font-bold border border-gp-border">Capability</th>
                <th className="text-left p-4 font-bold border border-gp-border">Generic CMMS</th>
                <th className="text-left p-4 font-bold border border-gp-border">OEM Platform</th>
                <th className="text-left p-4 font-bold border border-gp-border bg-gp-accent/10 text-gp-accent">
                  Genprima
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.capability}>
                  <td className="p-4 border border-gp-border font-medium">{row.capability}</td>
                  <td className="p-4 border border-gp-border text-gp-muted">{row.cmms}</td>
                  <td className="p-4 border border-gp-border text-gp-muted">{row.oem}</td>
                  <td className="p-4 border border-gp-border bg-gp-accent/10 text-gp-accent font-bold">
                    {row.genprima}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
