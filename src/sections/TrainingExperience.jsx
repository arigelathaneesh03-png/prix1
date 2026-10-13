import React, { useState } from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import Button from '../components/Button';

export default function TrainingExperience({ onFindProgram }) {
  const [bgSrc, setBgSrc] = useState("https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1920&q=80");

  return (
    <section
      className="relative py-28 sm:py-36 bg-[#0A0A0A] overflow-hidden flex items-center justify-center border-y border-white/10"
      aria-label="Training Experience Statement"
    >
      {/* Cinematic Full Width Background with High Contrast */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgSrc}
          alt="Athlete focused on heavy lift"
          loading="lazy"
          onError={() => setBgSrc("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80")}
          className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Pre-headline Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#E63946]/10 border border-[#E63946]/30 mb-6 backdrop-blur-sm">
          <Flame className="w-4 h-4 text-[#E63946]" />
          <span className="text-xs sm:text-sm font-display uppercase tracking-[0.2em] font-bold text-[#E63946]">
            THE IRON PULSE CULTURE
          </span>
        </div>

        {/* Impactful Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black uppercase text-white tracking-tight leading-[0.95] mb-6">
          YOUR EXCUSES<br />
          <span className="text-[#E63946]">END HERE.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-neutral-300 font-sans max-w-2xl leading-relaxed mb-10">
          Every session is an opportunity to get stronger, move better, and become more consistent. Stop negotiating with weakness.
        </p>

        {/* CTA */}
        <div>
          <Button
            variant="primary"
            size="lg"
            href="#programs"
            onClick={(e) => {
              if (onFindProgram) {
                e.preventDefault();
                onFindProgram();
              }
            }}
            icon={ArrowRight}
          >
            FIND YOUR PROGRAM
          </Button>
        </div>

      </div>
    </section>
  );
}
