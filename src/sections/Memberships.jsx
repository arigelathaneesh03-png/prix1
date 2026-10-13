import React from 'react';
import SectionHeading from '../components/SectionHeading';
import MembershipCard from '../components/MembershipCard';
import { GYM_CONFIG } from '../data/gymData';

export default function Memberships({ onSelectPlan }) {
  return (
    <section id="membership" className="py-24 sm:py-32 bg-[#121212] relative" aria-label="Membership Plans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="TRANSPARENT TIERS"
          title="CHOOSE YOUR COMMITMENT"
          subtitle="Find the membership that fits your training routine. No hidden fees or lock-ins."
          align="center"
        />

        {/* 3 Tier Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {GYM_CONFIG.memberships.map((plan) => (
            <MembershipCard
              key={plan.id}
              plan={plan}
              onSelectPlan={onSelectPlan}
            />
          ))}
        </div>

        {/* Informational Disclaimer Box */}
        <div className="mt-14 max-w-3xl mx-auto p-4 bg-[#181818] border border-white/10 text-center text-xs text-neutral-400 space-y-1">
          <p className="font-sans">
            <strong className="text-white">Demonstration Notice:</strong> All fees are demonstration sample rates configured in <code className="text-[#E63946] bg-black/50 px-1 py-0.5 rounded">src/data/gymData.js</code>.
          </p>
          <p>
            Selecting a plan automatically pre-fills your preference in the inquiry form below for review.
          </p>
        </div>

      </div>
    </section>
  );
}
