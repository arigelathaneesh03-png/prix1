import React from 'react';
import SectionHeading from '../components/SectionHeading';
import FAQAccordion from '../components/FAQAccordion';
import { GYM_CONFIG } from '../data/gymData';

export default function FAQ() {
  return (
    <section className="py-24 sm:py-32 bg-[#0A0A0A] relative" aria-label="Frequently Asked Questions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="COMMON INQUIRIES"
          title="FREQUENTLY ASKED QUESTIONS"
          subtitle="Everything you need to know about joining, training protocols, and gym policies."
          align="center"
        />

        <FAQAccordion items={GYM_CONFIG.faqs} />

        {/* Support Callout */}
        <div className="mt-12 text-center">
          <p className="text-sm text-neutral-400">
            Have a question that isn't answered here?{' '}
            <a
              href="#contact"
              className="text-[#E63946] hover:text-[#FF4D5A] font-semibold underline underline-offset-4 ml-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E63946]"
            >
              Reach out directly to our front desk team.
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
