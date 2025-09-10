import Hero from "@/components/hero";
import ProcessSection from "@/components/process-section";
import PricingSection from "@/components/pricing-section";
import BentoGrid from "@/components/bento-grid";
import Waitlist from "@/components/waitlist";
import FAQ from "@/components/faq";
import CountdownSection from "@/components/countdown-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative">
      <img
        src="/bg-gradient.avif"
        alt=""
        className="w-full h-screen absolute top-0"
      />
      <Hero />
      <div className="min-h-screen relative w-full">
        <img src="/g1.avif" alt="" className="absolute left-0" />
        <img src="/g2.avif" alt="" className="absolute left-0" />
        <ProcessSection />
        <PricingSection />
        <div className="relative">
          <img src="/g3.avif" alt="" className="absolute top-0 left-0" />
          <BentoGrid />
        </div>
        <Waitlist />
        <div className="relative">
          <img src="/g4.avif" alt="" className="absolute top-0 right-0" />
          <FAQ />
        </div>
      </div>
      <CountdownSection />
      <Footer />
    </div>
  );
}
