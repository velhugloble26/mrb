"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide" | "full";
}

const sizes = {
  default: "max-w-7xl mx-auto px-6 md:px-10 lg:px-16",
  narrow: "max-w-4xl mx-auto px-6 md:px-10",
  wide: "max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20",
  full: "w-full px-6 md:px-10 lg:px-16",
};

export function Container({ children, className, size = "default" }: ContainerProps) {
  return <div className={cn(sizes[size], className)}>{children}</div>;
}
