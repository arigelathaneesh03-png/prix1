import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ items }) {
  // Support having one open at a time or toggling
  const [openId, setOpenId] = useState(items[0]?.id || null);

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const triggerId = `faq-trigger-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className={`border transition-all duration-300 bg-[#181818] ${
              isOpen
                ? 'border-[#E63946]/60 shadow-[0_4px_20px_rgba(230,57,70,0.1)]'
                : 'border-white/10 hover:border-white/25'
            }`}
          >
            <button
              type="button"
              id={triggerId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggleItem(item.id)}
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E63946] focus-visible:ring-inset select-none"
            >
              <span className="text-base sm:text-lg font-display uppercase tracking-wide font-bold text-white">
                {item.question}
              </span>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen
                    ? 'rotate-180 bg-[#E63946] text-white'
                    : 'bg-white/5 text-neutral-400 group-hover:text-white'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {/* Collapsible Panel */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              hidden={!isOpen}
              className={`px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-300 leading-relaxed font-sans border-t border-white/5 transition-all duration-300 ${
                isOpen ? 'block' : 'hidden'
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
