import React, { useEffect, useState, useCallback } from 'react';
import { useApp } from '../contexts/AppContext';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import { Product } from '../types';
import { fetchProducts } from '../services/productsApi';
import { RefreshCw, WifiOff } from 'lucide-react';

const ProductGrid: React.FC = () => {
  const { state } = useApp();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchProducts({
        search: state.searchQuery || undefined,
        category: state.selectedCategory === 'all' ? undefined : (state.selectedCategory === 'flowers' ? 'FLOWERS' : 'SEEDLINGS'),
        inStock: undefined,
        featured: undefined,
        page: 1,
        pageSize: 20,
        sortBy: 'createdAt',
        sortOrder: 'desc'
      });
      setItems(result.products);
    } catch (e: any) {
      setError(e?.message || 'Failed to load products');
    } finally {
      setLoading(false);
    }
  }, [state.searchQuery, state.selectedCategory]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <section className="py-4 bg-gray-50">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-12">
            {state.searchQuery && (
              <p className="text-gray-600">
                Showing results for "{state.searchQuery}" ({items.length} items)
              </p>
            )}
          </div>

          {/* Products Grid */}
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
                  <div className="h-64 bg-gray-200" />
                  <div className="p-5 space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-1/3" />
                    <div className="h-5 bg-gray-200 rounded w-2/3" />
                    <div className="h-4 bg-gray-200 rounded w-1/2" />
                    <div className="h-10 bg-gray-200 rounded" />
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-16">
              <div className="flex flex-col items-center justify-center max-w-md mx-auto">
                <div className="bg-red-50 rounded-full p-4 mb-4">
                  <WifiOff className="w-12 h-12 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Unable to Load Products</h3>
                <p className="text-gray-600 mb-2">
                  {error}
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  This may be due to internet connectivity issues. Please check your connection and try again.
                </p>
                <button
                  onClick={loadProducts}
                  disabled={loading}
                  className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
                  <span>{loading ? 'Retrying...' : 'Retry'}</span>
                </button>
              </div>
            </div>
          ) : items.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {items.map((product) => (
                <div key={product.id} className={product.featured ? 'md:col-span-1 relative' : ''}>
                  {product.featured && (
                    <span className="absolute -top-2 -left-2 z-10 bg-yellow-400 text-yellow-900 text-xs font-extrabold px-2 py-1 rounded">
                      FEATURED
                    </span>
                  )}
                  <ProductCard
                    product={product}
                    onViewDetails={handleViewDetails}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search or browse different categories
              </p>
              <button
                // onClick={() => {
                //   dispatch({ type: 'SET_SEARCH_QUERY', payload: '' });
                //   dispatch({ type: 'SET_CATEGORY', payload: 'all' });
                // }}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Show All Products
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default ProductGrid;