import React from 'react';
import { Search, HelpCircle, Truck, CreditCard, Leaf, Phone } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const HelpPage: React.FC = () => {
  const { dispatch } = useApp();

  const navigateToPage = (page: string) => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: page });
    window.scrollTo(0, 0);
  };

  const helpCategories = [
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: 'Frequently Asked Questions',
      description: 'Find answers to common questions about our products and services',
      action: () => navigateToPage('faqs'),
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Shipping & Delivery',
      description: 'Learn about our delivery options, timing, and coverage areas',
      action: () => navigateToPage('shipping'),
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Plant Care Instructions',
      description: 'Expert tips on caring for your flowers and seedlings',
      action: () => navigateToPage('care'),
      color: 'bg-emerald-100 text-emerald-600'
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: 'Payment & Returns',
      description: 'Information about payment methods and return policies',
      action: () => navigateToPage('returns'),
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const quickLinks = [
    { title: 'Track Your Order', description: 'Check the status of your recent orders' },
    { title: 'Plant Care Guide', description: 'Comprehensive care instructions for all plant types' },
    { title: 'Delivery Areas', description: 'See if we deliver to your location' },
    { title: 'Payment Methods', description: 'Learn about accepted payment options' },
    { title: 'Return Policy', description: 'Understand our return and refund process' },
    { title: 'Bulk Orders', description: 'Information for large quantity purchases' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Help Center</h1>
          <p className="text-xl text-green-100 mb-8">
            How can we help you today?
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help articles, FAQs, or topics..."
                className="w-full pl-12 pr-4 py-4 text-gray-900 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-300 text-lg"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Help Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Browse Help Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpCategories.map((category, index) => (
              <button
                key={index}
                onClick={category.action}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 p-6 text-left group"
              >
                <div className={`inline-flex p-3 rounded-lg ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Quick Links</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((link, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 cursor-pointer border-l-4 border-green-500"
              >
                <h3 className="font-semibold text-gray-900 mb-1">{link.title}</h3>
                <p className="text-sm text-gray-600">{link.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Our customer support team is here to help. 
            Get in touch with us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigateToPage('contact')}
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              Contact Support
            </button>
            <a
              href="tel:+250781234567"
              className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold"
            >
              Call +250 781 234 567
            </a>
          </div>
        </div>

        {/* Popular Articles */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Popular Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How to Care for Fresh Cut Flowers</h3>
              <p className="text-gray-600 mb-4">
                Learn the best practices to keep your flowers fresh and beautiful for longer periods.
              </p>
              <button className="text-green-600 hover:text-green-700 font-medium">Read More →</button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Transplanting Seedlings Successfully</h3>
              <p className="text-gray-600 mb-4">
                Step-by-step guide to transplanting your seedlings for optimal growth and survival.
              </p>
              <button className="text-green-600 hover:text-green-700 font-medium">Read More →</button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Understanding Our Delivery Process</h3>
              <p className="text-gray-600 mb-4">
                Everything you need to know about how we deliver your plants safely to your door.
              </p>
              <button className="text-green-600 hover:text-green-700 font-medium">Read More →</button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Seasonal Planting Calendar</h3>
              <p className="text-gray-600 mb-4">
                Discover the best times to plant different types of flowers and vegetables in Rwanda.
              </p>
              <button className="text-green-600 hover:text-green-700 font-medium">Read More →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;