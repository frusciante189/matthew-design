"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    id: "item-1",
    question: "What exactly is DesignBell?",
    answer:
      "DesignBell is a founder-led design service that works like a subscription. You send requests, we deliver high-quality designs, fast, consistent, and without the hassle of hiring.",
    defaultOpen: true,
  },
  {
    id: "item-2",
    question: "When do you launch?",
    answer:
      "We are launching on September 25, 2025. Join our waitlist to secure your founding member spot and get priority access.",
  },
  {
    id: "item-3",
    question: "What do I get as a founding member?",
    answer:
      "As a founding member, you'll get priority access, exclusive perks, special pricing, and direct input on new features and services.",
  },
  {
    id: "item-4",
    question: "What kind of design work can you do?",
    answer:
      "We handle all types of design work including branding, logos, web design, mobile apps, social media graphics, presentations, print materials, and much more.",
  },
  {
    id: "item-5",
    question: "How fast are designs delivered?",
    answer:
      "Most designs are delivered within 24-48 hours. Complex projects may take longer, but we'll always communicate timelines upfront.",
  },
  {
    id: "item-6",
    question: "What if I don't need unlimited design every month?",
    answer:
      "No problem! You can pause or cancel your subscription at any time. We offer flexible plans that scale with your needs.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 px-4 relative z-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            The Common Qs
          </h2>
          <div className="hidden sm:block">
            {/* FAQ Icon */}
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center transform rotate-12">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">?</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <Accordion.Root
          type="single"
          defaultValue="item-1"
          collapsible
          className="space-y-4"
        >
          {faqData.map((faq) => (
            <Accordion.Item
              key={faq.id}
              value={faq.id}
              className="bg-primary/10 border-2 border-white/20 rounded-2xl overflow-hidden hover:border-white/40 transition-all duration-300"
            >
              <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors group">
                <h3 className="text-lg sm:text-xl font-bold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <Plus className="w-6 h-6 text-white group-data-[state=open]:hidden transition-all duration-200" />
                  <Minus className="w-6 h-6 text-white hidden group-data-[state=open]:block transition-all duration-200" />
                </div>
              </Accordion.Trigger>
              <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
                <div className="px-6 pb-6">
                  <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
