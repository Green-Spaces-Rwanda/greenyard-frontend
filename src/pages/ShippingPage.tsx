import React from 'react';
import { Truck, Clock, MapPin, Package, Shield, Phone } from 'lucide-react';

const ShippingPage: React.FC = () => {
  const deliveryZones = [
    {
      zone: 'Kigali City',
      timeframe: 'Same Day',
      cost: 'Free over $50',
      description: 'Orders placed before 2 PM are delivered the same day'
    },
    {
      zone: 'Northern Province',
      timeframe: '1-2 Days',
      cost: '$5-10',
      description: 'Covering Musanze, Gicumbi, Burera, and surrounding areas'
    },
    {
      zone: 'Southern Province',
      timeframe: '1-3 Days',
      cost: '$5-15',
      description: 'Including Huye, Nyanza, Muhanga, and other districts'
    },
    {
      zone: 'Eastern Province',
      timeframe: '2-3 Days',
      cost: '$8-15',
      description: 'Covering Rwamagana, Kayonza, Kirehe, and nearby areas'
    },
    {
      zone: 'Western Province',
      timeframe: '2-3 Days',
      cost: '$8-15',
      description: 'Including Rubavu, Rusizi, Karongi, and surrounding districts'
    }
  ];

  const shippingFeatures = [
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Specialized Plant Packaging',
      description: 'Custom packaging designed to protect live plants during transport with moisture retention and cushioning.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: '48-Hour Guarantee',
      description: 'If your plants arrive damaged, we\'ll replace them or provide a full refund within 48 hours.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Real-Time Tracking',
      description: 'Track your order from our nursery to your doorstep with SMS and email updates.'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Trained Delivery Team',
      description: 'Our delivery personnel are trained in proper plant handling and care during transport.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Shipping & Delivery</h1>
          <p className="text-xl text-green-100">
            Fast, safe delivery of your plants across Rwanda
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Delivery Zones */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Delivery Areas & Timeframes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliveryZones.map((zone, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-semibold text-gray-900">{zone.zone}</h3>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Time:</span>
                    <span className="font-medium text-green-600">{zone.timeframe}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping Cost:</span>
                    <span className="font-medium">{zone.cost}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{zone.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Our Delivery?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {shippingFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                  <div className="text-green-600">{feature.icon}</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Order Placed</h3>
              <p className="text-sm text-gray-600">You place your order online and choose your delivery preferences</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Careful Packaging</h3>
              <p className="text-sm text-gray-600">Our team carefully packages your plants with specialized materials</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Safe Transport</h3>
              <p className="text-sm text-gray-600">Trained delivery personnel transport your plants with care</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Delivered Fresh</h3>
              <p className="text-sm text-gray-600">Your plants arrive fresh and healthy at your doorstep</p>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">📦 Packaging Information</h3>
            <ul className="space-y-2 text-blue-800">
              <li>• Moisture-retaining materials for live plants</li>
              <li>• Protective cushioning to prevent damage</li>
              <li>• Ventilated packaging for proper air circulation</li>
              <li>• Temperature-controlled transport when needed</li>
              <li>• Eco-friendly, recyclable materials</li>
            </ul>
          </div>
          
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-amber-900 mb-4">⚠️ Important Notes</h3>
            <ul className="space-y-2 text-amber-800">
              <li>• Orders placed after 2 PM may be delivered next day</li>
              <li>• Weather conditions may affect delivery times</li>
              <li>• Someone must be present to receive live plants</li>
              <li>• Delivery attempts are made twice before return</li>
              <li>• Special handling fees may apply for large orders</li>
            </ul>
          </div>
        </div>

        {/* Contact for Shipping */}
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Shipping?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Need help with your delivery or have special requirements? Our shipping team is here to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
              Contact Shipping Support
            </button>
            <a
              href="tel:+250781234567"
              className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold"
            >
              Call +250 781 234 567
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;