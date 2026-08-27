import { Container } from "./Container";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

const collectionImages = [
  "img01.jpg",
  "img02.jpg",
  "img03.jpg",
  "img04.jpg",
  "img05.jpg",
  "img06.jpg",
  "img07.jpg",
  "img8.jpg",
];

interface CollectionImageHeroProps {
  title: string;
  subtitle: string;
}

export function CollectionImageHero({ title, subtitle }: CollectionImageHeroProps) {
  return (
    <Section
      bg="dark"
      padding="xl"
      className="flex min-h-[560px] items-center pt-36 md:min-h-[680px] md:pt-44"
    >
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4">
        {collectionImages.map((image) => (
          <img
            key={image}
            src={`/collectino/${image}`}
            alt="Luxury marble interior"
            className="h-full min-h-[280px] w-full object-cover opacity-55"
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-deep-black/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black/45 via-deep-black/10 to-deep-black/65" />
      <Container className="relative z-10">
        <SectionHeading title={title} subtitle={subtitle} />
      </Container>
    </Section>
  );
}
