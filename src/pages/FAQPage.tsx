import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { FAQ } from '../types';
import { fetchFAQs, fetchFooterContent } from '../services/contentApi';
import { useApp } from '../contexts/AppContext';

const defaultFAQs: FAQ[] = [
  {
    id: 'faq-1',
    question: 'How do I place an order?',
    answer: 'You can place an order by browsing our catalog, selecting your desired flowers or seedlings, and clicking "Add to Cart". Then proceed to checkout to complete your purchase.',
    category: 'general'
  },
  {
    id: 'faq-2',
    question: 'What payment methods do you accept?',
    answer: 'We accept mobile money (MTN, Airtel), credit/debit cards, and bank transfers. All payments are processed securely.',
    category: 'payment'
  },
  {
    id: 'faq-3',
    question: 'How long does delivery take?',
    answer: 'Delivery typically takes 1-3 business days within Kigali, and 3-5 business days for other areas in Rwanda. We will contact you to confirm your delivery time.',
    category: 'shipping'
  },
  {
    id: 'faq-4',
    question: 'Do you deliver outside Kigali?',
    answer: 'Yes, we deliver throughout Rwanda. Delivery times and fees may vary based on your location. Contact us for specific delivery information to your area.',
    category: 'shipping'
  },
  {
    id: 'faq-5',
    question: 'How should I care for fresh cut flowers?',
    answer: 'Change the water every 2-3 days, trim stems at an angle, keep them away from direct sunlight and heat sources, and remove any leaves below the waterline.',
    category: 'care'
  },
  {
    id: 'faq-6',
    question: 'What is your return policy?',
    answer: 'We accept returns within 48 hours of delivery if the product arrives damaged or in poor condition. Please contact us immediately with photos of the issue.',
    category: 'general'
  },
  {
    id: 'faq-7',
    question: 'How do I care for seedlings?',
    answer: 'Water when the top inch of soil feels dry, provide 12-16 hours of light daily, maintain consistent temperature between 65-75°F, and transplant when seedlings have 2-4 true leaves.',
    category: 'care'
  },
  {
    id: 'faq-8',
    question: 'Can I track my order?',
    answer: 'Yes, once your order is confirmed, you will receive a tracking number via email or SMS. You can use this to track your order status.',
    category: 'shipping'
  }
];

const defaultPhone = '+250 781 234 567';

const FAQPage: React.FC = () => {
  const { dispatch } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [faqs, setFaqs] = useState<FAQ[]>(defaultFAQs);
  const [phoneNumber, setPhoneNumber] = useState<string>(defaultPhone);

  useEffect(() => {
    let mounted = true;
    fetchFAQs()
      .then((data) => {
        if (!mounted || !data) return;
        // Only use backend data if it's valid and has items
        if (Array.isArray(data) && data.length > 0) {
          setFaqs(data);
        }
      })
      .catch(() => {
        // Keep defaults on error - backend might not be available yet
      });

    // Fetch footer content to get phone number
    fetchFooterContent()
      .then((data) => {
        if (!mounted || !data) return;
        if (data.contact?.phone) {
          setPhoneNumber(data.contact.phone);
        }
      })
      .catch(() => {
        // Keep default phone on error
      });

    return () => {
      mounted = false;
    };
  }, []);
  const categories = [
    { id: 'all', name: 'All Questions', count: faqs.length },
    { id: 'general', name: 'General', count: faqs.filter(f => f.category === 'general').length },
    { id: 'shipping', name: 'Shipping', count: faqs.filter(f => f.category === 'shipping').length },
    { id: 'payment', name: 'Payment', count: faqs.filter(f => f.category === 'payment').length },
    { id: 'care', name: 'Plant Care', count: faqs.filter(f => f.category === 'care').length }
  ];

  const filteredFAQs = faqs.filter((faq: FAQ) => {
    const matchesSearch = searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-green-100 mb-8">
            Find answers to common questions about GreenYard
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-gray-900 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-300 text-lg"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-green-100 hover:text-green-700 shadow-md'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {expandedFAQ === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  {expandedFAQ === faq.id && (
                    <div className="px-6 pb-4 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No FAQs found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search or browse different categories
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Show All FAQs
              </button>
            </div>
          )}
        </div>

        {/* Contact Support */}
        <div className="mt-16 bg-green-50 border border-green-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our customer support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                dispatch({ type: 'SET_CURRENT_PAGE', payload: 'contact' });
                window.scrollTo(0, 0);
              }}
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              Contact Support
            </button>
            <a
              href={`tel:${phoneNumber.replace(/\s/g, '')}`}
              className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-100 transition-colors font-semibold"
            >
              Call {phoneNumber}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;