import Button from '../../components/ui/Button';

export default function HeroSection() {
  return (
    <section
      className="min-h-[80vh] flex items-center justify-center relative bg-cover bg-center bg-no-repeat pt-32 pb-16"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <p className="text-xs font-bold uppercase tracking-widest text-gp-accent mb-6">
          Maintenance Management for Independent CHP &amp; Genset Operators
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          <span className="block">Every Operating Hour Tracked</span>
          <span className="block">Every Service Interval Met</span>
          <span className="block">Every Part Change Recorded</span>
        </h1>
        <p className="text-base text-gp-muted leading-relaxed max-w-2xl mt-8">
          Genprima is a dedicated maintenance management platform for operators running CAT and Jenbacher CHP and
          genset equipment. Built around actual manufacturer service intervals — not generic asset management
          logic.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
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
