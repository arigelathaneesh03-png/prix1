import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Dumbbell } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { GYM_CONFIG } from '../data/gymData';

export default function Contact({ selectedPlanId, selectedProgramName, onResetPlan }) {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#121212] relative" aria-label="Contact and Inquiry">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="TAKE THE FIRST STEP"
          title="LET'S GET YOU STARTED."
          subtitle="Tell us about your goals, and take the first step toward a more consistent training routine."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Gym Information & Amenities (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Facility Details Card */}
            <div className="bg-[#181818] border border-white/10 p-7 sm:p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-[#E63946] flex items-center justify-center text-white shadow-md">
                  <Dumbbell className="w-5 h-5 -rotate-45" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-extrabold uppercase text-white tracking-wide">
                    Facility Headquarters
                  </h3>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#E63946]">
                    Demonstration Location
                  </span>
                </div>
              </div>

              <div className="space-y-4 pt-2 border-t border-white/10 text-sm">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#E63946] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-display uppercase tracking-wider text-xs mb-0.5">
                      Address (Placeholder)
                    </strong>
                    <p className="text-neutral-400 font-sans leading-relaxed">
                      {GYM_CONFIG.contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#E63946] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-display uppercase tracking-wider text-xs mb-0.5">
                      Direct Phone
                    </strong>
                    <p className="text-neutral-400 font-sans">
                      {GYM_CONFIG.contact.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#E63946] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-display uppercase tracking-wider text-xs mb-0.5">
                      Inquiry Email
                    </strong>
                    <p className="text-neutral-400 font-sans">
                      {GYM_CONFIG.contact.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-2 border-t border-white/5">
                  <Clock className="w-5 h-5 text-[#E63946] shrink-0 mt-0.5" />
                  <div className="w-full">
                    <strong className="text-white block font-display uppercase tracking-wider text-xs mb-2">
                      Training Hours
                    </strong>
                    <div className="space-y-1.5 text-xs text-neutral-400">
                      {GYM_CONFIG.contact.hours.map((h, i) => (
                        <div key={i} className="flex justify-between items-center py-0.5 border-b border-white/5 last:border-0">
                          <span className="text-neutral-300">{h.days}</span>
                          <span className="font-mono text-white font-medium">{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visit Guidelines Card */}
            <div className="bg-[#181818] border border-white/10 p-6 space-y-3 text-xs text-neutral-400">
              <div className="flex items-center gap-2 text-white font-display uppercase tracking-wider font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-[#E63946]" />
                <span>First-Time Visit Expectations</span>
              </div>
              <p className="leading-relaxed">
                Walk-ins are welcomed during staffed hours for facility walk-throughs. Our floor coaches will introduce you to locker amenities, barbell safety racks, and discuss your workout background without sales pressure.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Validation Form (7 cols on lg) */}
          <div className="lg:col-span-7">
            <ContactForm
              selectedPlanId={selectedPlanId}
              selectedProgramName={selectedProgramName}
              onResetPlan={onResetPlan}
            />
          </div>

        </div>

      </div>
    </section>
  );
}
