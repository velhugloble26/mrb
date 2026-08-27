"use client";

import { brandIntro } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function BrandIntro() {
  return (
    <Section bg="dark" padding="lg">
      <Container size="narrow">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <span className="text-caption uppercase tracking-[0.2em] text-champagne-gold mb-4 block">
              Our Story
            </span>
            <h2 className="font-display text-display-md text-marble-ivory">
              {brandIntro.heading}
            </h2>
          </div>
        </AnimatedSection>

        <div className="space-y-8">
          {brandIntro.paragraphs.map((paragraph, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
              <p className="text-body-lg text-marble-ivory/60 font-light leading-relaxed text-center">
                {paragraph}
              </p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={400}>
          <div className="mt-16 flex justify-center">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-champagne-gold/50 to-transparent" />
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
