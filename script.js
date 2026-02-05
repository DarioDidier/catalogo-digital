
/**
 * CATALOGO DIGITAL - JAVASCRIPT PURO
 * Versión 3.0: Enfoque en Detalle de Producto y UX Premium
 */

// 1. BASE DE DATOS MEJORADA
const products = [
    {
        id: 1,
        name: "Auriculares Wireless Pro",
        shortDesc: "Cancelación de ruido activa y audio espacial.",
        description: "Experimenta la cúspide del sonido con los Wireless Pro. Equipados con drivers de 40mm personalizados, ofrecen bajos profundos y agudos cristalinos. La cancelación de ruido adaptativa analiza el entorno 200 veces por segundo para aislarte completamente. Ideales para viajes largos gracias a su diseño ergonómico de espuma con memoria y acabados en cuero vegano de alta calidad.",
        price: 299.99,
        category: "Electrónica",
        imageUrl: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800",
        specs: ["Bluetooth 5.2 de baja latencia", "40 horas de autonomía real", "Carga ultra rápida (10 min = 3h)", "Resistencia al sudor IPX4"],
        features: ["Modo Transparencia", "Detección de uso", "Ecualización Adaptativa"]
    },
    {
        id: 2,
        name: "Smartwatch Series X",
        shortDesc: "Monitor de salud avanzado y GPS.",
        description: "Más que un reloj, es un compañero de vida. La Series X redefine el monitoreo de salud con un sensor eléctrico de corazón (ECG) y un sensor de oxígeno en sangre de grado médico. Su pantalla LTPO OLED brilla hasta los 2000 nits, permitiendo una visibilidad perfecta bajo el sol directo. La caja de titanio de grado aeroespacial ofrece el equilibrio perfecto entre peso y durabilidad extrema.",
        price: 349.00,
        category: "Electrónica",
        imageUrl: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800",
        specs: ["Pantalla Siempre Activa", "Resistencia al agua 100m", "Autonomía de 3 días", "Procesador Dual-Core S9"],
        features: ["Detección de caídas", "Llamadas de emergencia", "App de entrenamiento Pro"]
    },
    {
        id: 3,
        name: "Cafetera Minimalist",
        shortDesc: "Sabor gourmet en diseño compacto.",
        description: "Para los puristas del café. Esta cafetera utiliza un sistema de extracción por presión variable que emula el método manual de los mejores baristas. Su caldera de calentamiento rápido alcanza la temperatura ideal en solo 30 segundos. El cuerpo de acero cepillado no solo es elegante, sino que mantiene el calor de forma eficiente, asegurando que cada taza sea tan perfecta como la anterior.",
        price: 89.50,
        category: "Hogar",
        imageUrl: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800",
        specs: ["Presión de 19 bares", "Depósito de 1.5 litros", "Programable", "Sistema antigoteo"],
        features: ["Espumador de leche", "Ahorro de energía", "Fácil limpieza"]
    },
    {
        id: 4,
        name: "Mochila Urban Tech",
        shortDesc: "Protección total para tu equipo.",
        description: "Diseñada para el nómada digital moderno. La Urban Tech combina seguridad y organización. Su estructura externa es de material balístico 1680D, prácticamente indestructible y totalmente impermeable. Cuenta con un puerto de carga externo integrado y un panel trasero transpirable que evita el calor en trayectos largos. El compartimento para portátil está suspendido para evitar golpes accidentales contra el suelo.",
        price: 75.00,
        category: "Accesorios",
        imageUrl: "https://images.pexels.com/photos/1262692/pexels-photo-1262692.jpeg?auto=compress&cs=tinysrgb&w=800",
        specs: ["Capacidad 25L", "Cremalleras YKK selladas", "Bolsillo antirrobo", "Panel para maleta"],
        features: ["Puerto USB integrado", "Reflectores nocturnos", "Divisores internos"]
    },
    {
        id: 5,
        name: "Lámpara LED Inteligente",
        shortDesc: "Iluminación ambiental personalizable.",
        description: "Transforma tu espacio con luz. Esta lámpara inteligente no solo cambia de color, sino que sincroniza su ritmo con tu música o contenido de pantalla. Con una esperanza de vida de 25,000 horas, es una inversión a largo plazo para tu hogar. Compatible con todos los asistentes de voz, permite crear rutinas de 'despertar' que simulan el amanecer para un inicio de día natural.",
        price: 45.99,
        category: "Hogar",
        imageUrl: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800",
        specs: ["16 millones de colores", "Dimeable del 1% al 100%", "Conexión WiFi/Bluetooth", "Bajo consumo 9W"],
        features: ["Modo lectura", "Temporizador", "Control por voz"]
    },
    {
        id: 6,
        name: "Cámara Pro Mirrorless",
        shortDesc: "Video 4K y nitidez cinematográfica.",
        description: "La herramienta definitiva para creadores de contenido. Su sensor CMOS de 24.2 MP captura detalles ínfimos incluso en la oscuridad. El sistema de enfoque automático por IA detecta ojos humanos y animales instantáneamente, asegurando que nunca pierdas una toma. Graba en 4K a 60fps sin recorte, proporcionando ese look cinematográfico profesional que buscas para tus proyectos.",
        price: 899.00,
        category: "Electrónica",
        imageUrl: "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=800",
        specs: ["ISO hasta 51200", "Ráfaga de 10 fps", "Pantalla táctil articulada", "Entrada de micro Pro"],
        features: ["Streaming directo", "Perfil de color Log", "Cuerpo sellado"]
    },
    {
        id: 7,
        name: "Gafas de Sol Titanio",
        shortDesc: "Estilo atemporal y durabilidad.",
        description: "Elegancia que se siente en el peso. Fabricadas con una aleación exclusiva de titanio, estas gafas son tan ligeras que olvidarás que las llevas puestas. Las lentes polarizadas cuentan con 7 capas de recubrimiento, incluyendo una capa hidrofóbica que repele el agua y la grasa. El diseño aviador ha sido refinado con patillas de ajuste flexible que se adaptan a cualquier contorno de rostro sin presionar.",
        price: 120.00,
        category: "Moda",
        imageUrl: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=800",
        specs: ["Protección 100% UVA/UVB", "Montura ultra-flexible", "Almohadillas hipoalergénicas", "Incluye estuche de cuero"],
        features: ["Lentes irrompibles", "Visión de alto contraste", "Acabado mate"]
    },
    {
        id: 8,
        name: "Teclado Mecánico RGB",
        shortDesc: "Respuesta táctil y durabilidad.",
        description: "Precisión en cada pulsación. Este teclado mecánico utiliza interruptores premium con una vida útil de 80 millones de clics. La placa superior de aluminio cepillado no solo le da un peso sólido, sino que evita cualquier flexión durante el uso intensivo. La iluminación RGB es totalmente programable mediante software, permitiendo capas de efectos personalizados para mejorar tu productividad o inmersión.",
        price: 159.00,
        category: "Electrónica",
        imageUrl: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
        specs: ["Polling rate de 1000Hz", "Cable trenzado removible", "Teclas PBT doble inyección", "N-Key Rollover"],
        features: ["Macros grabables", "Reposamuñecas magnético", "Rueda de volumen dedicada"]
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

const modal = document.getElementById('product-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalContent = document.getElementById('modal-content');
const modalBody = document.getElementById('modal-body');
const closeModal = document.getElementById('close-modal');

// 4. FUNCIONES PRINCIPALES
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
                <div class="mb-3">
                    <h3 class="text-lg font-extrabold text-primary leading-tight group-hover:text-accent transition-colors">
                        ${product.name}
                    </h3>
                    <p class="text-xl font-black text-accent mt-1">
                        $${product.price.toFixed(2)}
                    </p>
                </div>
                
                <p class="text-sm text-slate-500 mb-6 line-clamp-2 leading-relaxed flex-grow font-medium">
                    ${product.shortDesc || product.description}
                </p>
                
                <button 
                    onclick="openProductDetails(${product.id})"
                    class="w-full py-3.5 px-4 bg-slate-50 text-slate-900 text-[10px] font-black uppercase tracking-[0.15em] rounded-2xl border border-slate-200 hover:bg-primary hover:text-white hover:border-primary active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                    <span>Ver Detalles</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
            </div>
        </div>
    `).join('');
}

// 5. MODAL LOGIC (DETALLES AMPLIADOS)
function openProductDetails(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    modalBody.innerHTML = `
        <div class="flex flex-col lg:flex-row max-h-[90vh] lg:max-h-none overflow-y-auto lg:overflow-visible">
            <!-- Imagen Lateral -->
            <div class="w-full lg:w-5/12 h-[300px] lg:h-auto overflow-hidden sticky lg:relative top-0 z-10">
                <img src="${product.imageUrl}" alt="${product.name}" class="w-full h-full object-cover shadow-xl">
                <div class="absolute bottom-6 left-6 lg:hidden">
                    <span class="bg-white/90 backdrop-blur-md text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                        ${product.category}
                    </span>
                </div>
            </div>

            <!-- Contenido de Detalles -->
            <div class="w-full lg:w-7/12 p-8 lg:p-14 bg-white">
                <div class="hidden lg:inline-block bg-accent/10 text-accent text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest mb-6">
                    ${product.category}
                </div>
                
                <h2 class="text-4xl lg:text-5xl font-black text-primary mb-3 leading-[1.1] tracking-tight">
                    ${product.name}
                </h2>
                <p class="text-3xl font-extrabold text-accent mb-8 leading-none">$${product.price.toFixed(2)}</p>
                
                <div class="space-y-8">
                    <!-- Descripción Detallada -->
                    <section>
                        <h4 class="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Análisis del Producto</h4>
                        <p class="text-slate-600 leading-relaxed font-medium text-base lg:text-lg">
                            ${product.description}
                        </p>
                    </section>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                        <!-- Especificaciones -->
                        <section>
                            <h4 class="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Especificaciones</h4>
                            <ul class="space-y-3">
                                ${(product.specs || []).map(spec => `
                                    <li class="flex items-start gap-3 text-slate-700 text-sm font-bold">
                                        <svg class="h-5 w-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>${spec}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </section>

                        <!-- Características Extra -->
                        <section>
                            <h4 class="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Valor Añadido</h4>
                            <div class="flex flex-wrap gap-2">
                                ${(product.features || []).map(feat => `
                                    <span class="bg-slate-50 text-slate-500 text-[10px] font-bold px-3 py-1.5 rounded-lg border border-slate-100">
                                        ${feat}
                                    </span>
                                `).join('')}
                            </div>
                        </section>
                    </div>
                </div>

                <div class="mt-12 pt-8 border-t border-slate-100">
                    <button 
                        onclick="closeProductModal()"
                        class="px-8 py-4 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-accent transition-all duration-300 shadow-xl shadow-slate-200"
                    >
                        Volver al Catálogo
                    </button>
                </div>
            </div>
        </div>
    `;

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

    closeModal.addEventListener('click', closeProductModal);
    modalBackdrop.addEventListener('click', closeProductModal);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeProductModal();
    });
}

window.openProductDetails = openProductDetails;
window.closeProductModal = closeProductModal;

document.addEventListener('DOMContentLoaded', init);
