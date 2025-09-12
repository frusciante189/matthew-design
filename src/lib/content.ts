import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const CONTENT_FILE = join(process.cwd(), 'src/data/content.json');

export interface ContentData {
  branding: {
    companyName: string;
    logo: string;
  };
  hero: {
    announcement: string;
    title: string;
    subtitle: string;
    launchDate: string;
    emailPlaceholder: string;
    ctaText: string;
  };
  process: {
    title: string;
    subtitle: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
    legalServices: string[];
    bottomSection: {
      title: string;
      subtitle: string;
    };
  };
  pricing: {
    title: string;
    subtitle: string;
    tiers: Array<{
      name: string;
      price?: number;
      priceText?: string;
      interval: string;
      description: string;
      ctaText: string;
      highlight?: boolean;
    }>;
  };
  bentoGrid: {
    badge: string;
    title: string;
    subtitle: string;
    cards: Array<{
      title: string;
      description: string;
    }>;
  };
  waitlist: {
    badge: string;
    title: string;
    subtitle: string;
    emailPlaceholder: string;
    ctaText: string;
  };
  featureComparison: {
    badge: string;
    title: string;
    subtitle: string;
    competitors: string[];
    bottomCta: {
      title: string;
      subtitle: string;
      ctaText: string;
    };
  };
  faq: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  countdownSection: {
    title: string;
    subtitle: string;
    targetDate: string;
  };
  footer: {
    title: string;
    subtitle: string;
    emailPlaceholder: string;
    ctaText: string;
    companyName: string;
    copyright: string;
    location: string;
    links: Array<{
      text: string;
      href: string;
    }>;
  };
}

export async function getContent(): Promise<ContentData> {
  try {
    const content = JSON.parse(readFileSync(CONTENT_FILE, 'utf-8'));
    return content;
  } catch {
    // Default fallback content
    const defaultContent: ContentData = {
      branding: { companyName: "DesignBell", logo: "/logo.png" },
      hero: {
        announcement: "🎉 Launching September 25",
        title: "Construction Law Made Simple. Get Paid. Stay Safe. Cut Legal Costs.",
        subtitle: "The first AI-powered legal assistant built for Aussie builders, subcontractors, and tradies.",
        launchDate: "2025-09-25T00:00:00",
        emailPlaceholder: "your.email@domain.com",
        ctaText: "Join the Waitlist Today"
      },
      process: {
        title: "From Problem to Solution in 3 Simple Steps",
        subtitle: "Forget $500/hour lawyer bills. Here's how we protect your business:",
        steps: [
          { title: "Subscribe", description: "Flat monthly fee.\nNo hidden extras." },
          { title: "Request", description: "Ask for contracts, payment claims,\nWHS help, or anything legal." },
          { title: "Receive", description: "Get what you need\nin 24–48 hours." }
        ],
        legalServices: ["Payment Claims (SoP)", "Contract Reviews", "WHS Compliance", "Employment Law"],
        bottomSection: {
          title: "All the Legal Protection You'll Ever Need.\nOne Subscription.",
          subtitle: "It's like having a construction lawyer in your pocket — for less than one site fine."
        }
      },
      pricing: {
        title: "Simple Pricing",
        subtitle: "Choose the plan that fits your business. No hidden fees, no scary lawyer invoices.\nProtect your business today.",
        tiers: [
          { name: "👷 Starter", price: 295, interval: "per month", description: "For sole traders & subbies", ctaText: "Get Started" }
        ]
      },
      bentoGrid: {
        badge: "The Difference",
        title: "We Built This for Construction SMEs —\nNot Big Corporates.",
        subtitle: "Law firms weren't built for tradies. We were. Fast, simple, affordable legal support when you need it most.",
        cards: [
          { title: "World-Class, Every Time", description: "Get expert construction law advice without paying expert rates." },
          { title: "Unlimited Requests", description: "Contracts, claims, compliance — ask as often as you need." },
          { title: "Flat Monthly Fee", description: "No scary lawyer invoices." },
          { title: "Quick Turnarounds", description: "Answers in as little as 48 hours." },
          { title: "Yours to Keep", description: "Every doc we prepare is 100% yours." },
          { title: "Flexible Plans", description: "Pause or upgrade anytime." }
        ]
      },
      waitlist: {
        badge: "🚧 Launching Soon — Join Our Founding Members",
        title: "Join the Waitlist",
        subtitle: "Secure early access, discounted pricing, and peace of mind for your business.",
        emailPlaceholder: "your.email@domain.com",
        ctaText: "Join Waitlist"
      },
      featureComparison: {
        badge: "Feature Comparison",
        title: "Why Choose Us Over Traditional Law Firms?",
        subtitle: "See how we stack up against expensive traditional legal services.",
        competitors: ["Traditional Law", "Online Services", "Construction Legal"],
        bottomCta: {
          title: "Ready to Switch to Smarter Legal Support?",
          subtitle: "Join hundreds of construction professionals who've made the switch.",
          ctaText: "Get Started Today"
        }
      },
      faq: {
        title: "FAQ's",
        items: [
          { question: "What is this?", answer: "Your subscription-based legal assistant for construction SMEs. Powered by AI, backed by real lawyers." }
        ]
      },
      countdownSection: {
        title: "One Subscription. Unlimited Legal Protection.",
        subtitle: "Stop losing sleep over payments, fines, and contracts. Secure your spot today.",
        targetDate: "2025-09-25T00:00:00"
      },
      footer: {
        title: "One Subscription.\nUnlimited Designs.",
        subtitle: "Secure a Founding Member spot.",
        emailPlaceholder: "your.email@domain.com",
        ctaText: "Join Waitlist",
        companyName: "DesignBell",
        copyright: "©2025 DesignBell LLC",
        location: "Headquartered in Wyoming, US",
        links: [
          { text: "Terms of service", href: "#" },
          { text: "Privacy Policy", href: "#" }
        ]
      }
    };
    return defaultContent;
  }
}

export async function updateContent(content: ContentData): Promise<{ success: boolean; error?: string }> {
  try {
    writeFileSync(CONTENT_FILE, JSON.stringify(content, null, 2));
    return { success: true };
  } catch {
    return { success: false, error: 'Update failed' };
  }
}