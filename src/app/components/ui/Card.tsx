"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "product" | "feature" | "project" | "glass";
  hover?: boolean;
}

export function Card({ children, className, variant = "default", hover = true }: CardProps) {
  const variants = {
    default: "bg-charcoal border border-white/5",
    product: "bg-charcoal border border-white/5 group",
    feature: "bg-transparent",
    project: "relative overflow-hidden group cursor-pointer",
    glass: "glass-luxury",
  };

  return (
    <div
      className={cn(
        "transition-all duration-600 ease-luxury",
        variants[variant],
        hover && "hover:-translate-y-1 hover:shadow-elevated",
        className
      )}
    >
      {children}
    </div>
  );
}

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
  aspect?: "square" | "portrait" | "landscape" | "video" | "auto";
  overlay?: boolean;
}

export function CardImage({ src, alt, className, aspect = "landscape", overlay = false }: CardImageProps) {
  const aspects = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
    video: "aspect-video",
    auto: "",
  };

  return (
    <div className={cn("relative overflow-hidden", aspects[aspect], className)}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-800 ease-luxury group-hover:scale-105"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 via-deep-black/20 to-transparent" />
      )}
    </div>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
}

export function CardContent({ children, className, padding = "md" }: CardContentProps) {
  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return <div className={cn(paddings[padding], className)}>{children}</div>;
}
