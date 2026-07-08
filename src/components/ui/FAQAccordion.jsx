import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="border-t border-gp-border">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question} className="border-b border-gp-border">
            <button
              className="w-full flex items-center justify-between py-6 text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className="font-bold text-base pr-6">{item.question}</span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-gp-accent transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              className="overflow-hidden transition-[max-height] duration-200"
              style={{ maxHeight: isOpen ? '480px' : '0px' }}
            >
              <p className="text-sm text-gp-muted leading-relaxed pb-6 pr-10">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
