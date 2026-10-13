import React from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import Button from './Button';

export default function MembershipCard({ plan, onSelectPlan }) {
  const isPopular = plan.popular;

  return (
    <div
      className={`relative flex flex-col justify-between bg-[#181818] border transition-all duration-300 p-7 sm:p-8 ${
        isPopular
          ? 'border-[#E63946] shadow-[0_0_30px_rgba(230,57,70,0.2)] md:-translate-y-2 bg-gradient-to-b from-[#1c1415] to-[#181818]'
          : 'border-white/10 hover:border-white/25 hover:shadow-xl'
      }`}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#E63946] text-white text-[11px] font-display uppercase tracking-widest font-black px-4 py-1 flex items-center gap-1.5 shadow-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{plan.popularBadge || 'RECOMMENDED'}</span>
        </div>
      )}

      <div>
        {/* Tier Name & Subtitle */}
        <div className="mb-6">
          <span className="text-xs font-display uppercase tracking-widest font-bold text-neutral-400 block mb-1">
            MEMBERSHIP TIER
          </span>
          <h3 className="text-3xl font-display font-black uppercase text-white tracking-tight">
            {plan.name}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2 min-h-[38px] leading-relaxed">
            {plan.subtitle}
          </p>
        </div>

        {/* Pricing Display */}
        <div className="py-6 border-y border-white/10 mb-6 flex items-baseline gap-1.5">
          <span className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            {plan.price}
          </span>
          <span className="text-sm font-sans font-medium text-neutral-400">
            {plan.billingPeriod}
          </span>
          <span className="ml-auto text-[10px] uppercase font-mono tracking-wider text-neutral-500 bg-black/40 px-2 py-0.5 border border-white/5">
            Demo Rate
          </span>
        </div>

        {/* Features Checklist */}
        <div className="space-y-3.5 mb-8">
          <p className="text-xs font-display uppercase tracking-wider text-neutral-400 font-bold">
            Included Privileges:
          </p>
          <ul className="space-y-3">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                <div
                  className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                    isPopular
                      ? 'bg-[#E63946] text-white'
                      : 'bg-white/10 text-[#E63946]'
                  }`}
                >
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Button */}
      <div className="pt-4 border-t border-white/5">
        <Button
          variant={isPopular ? 'primary' : 'secondary'}
          size="md"
          icon={ArrowRight}
          className="w-full justify-center"
          onClick={() => onSelectPlan(plan)}
        >
          {plan.ctaLabel}
        </Button>
      </div>
    </div>
  );
}
