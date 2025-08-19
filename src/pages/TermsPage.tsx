import React from 'react';
import { FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-green-100">
            Please read these terms carefully before using our services
          </p>
          <p className="text-sm text-green-200 mt-4">Last updated: January 2025</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <FileText className="w-8 h-8 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">Agreement to Terms</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            By accessing and using GreenYard's website and services, you accept and agree to be bound by the terms 
            and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </div>

        {/* Use of Service */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <CheckCircle className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Use of Service</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Permitted Uses</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Browse and purchase plants and gardening products</li>
                <li>• Access plant care information and resources</li>
                <li>• Create an account to track orders and preferences</li>
                <li>• Contact customer support for assistance</li>
                <li>• Subscribe to newsletters and promotional content</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Prohibited Uses</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Use the service for any unlawful purpose</li>
                <li>• Attempt to gain unauthorized access to our systems</li>
                <li>• Interfere with or disrupt the service</li>
                <li>• Upload malicious code or harmful content</li>
                <li>• Violate any applicable laws or regulations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Orders and Payments */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Scale className="w-8 h-8 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">Orders and Payments</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Order Acceptance</h3>
              <p className="text-gray-600 text-sm mb-3">
                All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order.
              </p>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>• Orders confirmed via email</li>
                <li>• Prices subject to change without notice</li>
                <li>• Limited quantities may apply</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Terms</h3>
              <p className="text-gray-600 text-sm mb-3">
                Payment is required at the time of order placement through our secure payment partners.
              </p>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>• All payments processed securely</li>
                <li>• Multiple payment methods accepted</li>
                <li>• Refunds processed per our return policy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Product Information */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Information & Warranties</h2>
          
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-900 mb-2">Plant Health Guarantee</h3>
              <p className="text-green-800 text-sm">
                We guarantee that all plants will arrive healthy and in good condition. Any issues must be reported within 48 hours of delivery.
              </p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Product Descriptions</h3>
              <p className="text-blue-800 text-sm">
                We strive for accuracy in all product descriptions, but natural variations in plants may occur. Colors, sizes, and characteristics may vary.
              </p>
            </div>
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Care Instructions</h3>
              <p className="text-amber-800 text-sm">
                Care instructions are provided as general guidance. Plant success depends on various factors including environment, care, and local conditions.
              </p>
            </div>
          </div>
        </div>

        {/* Limitation of Liability */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <AlertTriangle className="w-8 h-8 text-orange-600" />
            <h2 className="text-2xl font-bold text-gray-900">Limitation of Liability</h2>
          </div>
          
          <div className="space-y-4 text-gray-600">
            <p>
              GreenYard shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
              including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Maximum Liability</h3>
              <p className="text-sm text-gray-600">
                Our total liability to you for any damages shall not exceed the amount you paid for the specific product or service that gave rise to the claim.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Force Majeure</h3>
              <p className="text-sm text-gray-600">
                We are not responsible for delays or failures due to circumstances beyond our control, including but not limited to natural disasters, weather conditions, or government actions.
              </p>
            </div>
          </div>
        </div>

        {/* Intellectual Property */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
          
          <div className="space-y-4 text-gray-600">
            <p>
              The service and its original content, features, and functionality are and will remain the exclusive property of GreenYard and its licensors.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900">Our Rights</h3>
                <p className="text-sm text-gray-600">All content, trademarks, and intellectual property on this site are owned by GreenYard.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900">Your Rights</h3>
                <p className="text-sm text-gray-600">You may use our content for personal, non-commercial purposes only.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Termination */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Termination</h2>
          
          <p className="text-gray-600 mb-4">
            We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, 
            including without limitation if you breach the Terms.
          </p>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="font-semibold text-red-900 mb-2">Grounds for Termination</h3>
            <ul className="text-sm text-red-800 space-y-1">
              <li>• Violation of these terms</li>
              <li>• Fraudulent or illegal activity</li>
              <li>• Abuse of our services or staff</li>
              <li>• Non-payment of orders</li>
            </ul>
          </div>
        </div>

        {/* Changes to Terms */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
          
          <p className="text-gray-600 mb-4">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
            If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 text-sm">
              <strong>Your continued use of the service after any changes constitutes acceptance of the new Terms.</strong>
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About These Terms?</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about these Terms of Service, please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
              Contact Legal Team
            </button>
            <a
              href="mailto:legal@greenyard.rw"
              className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold"
            >
              legal@greenyard.rw
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;