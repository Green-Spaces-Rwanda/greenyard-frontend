import React, { useEffect, useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { fetchHomeBanners } from '../services/contentApi';
import { HomeBannersContent, HighlightCard, PromoBanner } from '../types';

const defaultBannerContent: HomeBannersContent = {
  primaryBanners: [
    {
      id: 'spring-collection',
      tag: 'NEW ARRIVALS',
      title: 'Fresh Spring Collection',
      body: 'Discover our latest selection of vibrant flowers and premium seedlings, perfect for the spring season.',
      cta: { label: 'Shop New Arrivals', href: '/collections/spring' },
      emoji: '🌸',
      theme: { from: '#3B82F6', to: '#1D4ED8' }
    },
    {
      id: 'season-sale',
      tag: 'LIMITED TIME',
      title: 'Up to 40% Off',
      body: "Huge savings on selected flowers and seedlings. Don't miss out on these amazing deals!",
      cta: { label: 'Shop Sale Items', href: '/sale' },
      emoji: '🎉',
      theme: { from: '#EF4444', to: '#B91C1C' }
    }
  ],
  highlights: [
    { id: 'delivery', icon: '🚚', title: 'Free Delivery', description: 'On orders over $50 within Kigali' },
    { id: 'care', icon: '🌱', title: 'Expert Care Tips', description: 'Get professional gardening advice' },
    { id: 'gift', icon: '💝', title: 'Gift Wrapping', description: 'Beautiful packaging for special occasions' }
  ]
};

const AdvertisementBanners: React.FC = () => {
  const [content, setContent] = useState<HomeBannersContent>(defaultBannerContent);

  useEffect(() => {
    let mounted = true;
    fetchHomeBanners()
      .then((data) => {
        if (!mounted || !data) return;
        setContent({
          primaryBanners: data.primaryBanners?.length ? data.primaryBanners : defaultBannerContent.primaryBanners,
          highlights: data.highlights?.length ? data.highlights : defaultBannerContent.highlights
        });
      })
      .catch(() => {
        // Keep defaults
      });

    return () => {
      mounted = false;
    };
  }, []);

  const primaryBanners = useMemo<PromoBanner[]>(() => {
    return content.primaryBanners?.length ? content.primaryBanners : defaultBannerContent.primaryBanners;
  }, [content.primaryBanners]);

  const highlights = useMemo<HighlightCard[]>(() => {
    return content.highlights?.length ? content.highlights : defaultBannerContent.highlights;
  }, [content.highlights]);

  const handleCtaClick = (href?: string) => {
    if (!href) return;
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener');
    } else if (href.startsWith('/')) {
      window.location.href = href;
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-2 gap-8">
          {primaryBanners.map((banner) => (
            <div
              key={banner.id}
              className="relative overflow-hidden rounded-2xl text-white group"
              style={{
                backgroundImage: `linear-gradient(135deg, ${banner.theme?.from || '#3B82F6'}, ${banner.theme?.to || '#1D4ED8'})`
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300" />
              <div className="relative p-8 md:p-12">
                {banner.tag && (
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                      {banner.tag}
                    </span>
                  </div>
                )}
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{banner.title}</h3>
                <p className="text-lg mb-6 text-white text-opacity-90">{banner.body}</p>
                {banner.cta && (
                  <button
                    onClick={() => handleCtaClick(banner.cta?.href)}
                    className="flex items-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                  >
                    <span>{banner.cta.label}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                )}
              </div>
              {banner.emoji && (
                <div className="absolute -right-10 -bottom-10 opacity-20 text-8xl">{banner.emoji}</div>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              className="bg-white border border-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-200"
            >
              <div className="text-3xl mb-3">{highlight.icon || '✨'}</div>
              <h4 className="font-semibold text-gray-900 mb-2">{highlight.title}</h4>
              <p className="text-sm text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvertisementBanners;
