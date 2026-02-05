
import React from 'react';
import { Product } from '../types.ts';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm text-xs font-semibold px-2.5 py-1 rounded-full text-gray-700 shadow-sm border border-gray-100">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          <span className="text-lg font-bold text-blue-600">
            ${product.price.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
          </span>
        </div>
        
        <p className="text-sm text-gray-500 mb-6 line-clamp-2 flex-grow">
          {product.description}
        </p>
        
        <button className="w-full py-3 px-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-blue-600 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2">
          <span>Ver Detalles</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
