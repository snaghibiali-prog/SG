export default function PageHero({ headline, subheadline }) {
  return (
    <section className="bg-gp-black pt-40 pb-20 md:pt-48 md:pb-24">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{headline}</h1>
        {subheadline && <p className="text-base text-gp-muted leading-relaxed max-w-2xl">{subheadline}</p>}
      </div>
    </section>
  );
}
