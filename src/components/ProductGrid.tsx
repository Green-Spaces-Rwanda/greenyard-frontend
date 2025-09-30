import React, { useEffect, useState } from 'react';
import { useApp } from '../contexts/AppContext';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import { Product } from '../types';
import { fetchProducts } from '../services/productsApi';

const ProductGrid: React.FC = () => {
  const { state } = useApp();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
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
    };
    load();
  }, [state.searchQuery, state.selectedCategory]);

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
            <div className="text-center py-16 text-gray-600">Loading products...</div>
          ) : error ? (
            <div className="text-center py-16 text-red-600">{error}</div>
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