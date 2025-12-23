import HeroSection from "@/components/home/HomeSection";
import Newsletter from "@/components/home/Newsletter";
import ServicesPreview from "@/components/home/ServicesPreview";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <Newsletter />
    </>
  );
}
