import { Footer } from "@/components/ui/Footer";
import { EnquiryForm } from "@/components/ui/EnquiryForm";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { Navbar } from "@/components/ui/Navbar";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CollectionImageHero } from "@/components/ui/CollectionImageHero";
import { contact } from "@/data/site";

const enquiryFields = [
  { id: "name", label: "Your Name", type: "text", required: true, placeholder: "Enter your name" },
  { id: "email", label: "Email Address", type: "email", required: true, placeholder: "you@example.com" },
  { id: "phone", label: "Phone Number", type: "tel", placeholder: "+91" },
  {
    id: "interest",
    label: "I Am Interested In",
    type: "select",
    required: true,
    options: ["Dining Tables", "Bespoke Design", "Interior Consultation"],
  },
  {
    id: "message",
    label: "Tell Us About Your Space",
    type: "textarea",
    placeholder: "Share your requirements, dimensions, or inspiration...",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <CollectionImageHero
          title="Begin Your Journey"
          subtitle="Tell us about your space and discover a centrepiece made for it."
        />

        <Section bg="ivory" padding="lg">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              <div>
                <SectionHeading
                  align="left"
                  title="Let's Create Something Exceptional"
                  subtitle="Our design consultants are here to help you select or create the perfect table for your home."
                  light
                  className="mb-10"
                />
                <EnquiryForm fields={enquiryFields} light />
              </div>
              <div className="space-y-8">
                <MapEmbed className="aspect-[4/3]" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-charcoal">
                  <div>
                    <p className="text-caption uppercase tracking-[0.15em] text-charcoal/50 mb-2">Visit Us</p>
                    <p className="text-body-sm leading-relaxed">{contact.address}</p>
                  </div>
                  <div>
                    <p className="text-caption uppercase tracking-[0.15em] text-charcoal/50 mb-2">Contact</p>
                    <a href={`mailto:${contact.email}`} className="block text-body-sm hover:text-champagne-gold transition-colors">
                      {contact.email}
                    </a>
                    {contact.persons.map((person) => (
                      <a key={person.phone} href={`tel:${person.phone}`} className="block text-body-sm mt-1 hover:text-champagne-gold transition-colors">
                        {person.phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
