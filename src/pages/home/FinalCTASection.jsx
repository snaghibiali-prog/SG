import Button from '../../components/ui/Button';

export default function FinalCTASection() {
  return (
    <section className="bg-gp-black py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
          <span className="block">Genprima is available</span>
          <span className="block">for deployment now</span>
        </h2>
        <p className="text-base text-gp-muted leading-relaxed max-w-2xl mx-auto mb-10">
          Contact us to arrange a demonstration of the platform against your equipment configuration and
          operational requirements. No commitment is required at the demonstration stage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/contact" variant="primary">
            Request a Demo
          </Button>
          <Button to="/contact" variant="secondary">
            Contact Genprima
          </Button>
        </div>
      </div>
    </section>
  );
}
