import { useState, useRef, useEffect } from 'react';
import { Filter, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import ProductCard from '../components/shared/ProductCard';

const DUMMY_SUPPLIES = [
  // DOGS
  { id: 's1', name: 'Premium Leather Dog Collar', price: 45.00, rating: 4.9, category: 'Dogs', image: '/src/assets/Premium Leather Collar.png' },
  { id: 's2', name: 'Organic Grain-Free Salmon Kibble', price: 89.99, rating: 4.9, category: 'Dogs', image: '/src/assets/Organic Dog Food.png' },
  { id: 's3', name: 'Orthopedic Memory Foam Bed', price: 120.00, rating: 4.8, category: 'Dogs', image: '/src/assets/Orthopedic Dog Bed.png' },
  { id: 's4', name: 'Interactive Puzzle Toy', price: 28.00, rating: 4.9, category: 'Dogs', image: '/src/assets/Interactive Dog Toy.png' },
  
  // CATS
  { id: 's5', name: 'Luxury Cat Tree Tower', price: 289.00, rating: 4.8, category: 'Cats', image: '/src/assets/Luxury Cat Tree.png' },
  { id: 's6', name: 'Freeze-Dried Chicken Minnows', price: 34.50, rating: 4.9, category: 'Cats', image: '/src/assets/Freeze-Dried Cat Treats.png' },
  { id: 's7', name: 'Ceramic Drinking Fountain', price: 65.00, rating: 4.8, category: 'Cats', image: '/src/assets/Ceramic Cat Fountain.png' },
  { id: 's8', name: 'Organic Silvervine Catnip Blend', price: 18.00, rating: 4.7, category: 'Cats', image: '/src/assets/Organic Catnip.png' },

  // BIRDS
  { id: 's9', name: 'Interactive Bird Playground', price: 42.50, rating: 4.5, category: 'Birds', image: '/src/assets/Bird Playground.png' },
  { id: 's10', name: 'Premium Seed & Nut Mix', price: 22.00, rating: 4.8, category: 'Birds', image: '/src/assets/Premium Bird Food.png' },
  { id: 's11', name: 'Natural Wood Perch Branch', price: 15.00, rating: 4.6, category: 'Birds', image: '/src/assets/Natural Wood Perch.png' },
  { id: 's12', name: 'Foraging Wheel Puzzle Toy', price: 24.50, rating: 4.9, category: 'Birds', image: '/src/assets/Foraging Wheel Toy.png' },

  // FISH
  { id: 's13', name: 'Advanced Aquarium Filter', price: 134.20, rating: 4.6, category: 'Fish', image: '/src/assets/Aquarium Filter.png' },
  { id: 's14', name: 'LED Plant Growth Spectrum Light', price: 89.99, rating: 4.8, category: 'Fish', image: '/src/assets/LED Aquarium Light.png' },
  { id: 's15', name: 'Exotic Driftwood Centerpiece', price: 45.00, rating: 4.9, category: 'Fish', image: '/src/assets/Driftwood Centerpiece.png' },
  { id: 's16', name: 'Premium Micro Wafer Nutrition', price: 12.50, rating: 4.7, category: 'Fish', image: '/src/assets/Premium Fish Food.png' },
];

const CATEGORIES = ['All Supplies', 'Dogs', 'Cats', 'Birds', 'Fish'];

export default function SuppliesListing() {
  const [activeCategory, setActiveCategory] = useState('All Supplies');
  const containerRef = useRef(null);
  
  const filteredProducts = activeCategory === 'All Supplies' 
    ? DUMMY_SUPPLIES 
    : DUMMY_SUPPLIES.filter(p => p.category === activeCategory);

  // GSAP Animations - Initial Load Only
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.shop-header', { y: 30, opacity: 0, duration: 1, ease: 'power3.out', clearProps: 'all' });
      gsap.from('.supplies-chip', { y: 20, opacity: 0, duration: 0.8, stagger: 0.05, ease: 'power2.out', delay: 0.3, clearProps: 'all' });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // GSAP Animations - Grid Data Change
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.product-grid-item', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        clearProps: 'all'
      });
    }, containerRef);
    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <div className="bg-beige min-h-screen pt-32 pb-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Luxury Header & Filters */}
        <div className="mb-12 border-b border-dark/10 pb-8 flex flex-col xl:flex-row xl:items-end justify-between gap-8">
          <div className="shop-header max-w-2xl text-center xl:text-left mx-auto xl:mx-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white/50 border border-brand/10 justify-center xl:justify-start">
              <Sparkles className="w-3 h-3 text-accent" />
              <span className="text-xs font-bold text-dark uppercase tracking-widest">Premium Care</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark tracking-tight mb-4" style={{ fontFamily: 'var(--font-display)' }}>Pet Supplies</h1>
            <p className="text-dark/60 text-lg font-medium">Curated luxury accessories, grain-free organic nutrition, and toys engineered for your best friend's wellbeing.</p>
          </div>
          
          {/* Filter Bar */}
          <div className="inline-flex flex-col md:flex-row items-center gap-4 lg:gap-6 bg-white/50 p-2 lg:p-3 rounded-[2rem] xl:rounded-full border border-white/60 shadow-sm backdrop-blur-md w-fit mx-auto xl:mx-0 shrink-0">
            <div className="flex items-center gap-2 text-dark font-medium px-4 md:border-r border-dark/10">
              <Filter className="w-4 h-4 text-accent" /> 
              <span className="text-xs uppercase tracking-widest font-bold whitespace-nowrap">Filter By</span>
            </div>
            <div className="flex flex-wrap xl:flex-nowrap items-center justify-center gap-2 md:gap-3 w-full md:w-auto pr-2 lg:pr-4">
              {CATEGORIES.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`supplies-chip px-5 py-2.5 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs transition-all duration-300 border ${
                    activeCategory === cat 
                      ? 'bg-dark text-white border-dark shadow-lg shadow-dark/20 scale-105' 
                      : 'bg-white text-dark/70 border-white hover:bg-brand hover:text-white hover:border-brand shadow-sm'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-grid-item h-full">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-32 bg-white/40 rounded-3xl mt-8 border border-white">
            <h3 className="text-3xl font-bold text-dark/50" style={{ fontFamily: 'var(--font-display)' }}>No supplies currently available in this category.</h3>
          </div>
        )}
      </div>
    </div>
  );
}
