import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const CurrencySelector: React.FC = () => {
  const { state, dispatch, currencies } = useApp();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-2 py-1 hover:bg-gray-100 rounded transition-colors"
      >
        <span className="text-sm font-medium">{state.currency.code}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[80px]">
          {currencies.map((currency) => (
            <button
              key={currency.code}
              onClick={() => {
                dispatch({ type: 'SET_CURRENCY', payload: currency });
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 transition-colors ${
                state.currency.code === currency.code ? 'bg-green-50 text-green-700' : 'text-gray-700'
              }`}
            >
              {currency.code}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencySelector;