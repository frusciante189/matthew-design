'use client';

import { useState } from 'react';
import { ContentData } from '@/lib/content';

interface AdminFormProps {
  initialContent: ContentData;
  updateAction: (formData: FormData) => Promise<{ success: boolean; message: string }>;
}

export default function AdminForm({ initialContent, updateAction }: AdminFormProps) {
  const [content, setContent] = useState<ContentData>(initialContent);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    
    const formData = new FormData();
    formData.append('content', JSON.stringify(content));
    
    const result = await updateAction(formData);
    setMessage(result.message);
    setIsSuccess(result.success);
    setIsPending(false);
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      window.location.href = '/admin/login';
    } catch {
      // Fallback if fetch fails
      window.location.href = '/admin/login';
    }
  };

  const updateContent = (path: string, value: string) => {
    const keys = path.split('.');
    const newContent = { ...content };
    let current: Record<string, unknown> = newContent;
    
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]] as Record<string, unknown>;
    }
    
    // Special handling for array updates
    if (keys[keys.length - 1] === 'items' && path.includes('faq')) {
      try {
        current[keys[keys.length - 1]] = JSON.parse(value);
      } catch {
        return; // Don't update if invalid JSON
      }
    } else if (keys[keys.length - 1] === 'tiers' && path.includes('pricing')) {
      try {
        current[keys[keys.length - 1]] = JSON.parse(value);
      } catch {
        return; // Don't update if invalid JSON
      }
    } else {
      current[keys[keys.length - 1]] = value;
    }
    
    setContent(newContent);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <form onSubmit={handleSubmit}>
        <div className="max-w-4xl mx-auto">
          <div className="sticky top-0 bg-gray-900 z-10 py-6 mb-8 border-b border-gray-700">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">Content Management</h1>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded"
                >
                  Logout
                </button>
                <button
                  type="submit"
                  disabled={isPending}
                  className="bg-green-600 hover:bg-green-700 disabled:opacity-50 px-6 py-2 rounded"
                >
                  {isPending ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </div>
          </div>

          {message && (
            <div className={`p-4 rounded mb-6 ${isSuccess ? 'bg-green-800 text-green-200' : 'bg-red-800 text-red-200'}`}>
              {message}
            </div>
          )}

          <div className="space-y-8">
            {/* Branding */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Branding</h2>
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Company Name</label>
                  <input
                    type="text"
                    value={content.branding.companyName}
                    onChange={(e) => updateContent('branding.companyName', e.target.value)}
                    className="w-full p-3 rounded bg-gray-700 text-white"
                  />
                </div>
              </div>
            </div>

            {/* Hero Section */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Hero Section</h2>
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Announcement</label>
                  <input
                    type="text"
                    value={content.hero.announcement}
                    onChange={(e) => updateContent('hero.announcement', e.target.value)}
                    className="w-full p-3 rounded bg-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Main Title</label>
                  <textarea
                    value={content.hero.title}
                    onChange={(e) => updateContent('hero.title', e.target.value)}
                    rows={3}
                    className="w-full p-3 rounded bg-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subtitle</label>
                  <textarea
                    value={content.hero.subtitle}
                    onChange={(e) => updateContent('hero.subtitle', e.target.value)}
                    rows={3}
                    className="w-full p-3 rounded bg-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Launch Date</label>
                  <input
                    type="datetime-local"
                    value={content.hero.launchDate.slice(0, 16)}
                    onChange={(e) => updateContent('hero.launchDate', e.target.value + ':00')}
                    className="w-full p-3 rounded bg-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">CTA Button Text</label>
                  <input
                    type="text"
                    value={content.hero.ctaText}
                    onChange={(e) => updateContent('hero.ctaText', e.target.value)}
                    className="w-full p-3 rounded bg-gray-700 text-white"
                  />
                </div>
              </div>
            </div>

            {/* Process Section */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Process Section</h2>
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Main Title</label>
                  <input
                    type="text"
                    value={content.process.title}
                    onChange={(e) => updateContent('process.title', e.target.value)}
                    className="w-full p-3 rounded bg-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subtitle</label>
                  <textarea
                    value={content.process.subtitle}
                    onChange={(e) => updateContent('process.subtitle', e.target.value)}
                    rows={2}
                    className="w-full p-3 rounded bg-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Bottom Section Title</label>
                  <textarea
                    value={content.process.bottomSection.title}
                    onChange={(e) => updateContent('process.bottomSection.title', e.target.value)}
                    rows={2}
                    className="w-full p-3 rounded bg-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Bottom Section Subtitle</label>
                  <textarea
                    value={content.process.bottomSection.subtitle}
                    onChange={(e) => updateContent('process.bottomSection.subtitle', e.target.value)}
                    rows={2}
                    className="w-full p-3 rounded bg-gray-700 text-white"
                  />
                </div>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Pricing Section</h2>
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <input
                    type="text"
                    value={content.pricing.title}
                    onChange={(e) => updateContent('pricing.title', e.target.value)}
                    className="w-full p-3 rounded bg-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subtitle</label>
                  <textarea
                    value={content.pricing.subtitle}
                    onChange={(e) => updateContent('pricing.subtitle', e.target.value)}
                    rows={3}
                    className="w-full p-3 rounded bg-gray-700 text-white"
                  />
                </div>

                {/* Pricing Tiers */}
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-4">
                    <label className="block text-sm font-medium">Pricing Tiers</label>
                    <button
                      type="button"
                      onClick={() => {
                        const currentTiers = Array.isArray(content.pricing.tiers) ? content.pricing.tiers : [];
                        const newTiers = [...currentTiers, {
                          name: "New Tier",
                          price: 99,
                          interval: "per month",
                          description: "New pricing tier",
                          features: [{ name: "Feature 1", included: true }],
                          cta: { text: "Get Started", href: "#" }
                        }];
                        updateContent('pricing.tiers', JSON.stringify(newTiers));
                      }}
                      className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm"
                    >
                      Add Tier
                    </button>
                  </div>
                  
                  {Array.isArray(content.pricing.tiers) && content.pricing.tiers.map((tier, tierIndex) => (
                    <div key={tierIndex} className="border border-gray-600 p-4 rounded mb-4">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-medium">Tier {tierIndex + 1}</h3>
                        {Array.isArray(content.pricing.tiers) && content.pricing.tiers.length > 1 && (
                          <button
                            type="button"
                            onClick={() => {
                              const newTiers = content.pricing.tiers.filter((_, i) => i !== tierIndex);
                              updateContent('pricing.tiers', JSON.stringify(newTiers));
                            }}
                            className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                      
                      <div className="grid gap-3">
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input
                              type="text"
                              value={tier.name}
                              onChange={(e) => {
                                if (!Array.isArray(content.pricing.tiers)) return;
                                const newTiers = [...content.pricing.tiers];
                                newTiers[tierIndex].name = e.target.value;
                                updateContent('pricing.tiers', JSON.stringify(newTiers));
                              }}
                              className="w-full p-2 rounded bg-gray-700 text-white text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Description</label>
                            <input
                              type="text"
                              value={tier.description}
                              onChange={(e) => {
                                if (!Array.isArray(content.pricing.tiers)) return;
                                const newTiers = [...content.pricing.tiers];
                                newTiers[tierIndex].description = e.target.value;
                                updateContent('pricing.tiers', JSON.stringify(newTiers));
                              }}
                              className="w-full p-2 rounded bg-gray-700 text-white text-sm"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                          <div>
                            <label className="block text-sm font-medium mb-1">Price ($)</label>
                            <input
                              type="number"
                              value={tier.price || ''}
                              onChange={(e) => {
                                if (!Array.isArray(content.pricing.tiers)) return;
                                const newTiers = [...content.pricing.tiers];
                                newTiers[tierIndex].price = e.target.value ? Number(e.target.value) : null;
                                updateContent('pricing.tiers', JSON.stringify(newTiers));
                              }}
                              className="w-full p-2 rounded bg-gray-700 text-white text-sm"
                              placeholder="Leave empty for custom"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Custom Price Text</label>
                            <input
                              type="text"
                              value={tier.priceText || ''}
                              onChange={(e) => {
                                if (!Array.isArray(content.pricing.tiers)) return;
                                const newTiers = [...content.pricing.tiers];
                                newTiers[tierIndex].priceText = e.target.value;
                                updateContent('pricing.tiers', JSON.stringify(newTiers));
                              }}
                              className="w-full p-2 rounded bg-gray-700 text-white text-sm"
                              placeholder="e.g., Custom Pricing"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Interval</label>
                            <input
                              type="text"
                              value={tier.interval}
                              onChange={(e) => {
                                if (!Array.isArray(content.pricing.tiers)) return;
                                const newTiers = [...content.pricing.tiers];
                                newTiers[tierIndex].interval = e.target.value;
                                updateContent('pricing.tiers', JSON.stringify(newTiers));
                              }}
                              className="w-full p-2 rounded bg-gray-700 text-white text-sm"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-sm font-medium mb-1">CTA Text</label>
                            <input
                              type="text"
                              value={tier.cta.text}
                              onChange={(e) => {
                                if (!Array.isArray(content.pricing.tiers)) return;
                                const newTiers = [...content.pricing.tiers];
                                newTiers[tierIndex].cta.text = e.target.value;
                                updateContent('pricing.tiers', JSON.stringify(newTiers));
                              }}
                              className="w-full p-2 rounded bg-gray-700 text-white text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">CTA Link</label>
                            <input
                              type="text"
                              value={tier.cta.href || ''}
                              onChange={(e) => {
                                if (!Array.isArray(content.pricing.tiers)) return;
                                const newTiers = [...content.pricing.tiers];
                                newTiers[tierIndex].cta.href = e.target.value;
                                updateContent('pricing.tiers', JSON.stringify(newTiers));
                              }}
                              className="w-full p-2 rounded bg-gray-700 text-white text-sm"
                              placeholder="#"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="flex items-center gap-2 text-sm font-medium mb-1">
                            <input
                              type="checkbox"
                              checked={tier.highlight || false}
                              onChange={(e) => {
                                if (!Array.isArray(content.pricing.tiers)) return;
                                const newTiers = [...content.pricing.tiers];
                                newTiers[tierIndex].highlight = e.target.checked;
                                updateContent('pricing.tiers', JSON.stringify(newTiers));
                              }}
                              className="rounded"
                            />
                            Highlight this tier
                          </label>
                        </div>

                        {/* Features */}
                        <div className="mt-4">
                          <div className="flex justify-between items-center mb-2">
                            <label className="block text-sm font-medium">Features</label>
                            <button
                              type="button"
                              onClick={() => {
                                if (!Array.isArray(content.pricing.tiers)) return;
                                const newTiers = [...content.pricing.tiers];
                                newTiers[tierIndex].features.push({ name: "New Feature", included: true });
                                updateContent('pricing.tiers', JSON.stringify(newTiers));
                              }}
                              className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-xs"
                            >
                              Add Feature
                            </button>
                          </div>
                          
                          {tier.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2 mb-2">
                              <input
                                type="checkbox"
                                checked={feature.included}
                                onChange={(e) => {
                                  if (!Array.isArray(content.pricing.tiers)) return;
                                  const newTiers = [...content.pricing.tiers];
                                  newTiers[tierIndex].features[featureIndex].included = e.target.checked;
                                  updateContent('pricing.tiers', JSON.stringify(newTiers));
                                }}
                                className="rounded"
                              />
                              <input
                                type="text"
                                value={feature.name}
                                onChange={(e) => {
                                  if (!Array.isArray(content.pricing.tiers)) return;
                                  const newTiers = [...content.pricing.tiers];
                                  newTiers[tierIndex].features[featureIndex].name = e.target.value;
                                  updateContent('pricing.tiers', JSON.stringify(newTiers));
                                }}
                                className="flex-1 p-2 rounded bg-gray-700 text-white text-sm"
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  if (!Array.isArray(content.pricing.tiers)) return;
                                  const newTiers = [...content.pricing.tiers];
                                  newTiers[tierIndex].features = newTiers[tierIndex].features.filter((_, i) => i !== featureIndex);
                                  updateContent('pricing.tiers', JSON.stringify(newTiers));
                                }}
                                className="bg-red-600 hover:bg-red-700 px-2 py-1 rounded text-xs"
                              >
                                ×
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bento Grid */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Features Grid</h2>
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Badge</label>
                  <input
                    type="text"
                    value={content.bentoGrid.badge}
                    onChange={(e) => updateContent('bentoGrid.badge', e.target.value)}
                    className="w-full p-3 rounded bg-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Main Title</label>
                  <textarea
                    value={content.bentoGrid.title}
                    onChange={(e) => updateContent('bentoGrid.title', e.target.value)}
                    rows={2}
                    className="w-full p-3 rounded bg-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subtitle</label>
                  <textarea
                    value={content.bentoGrid.subtitle}
                    onChange={(e) => updateContent('bentoGrid.subtitle', e.target.value)}
                    rows={2}
                    className="w-full p-3 rounded bg-gray-700 text-white"
                  />
                </div>
              </div>
            </div>

            {/* Waitlist */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Waitlist Section</h2>
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Badge</label>
                  <input
                    type="text"
                    value={content.waitlist.badge}
                    onChange={(e) => updateContent('waitlist.badge', e.target.value)}
                    className="w-full p-3 rounded bg-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <input
                    type="text"
                    value={content.waitlist.title}
                    onChange={(e) => updateContent('waitlist.title', e.target.value)}
                    className="w-full p-3 rounded bg-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subtitle</label>
                  <textarea
                    value={content.waitlist.subtitle}
                    onChange={(e) => updateContent('waitlist.subtitle', e.target.value)}
                    rows={2}
                    className="w-full p-3 rounded bg-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">CTA Text</label>
                  <input
                    type="text"
                    value={content.waitlist.ctaText}
                    onChange={(e) => updateContent('waitlist.ctaText', e.target.value)}
                    className="w-full p-3 rounded bg-gray-700 text-white"
                  />
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">FAQ Section</h2>
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <input
                    type="text"
                    value={content.faq.title}
                    onChange={(e) => updateContent('faq.title', e.target.value)}
                    className="w-full p-3 rounded bg-gray-700 text-white"
                  />
                </div>
                {content.faq.items.map((faq, index) => (
                  <div key={index} className="border border-gray-600 p-4 rounded">
                    <div className="grid gap-3">
                      <div>
                        <label className="block text-sm font-medium mb-2">Question {index + 1}</label>
                        <input
                          type="text"
                          value={faq.question}
                          onChange={(e) => {
                            const newItems = [...content.faq.items];
                            newItems[index].question = e.target.value;
                            updateContent('faq.items', JSON.stringify(newItems));
                          }}
                          className="w-full p-3 rounded bg-gray-700 text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Answer {index + 1}</label>
                        <textarea
                          value={faq.answer}
                          onChange={(e) => {
                            const newItems = [...content.faq.items];
                            newItems[index].answer = e.target.value;
                            updateContent('faq.items', JSON.stringify(newItems));
                          }}
                          rows={3}
                          className="w-full p-3 rounded bg-gray-700 text-white"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Countdown Section */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Countdown Section</h2>
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <input
                    type="text"
                    value={content.countdownSection.title}
                    onChange={(e) => updateContent('countdownSection.title', e.target.value)}
                    className="w-full p-3 rounded bg-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subtitle</label>
                  <textarea
                    value={content.countdownSection.subtitle}
                    onChange={(e) => updateContent('countdownSection.subtitle', e.target.value)}
                    rows={2}
                    className="w-full p-3 rounded bg-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Target Date</label>
                  <input
                    type="datetime-local"
                    value={content.countdownSection.targetDate.slice(0, 16)}
                    onChange={(e) => updateContent('countdownSection.targetDate', e.target.value + ':00')}
                    className="w-full p-3 rounded bg-gray-700 text-white"
                  />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Footer</h2>
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Main Title</label>
                  <textarea
                    value={content.footer.title}
                    onChange={(e) => updateContent('footer.title', e.target.value)}
                    rows={2}
                    className="w-full p-3 rounded bg-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subtitle</label>
                  <input
                    type="text"
                    value={content.footer.subtitle}
                    onChange={(e) => updateContent('footer.subtitle', e.target.value)}
                    className="w-full p-3 rounded bg-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Copyright</label>
                  <input
                    type="text"
                    value={content.footer.copyright}
                    onChange={(e) => updateContent('footer.copyright', e.target.value)}
                    className="w-full p-3 rounded bg-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <input
                    type="text"
                    value={content.footer.location}
                    onChange={(e) => updateContent('footer.location', e.target.value)}
                    className="w-full p-3 rounded bg-gray-700 text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}