import Hero from "@/components/sections/Hero";
import FeaturedServices from "@/components/sections/FeaturedServices";
import HomeAbout from "@/components/sections/HomeAbout";
import Stats from "@/components/sections/Stats";
import HomeGallery from "@/components/sections/HomeGallery";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";
import HomeFAQ from "@/components/sections/HomeFAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <HomeAbout />
      <FeaturedServices />
      <HomeGallery />
      <Testimonials />
      <HomeFAQ />
      <CTASection />
    </>
  );
}
