import React from 'react';
import { useApp } from '../contexts/AppContext';
import { categories } from '../data/mockData';

const CategoryFilter: React.FC = () => {
  const { state, dispatch } = useApp();

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => dispatch({ type: 'SET_CATEGORY', payload: category.id })}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                state.selectedCategory === category.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;