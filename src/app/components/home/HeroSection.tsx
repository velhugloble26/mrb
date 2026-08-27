"use client";

import { brand, hero } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { ConsultationModal } from "@/components/ui/ConsultationModal";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={hero.image}
          alt="Luxury dining room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black/60 via-deep-black/40 to-deep-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <div className="max-w-4xl mx-auto">
          {/* Brand Tag */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-16 bg-champagne-gold/60" />
            <span className="text-caption uppercase tracking-[0.3em] text-champagne-gold font-medium">
              {brand.tagline}
            </span>
            <span className="h-px w-16 bg-champagne-gold/60" />
          </div>

          {/* Headline */}
          <h1 className="font-display text-display-xl font-medium text-marble-ivory mb-6 leading-[1.05]">
            {hero.headline}
          </h1>

          {/* Subtext */}
          <p className="text-body-lg text-marble-ivory/70 font-light max-w-xl mx-auto mb-12 italic">
            &ldquo;{hero.subtext}&rdquo;
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/collection" variant="gold" size="lg">
              {hero.ctaPrimary}
            </Button>
            <ConsultationModal className="inline-flex items-center justify-center gap-3 border border-champagne-gold/50 px-10 py-4 text-sm uppercase tracking-[0.15em] text-champagne-gold transition-all duration-400 ease-luxury hover:border-champagne-gold hover:bg-champagne-gold/10">
              {hero.ctaSecondary}
            </ConsultationModal>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-scroll-indicator">
        <span className="text-caption uppercase tracking-[0.2em] text-marble-ivory/40">
          Scroll
        </span>
        <ChevronDown size={20} className="text-champagne-gold/60" />
      </div>
    </section>
  );
}
