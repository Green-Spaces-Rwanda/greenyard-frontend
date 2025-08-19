export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'flowers' | 'seedlings';
  subcategory: string;
  inStock: boolean;
  featured?: boolean;
  isNew?: boolean;
  isOnSale?: boolean;
  rating: number;
  reviews: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Currency {
  code: 'RWF' | 'USD';
  symbol: string;
  rate: number; // Rate relative to USD
}

export interface PaymentMethod {
  id: string;
  name: string;
  type: 'mobile_money' | 'card' | 'bank';
  icon: string;
  description: string;
}

export interface CheckoutData {
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  shippingAddress: {
    street: string;
    city: string;
    province: string;
    postalCode: string;
  };
  paymentMethod: string;
  currency: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'shipping' | 'payment' | 'care';
}

export interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}