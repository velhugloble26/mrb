import { Footer } from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";
import { Card, CardContent, CardImage } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CollectionImageHero } from "@/components/ui/CollectionImageHero";
import { products } from "@/data/site";

export default function CollectionPage() {
  return (
    <>
      <Navbar />
      <main>
        <CollectionImageHero
          title="The Collection"
          subtitle="Distinctive dining tables shaped by natural materials, architectural form, and considered craftsmanship."
        />
        <Section bg="charcoal" padding="lg">
          <Container>
            <div className="mb-12 flex flex-wrap justify-center gap-3">
              {['All Tables', 'Marble', 'Modern', 'Luxury', 'Bespoke'].map((category, index) => (
                <span key={category} className={`border px-5 py-2.5 text-caption uppercase tracking-[0.12em] ${index === 0 ? 'border-champagne-gold text-champagne-gold' : 'border-white/10 text-marble-ivory/50'}`}>
                  {category}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {products.map((product) => (
                <Card key={product.id} variant="product" className="group">
                  <CardImage src={product.image} alt={product.name} aspect="landscape" />
                  <CardContent className="border-t border-white/5">
                    <p className="text-caption uppercase tracking-[0.15em] text-champagne-gold/80">{product.category}</p>
                    <h2 className="mt-2 font-display text-xl text-marble-ivory">{product.name}</h2>
                    <p className="mt-2 text-body-sm text-marble-ivory/50">{product.material} · {product.seating}</p>
                    <p className="mt-5 text-sm text-champagne-gold">{product.price}</p>
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
