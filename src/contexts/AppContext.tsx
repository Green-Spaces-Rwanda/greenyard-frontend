import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { Product, CartItem, Currency } from '../types';
// products removed; cart will persist snapshots

interface AppState {
  cart: CartItem[];
  currency: Currency;
  searchQuery: string;
  selectedCategory: string;
  currentPage: string;
  cookieConsent: boolean;
}

type AppAction =
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_CURRENCY'; payload: Currency }
  | { type: 'SET_SEARCH_QUERY'; payload: string }
  | { type: 'SET_CATEGORY'; payload: string }
  | { type: 'SET_CURRENT_PAGE'; payload: string }
  | { type: 'SET_COOKIE_CONSENT'; payload: boolean };

const currencies: Currency[] = [
  { code: 'RWF', symbol: 'RWF', rate: 1300 },
  { code: 'USD', symbol: '$', rate: 1 }
];

const initialState: AppState = {
  cart: [],
  currency: currencies[0],
  searchQuery: '',
  selectedCategory: 'all',
  currentPage: 'home',
  cookieConsent: false
};

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.product.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.product.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        cart: [...state.cart, { product: action.payload, quantity: 1 }]
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.product.id !== action.payload)
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.product.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };

    case 'CLEAR_CART':
      return { ...state, cart: [] };

    case 'SET_CURRENCY':
      return { ...state, currency: action.payload };

    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };

    case 'SET_CATEGORY':
      return { ...state, selectedCategory: action.payload };

    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };

    case 'SET_COOKIE_CONSENT':
      return { ...state, cookieConsent: action.payload };

    default:
      return state;
  }
};

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  currencies: Currency[];
  formatPrice: (price: number) => string;
  getCartTotal: () => number;
  getCartItemCount: () => number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  // Keys and helpers for cart persistence
  const CART_STORAGE_KEY = 'gy_cart_v1';
  const CART_COOKIE_NAME = 'gy_cart_enabled';
  const CART_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 180; // 180 days

  const getCookie = (name: string): string | null => {
    if (typeof document === 'undefined') return null;
    const match = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
    return match ? decodeURIComponent(match[1]) : null;
  };

  const setCookie = (name: string, value: string, maxAgeSeconds: number) => {
    if (typeof document === 'undefined') return;
    document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=${maxAgeSeconds}; Path=/; SameSite=Lax`;
  };

  const deleteCookie = (name: string) => {
    if (typeof document === 'undefined') return;
    document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
  };

  type PersistedCartItem = { product: Product; quantity: number };

  const hydrateCartFromStorage = (): CartItem[] => {
    if (typeof window === 'undefined') return [];
    // Only restore if our cart cookie exists; if cookies were deleted, treat as a fresh session
    const hasCartCookie = !!getCookie(CART_COOKIE_NAME);
    if (!hasCartCookie) return [];

    try {
      const raw = window.localStorage.getItem(CART_STORAGE_KEY);
      if (!raw) return [];
      const persisted: PersistedCartItem[] = JSON.parse(raw);
      if (!Array.isArray(persisted)) return [];
      return persisted.map((entry) => ({
        product: entry.product,
        quantity: Math.max(1, Math.floor(entry.quantity || 1))
      }));
    } catch {
      return [];
    }
  };

  const [state, dispatch] = useReducer(appReducer, initialState, (base) => ({
    ...base,
    cart: hydrateCartFromStorage()
  }));

  const formatPrice = (price: number): string => {
    const convertedPrice = price * state.currency.rate;
    return `${state.currency.symbol}${convertedPrice.toLocaleString()}`;
  };

  const getCartTotal = (): number => {
    return state.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  const getCartItemCount = (): number => {
    return state.cart.reduce((count, item) => count + item.quantity, 0);
  };

  // Persist cart changes to localStorage and a long-lived cookie
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      if (state.cart.length === 0) {
        window.localStorage.removeItem(CART_STORAGE_KEY);
        deleteCookie(CART_COOKIE_NAME);
        return;
      }
      const compact: PersistedCartItem[] = state.cart.map(ci => ({ product: ci.product, quantity: ci.quantity }));
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(compact));
      setCookie(CART_COOKIE_NAME, '1', CART_COOKIE_MAX_AGE_SECONDS);
    } catch {
      // Swallow storage errors to avoid breaking UX
    }
  }, [state.cart]);

  return (
    <AppContext.Provider value={{
      state,
      dispatch,
      currencies,
      formatPrice,
      getCartTotal,
      getCartItemCount
    }}>
      {children}
    </AppContext.Provider>
  );
};