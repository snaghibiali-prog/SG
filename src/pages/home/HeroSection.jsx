import Button from '../../components/ui/Button';

export default function HeroSection() {
  return (
    <section
      className="min-h-[60vh] flex items-center justify-center relative bg-cover bg-center bg-no-repeat pt-28 pb-12"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative max-w-3xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <p className="text-xs font-bold uppercase tracking-widest text-gp-accent mb-5">
          Maintenance Management for Independent CHP &amp; Genset Operators
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-snug">
          Maintenance Management for CAT and Jenbacher CHP and Genset Fleets
        </h1>
        <p className="text-base text-gp-muted leading-relaxed max-w-2xl mt-6">
          Tracks operating hours, service intervals, and part changes against actual manufacturer specifications
          — not generic asset management logic.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button to="/contact" variant="primary">
            Request a Demo
          </Button>
          <Button to="/platform" variant="secondary">
            Explore the Platform
          </Button>
        </div>
      </div>
    </section>
  );
}
