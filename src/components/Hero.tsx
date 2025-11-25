import React, { useEffect, useMemo, useState } from 'react';
import { Truck, Shield, Headphones, Search, Leaf } from 'lucide-react';
import { fetchHeroContent } from '../services/contentApi';
import { HeroContent, HeroFeature } from '../types';

const defaultHeroContent: HeroContent = {
  headline: 'Fresh Flowers &',
  emphasis: 'Quality Seedlings',
  subtext: 'Discover beautiful flowers and healthy seedlings for your garden. Fast delivery, premium quality, and expert care guaranteed.',
  features: [
    { icon: 'truck', title: 'Fast Delivery', subtitle: 'Same day delivery in Kigali' },
    { icon: 'shield', title: 'Quality Guarantee', subtitle: '30-day quality guarantee' },
    { icon: 'headphones', title: 'Expert Support', subtitle: 'Planting tips & care advice' }
  ]
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  truck: Truck,
  shield: Shield,
  headphones: Headphones,
  search: Search
};

const Hero: React.FC = () => {
  const [content, setContent] = useState<HeroContent>(defaultHeroContent);
  const [, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetchHeroContent()
      .then((data) => {
        if (mounted && data) {
          setContent({
            ...defaultHeroContent,
            ...data,
            features: data.features?.length ? data.features : defaultHeroContent.features
          });
        }
      })
      .catch(() => {
        // Silently keep defaults on failure
      })
      .finally(() => {
        if (mounted) setIsLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const features = useMemo<HeroFeature[]>(() => {
    return content.features?.length ? content.features : defaultHeroContent.features;
  }, [content.features]);

  const renderIcon = (feature: HeroFeature) => {
    const Icon = iconMap[feature.icon?.toLowerCase()] || Leaf;
    return <Icon className="w-4 h-4 lg:w-6 lg:h-6 text-green-600 mx-auto mt-1 lg:mt-2" />;
  };

  return (
    <section className="bg-gradient-to-br from-green-50 to-green-100">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero Text - Left Side */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 transition-opacity duration-300">
              {content.headline}{' '}
              <span className="text-green-600 block">{content.emphasis}</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 transition-opacity duration-300">
              {content.subtext}
            </p>
          </div>

          {/* Features - Right Side */}
          <div className="flex-1 grid grid-cols-3 gap-4 lg:gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="text-center group">
                <div className="bg-white p-3 lg:p-4 rounded-full w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  {renderIcon(feature)}
                </div>
                <h3 className="text-sm lg:text-lg font-semibold text-gray-900 mb-1 lg:mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-xs lg:text-sm leading-tight">{feature.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;