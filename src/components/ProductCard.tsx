import React, { useState } from 'react';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { Product } from '../types';
import { toImageUrl } from '../services/productsApi';
import { useApp } from '../contexts/AppContext';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const { dispatch, formatPrice } = useApp();
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const handleToggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        {imageLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
    <img
          src={toImageUrl(product.images?.find(i => i.isThumbnail)?.url || product.images?.[0]?.url)}
          alt={product.images?.find(i => i.isThumbnail)?.alt || product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          onLoad={() => setImageLoading(false)}
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 space-y-2">
          {product.featured && (
            <span className="bg-yellow-500 text-white px-2 py-1 text-xs font-semibold rounded-full">
              ⭐ FEATURED
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleToggleLike}
            className={`p-2 rounded-full shadow-lg transition-colors ${
              isLiked ? 'bg-red-500 text-white' : 'bg-white text-gray-700 hover:bg-red-50'
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={() => onViewDetails(product)}
            className="p-2 bg-white text-gray-700 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Out of Stock Overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <span className="text-sm text-green-600 font-medium uppercase tracking-wide">
          {product.subcategory}
        </span>

        {/* Name */}
        <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-3">
          {/* Rating removed: not present in API spec */}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg md:text-xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`w-full py-2.5 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
            product.inStock
              ? 'bg-green-600 text-white hover:bg-green-700 hover:shadow-lg active:transform active:scale-95'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ShoppingCart className="w-4 h-4" />
          <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;