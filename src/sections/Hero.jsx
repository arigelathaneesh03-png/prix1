import React, { useState } from 'react';
import { ArrowRight, ChevronDown, Flame } from 'lucide-react';
import Button from '../components/Button';
import { GYM_CONFIG } from '../data/gymData';

export default function Hero({ onStartJourney, onExplorePrograms }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const heroImage = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=85";
  const heroFallback = "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=2000&q=85";

  const handleScrollDown = () => {
    const highlights = document.getElementById('highlights');
    if (highlights) {
      highlights.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A] pt-20"
      aria-label="Hero Section"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Athlete training in modern gym"
          onLoad={() => setImgLoaded(true)}
          onError={(e) => {
            e.currentTarget.src = heroFallback;
            setImgLoaded(true);
          }}
          className={`w-full h-full object-cover object-center filter brightness-[0.65] contrast-[1.1] transition-opacity duration-1000 ${
            imgLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-black/30" />
        {/* Subtle red ambiance accent */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#E63946]/20 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
        <div className="max-w-3xl">
          
          {/* Small pre-headline label */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-black/60 border border-white/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-[#E63946] animate-pulse"></span>
            <span className="text-xs sm:text-sm font-display font-bold uppercase tracking-[0.25em] text-[#E63946]">
              {GYM_CONFIG.preHeadline}
            </span>
          </div>

          {/* Major Display Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black uppercase text-white tracking-tight leading-[0.95] mb-6 drop-shadow-md">
            BUILT BY DISCIPLINE.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#E63946]">
              DEFINED BY STRENGTH.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-xl text-neutral-300 font-sans leading-relaxed max-w-xl mb-10">
            {GYM_CONFIG.subTagline}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
            <Button
              variant="primary"
              size="lg"
              href="#membership"
              onClick={(e) => {
                if (onStartJourney) {
                  e.preventDefault();
                  onStartJourney();
                }
              }}
              icon={ArrowRight}
            >
              START YOUR JOURNEY
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href="#programs"
              onClick={(e) => {
                if (onExplorePrograms) {
                  e.preventDefault();
                  onExplorePrograms();
                }
              }}
            >
              EXPLORE PROGRAMS
            </Button>
          </div>

          {/* Trust Highlights Mini-Pill */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-[#E63946]" />
              <span className="text-neutral-200 font-medium">Olympic Grade Barbells & Platforms</span>
            </div>
            <div className="hidden sm:inline text-neutral-600">•</div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E63946]" />
              <span className="text-neutral-200 font-medium">Zero Intimidation Culture</span>
            </div>
            <div className="hidden sm:inline text-neutral-600">•</div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E63946]" />
              <span className="text-neutral-200 font-medium">Tailored Coaching Splits</span>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <button
          type="button"
          onClick={handleScrollDown}
          className="flex flex-col items-center gap-1.5 text-neutral-400 hover:text-white transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E63946] p-2 rounded"
          aria-label="Scroll to highlights"
        >
          <span className="text-[10px] font-display uppercase tracking-widest font-bold">
            SCROLL TO EXPLORE
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#E63946]" />
        </button>
      </div>
    </section>
  );
}
