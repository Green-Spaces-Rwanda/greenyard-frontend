import React from 'react';
import { ArrowRight, Gift, Clock } from 'lucide-react';

const AdvertisementBanners: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* New Products Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white group">
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
            <div className="relative p-8 md:p-12">
              <div className="flex items-center space-x-2 mb-4">
                <Gift className="w-6 h-6" />
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                  NEW ARRIVALS
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Fresh Spring Collection
              </h3>
              <p className="text-lg mb-6 text-blue-100">
                Discover our latest selection of vibrant flowers and premium seedlings, 
                perfect for the spring season.
              </p>
              <div className="flex items-center space-x-2 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold select-none">
                <span>Shop New Arrivals</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-20">
              <div className="text-8xl">🌸</div>
            </div>
          </div>

          {/* Sale Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-500 to-red-700 text-white group">
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
            <div className="relative p-8 md:p-12">
              <div className="flex items-center space-x-2 mb-4">
                <Clock className="w-6 h-6" />
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                  LIMITED TIME
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Up to 40% Off
              </h3>
              <p className="text-lg mb-6 text-red-100">
                Huge savings on selected flowers and seedlings. 
                Don't miss out on these amazing deals!
              </p>
              <div className="flex items-center space-x-2 bg-white text-red-700 px-6 py-3 rounded-lg font-semibold select-none">
                <span>Shop Sale Items</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-20">
              <div className="text-8xl">🎉</div>
            </div>
          </div>
        </div>

        {/* Additional Small Banners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-200">
            <div className="text-3xl mb-3">🚚</div>
            <h4 className="font-semibold text-gray-900 mb-2">Free Delivery</h4>
            <p className="text-sm text-gray-600">On orders over $50 within Kigali</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-200">
            <div className="text-3xl mb-3">🌱</div>
            <h4 className="font-semibold text-gray-900 mb-2">Expert Care Tips</h4>
            <p className="text-sm text-gray-600">Get professional gardening advice</p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-200">
            <div className="text-3xl mb-3">💝</div>
            <h4 className="font-semibold text-gray-900 mb-2">Gift Wrapping</h4>
            <p className="text-sm text-gray-600">Beautiful packaging for special occasions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertisementBanners;