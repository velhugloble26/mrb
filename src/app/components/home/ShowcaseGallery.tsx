"use client";

import { showcaseImages } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function ShowcaseGallery() {
  return (
    <Section bg="dark" padding="none">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {showcaseImages.map((src, index) => (
          <AnimatedSection
            key={index}
            animation="fade-in"
            delay={index * 100}
            className="relative aspect-square overflow-hidden group"
          >
            <img
              src={src}
              alt={`Luxury interior ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-1000 ease-luxury group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-deep-black/30 group-hover:bg-deep-black/10 transition-colors duration-500" />
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
