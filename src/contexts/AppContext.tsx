import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product, CartItem, Currency } from '../types';

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
  const [state, dispatch] = useReducer(appReducer, initialState);

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