import Hero from "@/components/hero";
import ProcessSection from "@/components/process-section";
import PricingSection from "@/components/pricing-section";
import BentoGrid from "@/components/bento-grid";
import Waitlist from "@/components/waitlist";
import FAQ from "@/components/faq";
import CountdownSection from "@/components/countdown-section";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative">
      <Image
        src="/bg-gradient.avif"
        alt=""
        width={1920}
        height={1080}
        className="w-full h-screen absolute top-0 pointer-events-none -z-10"
        priority
      />
      <Hero />
      <div className="min-h-screen relative w-full">
        <Image src="/g1.avif" alt="" width={1920} height={1080} className="absolute left-0 pointer-events-none -z-10" />
        <Image src="/g2.avif" alt="" width={1920} height={1080} className="absolute left-0 pointer-events-none -z-10" />
        <ProcessSection />
        <PricingSection />
        <div className="relative">
          <Image src="/g3.avif" alt="" width={1920} height={1080} className="absolute top-0 left-0 pointer-events-none -z-10" />
          <BentoGrid />
        </div>
        <Waitlist />
        <div className="relative">
          <Image src="/g4.avif" alt="" width={1920} height={1080} className="absolute top-0 right-0 pointer-events-none -z-10" />
          <FAQ />
        </div>
      </div>
      <CountdownSection />
      <Footer />
    </div>
  );
}
