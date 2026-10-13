import React from 'react';

/**
 * Reusable Button Component
 * Supports multiple visual variants, icon embedding, accessible focus states, and link behavior.
 */
export default function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost'
  size = 'md',        // 'sm' | 'md' | 'lg'
  href,
  onClick,
  disabled = false,
  className = '',
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-display font-bold uppercase tracking-wider transition-all duration-300 select-none focus-visible:ring-2 focus-visible:ring-[#E63946] focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm tracking-widest gap-2",
    md: "px-6 py-3 text-base tracking-widest gap-2.5",
    lg: "px-8 py-4 text-lg tracking-widest gap-3"
  };

  const variantStyles = {
    primary: "bg-[#E63946] hover:bg-[#FF4D5A] active:bg-[#D32F3D] text-white shadow-lg hover:shadow-[0_0_20px_rgba(230,57,70,0.4)] border border-transparent",
    secondary: "bg-transparent hover:bg-white/10 active:bg-white/15 text-white border border-white/20 hover:border-white/50 backdrop-blur-sm",
    outline: "bg-transparent text-[#E63946] border border-[#E63946] hover:bg-[#E63946] hover:text-white active:bg-[#D32F3D]",
    ghost: "bg-transparent text-neutral-300 hover:text-white hover:bg-white/5 border border-transparent"
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClass}
        onClick={onClick}
        {...props}
      >
        {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={combinedClass}
      onClick={onClick}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </button>
  );
}
