import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, Heart } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import CurrencySelector from './CurrencySelector';
import CartDrawer from './CartDrawer';

const Header: React.FC = () => {
  const { state, dispatch, getCartItemCount } = useApp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const navigateToPage = (page: string) => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: page });
    setIsMenuOpen(false);
  };
  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4">
          {/* Top bar */}
          <div className="flex items-center justify-between py-2 text-sm text-gray-600 border-b border-gray-100">
            <div className="hidden md:block">
              <span>Free delivery on orders over $50</span>
            </div>
            <div className="flex items-center space-x-4">
              <CurrencySelector />
              <div className="hidden md:flex items-center space-x-4">
                <button 
                  onClick={() => navigateToPage('help')}
                  className="hover:text-green-600 transition-colors"
                >
                  Help
                </button>
                <button 
                  onClick={() => navigateToPage('contact')}
                  className="hover:text-green-600 transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>

          {/* Main header */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <button 
                onClick={() => navigateToPage('home')}
                className="flex items-center space-x-2 text-2xl font-bold text-green-700 hover:text-green-800 transition-colors"
              >
                <img 
                  src="/logo.png" 
                  alt="GreenYard Logo" 
                  className="w-8 h-8 object-contain"
                />
                <span>GreenYard</span>
              </button>
            </div>

            {/* Search bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <form onSubmit={handleSearch} className="w-full">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for flowers, seedlings..."
                    value={state.searchQuery}
                    onChange={(e) => dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value })}
                    className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition-colors"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* Wishlist */}
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                <Heart className="w-6 h-6 text-gray-700" />
              </button>

              {/* Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
              >
                <ShoppingCart className="w-6 h-6 text-gray-700" />
                {getCartItemCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {getCartItemCount()}
                  </span>
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile search */}
          <div className="md:hidden pb-4">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for flowers, seedlings..."
                  value={state.searchQuery}
                  onChange={(e) => dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value })}
                  className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition-colors"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-4">
              <nav className="space-y-4">
                <button 
                  onClick={() => navigateToPage('home')}
                  className="block text-gray-700 hover:text-green-600 transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => navigateToPage('help')}
                  className="block text-gray-700 hover:text-green-600 transition-colors"
                >
                  Help
                </button>
                <button 
                  onClick={() => navigateToPage('contact')}
                  className="block text-gray-700 hover:text-green-600 transition-colors"
                >
                  Contact
                </button>
                <button 
                  onClick={() => navigateToPage('faqs')}
                  className="block text-gray-700 hover:text-green-600 transition-colors"
                >
                  FAQs
                </button>
                <button 
                  onClick={() => navigateToPage('shipping')}
                  className="block text-gray-700 hover:text-green-600 transition-colors"
                >
                  Shipping Info
                </button>
                <button 
                  onClick={() => navigateToPage('care')}
                  className="block text-gray-700 hover:text-green-600 transition-colors"
                >
                  Care Instructions
                </button>
              </nav>
            </div>
          </div>
        )}
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;