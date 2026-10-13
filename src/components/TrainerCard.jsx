import React, { useState } from 'react';
import { Award, Share2 } from 'lucide-react';

export default function TrainerCard({ trainer }) {
  const [imgSrc, setImgSrc] = useState(trainer.image);

  return (
    <div className="group bg-[#181818] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col overflow-hidden shadow-lg">
      {/* Portrait photo container with fixed aspect ratio */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-900">
        <img
          src={imgSrc}
          alt={`Coach ${trainer.name}`}
          loading="lazy"
          onError={() => setImgSrc(trainer.fallbackImage)}
          className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent opacity-90" />
        
        {/* Specialty Tag */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <span className="text-xs font-display uppercase tracking-widest font-bold px-3 py-1 bg-[#E63946] text-white shadow-md">
            {trainer.specialty}
          </span>
          <span className="text-[11px] font-sans font-semibold text-neutral-300 bg-black/60 backdrop-blur-md px-2.5 py-1 border border-white/10 rounded">
            {trainer.experience}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-display font-extrabold text-white uppercase tracking-tight">
              {trainer.name}
            </h3>
            <span className="text-xs text-neutral-400 font-display uppercase tracking-wider flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-[#E63946]" />
              {trainer.credentials}
            </span>
          </div>

          <p className="text-sm text-neutral-400 leading-relaxed font-sans mb-5">
            {trainer.bio}
          </p>
        </div>

        {/* Social Placeholder */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
          <span className="font-mono text-neutral-400">{trainer.socialPlaceholder}</span>
          <span className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-default">
            <Share2 className="w-3.5 h-3.5" />
            <span>Coach Profile</span>
          </span>
        </div>
      </div>
    </div>
  );
}
