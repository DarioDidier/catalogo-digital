
/**
 * CATALOGO DIGITAL - JAVASCRIPT PURO
 * Desarrollado para alta compatibilidad y rendimiento.
 */

// 1. BASE DE DATOS (Array de objetos)
const products = [
    {
        id: 1,
        name: "Auriculares Wireless Pro",
        description: "Cancelación de ruido activa y audio espacial de alta fidelidad.",
        price: 299.99,
        category: "Electrónica",
        imageUrl: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 2,
        name: "Smartwatch Series X",
        description: "Monitor de salud avanzado con oxímetro y GPS integrado.",
        price: 349.00,
        category: "Electrónica",
        imageUrl: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 3,
        name: "Cafetera Minimalist",
        description: "Sabor gourmet en un diseño compacto de acero inoxidable.",
        price: 89.50,
        category: "Hogar",
        imageUrl: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 4,
        name: "Mochila Urban Tech",
        description: "Protección total para tu laptop con puerto de carga USB.",
        price: 75.00,
        category: "Accesorios",
        imageUrl: "https://images.pexels.com/photos/1262692/pexels-photo-1262692.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 5,
        name: "Lámpara LED Inteligente",
        description: "Millones de colores controlados desde tu smartphone.",
        price: 45.99,
        category: "Hogar",
        imageUrl: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 6,
        name: "Cámara Pro Mirrorless",
        description: "Captura video 4K con una nitidez cinematográfica profesional.",
        price: 899.00,
        category: "Electrónica",
        imageUrl: "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 7,
        name: "Gafas de Sol Titanio",
        description: "Lentes polarizados con montura ultra ligera de titanio.",
        price: 120.00,
        category: "Moda",
        imageUrl: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 8,
        name: "Teclado Mecánico RGB",
        description: "Interruptores táctiles silenciosos con respuesta ultra rápida.",
        price: 159.00,
        category: "Electrónica",
        imageUrl: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
];

// 2. ESTADO DE LA APP
let currentCategory = 'Todos';
let searchQuery = '';

// 3. SELECTORES DEL DOM
const grid = document.getElementById('products-grid');
const searchInput = document.getElementById('search-input');
const categoriesContainer = document.getElementById('categories-container');
const productCount = document.getElementById('product-count');
const emptyState = document.getElementById('empty-state');
const resetBtn = document.getElementById('reset-filters');

// 4. FUNCIONES DE RENDERIZADO
function init() {
    renderCategories();
    renderProducts();
    setupEventListeners();
}

function renderCategories() {
    const categories = ['Todos', ...new Set(products.map(p => p.category))];
    categoriesContainer.innerHTML = categories.map(cat => `
        <button 
            data-category="${cat}"
            class="category-btn px-6 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 border-2 whitespace-nowrap
            ${currentCategory === cat 
                ? 'bg-accent text-white border-accent shadow-lg shadow-blue-100' 
                : 'bg-white text-slate-600 border-slate-100 hover:border-blue-200 hover:text-accent'}"
        >
            ${cat}
        </button>
    `).join('');
}

function renderProducts() {
    // Filtrado
    const filtered = products.filter(p => {
        const matchesCategory = currentCategory === 'Todos' || p.category === currentCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              p.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Actualizar contador
    productCount.textContent = filtered.length;

    // Manejo de estado vacío
    if (filtered.length === 0) {
        grid.classList.add('hidden');
        emptyState.classList.remove('hidden');
        return;
    }

    grid.classList.remove('hidden');
    emptyState.classList.add('hidden');

    // Generar HTML de las tarjetas
    grid.innerHTML = filtered.map((product, index) => `
        <div class="product-card group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 flex flex-col h-full animate-fade-in" style="animation-delay: ${index * 50}ms">
            <div class="relative overflow-hidden aspect-[4/3] bg-slate-200">
                <img 
                    src="${product.imageUrl}" 
                    alt="${product.name}"
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                >
                <div class="absolute top-4 left-4">
                    <span class="bg-white/90 backdrop-blur-md text-[10px] font-bold px-3 py-1.5 rounded-full text-slate-800 shadow-sm border border-white uppercase tracking-wider">
                        ${product.category}
                    </span>
                </div>
            </div>
            
            <div class="p-6 flex flex-col flex-grow">
                <div class="flex justify-between items-start mb-2 gap-2">
                    <h3 class="text-lg font-bold text-primary leading-tight group-hover:text-accent transition-colors">
                        ${product.name}
                    </h3>
                    <span class="text-lg font-extrabold text-accent">
                        $${product.price.toFixed(2)}
                    </span>
                </div>
                
                <p class="text-sm text-slate-500 mb-6 line-clamp-2 leading-relaxed flex-grow">
                    ${product.description}
                </p>
                
                <button class="w-full py-3.5 px-4 bg-primary text-white text-sm font-bold rounded-2xl hover:bg-accent active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-slate-100">
                    <span>Añadir al carrito</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                </button>
            </div>
        </div>
    `).join('');
}

// 5. MANEJO DE EVENTOS
function setupEventListeners() {
    // Búsqueda
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderProducts();
    });

    // Filtro por categorías (delegación de eventos)
    categoriesContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.category-btn');
        if (!btn) return;

        currentCategory = btn.dataset.category;
        renderCategories(); // Re-renderizar botones para actualizar clases
        renderProducts();
    });

    // Reset
    resetBtn.addEventListener('click', () => {
        searchQuery = '';
        currentCategory = 'Todos';
        searchInput.value = '';
        renderCategories();
        renderProducts();
    });
}

// Iniciar App
document.addEventListener('DOMContentLoaded', init);
