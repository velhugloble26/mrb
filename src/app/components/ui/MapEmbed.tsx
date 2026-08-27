"use client";

import { cn } from "@/lib/utils";
import { contact } from "@/data/site";

interface MapEmbedProps {
  className?: string;
}

export function MapEmbed({ className }: MapEmbedProps) {
  return (
    <div className={cn("relative w-full overflow-hidden border border-white/5", className)}>
      <div className="absolute inset-0 bg-champagne-gold/5 pointer-events-none z-10" />
      <iframe
        src={contact.mapsEmbed}
        width="100%"
        height="100%"
        style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Urbanea Casa Location"
        className="w-full h-full min-h-[400px]"
      />
    </div>
  );
}
