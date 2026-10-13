import React from 'react';

/**
 * Editorial Section Heading Component
 * Provides consistent typography, red sub-badges, and readable supporting text across sections.
 */
export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center', // 'left' | 'center' | 'right'
  className = '',
  titleClassName = '',
  light = false
}) {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  return (
    <div className={`flex flex-col mb-12 sm:mb-16 ${alignmentClasses[align]} ${className}`}>
      {label && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#E63946] inline-block"></span>
          <span className="text-xs sm:text-sm font-display uppercase tracking-widest font-bold text-[#E63946]">
            {label}
          </span>
        </div>
      )}

      {title && (
        <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight uppercase leading-[1.05] ${light ? 'text-black' : 'text-[#F5F5F5]'} ${titleClassName}`}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg max-w-2xl leading-relaxed ${light ? 'text-neutral-700' : 'text-[#A3A3A3]'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
