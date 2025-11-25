export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  isThumbnail: boolean;
  order: number;
  createdAt: string;
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: 'FLOWERS' | 'SEEDLINGS';
  subcategory?: string;
  inStock: boolean;
  featured?: boolean;
  createdAt?: string;
  updatedAt?: string;
  image?: string;
  images: ProductImage[];
  badgeText?: string;
  longDescription?: string;
  careInstructions?: string[];
  availabilityMessage?: string;
  shippingInfo?: string;
  attributes?: Record<string, string>;
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

export interface HeroFeature {
  icon: string;
  title: string;
  subtitle: string;
}

export interface HeroContent {
  headline: string;
  emphasis: string;
  subtext: string;
  features: HeroFeature[];
  updatedAt?: string;
}

export interface PromoBanner {
  id: string;
  tag?: string;
  title: string;
  body: string;
  emoji?: string;
  cta?: { label: string; href?: string };
  theme?: { from: string; to: string };
}

export interface HighlightCard {
  id: string;
  icon?: string;
  title: string;
  description: string;
}

export interface HomeBannersContent {
  primaryBanners: PromoBanner[];
  highlights: HighlightCard[];
  updatedAt?: string;
}

export interface HeaderNavItem {
  id?: string;
  label: string;
  page?: string;
  href?: string;
}

export interface HeaderContent {
  announcement?: string;
  logo?: { url: string; alt: string; href?: string };
  primaryNav?: HeaderNavItem[];
  secondaryNav?: HeaderNavItem[];
  mobileMenu?: HeaderNavItem[];
  searchPlaceholder?: string;
  updatedAt?: string;
}

export interface FooterLink {
  label: string;
  page?: string;
  href?: string;
}

export interface FooterSocialLink {
  platform: string;
  url: string;
}

export interface FooterContact {
  address?: string;
  phone?: string;
  email?: string;
}

export interface FooterNewsletter {
  headline?: string;
  placeholder?: string;
  ctaLabel?: string;
}

export interface FooterContent {
  about?: { title?: string; description?: string };
  socialLinks?: FooterSocialLink[];
  quickLinks?: FooterLink[];
  customerLinks?: FooterLink[];
  contact?: FooterContact;
  newsletter?: FooterNewsletter;
  legalLinks?: FooterLink[];
  copyright?: string;
  updatedAt?: string;
}

export interface CartEmptyState {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface CartDrawerContent {
  emptyState?: CartEmptyState;
  promoMessage?: string;
  checkoutCta?: string;
  updatedAt?: string;
}

export interface CookieBannerAction {
  label: string;
  variant?: 'primary' | 'secondary' | 'link';
  href?: string;
}

export interface CookieBannerContent {
  title?: string;
  body?: string;
  actions?: CookieBannerAction[];
  updatedAt?: string;
}

export interface TermsSection {
  id: string;
  order: number;
  title: string;
  content: string;
}

export interface TermsContent {
  header: {
    title: string;
    subtitle: string;
  };
  sections: TermsSection[];
  lastUpdated: string;
  updatedAt?: string;
}