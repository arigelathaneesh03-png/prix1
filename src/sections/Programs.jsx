import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ProgramCard from '../components/ProgramCard';
import { GYM_CONFIG } from '../data/gymData';

export default function Programs({ onExploreProgram }) {
  return (
    <section id="programs" className="py-24 sm:py-32 bg-[#121212] relative" aria-label="Fitness Programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="CURATED PROGRAMMING"
          title="FIND YOUR EDGE"
          subtitle="Training built around your goals, experience, and ambition."
          align="center"
        />

        {/* 4 Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {GYM_CONFIG.programs.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
              onExplore={onExploreProgram}
            />
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="text-xs sm:text-sm text-neutral-400">
            Unsure which blueprint matches your current physical baseline?{' '}
            <a
              href="#contact"
              className="text-[#E63946] hover:text-[#FF4D5A] font-semibold underline underline-offset-4 ml-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E63946]"
            >
              Request a free assessment with our coaching team.
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
