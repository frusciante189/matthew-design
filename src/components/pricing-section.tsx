"use client";

import { PricingCards, PricingTier } from "./pricing-cards";

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: 2995,
    interval: "per month",
    description: "Perfect for individuals and freelancers getting started with professional design.",
    features: [
      { name: "One request at a time", included: true },
      { name: "Average 72-hour delivery", included: true },
      { name: "5 brands max", included: true },
      { name: "2 users max", included: true },
      { name: "Basic stock photos", included: true },
      { name: "Easy credit-card payments", included: true },
      { name: "Pause or cancel anytime", included: true },
      { name: "Priority support", included: false },
      { name: "Custom branding", included: false },
    ],
    cta: {
      text: "Get Started",
      href: "#",
    },
  },
  {
    name: "Professional",
    price: 4995,
    interval: "per month",
    description: "Ideal for small businesses and startups looking to establish their brand identity.",
    highlight: true,
    features: [
      { name: "Two requests at a time", included: true },
      { name: "Average 48-hour delivery", included: true },
      { name: "Unlimited brands", included: true },
      { name: "Unlimited users", included: true },
      { name: "Unlimited stock photos", included: true },
      { name: "Easy credit-card payments", included: true },
      { name: "Pause or cancel anytime", included: true },
      { name: "Priority support", included: true },
      { name: "Custom branding", included: false },
    ],
    cta: {
      text: "Get Started",
      href: "#",
    },
  },
  {
    name: "Enterprise",
    price: 7995,
    interval: "per month",
    description: "For large companies requiring dedicated support and custom branding solutions.",
    features: [
      { name: "Three requests at a time", included: true },
      { name: "Average 24-hour delivery", included: true },
      { name: "Unlimited brands", included: true },
      { name: "Unlimited users", included: true },
      { name: "Unlimited stock photos", included: true },
      { name: "Easy credit-card payments", included: true },
      { name: "Pause or cancel anytime", included: true },
      { name: "Priority support", included: true },
      { name: "Custom branding", included: true },
    ],
    cta: {
      text: "Contact Sales",
      href: "#",
    },
  },
];

const PricingSection = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="text-center flex flex-col gap-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            Simple Pricing
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-normal">
            Choose the plan that fits your needs. No hidden fees, no long-term contracts.
            <br />
            <span className="text-white font-semibold">Start your design journey today.</span>
          </p>
        </div>

        {/* Pricing Cards */}
        <PricingCards 
          tiers={pricingTiers}
          sectionClassName="py-0"
          containerClassName="max-w-6xl px-0"
          className="grid-cols-1 lg:grid-cols-3 gap-6"
        />
      </div>
    </section>
  );
};

export default PricingSection;