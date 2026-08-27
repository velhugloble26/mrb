import { Footer } from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";
import { Card, CardContent, CardImage } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CollectionImageHero } from "@/components/ui/CollectionImageHero";
import { projects } from "@/data/site";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <CollectionImageHero
          title="Spaces With Character"
          subtitle="A selection of homes, studios, and hospitality spaces shaped around Urbanea Casa tables."
        />
        <Section bg="ivory" padding="lg">
          <Container>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {projects.map((project) => (
                <Card key={project.id} variant="project" className="bg-marble-ivory">
                  <CardImage src={project.image} alt={project.name} aspect="landscape" overlay />
                  <CardContent className="bg-marble-ivory">
                    <p className="text-caption uppercase tracking-[0.15em] text-champagne-gold">{project.location}</p>
                    <h2 className="mt-2 font-display text-2xl text-charcoal">{project.name}</h2>
                    <p className="mt-3 text-body-sm leading-relaxed text-charcoal/60">{project.description}</p>
                    <p className="mt-5 text-caption uppercase tracking-[0.12em] text-charcoal/45">{project.style}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
