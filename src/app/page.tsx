import Hero from "@/components/home/Hero";
import Manifesto from "@/components/home/Manifesto";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import HorizontalGallery from "@/components/home/HorizontalGallery";
import ServicesPreview from "@/components/home/ServicesPreview";
import ProcessPreview from "@/components/home/ProcessPreview";
import Testimonials from "@/components/sections/Testimonials";
import ClientMarquee from "@/components/sections/ClientMarquee";
import InstagramStrip from "@/components/sections/InstagramStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <Manifesto />
      <FeaturedProjects />
      <HorizontalGallery />
      <ServicesPreview />
      <ProcessPreview />
      <Testimonials />
      <InstagramStrip />
    </>
  );
}
