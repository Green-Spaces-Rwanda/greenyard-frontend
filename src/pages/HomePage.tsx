import React from 'react';
import Hero from '../components/Hero';
import CategoryFilter from '../components/CategoryFilter';
import ProductGrid from '../components/ProductGrid';
import AdvertisementBanners from '../components/AdvertisementBanners';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <CategoryFilter />
      <ProductGrid />
      <AdvertisementBanners />
    </div>
  );
};

export default HomePage;