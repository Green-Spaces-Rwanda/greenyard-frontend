import React, { useState } from 'react';
import { X, CreditCard, Smartphone, Building } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { paymentMethods } from '../data/mockData';
import { CheckoutData } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { state, dispatch, formatPrice, getCartTotal } = useApp();
  const [step, setStep] = useState<'info' | 'payment' | 'success'>('info');
  const [loading, setLoading] = useState(false);
  
  const [checkoutData, setCheckoutData] = useState<CheckoutData>({
    customerInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    },
    shippingAddress: {
      street: '',
      city: '',
      province: '',
      postalCode: ''
    },
    paymentMethod: '',
    currency: state.currency.code
  });

  if (!isOpen) return null;

  const handleInputChange = (section: keyof CheckoutData, field: string, value: string) => {
    setCheckoutData(prev => ({
      ...prev,
      [section]: {
        ...(prev[section] as any),
        [field]: value
      }
    }));
  };

  const handleNextStep = () => {
    if (step === 'info') {
      setStep('payment');
    } else if (step === 'payment') {
      handleSubmitOrder();
    }
  };

  const handleSubmitOrder = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setStep('success');
    setLoading(false);
    
    // Clear cart after successful order
    dispatch({ type: 'CLEAR_CART' });
  };

  const handleCloseSuccess = () => {
    setStep('info');
    onClose();
  };

  const getPaymentIcon = (type: string) => {
    switch (type) {
      case 'mobile_money':
        return <Smartphone className="w-6 h-6" />;
      case 'card':
        return <CreditCard className="w-6 h-6" />;
      case 'bank':
        return <Building className="w-6 h-6" />;
      default:
        return <CreditCard className="w-6 h-6" />;
    }
  };

  const isInfoValid = () => {
    const { customerInfo, shippingAddress } = checkoutData;
    return customerInfo.firstName && customerInfo.lastName && customerInfo.email && 
           customerInfo.phone && shippingAddress.street && shippingAddress.city && 
           shippingAddress.province;
  };

  const isPaymentValid = () => {
    return checkoutData.paymentMethod !== '';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            {step === 'info' && 'Shipping Information'}
            {step === 'payment' && 'Payment Method'}
            {step === 'success' && 'Order Confirmed'}
          </h2>
          <button
            onClick={step === 'success' ? handleCloseSuccess : onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 'info' && (
            <div className="space-y-6">
              {/* Customer Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={checkoutData.customerInfo.firstName}
                      onChange={(e) => handleInputChange('customerInfo', 'firstName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={checkoutData.customerInfo.lastName}
                      onChange={(e) => handleInputChange('customerInfo', 'lastName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={checkoutData.customerInfo.email}
                      onChange={(e) => handleInputChange('customerInfo', 'email', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+250 xxx xxx xxx"
                      value={checkoutData.customerInfo.phone}
                      onChange={(e) => handleInputChange('customerInfo', 'phone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Shipping Address</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      required
                      value={checkoutData.shippingAddress.street}
                      onChange={(e) => handleInputChange('shippingAddress', 'street', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        value={checkoutData.shippingAddress.city}
                        onChange={(e) => handleInputChange('shippingAddress', 'city', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Province *
                      </label>
                      <select
                        required
                        value={checkoutData.shippingAddress.province}
                        onChange={(e) => handleInputChange('shippingAddress', 'province', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
                      >
                        <option value="">Select Province</option>
                        <option value="Kigali">Kigali</option>
                        <option value="Northern">Northern</option>
                        <option value="Southern">Southern</option>
                        <option value="Eastern">Eastern</option>
                        <option value="Western">Western</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      value={checkoutData.shippingAddress.postalCode}
                      onChange={(e) => handleInputChange('shippingAddress', 'postalCode', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 'payment' && (
            <div className="space-y-6">
              {/* Order Summary */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Order Summary</h3>
                <div className="space-y-2 text-sm">
                  {state.cart.map((item) => (
                    <div key={item.product.id} className="flex justify-between">
                      <span>{item.product.name} x {item.quantity}</span>
                      <span>{formatPrice(item.product.price * item.quantity)}</span>
                    </div>
                  ))}
                  <div className="border-t pt-2 font-semibold flex justify-between">
                    <span>Total:</span>
                    <span className="text-green-600">{formatPrice(getCartTotal())}</span>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Payment Method</h3>
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <label
                      key={method.id}
                      className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                        checkoutData.paymentMethod === method.id
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.id}
                        checked={checkoutData.paymentMethod === method.id}
                        onChange={(e) => setCheckoutData(prev => ({ ...prev, paymentMethod: e.target.value }))}
                        className="text-green-600 focus:ring-green-500"
                      />
                      <div className="text-green-600">
                        {getPaymentIcon(method.type)}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{method.name}</div>
                        <div className="text-sm text-gray-500">{method.description}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 'success' && (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Order Confirmed!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for your order! We'll send you a confirmation email shortly.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-800">
                  <strong>Order Total:</strong> {formatPrice(getCartTotal())}
                </p>
                <p className="text-green-800">
                  <strong>Payment Method:</strong> {paymentMethods.find(m => m.id === checkoutData.paymentMethod)?.name}
                </p>
              </div>
              <button
                onClick={handleCloseSuccess}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        {step !== 'success' && (
          <div className="flex justify-between items-center p-6 border-t border-gray-200">
            {step === 'payment' && (
              <button
                onClick={() => setStep('info')}
                className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Back
              </button>
            )}
            <div className="flex space-x-3 ml-auto">
              <button
                onClick={onClose}
                className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleNextStep}
                disabled={
                  loading || 
                  (step === 'info' && !isInfoValid()) || 
                  (step === 'payment' && !isPaymentValid())
                }
                className="bg-green-600 text-white px-8 py-2 rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-semibold"
              >
                {loading ? 'Processing...' : step === 'info' ? 'Continue' : 'Place Order'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;