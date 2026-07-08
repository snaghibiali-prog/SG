import SectionLabel from '../../components/ui/SectionLabel';
import FAQAccordion from '../../components/ui/FAQAccordion';
import { FAQ_ITEMS } from '../../content/faqData';

export default function FAQSection() {
  return (
    <section className="bg-gp-dark py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionLabel>Frequently Asked Questions</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-bold mb-12">Common Questions.</h2>
        <FAQAccordion items={FAQ_ITEMS} />
      </div>
    </section>
  );
}
