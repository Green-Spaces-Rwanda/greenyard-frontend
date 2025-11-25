import React, { useState, useEffect, useMemo } from 'react';
import { FileText } from 'lucide-react';
import { fetchTermsContent } from '../services/contentApi';
import { TermsContent } from '../types';
import { useApp } from '../contexts/AppContext';
import { fetchFooterContent } from '../services/contentApi';

const defaultTermsContent: TermsContent = {
  header: {
    title: 'Terms of Service',
    subtitle: 'Please read these terms carefully before using our services'
  },
  sections: [
    {
      id: 'section-1',
      order: 1,
      title: 'Introduction',
      content: "Welcome to GreenYard. By accessing and using our website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services."
    },
    {
      id: 'section-2',
      order: 2,
      title: 'User Responsibilities',
      content: 'You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.'
    },
    {
      id: 'section-3',
      order: 3,
      title: 'Payment Terms',
      content: 'All prices are listed in RWF (Rwandan Francs) unless otherwise stated. Payment must be made in full at the time of order placement. We accept mobile money (MTN, Airtel), credit/debit cards, and bank transfers. All payments are processed securely.'
    },
    {
      id: 'section-4',
      order: 4,
      title: 'Delivery Terms',
      content: 'We deliver throughout Rwanda. Delivery times vary by location: 1-3 business days within Kigali, and 3-5 business days for other areas. Delivery fees may apply based on location. We will contact you to confirm delivery details.'
    },
    {
      id: 'section-5',
      order: 5,
      title: 'Returns and Refunds',
      content: 'We accept returns within 48 hours of delivery if the product arrives damaged or in poor condition. Please contact us immediately with photos of the issue. Refunds will be processed to the original payment method within 5-7 business days.'
    },
    {
      id: 'section-6',
      order: 6,
      title: 'Product Quality',
      content: 'We strive to provide the highest quality flowers and seedlings. However, natural products may vary. We guarantee that all products meet our quality standards at the time of delivery.'
    },
    {
      id: 'section-7',
      order: 7,
      title: 'Limitation of Liability',
      content: 'GreenYard shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or products. Our total liability shall not exceed the amount paid for the specific product or service.'
    },
    {
      id: 'section-8',
      order: 8,
      title: 'Changes to Terms',
      content: 'We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.'
    },
    {
      id: 'section-9',
      order: 9,
      title: 'Contact Information',
      content: 'If you have any questions about these Terms of Service, please contact us at hello@greenyard.rw or +250 781 234 567.'
    }
  ],
  lastUpdated: 'January 2025'
};

const TermsPage: React.FC = () => {
  const { dispatch } = useApp();
  const [content, setContent] = useState<TermsContent>(defaultTermsContent);
  const [contactEmail, setContactEmail] = useState<string>('hello@greenyard.rw');
  const [contactPhone, setContactPhone] = useState<string>('+250 781 234 567');

  useEffect(() => {
    let mounted = true;
    fetchTermsContent()
      .then((data) => {
        if (!mounted || !data) return;
        setContent({
          ...defaultTermsContent,
          ...data,
          sections: Array.isArray(data.sections) && data.sections.length > 0 
            ? data.sections.sort((a, b) => a.order - b.order)
            : defaultTermsContent.sections
        });
      })
      .catch(() => {
        // Keep defaults on error
      });

    // Fetch footer content to get contact info
    fetchFooterContent()
      .then((data) => {
        if (!mounted || !data) return;
        if (data.contact?.email) {
          setContactEmail(data.contact.email);
        }
        if (data.contact?.phone) {
          setContactPhone(data.contact.phone);
        }
      })
      .catch(() => {
        // Keep defaults on error
      });

    return () => {
      mounted = false;
    };
  }, []);

  // Sort sections by order
  const sortedSections = useMemo(() => {
    return [...(content.sections || [])].sort((a, b) => a.order - b.order);
  }, [content.sections]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{content.header.title}</h1>
          <p className="text-xl text-green-100">
            {content.header.subtitle}
          </p>
          <p className="text-sm text-green-200 mt-4">Last updated: {content.lastUpdated}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Dynamic Sections */}
        {sortedSections.map((section) => (
          <div key={section.id} className="bg-white rounded-xl shadow-md p-8 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-8 h-8 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
            </div>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
              {section.content}
            </p>
          </div>
        ))}

        {/* Contact Information */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About These Terms?</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about these Terms of Service, please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                dispatch({ type: 'SET_CURRENT_PAGE', payload: 'contact' });
                window.scrollTo(0, 0);
              }}
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              Contact Us
            </button>
            <a
              href={`mailto:${contactEmail}`}
              className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold"
            >
              {contactEmail}
            </a>
            <a
              href={`tel:${contactPhone.replace(/\s/g, '')}`}
              className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold"
            >
              Call {contactPhone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;