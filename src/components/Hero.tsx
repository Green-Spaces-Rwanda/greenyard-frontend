import React from 'react';
import { Search, Truck, Shield, Headphones } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const Hero: React.FC = () => {
  const { state, dispatch } = useApp();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality would be implemented here
  };

  return (
    <section className="bg-gradient-to-br from-green-50 to-green-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Fresh Flowers & 
            <span className="text-green-600 block">Quality Seedlings</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Discover beautiful flowers and healthy seedlings for your garden. 
            Fast delivery, premium quality, and expert care guaranteed.
          </p>

          {/* Hero Search */}
          <div className="max-w-3xl mx-auto mb-12">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="What are you looking for? Try 'roses', 'tomato seedlings'..."
                  value={state.searchQuery}
                  onChange={(e) => dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value })}
                  className="w-full pl-6 pr-16 py-4 text-lg border-2 border-green-200 rounded-full focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 shadow-lg"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-all duration-200 shadow-md"
                >
                  <Search className="w-6 h-6" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center group">
            <div className="bg-white p-6 rounded-full w-20 h-20 mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <Truck className="w-8 h-8 text-green-600 mx-auto mt-2" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Same day delivery in Kigali, nationwide shipping available</p>
          </div>

          <div className="text-center group">
            <div className="bg-white p-6 rounded-full w-20 h-20 mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <Shield className="w-8 h-8 text-green-600 mx-auto mt-2" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Guarantee</h3>
            <p className="text-gray-600">Fresh, healthy plants with 30-day quality guarantee</p>
          </div>

          <div className="text-center group">
            <div className="bg-white p-6 rounded-full w-20 h-20 mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <Headphones className="w-8 h-8 text-green-600 mx-auto mt-2" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h3>
            <p className="text-gray-600">Get planting tips and care advice from our experts</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;