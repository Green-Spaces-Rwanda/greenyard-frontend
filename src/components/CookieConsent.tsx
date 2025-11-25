import React, { useState, useEffect } from 'react';
import { X, Cookie, Settings } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { fetchCookieConsentContent } from '../services/contentApi';
import { CookieBannerAction, CookieBannerContent } from '../types';

const defaultCookieContent: CookieBannerContent = {
  title: 'We use cookies',
  body: 'We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.',
  actions: [
    { label: 'Privacy Policy', variant: 'link', href: '/privacy' }
  ]
};

const CookieActionButton: React.FC<{ action: CookieBannerAction }> = ({ action }) => {
  const handleClick = () => {
    if (action.href) {
      if (action.href.startsWith('http')) {
        window.open(action.href, '_blank', 'noopener');
      } else {
        window.location.href = action.href;
      }
    }
  };

  const variantClass = (() => {
    switch (action.variant) {
      case 'primary':
        return 'bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors';
      case 'secondary':
        return 'border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors';
      default:
        return 'text-green-600 hover:text-green-700 font-medium';
    }
  })();

  return (
    <button onClick={handleClick} className={variantClass}>
      {action.label}
    </button>
  );
};

const CookieConsent: React.FC = () => {
  const { state, dispatch } = useApp();
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  const [copy, setCopy] = useState<CookieBannerContent>(defaultCookieContent);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent && !state.cookieConsent) {
      setShowBanner(true);
    }
  }, [state.cookieConsent]);

  useEffect(() => {
    let mounted = true;
    fetchCookieConsentContent()
      .then((data) => {
        if (!mounted || !data) return;
        setCopy({
          title: data.title || defaultCookieContent.title,
          body: data.body || defaultCookieContent.body,
          actions: data.actions?.length ? data.actions : defaultCookieContent.actions
        });
      })
      .catch(() => {
        // keep default copy
      });

    return () => {
      mounted = false;
    };
  }, []);

  const handleAcceptAll = () => {
    const consentData = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    dispatch({ type: 'SET_COOKIE_CONSENT', payload: true });
    setShowBanner(false);
  };

  const handleAcceptSelected = () => {
    const consentData = {
      ...preferences,
      timestamp: Date.now()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    dispatch({ type: 'SET_COOKIE_CONSENT', payload: true });
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const consentData = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    dispatch({ type: 'SET_COOKIE_CONSENT', payload: true });
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-green-500 shadow-2xl z-50 p-4 md:p-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start space-x-3 flex-1">
              <Cookie className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{copy.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {copy.body}
                </p>
                {copy.actions?.length ? (
                  <div className="flex flex-wrap gap-3 mt-3">
                    {copy.actions.map((action) => (
                      <CookieActionButton key={action.label} action={action} />
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={() => setShowSettings(true)}
                className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Settings className="w-4 h-4" />
                <span>Customize</span>
              </button>
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Reject All
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Cookie Preferences</h2>
              <button
                onClick={() => setShowSettings(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <p className="text-gray-600">
                We use different types of cookies to optimize your experience on our website. 
                You can choose which categories you'd like to allow.
              </p>

              {/* Necessary Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">Necessary Cookies</h3>
                  <div className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-sm">
                    Always Active
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  These cookies are essential for the website to function properly. They enable basic 
                  features like page navigation, shopping cart functionality, and secure access to your account.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">Analytics Cookies</h3>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                  </label>
                </div>
                <p className="text-sm text-gray-600">
                  These cookies help us understand how visitors interact with our website by collecting 
                  and reporting information anonymously. This helps us improve our website performance.
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">Marketing Cookies</h3>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences(prev => ({ ...prev, marketing: e.target.checked }))}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                  </label>
                </div>
                <p className="text-sm text-gray-600">
                  These cookies are used to deliver personalized advertisements and track the effectiveness 
                  of our marketing campaigns. They help us show you relevant offers and promotions.
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center p-6 border-t border-gray-200">
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Reject All
              </button>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowSettings(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAcceptSelected}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;