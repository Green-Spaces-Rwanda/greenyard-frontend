import React, { useState } from 'react';
import { products } from '../data/mockData';
import { useApp } from '../contexts/AppContext';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import { Product } from '../types';

const ProductGrid: React.FC = () => {
  const { state } = useApp();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter products based on search and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = state.searchQuery === '' ||
      product.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      product.subcategory.toLowerCase().includes(state.searchQuery.toLowerCase());

    const matchesCategory = state.selectedCategory === 'all' ||
      product.category === state.selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <section className="py-4 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            {state.searchQuery && (
              <p className="text-gray-600">
                Showing results for "{state.searchQuery}" ({filteredProducts.length} items)
              </p>
            )}
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetails={handleViewDetails}
                />
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