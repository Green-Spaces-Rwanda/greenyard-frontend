import { Product, PaymentMethod } from '../types';
import { FAQ } from '../types';

export const products: Product[] = [
  // Flowers
  {
    id: '1',
    name: 'Red Rose Bouquet',
    description: 'Beautiful fresh red roses, perfect for special occasions',
    price: 25,
    originalPrice: 35,
    image: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'flowers',
    subcategory: 'roses',
    inStock: true,
    isOnSale: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: '2',
    name: 'Sunflower Bundle',
    description: 'Bright and cheerful sunflowers to brighten any day',
    price: 18,
    image: 'https://images.pexels.com/photos/33109/sunflower-sunny-yellow-close-up.jpg?auto=compress&cs=tinysrgb&w=500',
    category: 'flowers',
    subcategory: 'sunflowers',
    inStock: true,
    isNew: true,
    rating: 4.6,
    reviews: 89
  },
  {
    id: '3',
    name: 'Mixed Tulips',
    description: 'Colorful mix of fresh tulips in various colors',
    price: 22,
    image: 'https://images.pexels.com/photos/36729/tulip-flower-bloom-pink.jpg?auto=compress&cs=tinysrgb&w=500',
    category: 'flowers',
    subcategory: 'tulips',
    inStock: true,
    rating: 4.7,
    reviews: 156
  },
  {
    id: '4',
    name: 'White Lilies',
    description: 'Elegant white lilies perfect for any occasion',
    price: 28,
    image: 'https://images.pexels.com/photos/1263162/pexels-photo-1263162.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'flowers',
    subcategory: 'lilies',
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 203
  },
  {
    id: '5',
    name: 'Lavender Stems',
    description: 'Fragrant lavender stems for aromatherapy and decoration',
    price: 15,
    image: 'https://images.pexels.com/photos/207518/pexels-photo-207518.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'flowers',
    subcategory: 'lavender',
    inStock: true,
    rating: 4.5,
    reviews: 78
  },
  {
    id: '6',
    name: 'Chrysanthemums',
    description: 'Beautiful chrysanthemums in vibrant colors',
    price: 20,
    originalPrice: 25,
    image: 'https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'flowers',
    subcategory: 'chrysanthemums',
    inStock: true,
    isOnSale: true,
    rating: 4.4,
    reviews: 92
  },

  // Seedlings
  {
    id: '7',
    name: 'Tomato Seedlings',
    description: 'Healthy tomato seedlings ready for planting',
    price: 3,
    image: 'https://images.pexels.com/photos/1327373/pexels-photo-1327373.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'seedlings',
    subcategory: 'vegetables',
    inStock: true,
    isNew: true,
    rating: 4.6,
    reviews: 234
  },
  {
    id: '8',
    name: 'Herb Garden Kit',
    description: 'Assorted herb seedlings including basil, mint, and parsley',
    price: 12,
    image: 'https://images.pexels.com/photos/4505275/pexels-photo-4505275.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'seedlings',
    subcategory: 'herbs',
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 167
  },
  {
    id: '9',
    name: 'Pepper Seedlings',
    description: 'Spicy pepper seedlings for your garden',
    price: 4,
    image: 'https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'seedlings',
    subcategory: 'vegetables',
    inStock: true,
    rating: 4.3,
    reviews: 98
  },
  {
    id: '10',
    name: 'Flower Mix Seeds',
    description: 'Wildflower seed mix for a colorful garden',
    price: 8,
    image: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'seedlings',
    subcategory: 'flowers',
    inStock: true,
    rating: 4.5,
    reviews: 145
  },
  {
    id: '11',
    name: 'Lettuce Seedlings',
    description: 'Fresh lettuce seedlings for your salad garden',
    price: 2.5,
    image: 'https://images.pexels.com/photos/4750267/pexels-photo-4750267.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'seedlings',
    subcategory: 'vegetables',
    inStock: true,
    rating: 4.4,
    reviews: 112
  },
  {
    id: '12',
    name: 'Marigold Seedlings',
    description: 'Bright marigold seedlings for garden borders',
    price: 5,
    originalPrice: 7,
    image: 'https://images.pexels.com/photos/4425719/pexels-photo-4425719.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'seedlings',
    subcategory: 'flowers',
    inStock: true,
    isOnSale: true,
    rating: 4.7,
    reviews: 189
  }
];

