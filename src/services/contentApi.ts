import {
  HeroContent,
  HomeBannersContent,
  HeaderContent,
  FooterContent,
  CartDrawerContent,
  CookieBannerContent,
  FAQ,
  TermsContent
} from '../types';
import { buildApiUrl } from './apiConfig';

async function fetchContent<T>(path: string, errorMessage: string): Promise<T> {
  const res = await fetch(buildApiUrl(path));
  if (!res.ok) {
    throw new Error(errorMessage);
  }
  const json = await res.json();
  return json.data as T;
}

export const fetchHeroContent = () =>
  fetchContent<HeroContent>('/content/home/hero', 'Failed to load hero content');

export const fetchHomeBanners = () =>
  fetchContent<HomeBannersContent>('/content/home/banners', 'Failed to load banner content');

export const fetchHeaderContent = () =>
  fetchContent<HeaderContent>('/content/site/header', 'Failed to load header content');

export const fetchFooterContent = () =>
  fetchContent<FooterContent>('/content/site/footer', 'Failed to load footer content');

export const fetchCartDrawerContent = () =>
  fetchContent<CartDrawerContent>('/content/cart/drawer', 'Failed to load cart content');

export const fetchCookieConsentContent = () =>
  fetchContent<CookieBannerContent>('/content/site/cookie-consent', 'Failed to load cookie consent content');

export const fetchFAQs = async (): Promise<FAQ[]> => {
  const res = await fetch(buildApiUrl('/content/faq'));
  if (!res.ok) {
    throw new Error('Failed to load FAQs');
  }
  const json = await res.json();
  // Backend returns { success: true, data: { faqs: [...], updatedAt: "..." } }
  if (json.success && json.data && Array.isArray(json.data.faqs)) {
    return json.data.faqs as FAQ[];
  }
  throw new Error('Invalid FAQ response format');
};

export const fetchTermsContent = async (): Promise<TermsContent> => {
  const res = await fetch(buildApiUrl('/content/terms'));
  if (!res.ok) {
    throw new Error('Failed to load terms content');
  }
  const json = await res.json();
  // Backend returns { success: true, data: { header, sections, lastUpdated, updatedAt } }
  if (json.success && json.data) {
    return json.data as TermsContent;
  }
  throw new Error('Invalid terms response format');
};



