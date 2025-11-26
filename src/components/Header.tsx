import React, { useEffect, useState } from 'react';
import { Search, ShoppingCart, Menu, X, Heart } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import CurrencySelector from './CurrencySelector';
import CartDrawer from './CartDrawer';
import FavoritesDrawer from './FavoritesDrawer';
import { fetchHeaderContent } from '../services/contentApi';
import { HeaderContent, HeaderNavItem } from '../types';

const defaultHeaderContent: HeaderContent = {
  announcement: 'Free delivery on orders over $50',
  logo: { url: '/logo.png', alt: 'GreenYard', href: '/' },
  primaryNav: [
    { label: 'Home', page: 'home' },
    { label: 'Help', page: 'help' },
    { label: 'Contact', page: 'contact' }
  ],
  secondaryNav: [
    { label: 'Help', page: 'help' },
    { label: 'Contact', page: 'contact' }
  ],
  mobileMenu: [
    { label: 'Home', page: 'home' },
    { label: 'Help', page: 'help' },
    { label: 'Contact', page: 'contact' },
    { label: 'FAQs', page: 'faqs' },
    { label: 'Shipping Info', page: 'shipping' },
    { label: 'Returns Policy', page: 'returns' },
    { label: 'Care Instructions', page: 'care' },
    { label: 'Privacy Policy', page: 'privacy' },
    { label: 'Terms of Service', page: 'terms' },
    { label: 'Cookie Policy', page: 'cookies' }
  ],
  searchPlaceholder: 'Search for flowers, seedlings...'
};

const Header: React.FC = () => {
  const { state, dispatch, getCartItemCount, getFavoritesCount } = useApp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [headerContent, setHeaderContent] = useState<HeaderContent>(defaultHeaderContent);

  useEffect(() => {
    let mounted = true;
    fetchHeaderContent()
      .then((data) => {
        if (!mounted || !data) return;
        setHeaderContent({
          ...defaultHeaderContent,
          ...data,
          primaryNav: data.primaryNav?.length ? data.primaryNav : defaultHeaderContent.primaryNav,
          secondaryNav: data.secondaryNav?.length ? data.secondaryNav : defaultHeaderContent.secondaryNav,
          mobileMenu: data.mobileMenu?.length ? data.mobileMenu : defaultHeaderContent.mobileMenu
        });
      })
      .catch(() => {
        // keep defaults
      });

    return () => {
      mounted = false;
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const navigateToPage = (page: string) => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: page });
    setIsMenuOpen(false);
  };

  const handleNavItem = (item?: HeaderNavItem) => {
    if (!item) return;
    const goToPage = (page?: string) => {
      if (!page) return;
      navigateToPage(page);
    };

    if (item.page) {
      goToPage(item.page);
      return;
    }

    if (item.href) {
      if (/^https?:\/\//i.test(item.href)) {
        window.open(item.href, '_blank', 'noopener');
        return;
      }

      const normalized = item.href.replace(/^\//, '');
      goToPage(normalized || 'home');
    }
  };

  const announcementText = headerContent.announcement || defaultHeaderContent.announcement;
  const helpLink = headerContent.secondaryNav?.[0] || { label: 'Help', page: 'help' };
  const contactLink = headerContent.secondaryNav?.[1] || { label: 'Contact', page: 'contact' };
  const mobileMenu = (headerContent.mobileMenu && headerContent.mobileMenu.length > 0)
    ? headerContent.mobileMenu
    : defaultHeaderContent.mobileMenu!;
  const searchPlaceholder = headerContent.searchPlaceholder || defaultHeaderContent.searchPlaceholder;

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          {/* Top bar */}
          <div className="flex items-center justify-between py-2 text-sm text-gray-600 border-b border-gray-100">
            <div className="hidden md:block">
              <span>{announcementText}</span>
            </div>
            <div className="flex items-center space-x-4">
              <CurrencySelector />
              <div className="hidden md:flex items-center space-x-4">
                <button 
                  onClick={() => handleNavItem(helpLink)}
                  className="hover:text-green-600 transition-colors"
                >
                  {helpLink.label || 'Help'}
                </button>
                <button 
                  onClick={() => handleNavItem(contactLink)}
                  className="hover:text-green-600 transition-colors"
                >
                  {contactLink.label || 'Contact'}
                </button>
              </div>
            </div>
          </div>

          {/* Main header */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <button 
                onClick={() => {
                  navigateToPage('home');
                }}
                className="flex items-center space-x-2 text-2xl font-bold text-green-700 hover:text-green-800 transition-colors"
              >
                <img 
                  src="logo.png" 
                  alt="Greener Yard Logo" 
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
                    placeholder={searchPlaceholder}
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
              {/* Favorites */}
              <button
                onClick={() => setIsFavoritesOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
              >
                <Heart className={`w-6 h-6 ${getFavoritesCount() > 0 ? 'text-red-500 fill-current' : 'text-gray-700'}`} />
                {getFavoritesCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {getFavoritesCount()}
                  </span>
                )}
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
                  placeholder={searchPlaceholder}
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
                {mobileMenu.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavItem(item)}
                    className="block text-gray-700 hover:text-green-600 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <FavoritesDrawer isOpen={isFavoritesOpen} onClose={() => setIsFavoritesOpen(false)} />
    </>
  );
};

export default Header;