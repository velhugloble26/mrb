"use client";

import { products } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardImage, CardContent } from "@/components/ui/Card";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight } from "lucide-react";

export function FeaturedCollection() {
  const featured = products.slice(0, 4);

  return (
    <Section bg="charcoal" padding="lg">
      <Container>
        <div className="flex justify-center mb-16">
          <SectionHeading
            title="The Collection"
            subtitle="Curated dining tables designed to become the centrepiece of exceptional interiors."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featured.map((product, index) => (
            <AnimatedSection key={product.id} animation="fade-up" delay={index * 100}>
              <Card variant="product" className="group cursor-pointer">
                <CardImage
                  src={product.image}
                  alt={product.name}
                  aspect="landscape"
                />
                <CardContent className="border-t border-white/5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-caption uppercase tracking-[0.15em] text-champagne-gold/80 mb-2">
                        {product.category}
                      </p>
                      <h3 className="font-display text-xl text-marble-ivory mb-2 group-hover:text-champagne-gold transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-body-sm text-marble-ivory/50 line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                  </div>
                  <a
                    href={`/product/${product.id}`}
                    className="inline-flex items-center gap-2 mt-5 text-caption uppercase tracking-[0.15em] text-champagne-gold/80 hover:text-champagne-gold transition-colors duration-300 group/link"
                  >
                    View Details
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </a>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={500}>
          <div className="mt-16 text-center">
            <a
              href="/collection"
              className="inline-flex items-center gap-3 px-8 py-3.5 text-caption uppercase tracking-[0.15em] border border-champagne-gold/40 text-champagne-gold hover:bg-champagne-gold/10 hover:border-champagne-gold transition-all duration-400"
            >
              View All Products
              <ArrowRight size={14} />
            </a>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
