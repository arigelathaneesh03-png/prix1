import React from 'react';
import { Dumbbell, ArrowUp, Instagram, Youtube, Twitter, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { GYM_CONFIG } from '../data/gymData';

export default function Footer({ onProgramClick }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 text-neutral-400 text-sm">
      {/* Top Banner / Statement */}
      <div className="border-b border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-2xl sm:text-3xl font-display font-extrabold uppercase text-white tracking-tight">
              Ready to redefine your physical standard?
            </h4>
            <p className="text-neutral-400 text-sm mt-1">
              Join the Iron Pulse community and build strength with purpose.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#membership"
              className="px-6 py-3 bg-[#E63946] hover:bg-[#FF4D5A] text-white font-display font-bold uppercase tracking-wider text-sm transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E63946]"
            >
              CHOOSE A PLAN
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-3 bg-neutral-900 hover:bg-neutral-800 text-white border border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E63946]"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Bio (Spans 2 columns on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-3 inline-block">
              <div className="w-9 h-9 rounded bg-[#E63946] flex items-center justify-center text-white shadow-[0_0_15px_rgba(230,57,70,0.5)]">
                <Dumbbell className="w-5 h-5 -rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-xl tracking-wider text-white">
                  IRON<span className="text-[#E63946] ml-1">PULSE</span>
                </span>
                <span className="text-[9px] uppercase font-bold tracking-[0.25em] text-[#A3A3A3] -mt-1">
                  FITNESS
                </span>
              </div>
            </a>
            
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              An athletic performance center dedicated to purposeful training, scientific coaching, and uncompromising discipline. Engineered for those who refuse mediocrity.
            </p>

            <div className="pt-2">
              <span className="text-xs font-display uppercase tracking-wider text-neutral-400 font-bold block mb-2">
                Follow Demonstration Channels
              </span>
              <div className="flex items-center gap-3">
                <span
                  title="Demonstration Social Handle"
                  className="w-9 h-9 rounded bg-[#181818] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-[#E63946] hover:border-[#E63946]/50 transition-colors cursor-pointer"
                >
                  <Instagram className="w-4 h-4" />
                </span>
                <span
                  title="Demonstration Social Handle"
                  className="w-9 h-9 rounded bg-[#181818] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-[#E63946] hover:border-[#E63946]/50 transition-colors cursor-pointer"
                >
                  <Youtube className="w-4 h-4" />
                </span>
                <span
                  title="Demonstration Social Handle"
                  className="w-9 h-9 rounded bg-[#181818] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-[#E63946] hover:border-[#E63946]/50 transition-colors cursor-pointer"
                >
                  <Twitter className="w-4 h-4" />
                </span>
                <span
                  title="Demonstration Social Handle"
                  className="w-9 h-9 rounded bg-[#181818] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-[#E63946] hover:border-[#E63946]/50 transition-colors cursor-pointer"
                >
                  <Facebook className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-display uppercase tracking-widest text-white font-bold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {['Home', 'About', 'Programs', 'Trainers', 'Membership', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[#E63946] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E63946] rounded"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div>
            <h4 className="text-xs font-display uppercase tracking-widest text-white font-bold mb-4">
              Training Programs
            </h4>
            <ul className="space-y-2.5">
              {GYM_CONFIG.programs.map((prog) => (
                <li key={prog.id}>
                  <button
                    type="button"
                    onClick={() => onProgramClick ? onProgramClick(prog) : null}
                    className="hover:text-[#E63946] text-left transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E63946] rounded"
                  >
                    {prog.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Facility Info & Hours */}
          <div>
            <h4 className="text-xs font-display uppercase tracking-widest text-white font-bold mb-4">
              Demonstration Facility
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E63946] shrink-0 mt-0.5" />
                <span className="text-neutral-400">{GYM_CONFIG.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E63946] shrink-0" />
                <span className="text-neutral-400">{GYM_CONFIG.contact.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E63946] shrink-0" />
                <span className="text-neutral-400">{GYM_CONFIG.contact.email}</span>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#E63946] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="text-white font-medium">Standard Hours:</p>
                  <p>Mon - Fri: 5:00 AM - 11:00 PM</p>
                  <p>Sat: 6:00 AM - 10:00 PM</p>
                  <p>Sun: 7:00 AM - 8:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright & Disclaimer Strip */}
      <div className="border-t border-white/5 py-6 bg-black/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 text-center sm:text-left">
          <p>
            © {currentYear} {GYM_CONFIG.brandName}. All rights reserved. Created for demonstration purposes.
          </p>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>Privacy Policy (Demo)</span>
            <span>•</span>
            <span>Terms of Service (Demo)</span>
            <span>•</span>
            <span>Gym Guidelines</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