export const paymentMethods: PaymentMethod[] = [
  {
    id: 'mtn',
    name: 'MTN Mobile Money',
    type: 'mobile_money',
    icon: '📱',
    description: 'Pay with MTN Mobile Money'
  },
  {
    id: 'airtel',
    name: 'Airtel Money',
    type: 'mobile_money',
    icon: '📞',
    description: 'Pay with Airtel Money'
  },
  {
    id: 'paystack',
    name: 'Paystack',
    type: 'card',
    icon: '💳',
    description: 'Pay with credit/debit card via Paystack'
  },
  {
    id: 'bank',
    name: 'Bank Transfer',
    type: 'bank',
    icon: '🏦',
    description: 'Direct bank transfer'
  }
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'flowers', name: 'Flowers', count: products.filter(p => p.category === 'flowers').length },
  { id: 'seedlings', name: 'Seedlings', count: products.filter(p => p.category === 'seedlings').length }
];

export const faqs: FAQ[] = [
  // General FAQs
  {
    id: '1',
    question: 'What is GreenYard?',
    answer: 'GreenYard is Rwanda\'s premier online marketplace for fresh flowers and quality seedlings. We connect you with beautiful plants and provide expert care guidance to help your garden flourish.',
    category: 'general'
  },
  {
    id: '2',
    question: 'Do you offer plant care advice?',
    answer: 'Yes! Our team of gardening experts provides comprehensive care instructions with every purchase, plus ongoing support through our help center and customer service.',
    category: 'general'
  },
  {
    id: '3',
    question: 'Are your plants locally sourced?',
    answer: 'We work with trusted local growers and nurseries across Rwanda to ensure the freshest, healthiest plants while supporting our local agricultural community.',
    category: 'general'
  },
  
  // Shipping FAQs
  {
    id: '4',
    question: 'What are your delivery areas?',
    answer: 'We deliver throughout Rwanda with same-day delivery available in Kigali. Other provinces receive delivery within 1-3 business days depending on location.',
    category: 'shipping'
  },
  {
    id: '5',
    question: 'How do you ensure plants arrive safely?',
    answer: 'We use specialized packaging designed for live plants, including moisture retention systems and protective wrapping. Our delivery team is trained in proper plant handling.',
    category: 'shipping'
  },
  {
    id: '6',
    question: 'What if my plants arrive damaged?',
    answer: 'We offer a 48-hour guarantee on all deliveries. If plants arrive damaged, contact us immediately with photos and we\'ll arrange a replacement or full refund.',
    category: 'shipping'
  },
  
  // Payment FAQs
  {
    id: '7',
    question: 'What payment methods do you accept?',
    answer: 'We accept MTN Mobile Money, Airtel Money, Paystack (credit/debit cards), and bank transfers. All transactions are secure and encrypted.',
    category: 'payment'
  },
  {
    id: '8',
    question: 'Can I pay on delivery?',
    answer: 'Currently, we require payment before delivery to ensure order confirmation. However, we\'re working on adding cash-on-delivery options for select areas.',
    category: 'payment'
  },
  {
    id: '9',
    question: 'Are there any additional fees?',
    answer: 'Delivery is free for orders over $50 within Kigali. Smaller orders and deliveries outside Kigali may incur delivery fees, which are clearly shown at checkout.',
    category: 'payment'
  },
  
  // Care FAQs
  {
    id: '10',
    question: 'How do I care for cut flowers?',
    answer: 'Cut stems at an angle under running water, place in clean vase with fresh water, add flower food if provided, and keep away from direct sunlight and heat sources.',
    category: 'care'
  },
  {
    id: '11',
    question: 'When should I transplant seedlings?',
    answer: 'Most seedlings should be transplanted when they have 2-4 true leaves and the roots are visible at the bottom of the container. Choose a cloudy day or evening for best results.',
    category: 'care'
  },
  {
    id: '12',
    question: 'What soil should I use for seedlings?',
    answer: 'Use well-draining potting mix enriched with compost. Avoid heavy clay soils or garden soil which may contain pests or diseases harmful to young plants.',
    category: 'care'
  }
];