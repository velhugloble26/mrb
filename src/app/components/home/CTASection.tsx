"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationModal } from "@/components/ui/ConsultationModal";

export function CTASection() {
  return (
    <Section
      bg="dark"
      padding="xl"
      className="relative"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2664&auto=format&fit=crop"
          alt="Luxury dining space"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-deep-black/90 to-deep-black" />
      </div>

      <Container className="relative z-10">
        <AnimatedSection animation="fade-up">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-caption uppercase tracking-[0.2em] text-champagne-gold mb-6 block">
              Begin Your Journey
            </span>
            <h2 className="font-display text-display-lg text-marble-ivory mb-6">
              Transform Your Dining Space
            </h2>
            <p className="text-body-lg text-marble-ivory/60 font-light mb-10 max-w-xl mx-auto">
              Let our design consultants help you find or create the perfect
              centrepiece for your home.
            </p>
            <ConsultationModal className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-champagne-gold to-light-gold px-10 py-4 text-sm uppercase tracking-[0.15em] text-deep-black transition-all duration-400 ease-luxury hover:shadow-gold-medium">
              Schedule a Consultation
            </ConsultationModal>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
