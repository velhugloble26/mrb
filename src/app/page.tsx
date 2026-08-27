import { BrandIntro } from "@/components/home/BrandIntro";
import { CTASection } from "@/components/home/CTASection";
import { FeaturedCollection } from "@/components/home/FeaturedCollection";
import { HeroSection } from "@/components/home/HeroSection";
import { ShowcaseGallery } from "@/components/home/ShowcaseGallery";
import { WhyUrbanea } from "@/components/home/WhyUrbanea";
import { Footer } from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedCollection />
        <BrandIntro />
        <WhyUrbanea />
        <ShowcaseGallery />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
