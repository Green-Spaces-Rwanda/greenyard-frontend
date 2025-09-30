import React, { useState } from 'react';
import { X, ShoppingCart, Heart, Plus, Minus } from 'lucide-react';
import { Product } from '../types';
import { useApp } from '../contexts/AppContext';
import { toImageUrl } from '../services/productsApi';

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const { dispatch, formatPrice } = useApp();
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  if (!isOpen) return null;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    }
    onClose();
  };

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="grid md:grid-cols-2 gap-8 p-6">
          {/* Image */}
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={toImageUrl(product.images?.find(i => i.isThumbnail)?.url || product.images?.[0]?.url)}
              alt={product.images?.find(i => i.isThumbnail)?.alt || product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
            
            {/* Badges */}
            <div className="absolute top-4 left-4 space-y-2">
              {product.featured && (
                <span className="bg-yellow-500 text-white px-2 py-1 text-xs font-semibold rounded-full">
                  ⭐ FEATURED
                </span>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Category */}
            <span className="text-sm text-green-600 font-medium uppercase tracking-wide">
              {product.category}
            </span>

            {/* Name */}
            <h1 className="text-3xl font-bold text-gray-900">
              {product.name}
            </h1>

            {/* Rating removed: not present in API spec */}

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-gray-900">
                {formatPrice(product.price)}
              </span>
              {/* originalPrice/sale removed: not in API spec */}
            </div>

            {/* Description */}
            {/* Description removed from API; keep placeholder minimal if needed */}

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className={`font-medium ${product.inStock ? 'text-green-700' : 'text-red-700'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            {/* Quantity Selector */}
            {product.inStock && (
              <div className="flex items-center space-x-4">
                <span className="font-medium text-gray-700">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 font-medium min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                  product.inStock
                    ? 'bg-green-600 text-white hover:bg-green-700 hover:shadow-lg'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>{product.inStock ? `Add ${quantity} to Cart` : 'Out of Stock'}</span>
              </button>

              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-3 rounded-lg border-2 transition-colors ${
                  isLiked
                    ? 'border-red-500 bg-red-50 text-red-500'
                    : 'border-gray-300 hover:border-red-300 hover:bg-red-50 hover:text-red-500'
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Additional Info */}
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <h3 className="font-semibold text-gray-900">Care Instructions</h3>
              <p className="text-sm text-gray-600">
                {product.category === 'FLOWERS' 
                  ? 'Keep in cool water, trim stems regularly, and place in indirect sunlight.'
                  : 'Plant in well-draining soil, water regularly, and provide adequate sunlight.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;