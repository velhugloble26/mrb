"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  fullWidth?: boolean;
  icon?: ReactNode;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  onClick,
  type = "button",
  fullWidth = false,
  icon,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-3 rounded-luxury font-sans font-medium tracking-wide transition-all duration-400 ease-luxury relative overflow-hidden group";

  const variants = {
    primary:
      "bg-champagne-gold text-deep-black hover:bg-light-gold hover:shadow-gold-medium",
    secondary:
      "bg-marble-ivory text-charcoal hover:bg-white hover:shadow-elevated",
    outline:
      "border border-champagne-gold/50 text-champagne-gold hover:bg-champagne-gold/10 hover:border-champagne-gold",
    ghost:
      "text-marble-ivory/80 hover:text-marble-ivory hover:bg-white/5",
    gold:
      "bg-gradient-to-r from-champagne-gold to-light-gold text-deep-black hover:shadow-gold-medium",
  };

  const sizes = {
    sm: "px-6 py-2.5 text-caption uppercase",
    md: "px-8 py-3.5 text-sm uppercase tracking-[0.15em]",
    lg: "px-10 py-4 text-sm uppercase tracking-[0.15em]",
  };

  const widthClass = fullWidth ? "w-full" : "";

  const classes = cn(baseStyles, variants[variant], sizes[size], widthClass, className);

  if (href) {
    return (
      <a href={href} className={classes}>
        <span className="relative z-10">{children}</span>
        {icon && <span className="relative z-10">{icon}</span>}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      <span className="relative z-10">{children}</span>
      {icon && <span className="relative z-10">{icon}</span>}
    </button>
  );
}
