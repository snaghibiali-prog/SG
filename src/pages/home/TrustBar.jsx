export default function TrustBar() {
  return (
    <section className="bg-gp-dark py-6">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-8 flex-wrap justify-center">
          <span className="text-sm text-gp-muted uppercase tracking-widest">Supported Equipment:</span>
          <img src="/cat-logo.svg" alt="CAT" className="h-8 opacity-40 grayscale" />
          <img src="/jenbacher-logo.svg" alt="INNIO Jenbacher" className="h-8 opacity-40 grayscale" />
        </div>
        <p className="text-xs text-gp-muted">
          Independent platform. Not affiliated with or endorsed by any equipment manufacturer.
        </p>
      </div>
    </section>
  );
}
