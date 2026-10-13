import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { GYM_CONFIG } from '../data/gymData';

export default function About({ onDiscoverApproach }) {
  const [img1Src, setImg1Src] = useState("https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80");
  const [img2Src, setImg2Src] = useState("https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=700&q=80");

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0A0A0A] relative overflow-hidden" aria-label="About Iron Pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Photographic Composition (5 cols on lg) */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 overflow-hidden bg-[#181818] border border-white/10 shadow-2xl">
              <img
                src={img1Src}
                alt="Iron Pulse Modern Weight Room"
                onError={() => setImg1Src("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80")}
                loading="lazy"
                className="w-full h-[400px] sm:h-[500px] object-cover object-center filter brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/80 backdrop-blur-md border border-white/10">
                <span className="text-[11px] font-display uppercase tracking-widest text-[#E63946] font-bold block mb-1">
                  FACILITY PHILOSOPHY
                </span>
                <p className="text-xs sm:text-sm text-neutral-200 font-sans">
                  Built to strip away commercial distractions and focus on authentic athletic development.
                </p>
              </div>
            </div>

            {/* Overlapping secondary image (desktop only) */}
            <div className="hidden sm:block absolute -bottom-10 -right-8 w-56 h-64 z-20 overflow-hidden border-2 border-[#0A0A0A] shadow-2xl bg-[#121212]">
              <img
                src={img2Src}
                alt="Olympic barbell setup"
                onError={() => setImg2Src("https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=700&q=80")}
                loading="lazy"
                className="w-full h-full object-cover filter brightness-90 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Background design border accent */}
            <div className="absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-[#E63946]/40 pointer-events-none" />
          </div>

          {/* Right Column: Editorial Narrative (6 cols on lg) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <SectionHeading
              label="WHO WE ARE"
              title="MORE THAN A GYM. A STANDARD."
              align="left"
              className="mb-6 sm:mb-8"
            />

            <div className="space-y-4 text-base text-neutral-300 leading-relaxed font-sans mb-8">
              <p>
                Iron Pulse Fitness was founded on a singular conviction: real transformation isn't born from fads, gimmicks, or hollow motivation. It is forged through progressive training, deliberate technique, and an unrelenting commitment to showing up.
              </p>
              <p>
                Whether you are stepping into a weight room for the very first time or chasing a competitive personal record, our environment provides the equipment, structure, and coaching culture required to realize your physical potential.
              </p>
            </div>

            {/* Three Key Values */}
            <div className="space-y-4 mb-10 pt-2 border-t border-white/10">
              {GYM_CONFIG.values.map((val) => (
                <div key={val.number} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-[#E63946]/10 text-[#E63946] border border-[#E63946]/30 flex items-center justify-center font-display font-black text-sm shrink-0 mt-0.5">
                    {val.number}
                  </div>
                  <div>
                    <h4 className="text-base font-display uppercase font-bold text-white tracking-wide">
                      {val.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-0.5 font-sans leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div>
              <Button
                variant="primary"
                size="md"
                onClick={onDiscoverApproach}
                icon={ArrowRight}
              >
                DISCOVER OUR APPROACH
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
