import React from 'react';
import { RotateCcw, Clock, CheckCircle, AlertCircle, Phone, Mail } from 'lucide-react';

const ReturnsPage: React.FC = () => {
  const returnSteps = [
    {
      step: 1,
      title: 'Contact Us',
      description: 'Reach out within 48 hours of delivery with photos of damaged plants',
      icon: <Phone className="w-6 h-6" />
    },
    {
      step: 2,
      title: 'Assessment',
      description: 'Our team reviews your case and determines the best solution',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      step: 3,
      title: 'Resolution',
      description: 'We arrange replacement delivery or process your refund',
      icon: <RotateCcw className="w-6 h-6" />
    }
  ];

  const returnPolicies = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: '48-Hour Window',
      description: 'Report any issues within 48 hours of delivery for fastest resolution',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Quality Guarantee',
      description: 'We guarantee the health and quality of all plants upon delivery',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: 'Easy Returns',
      description: 'Simple process with no complicated paperwork or return shipping',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: 'Photo Documentation',
      description: 'Clear photos help us process your return request quickly',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Returns & Refunds</h1>
          <p className="text-xl text-green-100">
            Your satisfaction is our priority - we make returns simple and hassle-free
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Return Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How Returns Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {returnSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-green-600">{step.icon}</div>
                </div>
                <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Return Policies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Return Policy</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {returnPolicies.map((policy, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${policy.color}`}>
                  {policy.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{policy.title}</h3>
                  <p className="text-gray-600">{policy.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What We Cover */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-4">✅ What We Cover</h3>
            <ul className="space-y-2 text-green-800">
              <li>• Plants that arrive damaged or wilted</li>
              <li>• Incorrect items or missing products</li>
              <li>• Plants that die within 7 days of delivery</li>
              <li>• Delivery delays beyond our control</li>
              <li>• Packaging damage affecting plant health</li>
              <li>• Quality issues not visible at time of purchase</li>
            </ul>
          </div>
          
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-red-900 mb-4">❌ What We Don't Cover</h3>
            <ul className="space-y-2 text-red-800">
              <li>• Normal plant aging or seasonal changes</li>
              <li>• Damage due to improper care after delivery</li>
              <li>• Plants damaged by pets or children</li>
              <li>• Issues reported after 48-hour window</li>
              <li>• Preference changes or buyer's remorse</li>
              <li>• Damage from extreme weather at delivery location</li>
            </ul>
          </div>
        </div>

        {/* Refund Information */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Refund Information</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">1-2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Processing Time</h3>
              <p className="text-sm text-gray-600">Refunds processed within 1-2 business days of approval</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold">3-5</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Bank Transfer</h3>
              <p className="text-sm text-gray-600">Bank transfers take 3-5 business days to reflect</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 font-bold">24h</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Mobile Money</h3>
              <p className="text-sm text-gray-600">Mobile money refunds processed within 24 hours</p>
            </div>
          </div>
        </div>

        {/* Contact for Returns */}
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need to Return Something?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our customer service team is ready to help you with any return or refund requests. 
            Contact us as soon as possible for the fastest resolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Call +250 781 234 567</span>
            </button>
            <button className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold flex items-center justify-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>Email Support</span>
            </button>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 text-left max-w-2xl mx-auto">
            <h4 className="font-semibold text-gray-900 mb-2">When contacting us, please include:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Your order number</li>
              <li>• Clear photos of the issue</li>
              <li>• Description of the problem</li>
              <li>• Your preferred resolution (replacement or refund)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnsPage;