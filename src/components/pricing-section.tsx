import { PricingCards } from "./pricing-cards";
import { ContentData } from "@/lib/content";

interface PricingSectionProps {
  content: ContentData;
}

const PricingSection = ({ content }: PricingSectionProps) => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="text-center flex flex-col gap-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            {content.pricing.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-normal whitespace-pre-line">
            {content.pricing.subtitle}
          </p>
        </div>

        {/* Pricing Cards */}
        <PricingCards 
          tiers={Array.isArray(content.pricing.tiers) ? content.pricing.tiers : []}
          sectionClassName="py-0"
          containerClassName="max-w-6xl px-0"
          className="grid-cols-1 lg:grid-cols-3 gap-6"
        />
      </div>
    </section>
  );
};

export default PricingSection;