
/**
 * CATALOGO DIGITAL - JAVASCRIPT PURO
 * Versión 2.0: Foco en Visualización Detallada
 */

// 1. BASE DE DATOS
const products = [
    {
        id: 1,
        name: "Auriculares Wireless Pro",
        description: "Cancelación de ruido activa y audio espacial de alta fidelidad. Estos auriculares ofrecen una experiencia inmersiva sin precedentes con hasta 40 horas de autonomía y carga rápida mediante USB-C.",
        price: 299.99,
        category: "Electrónica",
        imageUrl: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800",
        specs: ["Bluetooth 5.2", "40h Batería", "Carga Rápida", "Micrófono Beamforming"]
    },
    {
        id: 2,
        name: "Smartwatch Series X",
        description: "Monitor de salud avanzado con oxímetro y GPS integrado. Diseñado para resistir los entornos más exigentes, cuenta con certificación de resistencia al agua 50m y cristal de zafiro.",
        price: 349.00,
        category: "Electrónica",
        imageUrl: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800",
        specs: ["Pantalla OLED", "Sensor ECG", "GPS Integrado", "Resistente 50m"]
    },
    {
        id: 3,
        name: "Cafetera Minimalist",
        description: "Sabor gourmet en un diseño compacto de acero inoxidable. Su sistema de presión constante garantiza una extracción perfecta del aroma del grano en cada taza, ideal para baristas hogareños.",
        price: 89.50,
        category: "Hogar",
        imageUrl: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800",
        specs: ["Acero Inoxidable", "15 Bares Presión", "Filtro Permanente", "Apagado Auto"]
    },
    {
        id: 4,
        name: "Mochila Urban Tech",
        description: "Protección total para tu laptop con puerto de carga USB. Construida con materiales reciclados repelentes al agua, cuenta con compartimentos secretos y diseño ergonómico para largas jornadas.",
        price: 75.00,
        category: "Accesorios",
        imageUrl: "https://images.pexels.com/photos/1262692/pexels-photo-1262692.jpeg?auto=compress&cs=tinysrgb&w=800",
        specs: ["Tela Cordura", "Puerto USB", "Antirrobo", "Compartimento 16\""]
    },
    {
        id: 5,
        name: "Lámpara LED Inteligente",
        description: "Millones de colores controlados desde tu smartphone o mediante comandos de voz. Ajusta la temperatura de color para lectura o crea ambientes vibrantes para fiestas con un solo toque.",
        price: 45.99,
        category: "Hogar",
        imageUrl: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800",
        specs: ["RGB + W", "App Control", "WiFi 2.4GHz", "Consumo A++"]
    },
    {
        id: 6,
        name: "Cámara Pro Mirrorless",
        description: "Captura video 4K con una nitidez cinematográfica profesional. Su sensor Full Frame permite un rendimiento excepcional en bajas luces y una profundidad de campo asombrosa.",
        price: 899.00,
        category: "Electrónica",
        imageUrl: "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=800",
        specs: ["Full Frame", "Video 4K60", "Estabilizador 5 ejes", "Dual Card Slot"]
    },
    {
        id: 7,
        name: "Gafas de Sol Titanio",
        description: "Lentes polarizados con montura ultra ligera de titanio aeroespacial. Combinan la máxima durabilidad con un peso casi imperceptible, protegiendo tus ojos con estilo atemporal.",
        price: 120.00,
        category: "Moda",
        imageUrl: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=800",
        specs: ["Titanio", "UV400", "Lentes Polarizados", "Antiscratch"]
    },
    {
        id: 8,
        name: "Teclado Mecánico RGB",
        description: "Interruptores táctiles silenciosos con respuesta ultra rápida para trabajo o gaming. Su base de aluminio y teclas de PBT garantizan una durabilidad de años sin desgaste de letras.",
        price: 159.00,
        category: "Electrónica",
        imageUrl: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
        specs: ["Switches Brown", "Aluminio CNC", "Hot Swap", "Layout ISO"]
    }
];

// 2. ESTADO
let currentCategory = 'Todos';
let searchQuery = '';

// 3. SELECTORES
const grid = document.getElementById('products-grid');
const searchInput = document.getElementById('search-input');
const categoriesContainer = document.getElementById('categories-container');
const productCount = document.getElementById('product-count');
const emptyState = document.getElementById('empty-state');
const resetBtn = document.getElementById('reset-filters');

