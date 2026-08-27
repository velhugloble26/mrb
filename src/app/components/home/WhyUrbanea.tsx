"use client";

import { features } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Gem, Palette, Hammer, Sparkles, Home } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Gem: <Gem size={28} strokeWidth={1.2} />,
  Palette: <Palette size={28} strokeWidth={1.2} />,
  Hammer: <Hammer size={28} strokeWidth={1.2} />,
  Sparkles: <Sparkles size={28} strokeWidth={1.2} />,
  Home: <Home size={28} strokeWidth={1.2} />,
};

export function WhyUrbanea() {
  return (
    <Section bg="ivory" padding="lg">
      <Container>
        <div className="flex justify-center mb-16">
          <SectionHeading
            title="Why Urbanea Casa"
            subtitle="Every detail is considered. Every surface is perfected."
            light
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/10">
          {features.map((feature, index) => (
            <AnimatedSection
              key={feature.title}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="bg-marble-ivory p-10 md:p-12 group hover:bg-ivory-dark transition-colors duration-500">
                <div className="text-champagne-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                  {iconMap[feature.icon]}
                </div>
                <h3 className="font-display text-xl text-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="text-body-sm text-charcoal/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
