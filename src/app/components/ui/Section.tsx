"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: "dark" | "ivory" | "charcoal" | "transparent";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
}

const bgStyles = {
  dark: "bg-deep-black marble-texture",
  ivory: "bg-marble-ivory text-charcoal",
  charcoal: "bg-charcoal",
  transparent: "",
};

const paddingStyles = {
  none: "",
  sm: "py-12 md:py-16",
  md: "py-20 md:py-28",
  lg: "py-28 md:py-36",
  xl: "py-36 md:py-48",
};

export function Section({
  children,
  className,
  id,
  bg = "dark",
  padding = "md",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative overflow-hidden", bgStyles[bg], paddingStyles[padding], className)}
    >
      {children}
    </section>
  );
}
