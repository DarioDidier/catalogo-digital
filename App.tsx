
import React, { useState, useMemo } from 'react';
import { products } from './data.ts';
import { Category } from './types.ts';
import ProductCard from './components/ProductCard.tsx';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('Todos');

  const categories: Category[] = ['Todos', 'Electrónica', 'Hogar', 'Accesorios', 'Moda'];

  const filteredProducts = useMemo(() => {
    try {
      return products.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              product.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
      });
    } catch (err) {
      console.error("Error filtrando productos:", err);
      return [];
    }
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h1 className="text-xl font-extrabold tracking-tight text-gray-900 hidden sm:block uppercase">
                Tech<span className="text-blue-600">Catalog</span>
              </h1>
            </div>

            <div className="flex-1 max-w-md mx-4 sm:mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="¿Qué estás buscando?"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-100 border-2 border-transparent rounded-2xl py-2.5 pl-10 pr-4 text-sm focus:ring-0 focus:border-blue-500 focus:bg-white transition-all duration-200"
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors hidden xs:block">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button className="relative p-2 text-gray-500 hover:text-blue-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute top-0 right-0 h-4 w-4 bg-blue-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-white">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <section className="mb-10 overflow-x-auto no-scrollbar">
          <div className="flex space-x-3 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 whitespace-nowrap border-2
                  ${selectedCategory === category 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-100' 
                    : 'bg-white text-gray-600 border-gray-100 hover:border-blue-200 hover:text-blue-600'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <h2 className="text-4xl font-black text-gray-900 mb-2 tracking-tight">Catálogo Premium</h2>
            <p className="text-gray-500 font-medium">Calidad excepcional en cada detalle.</p>
          </div>
          <div className="bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-sm">
            <span className="text-sm font-bold text-blue-600">{filteredProducts.length}</span>
            <span className="text-sm font-semibold text-gray-400 ml-1 whitespace-nowrap">
              {filteredProducts.length === 1 ? 'artículo' : 'artículos'}
            </span>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border-2 border-dashed border-gray-200">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-50 rounded-full mb-6 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No encontramos nada</h3>
            <p className="text-gray-500 mb-8 max-w-xs mx-auto">Prueba con términos más generales o explora otras categorías.</p>
            <button 
              onClick={() => {setSearchTerm(''); setSelectedCategory('Todos');}}
              className="px-8 py-3 bg-gray-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-colors shadow-lg"
            >
              Ver todo el catálogo
            </button>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <span className="text-xl font-black text-gray-900 uppercase tracking-tighter">
                  Tech<span className="text-blue-600">Catalog</span>
                </span>
              </div>
              <p className="text-gray-500 font-medium leading-relaxed max-w-sm mb-8">
                Curamos la mejor tecnología y estilo de vida para simplificar tu día a día con elegancia.
              </p>
              <div className="flex gap-4">
                {[1,2,3].map(i => (
                  <div key={i} className="w-10 h-10 bg-gray-100 rounded-full hover:bg-blue-50 transition-colors cursor-pointer"></div>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Tienda</h4>
              <ul className="space-y-4 text-sm font-semibold text-gray-500">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Novedades</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Más Vendidos</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Ofertas</a></li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Ayuda</h4>
              <ul className="space-y-4 text-sm font-semibold text-gray-500">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Envíos</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Devoluciones</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div className="md:col-span-3">
              <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Newsletter</h4>
              <p className="text-sm text-gray-500 mb-4 font-medium">Suscríbete para recibir ofertas exclusivas.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="email" className="bg-gray-100 border-none rounded-xl text-sm w-full focus:ring-2 focus:ring-blue-500" />
                <button className="p-2 bg-blue-600 text-white rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <div>&copy; {new Date().getFullYear()} TECHCATALOG.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-600">Privacidad</a>
              <a href="#" className="hover:text-blue-600">Términos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
