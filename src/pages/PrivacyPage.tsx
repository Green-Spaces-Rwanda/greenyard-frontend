import React from 'react';
import { Shield, Eye, Lock, Users, Database, Globe } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-green-100">
            Your privacy matters to us - learn how we protect your information
          </p>
          <p className="text-sm text-green-200 mt-4">Last updated: January 2025</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-8 h-8 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">Our Commitment to Privacy</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            At GreenYard, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
            website or make a purchase from us.
          </p>
        </div>

        {/* Information We Collect */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Database className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Name, email address, and phone number</li>
                <li>• Billing and shipping addresses</li>
                <li>• Payment information (processed securely by our payment partners)</li>
                <li>• Order history and preferences</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• IP address and browser information</li>
                <li>• Device type and operating system</li>
                <li>• Pages visited and time spent on our site</li>
                <li>• Referring website information</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How We Use Information */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Eye className="w-8 h-8 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Order Processing</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Process and fulfill your orders</li>
                <li>• Send order confirmations and updates</li>
                <li>• Handle returns and customer service</li>
                <li>• Prevent fraudulent transactions</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Communication</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Send promotional emails (with consent)</li>
                <li>• Provide customer support</li>
                <li>• Share plant care tips and advice</li>
                <li>• Notify about new products and offers</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Website Improvement</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Analyze website usage patterns</li>
                <li>• Improve user experience</li>
                <li>• Personalize content and recommendations</li>
                <li>• Optimize our services</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal Compliance</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Comply with legal obligations</li>
                <li>• Protect our rights and property</li>
                <li>• Ensure platform security</li>
                <li>• Respond to legal requests</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Information Sharing */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="w-8 h-8 text-orange-600" />
            <h2 className="text-2xl font-bold text-gray-900">Information Sharing</h2>
          </div>
          
          <p className="text-gray-600 mb-4">
            We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
          </p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-900">Service Providers</h3>
              <p className="text-gray-600 text-sm">Payment processors, delivery services, and other trusted partners who help us operate our business.</p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900">Legal Requirements</h3>
              <p className="text-gray-600 text-sm">When required by law, court order, or to protect our rights and the safety of our users.</p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900">Business Transfers</h3>
              <p className="text-gray-600 text-sm">In the event of a merger, acquisition, or sale of assets, your information may be transferred.</p>
            </div>
          </div>
        </div>

        {/* Data Security */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Lock className="w-8 h-8 text-red-600" />
            <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
          </div>
          
          <p className="text-gray-600 mb-4">
            We implement appropriate technical and organizational security measures to protect your personal information:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Technical Measures</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• SSL encryption for data transmission</li>
                <li>• Secure payment processing</li>
                <li>• Regular security audits</li>
                <li>• Access controls and authentication</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Organizational Measures</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Employee training on data protection</li>
                <li>• Limited access to personal data</li>
                <li>• Regular policy updates</li>
                <li>• Incident response procedures</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Your Rights */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Globe className="w-8 h-8 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
          </div>
          
          <p className="text-gray-600 mb-4">You have the following rights regarding your personal information:</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Access</h4>
                  <p className="text-sm text-gray-600">Request a copy of your personal data</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Correction</h4>
                  <p className="text-sm text-gray-600">Update or correct inaccurate information</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Deletion</h4>
                  <p className="text-sm text-gray-600">Request deletion of your personal data</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Portability</h4>
                  <p className="text-sm text-gray-600">Receive your data in a portable format</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Opt-out</h4>
                  <p className="text-sm text-gray-600">Unsubscribe from marketing communications</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Object</h4>
                  <p className="text-sm text-gray-600">Object to certain data processing activities</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Privacy?</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about this Privacy Policy or how we handle your personal information, 
            please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
              Contact Privacy Team
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

export default PrivacyPage;