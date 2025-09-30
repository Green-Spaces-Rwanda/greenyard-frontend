import React, { useEffect, useState } from 'react';
import { useApp } from '../contexts/AppContext';
import { fetchCategories } from '../services/productsApi';

const CategoryFilter: React.FC = () => {
  const { state, dispatch } = useApp();

  const [categories, setCategories] = useState<{ category: 'FLOWERS' | 'SEEDLINGS'; count: number }[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch {
        setCategories([
          { category: 'FLOWERS', count: 0 },
          { category: 'SEEDLINGS', count: 0 }
        ]);
      }
    };
    load();
  }, []);

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.category}
              onClick={() => dispatch({ type: 'SET_CATEGORY', payload: category.category.toLowerCase() })}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                state.selectedCategory.toUpperCase() === category.category
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700'
              }`}
            >
              {category.category}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;