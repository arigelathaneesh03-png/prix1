import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Button from '../components/Button';

export default function Philosophy({ onExplorePlans }) {
  const [photoSrc, setPhotoSrc] = useState("https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80");

  return (
    <section className="py-24 sm:py-32 bg-[#0A0A0A] relative overflow-hidden" aria-label="Our Philosophy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Narrative (6 cols on lg) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E63946]"></span>
              <span className="text-xs sm:text-sm font-display uppercase tracking-widest font-bold text-[#E63946]">
                THE PRINCIPLE
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black uppercase text-white tracking-tight leading-[1] mb-6">
              CONSISTENCY<br />
              <span className="text-[#E63946]">CREATES CHANGE.</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 font-sans leading-relaxed mb-6">
              Real progress comes from showing up, learning the fundamentals, and building habits you can maintain.
            </p>

            <p className="text-sm text-neutral-400 font-sans leading-relaxed mb-8">
              We reject short-term extremes that lead to burnout or injury. At Iron Pulse, every workout is programmed to compound over months and years, reinforcing joint integrity, functional movement, and physical self-reliance.
            </p>

            <div className="space-y-3 mb-10">
              {[
                "Sustainable progression without reckless volume",
                "Biomechanical precision over ego lifting",
                "A community focused on long-term discipline"
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-neutral-200">
                  <div className="w-5 h-5 rounded-full bg-[#E63946]/20 text-[#E63946] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div>
              <Button
                variant="primary"
                size="md"
                href="#membership"
                onClick={(e) => {
                  if (onExplorePlans) {
                    e.preventDefault();
                    onExplorePlans();
                  }
                }}
                icon={ArrowRight}
              >
                JOIN THE STANDARD
              </Button>
            </div>
          </div>

          {/* Right Visual (6 cols on lg) */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden bg-[#181818] border border-white/10 shadow-2xl">
              <img
                src={photoSrc}
                alt="Disciplined athlete focusing before training set"
                loading="lazy"
                onError={() => setPhotoSrc("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80")}
                className="w-full h-[450px] sm:h-[550px] object-cover object-center filter brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#121212]/90 backdrop-blur-md border border-white/10">
                <span className="text-[11px] font-display uppercase tracking-widest text-[#E63946] font-bold block mb-1">
                  NO GIMMICKS. NO SHORTCUTS.
                </span>
                <p className="text-xs sm:text-sm text-neutral-300 font-sans italic">
                  "Strength is not granted. It is claimed one repetition, one workout, and one disciplined choice at a time."
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
