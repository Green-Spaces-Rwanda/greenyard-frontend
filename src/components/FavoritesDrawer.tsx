import React from 'react';
import { X, Trash2, ShoppingCart, Heart } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { toImageUrl } from '../services/productsApi';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({ isOpen, onClose }) => {
  const { state, dispatch, formatPrice } = useApp();

  if (!isOpen) return null;

  const removeFavorite = (productId: string) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: productId });
  };

  const addToCart = (product: any) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={handleBackdropClick}
      >
        {/* Drawer */}
        <div 
          className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                <Heart className="w-5 h-5 text-red-500 fill-current" />
                <span>Favorites ({state.favorites.length})</span>
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600 hover:text-gray-900"
                aria-label="Close favorites"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Favorites Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {state.favorites.length === 0 ? (
                <div className="text-center py-16">
                  <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No favorites yet</h3>
                  <p className="text-gray-500 mb-4">Start adding products to your favorites!</p>
                  <button
                    onClick={onClose}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {state.favorites.map((product) => (
                    <div key={product.id} className="flex items-center space-x-4 bg-gray-50 rounded-lg p-4">
                      <img
                        src={toImageUrl(product.images?.find(i => i.isThumbnail)?.url || product.images?.[0]?.url)}
                        alt={product.images?.find(i => i.isThumbnail)?.alt || product.images?.[0]?.alt || product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{product.name}</h3>
                        <p className="text-sm text-gray-500">{product.subcategory}</p>
                        <p className="font-semibold text-green-600">
                          {formatPrice(product.price)}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => addToCart(product)}
                          disabled={!product.inStock}
                          className={`p-2 rounded transition-colors ${
                            product.inStock
                              ? 'bg-green-600 text-white hover:bg-green-700'
                              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          }`}
                          title="Add to Cart"
                        >
                          <ShoppingCart className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => removeFavorite(product.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded transition-colors"
                          title="Remove from Favorites"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {state.favorites.length > 0 && (
              <div className="border-t border-gray-200 p-4">
                <button
                  onClick={onClose}
                  className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoritesDrawer;

