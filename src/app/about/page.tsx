import { Footer } from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CollectionImageHero } from "@/components/ui/CollectionImageHero";
import { about, brand } from "@/data/site";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <CollectionImageHero title={about.heroHeading} subtitle={brand.description} />
        <Section bg="ivory" padding="lg">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-caption uppercase tracking-[0.2em] text-champagne-gold">Our Philosophy</p>
              <blockquote className="mt-6 font-display text-display-md leading-tight text-charcoal">“{about.philosophy.quote}”</blockquote>
              <p className="mx-auto mt-8 max-w-2xl text-body-lg leading-relaxed text-charcoal/65">{about.philosophy.text}</p>
            </div>
            <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
              <div>
                <SectionHeading align="left" title={about.craft.heading} subtitle={about.craft.text} light />
              </div>
              <div className="grid grid-cols-1 gap-px bg-charcoal/10 sm:grid-cols-2">
                {about.designApproach.map((item) => (
                  <div key={item.title} className="bg-marble-ivory p-8">
                    <h2 className="font-display text-xl text-charcoal">{item.title}</h2>
                    <p className="mt-3 text-body-sm leading-relaxed text-charcoal/60">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
