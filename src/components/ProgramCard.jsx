import React, { useState } from 'react';
import { ArrowUpRight, Flame, Dumbbell, UserCheck, Scale } from 'lucide-react';

const iconMap = {
  'strength-training': Dumbbell,
  'personal-training': UserCheck,
  'hiit-conditioning': Flame,
  'weight-management': Scale
};

export default function ProgramCard({ program, onExplore }) {
  const [imgSrc, setImgSrc] = useState(program.image);
  const IconComponent = iconMap[program.id] || Dumbbell;

  return (
    <div className="group relative overflow-hidden bg-[#181818] border border-white/10 hover:border-[#E63946]/50 transition-all duration-500 flex flex-col justify-between min-h-[380px] sm:min-h-[420px] shadow-lg hover:shadow-[0_10px_30px_rgba(230,57,70,0.15)]">
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={imgSrc}
          alt={program.title}
          loading="lazy"
          onError={() => setImgSrc(program.fallbackImage)}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.75] contrast-[1.05]"
        />
        {/* Editorial Multi-layer Gradient Overlay for crisp text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-transparent" />
      </div>

      {/* Top Header Badge */}
      <div className="relative z-10 p-6 flex justify-between items-start">
        <div className="w-12 h-12 rounded bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#E63946] group-hover:bg-[#E63946] group-hover:text-white transition-colors duration-300 shadow-md">
          <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
        </div>
        <span className="text-[11px] font-display uppercase tracking-widest px-2.5 py-1 bg-white/10 backdrop-blur-md rounded text-white/90 border border-white/10">
          PROGRAM
        </span>
      </div>

      {/* Bottom Content Area */}
      <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-end">
        <span className="text-xs font-display uppercase tracking-wider text-[#E63946] font-bold mb-1">
          {program.tagline}
        </span>
        <h3 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-white mb-2.5 uppercase transition-colors group-hover:text-white">
          {program.title}
        </h3>
        <p className="text-sm text-neutral-300 leading-relaxed mb-6 line-clamp-2">
          {program.description}
        </p>

        {/* Action Button */}
        <div>
          <button
            type="button"
            onClick={() => onExplore(program)}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-display font-bold uppercase tracking-widest text-white group-hover:text-[#E63946] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E63946] rounded py-1"
          >
            <span>EXPLORE PROGRAM</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-[#E63946]" />
          </button>
        </div>
      </div>
    </div>
  );
}
