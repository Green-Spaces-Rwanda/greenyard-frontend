import React from 'react';
import { Cookie, Settings, BarChart, Target, Shield } from 'lucide-react';

const CookiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-xl text-green-100">
            Learn about how we use cookies to improve your experience
          </p>
          <p className="text-sm text-green-200 mt-4">Last updated: January 2025</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Cookie className="w-8 h-8 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">What Are Cookies?</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            Cookies are small text files that are stored on your computer or mobile device when you visit a website. 
            They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
          </p>
          <p className="text-gray-600 leading-relaxed">
            At GreenYard, we use cookies to enhance your shopping experience, analyze website performance, and provide 
            personalized content and advertisements.
          </p>
        </div>

        {/* Types of Cookies */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
          
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-3">
                <Shield className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900">Necessary Cookies</h3>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Always Active</span>
              </div>
              <p className="text-gray-600 mb-3">
                These cookies are essential for the website to function properly. They enable basic features like page navigation, 
                shopping cart functionality, and secure access.
              </p>
              <div className="bg-gray-50 rounded p-3">
                <h4 className="font-medium text-gray-900 mb-2">Examples:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Session management and user authentication</li>
                  <li>• Shopping cart contents and checkout process</li>
                  <li>• Security and fraud prevention</li>
                  <li>• Load balancing and website performance</li>
                </ul>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-3">
                <BarChart className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Analytics Cookies</h3>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">Optional</span>
              </div>
              <p className="text-gray-600 mb-3">
                These cookies help us understand how visitors interact with our website by collecting and reporting 
                information anonymously. This helps us improve our website performance.
              </p>
              <div className="bg-gray-50 rounded p-3">
                <h4 className="font-medium text-gray-900 mb-2">Examples:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Google Analytics for website traffic analysis</li>
                  <li>• Page views, bounce rates, and user journeys</li>
                  <li>• Popular products and search terms</li>
                  <li>• Website performance and error tracking</li>
                </ul>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-3">
                <Target className="w-6 h-6 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900">Marketing Cookies</h3>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">Optional</span>
              </div>
              <p className="text-gray-600 mb-3">
                These cookies are used to deliver personalized advertisements and track the effectiveness of our 
                marketing campaigns. They help us show you relevant offers and promotions.
              </p>
              <div className="bg-gray-50 rounded p-3">
                <h4 className="font-medium text-gray-900 mb-2">Examples:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Facebook Pixel and Google Ads tracking</li>
                  <li>• Personalized product recommendations</li>
                  <li>• Retargeting advertisements</li>
                  <li>• Email marketing campaign effectiveness</li>
                </ul>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-3">
                <Settings className="w-6 h-6 text-orange-600" />
                <h3 className="text-lg font-semibold text-gray-900">Preference Cookies</h3>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">Optional</span>
              </div>
              <p className="text-gray-600 mb-3">
                These cookies remember your preferences and settings to provide a more personalized experience 
                when you return to our website.
              </p>
              <div className="bg-gray-50 rounded p-3">
                <h4 className="font-medium text-gray-900 mb-2">Examples:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Language and currency preferences</li>
                  <li>• Recently viewed products</li>
                  <li>• Wishlist and favorite items</li>
                  <li>• Display preferences and themes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Third-Party Cookies */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Services</h2>
          
          <p className="text-gray-600 mb-6">
            We work with trusted third-party services that may also set cookies on your device. These services help us 
            provide better functionality and analyze our website performance.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Analytics Partners</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• <strong>Google Analytics:</strong> Website traffic and user behavior analysis</li>
                <li>• <strong>Hotjar:</strong> User experience and heatmap analysis</li>
                <li>• <strong>Facebook Analytics:</strong> Social media engagement tracking</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Service Providers</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• <strong>Payment Processors:</strong> Secure payment processing</li>
                <li>• <strong>Customer Support:</strong> Live chat and help desk services</li>
                <li>• <strong>Email Services:</strong> Newsletter and transactional emails</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Managing Cookies */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">On Our Website</h3>
              <p className="text-gray-600 mb-4">
                You can manage your cookie preferences at any time using our cookie consent banner or by visiting our cookie settings page.
              </p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium">
                Manage Cookie Preferences
              </button>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">In Your Browser</h3>
              <p className="text-gray-600 mb-4">
                Most web browsers allow you to control cookies through their settings. You can usually find these options 
                in the "Privacy" or "Security" section of your browser settings.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded p-3">
                  <h4 className="font-medium text-gray-900 mb-2">Popular Browsers:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Chrome: Settings → Privacy and Security → Cookies</li>
                    <li>• Firefox: Settings → Privacy & Security → Cookies</li>
                    <li>• Safari: Preferences → Privacy → Cookies</li>
                    <li>• Edge: Settings → Privacy → Cookies</li>
                  </ul>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded p-3">
                  <h4 className="font-medium text-amber-900 mb-2">⚠️ Important Note:</h4>
                  <p className="text-sm text-amber-800">
                    Disabling necessary cookies may affect website functionality and your ability to make purchases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cookie Retention */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookie Retention</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Session Cookies</h3>
              <p className="text-gray-600 text-sm mb-3">
                These cookies are temporary and are deleted when you close your browser. They're used for essential 
                functions like maintaining your shopping cart during your visit.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded p-3">
                <p className="text-blue-800 text-sm"><strong>Duration:</strong> Until browser is closed</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Persistent Cookies</h3>
              <p className="text-gray-600 text-sm mb-3">
                These cookies remain on your device for a set period or until you delete them. They remember your 
                preferences and provide a personalized experience on return visits.
              </p>
              <div className="bg-green-50 border border-green-200 rounded p-3">
                <p className="text-green-800 text-sm"><strong>Duration:</strong> 30 days to 2 years (varies by purpose)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Cookies?</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about our use of cookies or this Cookie Policy, please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
              Contact Support
            </button>
            <a
              href="mailto:privacy@greenyard.rw"
              className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold"
            >
              privacy@greenyard.rw
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesPage;