import React, { useEffect } from 'react';
import { AppProvider, useApp } from './contexts/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

// Pages
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import HelpPage from './pages/HelpPage';
import FAQPage from './pages/FAQPage';
import ShippingPage from './pages/ShippingPage';
import CareInstructionsPage from './pages/CareInstructionsPage';
import ReturnsPage from './pages/ReturnsPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CookiesPage from './pages/CookiesPage';

const AppContent: React.FC = () => {
  const { state } = useApp();

  useEffect(() => {
    // Check for existing cookie consent
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      // Handle existing consent if needed
    }
  }, []);

  const renderCurrentPage = () => {
    switch (state.currentPage) {
      case 'contact':
        return <ContactPage />;
      case 'help':
        return <HelpPage />;
      case 'faqs':
        return <FAQPage />;
      case 'shipping':
        return <ShippingPage />;
      case 'care':
        return <CareInstructionsPage />;
      case 'returns':
        return <ReturnsPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'terms':
        return <TermsPage />;
      case 'cookies':
        return <CookiesPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {renderCurrentPage()}
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;