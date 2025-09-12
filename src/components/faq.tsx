"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    id: "item-1",
    question: "What is this?",
    answer:
      "Your subscription-based legal assistant for construction SMEs. Powered by AI, backed by real lawyers.",
    defaultOpen: true,
  },
  {
    id: "item-2",
    question: "When do you launch?",
    answer: "Founding members get early access soon.",
  },
  {
    id: "item-3",
    question: "What do I get as a founding member?",
    answer:
      "Discounted pricing, priority access, and influence on the platform's future.",
  },
  {
    id: "item-4",
    question: "What kind of work can you help with?",
    answer:
      "Payment claims, contracts, WHS, insurance, employment law, environmental compliance, and disputes.",
  },
  {
    id: "item-5",
    question: "How fast do you deliver?",
    answer: "Most requests are handled within 48 hours.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 px-4 relative z-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            FAQ's
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
