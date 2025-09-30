import React from 'react';
import { Search, Truck, Shield, Headphones } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const Hero: React.FC = () => {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality would be implemented here
  };

  return (
    <section className="bg-gradient-to-br from-green-50 to-green-100">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero Text - Left Side */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Fresh Flowers & 
              <span className="text-green-600 block">Quality Seedlings</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
              Discover beautiful flowers and healthy seedlings for your garden. 
              Fast delivery, premium quality, and expert care guaranteed.
            </p>
          </div>

          {/* Features - Right Side */}
          <div className="flex-1 grid grid-cols-3 gap-4 lg:gap-6">
            <div className="text-center group">
              <div className="bg-white p-3 lg:p-4 rounded-full w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Truck className="w-4 h-4 lg:w-6 lg:h-6 text-green-600 mx-auto mt-1 lg:mt-2" />
              </div>
              <h3 className="text-sm lg:text-lg font-semibold text-gray-900 mb-1 lg:mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-xs lg:text-sm leading-tight">Same day delivery in Kigali</p>
            </div>

            <div className="text-center group">
              <div className="bg-white p-3 lg:p-4 rounded-full w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Shield className="w-4 h-4 lg:w-6 lg:h-6 text-green-600 mx-auto mt-1 lg:mt-2" />
              </div>
              <h3 className="text-sm lg:text-lg font-semibold text-gray-900 mb-1 lg:mb-2">Quality Guarantee</h3>
              <p className="text-gray-600 text-xs lg:text-sm leading-tight">30-day quality guarantee</p>
            </div>

            <div className="text-center group">
              <div className="bg-white p-3 lg:p-4 rounded-full w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Headphones className="w-4 h-4 lg:w-6 lg:h-6 text-green-600 mx-auto mt-1 lg:mt-2" />
              </div>
              <h3 className="text-sm lg:text-lg font-semibold text-gray-900 mb-1 lg:mb-2">Expert Support</h3>
              <p className="text-gray-600 text-xs lg:text-sm leading-tight">Planting tips & care advice</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;