import React from 'react';
import { Quote, Star } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { GYM_CONFIG } from '../data/gymData';

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-[#121212] relative" aria-label="Member Stories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="MEMBER PERSPECTIVES"
          title="THE COMMUNITY SPEAKS"
          subtitle="Experiences and milestones shared by our training community."
          align="center"
        />

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GYM_CONFIG.testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#181818] border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded bg-[#E63946]/10 text-[#E63946] flex items-center justify-center">
                    <Quote className="w-5 h-5" />
                  </div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E63946] text-[#E63946]" />
                    ))}
                  </div>
                </div>

                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed italic font-sans mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-display uppercase font-bold text-white tracking-wide">
                    {item.author}
                  </h4>
                  <span className="text-xs text-neutral-400 font-sans block">
                    {item.role}
                  </span>
                </div>
                <span className="text-[11px] font-display uppercase tracking-wider text-[#E63946] font-semibold bg-[#E63946]/10 px-2.5 py-1 border border-[#E63946]/30">
                  {item.program}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-12 text-center text-xs text-neutral-400">
          <p>
            * Testimonials shown above are sample member stories included for demonstration and prototype evaluation.
          </p>
        </div>

      </div>
    </section>
  );
}
