import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin, Leaf } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const Footer: React.FC = () => {
  const { dispatch } = useApp();

  const navigateToPage = (page: string) => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: page });
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="w-8 h-8 text-green-500" />
              <h3 className="text-2xl font-bold">GreenYard</h3>
            </div>
            <p className="text-gray-400">
              Your trusted partner for beautiful flowers and quality seedlings. 
              We bring nature's beauty to your doorstep with care and expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => navigateToPage('home')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToPage('help')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Help Center
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToPage('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToPage('faqs')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => navigateToPage('help')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Help Center
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToPage('shipping')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Shipping Info
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToPage('returns')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Returns Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToPage('care')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Care Instructions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToPage('faqs')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-400">Karuruma, Kigali, Rwanda</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-400">+250 781 234 567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-400">hello@greenyard.rw</span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-green-500 text-white"
                />
                <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 GreenYard. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button 
                onClick={() => navigateToPage('privacy')}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => navigateToPage('terms')}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => navigateToPage('cookies')}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;