// Modal Selectors
const modal = document.getElementById('product-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalContent = document.getElementById('modal-content');
const modalBody = document.getElementById('modal-body');
const closeModal = document.getElementById('close-modal');

// 4. FUNCIONES
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
            class="category-btn px-6 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all duration-300 border-2 whitespace-nowrap
            ${currentCategory === cat 
                ? 'bg-accent text-white border-accent shadow-lg shadow-blue-100' 
                : 'bg-white text-slate-400 border-slate-100 hover:border-blue-200 hover:text-accent'}"
        >
            ${cat}
        </button>
    `).join('');
}

function renderProducts() {
    const filtered = products.filter(p => {
        const matchesCategory = currentCategory === 'Todos' || p.category === currentCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              p.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    productCount.textContent = filtered.length;

    if (filtered.length === 0) {
        grid.classList.add('hidden');
        emptyState.classList.remove('hidden');
        return;
    }

    grid.classList.remove('hidden');
    emptyState.classList.add('hidden');

    grid.innerHTML = filtered.map((product, index) => `
        <div class="product-card group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 flex flex-col h-full animate-fade-in" style="animation-delay: ${index * 50}ms">
            <div class="relative overflow-hidden aspect-[4/3] bg-slate-100">
                <img 
                    src="${product.imageUrl}" 
                    alt="${product.name}"
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                >
                <div class="absolute top-4 left-4">
                    <span class="bg-white/90 backdrop-blur-md text-[10px] font-black px-3 py-1.5 rounded-full text-slate-800 shadow-sm border border-white uppercase tracking-widest">
                        ${product.category}
                    </span>
                </div>
            </div>
            
            <div class="p-6 flex flex-col flex-grow">
                <div class="mb-4">
                    <h3 class="text-lg font-extrabold text-primary leading-tight group-hover:text-accent transition-colors">
                        ${product.name}
                    </h3>
                    <p class="text-xl font-black text-accent mt-1">
                        $${product.price.toFixed(2)}
                    </p>
                </div>
                
                <p class="text-sm text-slate-500 mb-6 line-clamp-2 leading-relaxed flex-grow font-medium">
                    ${product.description}
                </p>
                
                <button 
                    onclick="openProductDetails(${product.id})"
                    class="w-full py-3.5 px-4 bg-slate-50 text-slate-900 text-[10px] font-black uppercase tracking-[0.15em] rounded-2xl border border-slate-200 hover:bg-primary hover:text-white hover:border-primary active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
                >
                    <span>Ver Detalles Técnicos</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
            </div>
        </div>
    `).join('');
}

// 5. MODAL LOGIC
function openProductDetails(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    modalBody.innerHTML = `
        <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-1/2 h-[300px] md:h-auto max-h-[500px] overflow-hidden">
                <img src="${product.imageUrl}" alt="${product.name}" class="w-full h-full object-cover">
            </div>
            <div class="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div class="inline-block bg-accent/10 text-accent text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest mb-6 w-max">
                    ${product.category}
                </div>
                <h2 class="text-4xl font-black text-primary mb-2 leading-tight">${product.name}</h2>
                <p class="text-3xl font-extrabold text-accent mb-6">$${product.price.toFixed(2)}</p>
                
                <div class="h-px bg-slate-100 w-full mb-6"></div>
                
                <h4 class="text-xs font-black text-primary uppercase tracking-widest mb-4">Descripción General</h4>
                <p class="text-slate-500 leading-relaxed font-medium mb-8 text-sm md:text-base">
                    ${product.description}
                </p>

                <h4 class="text-xs font-black text-primary uppercase tracking-widest mb-4">Especificaciones Destacadas</h4>
                <div class="grid grid-cols-2 gap-3">
                    ${(product.specs || []).map(spec => `
                        <div class="flex items-center gap-2 text-slate-600 text-xs font-bold">
                            <div class="w-1.5 h-1.5 rounded-full bg-accent"></div>
                            ${spec}
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        modalBackdrop.classList.remove('opacity-0');
        modalContent.classList.remove('scale-95', 'opacity-0');
    }, 10);
}

function closeProductModal() {
    modalBackdrop.classList.add('opacity-0');
    modalContent.classList.add('scale-95', 'opacity-0');
    
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
}

// 6. EVENT LISTENERS
function setupEventListeners() {
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderProducts();
    });

    categoriesContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.category-btn');
        if (!btn) return;
        currentCategory = btn.dataset.category;
        renderCategories();
        renderProducts();
    });

    resetBtn.addEventListener('click', () => {
        searchQuery = '';
        currentCategory = 'Todos';
        searchInput.value = '';
        renderCategories();
        renderProducts();
    });

    // Modal Events
    closeModal.addEventListener('click', closeProductModal);
    modalBackdrop.addEventListener('click', closeProductModal);
    
    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeProductModal();
    });
}

// Export function for global scope (onclick in HTML)
window.openProductDetails = openProductDetails;

// Iniciar App
document.addEventListener('DOMContentLoaded', init);
