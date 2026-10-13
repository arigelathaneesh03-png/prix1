import React from 'react';
import SectionHeading from '../components/SectionHeading';
import TrainerCard from '../components/TrainerCard';
import { GYM_CONFIG } from '../data/gymData';

export default function Trainers() {
  return (
    <section id="trainers" className="py-24 sm:py-32 bg-[#0A0A0A] relative" aria-label="Our Coaches">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="WORLD-CLASS MENTORSHIP"
          title="MEET YOUR COACHES"
          subtitle="Guidance, knowledge, and accountability for every stage of your journey."
          align="center"
        />

        {/* 3 Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GYM_CONFIG.trainers.map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>

        {/* Clear Demonstration Note Required by Prompt */}
        <div className="mt-12 text-center text-xs text-neutral-400">
          <p>
            * Trainer profiles and credentials shown above represent demonstration coaches designed for this prototype.
          </p>
        </div>

      </div>
    </section>
  );
}
