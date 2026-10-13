import React from 'react';
import { Award, ShieldCheck, Dumbbell, Users } from 'lucide-react';
import { GYM_CONFIG } from '../data/gymData';

const iconMap = {
  'expert-coaching': Award,
  'modern-equipment': Dumbbell,
  'flexible-memberships': ShieldCheck,
  'supportive-community': Users
};

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="relative z-20 bg-[#121212] border-y border-white/10 py-8 lg:py-10"
      aria-label="Gym Highlights"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-white/10">
          {GYM_CONFIG.highlights.map((item, index) => {
            const Icon = iconMap[item.id] || Dumbbell;
            return (
              <div
                key={item.id}
                className={`flex items-start gap-4 pt-6 sm:pt-0 ${
                  index !== 0 ? 'lg:pl-8' : ''
                }`}
              >
                <div className="w-12 h-12 rounded bg-[#181818] border border-white/10 flex items-center justify-center shrink-0 text-[#E63946] shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-display uppercase font-bold text-white tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
