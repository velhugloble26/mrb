"use client";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  light?: boolean;
  accent?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
  light = false,
  accent = false,
}: SectionHeadingProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={cn("max-w-3xl", alignClass[align], className)}>
      {accent && (
        <div className="flex items-center gap-4 mb-6 justify-center">
          <span className="h-px w-12 bg-champagne-gold/60" />
          <span className="text-caption uppercase tracking-[0.2em] text-champagne-gold font-medium">
            {brand.tagline}
          </span>
          <span className="h-px w-12 bg-champagne-gold/60" />
        </div>
      )}
      <h1
        className={cn(
          "font-display text-display-md font-medium leading-tight text-6xl",
          light ? "text-charcoal" : "text-marble-ivory"
        )}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-body-lg font-light leading-relaxed",
            light ? "text-charcoal/70" : "text-marble-ivory/60"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

import { brand } from "@/data/site";
