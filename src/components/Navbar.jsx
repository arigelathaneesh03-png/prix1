import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, ArrowRight } from 'lucide-react';
import Button from './Button';

export default function Navbar({ onJoinClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Membership', href: '#membership' },
    { name: 'Contact', href: '#contact' },
  ];

  // Detect scroll state and active section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'about', 'programs', 'trainers', 'membership', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#0A0A0A]/90 to-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E63946] rounded p-1"
            aria-label="Iron Pulse Fitness Home"
          >
            <div className="w-10 h-10 rounded bg-[#E63946] flex items-center justify-center text-white shadow-[0_0_15px_rgba(230,57,70,0.5)] transition-transform duration-300 group-hover:scale-105">
              <Dumbbell className="w-5 h-5 -rotate-45" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-xl sm:text-2xl tracking-wider text-white flex items-center">
                IRON<span className="text-[#E63946] ml-1">PULSE</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#A3A3A3] -mt-1">
                FITNESS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm uppercase font-display font-bold tracking-widest transition-colors duration-200 relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E63946] rounded px-1 ${
                    isActive
                      ? 'text-[#E63946]'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E63946] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="primary"
              size="sm"
              href="#membership"
              onClick={(e) => {
                if (onJoinClick) {
                  e.preventDefault();
                  onJoinClick();
                } else {
                  handleLinkClick(e, '#membership');
                }
              }}
              icon={ArrowRight}
              className="rounded-none shadow-md"
            >
              JOIN NOW
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded text-neutral-300 hover:text-white hover:bg-neutral-900 border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E63946]"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#E63946]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 top-[65px] z-40 bg-[#0A0A0A]/98 backdrop-blur-xl border-t border-white/10 md:hidden flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-200"
        >
          <div className="space-y-4 pt-4">
            <p className="text-xs font-display uppercase tracking-widest text-neutral-500 font-bold px-3">
              Navigation Menu
            </p>
            <div className="space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`block px-4 py-3 rounded-lg text-lg font-display uppercase tracking-wider font-bold transition-colors ${
                      isActive
                        ? 'bg-[#E63946]/10 text-[#E63946] border border-[#E63946]/30'
                        : 'text-neutral-200 hover:bg-neutral-900 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="pt-8 pb-10 border-t border-white/10 mt-6 space-y-4">
            <Button
              variant="primary"
              size="lg"
              href="#membership"
              onClick={(e) => {
                setMobileMenuOpen(false);
                if (onJoinClick) {
                  e.preventDefault();
                  onJoinClick();
                } else {
                  handleLinkClick(e, '#membership');
                }
              }}
              className="w-full text-center justify-center"
              icon={ArrowRight}
            >
              JOIN NOW
            </Button>
            <p className="text-center text-xs text-neutral-500">
              Demo inquiries & memberships • No commitment
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
