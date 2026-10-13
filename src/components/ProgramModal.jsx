import React, { useEffect } from 'react';
import { X, Check, Calendar, Target, Award, ArrowRight } from 'lucide-react';
import Button from './Button';

export default function ProgramModal({ program, onClose, onSelectProgramInquiry }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!program) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="program-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#121212] border border-white/15 rounded-none shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Visual */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden shrink-0">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover object-center filter brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-transparent" />
          
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:text-[#E63946] border border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E63946]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-display uppercase tracking-widest text-[#E63946] font-bold">
              {program.tagline}
            </span>
            <h3 id="program-modal-title" className="text-2xl sm:text-3xl font-display font-black uppercase text-white mt-0.5">
              {program.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 text-sm text-neutral-300">
          <div>
            <h4 className="text-xs font-display uppercase tracking-widest text-white/70 font-bold mb-2 flex items-center gap-2">
              <Target className="w-4 h-4 text-[#E63946]" />
              Training Focus
            </h4>
            <p className="text-base text-neutral-200 leading-relaxed font-sans">
              {program.details.focus}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[#181818] border border-white/5">
            <div>
              <span className="text-xs font-display uppercase tracking-wider text-neutral-400 block font-bold mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#E63946]" />
                Commitment
              </span>
              <p className="text-white font-medium">{program.details.schedule}</p>
            </div>
            <div>
              <span className="text-xs font-display uppercase tracking-wider text-neutral-400 block font-bold mb-1 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#E63946]" />
                Best Suited For
              </span>
              <p className="text-white font-medium">{program.details.idealFor}</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-display uppercase tracking-widest text-white/70 font-bold mb-3">
              What's Included in This Blueprint:
            </h4>
            <ul className="space-y-2.5">
              {program.details.includes.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#E63946]/20 text-[#E63946] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-neutral-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-[#181818] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400 text-center sm:text-left">
            Have questions about this program? Speak with our head coaches.
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              variant="secondary"
              size="sm"
              onClick={onClose}
              className="w-full sm:w-auto"
            >
              CLOSE
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={ArrowRight}
              onClick={() => {
                onClose();
                onSelectProgramInquiry(program);
              }}
              className="w-full sm:w-auto"
            >
              START THIS PROGRAM
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
