import { useState, useRef, useEffect } from 'react';
import { Filter, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import ProductCard from '../components/shared/ProductCard';

const DUMMY_SUPPLIES = [
  // DOGS
  { id: 's1', name: 'Premium Leather Dog Collar', price: 45.00, rating: 4.9, category: 'Dogs', image: 'https://images.unsplash.com/photo-1606915152865-c7e42d7cd5df?w=500&q=80' },
  { id: 's2', name: 'Organic Grain-Free Salmon Kibble', price: 89.99, rating: 4.9, category: 'Dogs', image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=500&q=80' },
  { id: 's3', name: 'Orthopedic Memory Foam Bed', price: 120.00, rating: 4.8, category: 'Dogs', image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=500&q=80' },
  { id: 's4', name: 'Interactive Puzzle Toy', price: 28.00, rating: 4.9, category: 'Dogs', image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=500&q=80' },
  
  // CATS
  { id: 's5', name: 'Luxury Cat Tree Tower', price: 289.00, rating: 4.8, category: 'Cats', image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=500&q=80' },
  { id: 's6', name: 'Freeze-Dried Chicken Minnows', price: 34.50, rating: 4.9, category: 'Cats', image: 'https://images.unsplash.com/photo-1583337260934-24e54cd8c24f?w=500&q=80' },
  { id: 's7', name: 'Ceramic Drinking Fountain', price: 65.00, rating: 4.8, category: 'Cats', image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500&q=80' },
  { id: 's8', name: 'Organic Silvervine Catnip Blend', price: 18.00, rating: 4.7, category: 'Cats', image: 'https://images.unsplash.com/photo-1623366302587-bca94921471d?w=500&q=80' },

  // BIRDS
  { id: 's9', name: 'Interactive Bird Playground', price: 42.50, rating: 4.5, category: 'Birds', image: 'https://images.unsplash.com/photo-1522858547137-f1dcec554f55?w=500&q=80' },
  { id: 's10', name: 'Premium Seed & Nut Mix', price: 22.00, rating: 4.8, category: 'Birds', image: 'https://images.unsplash.com/photo-1552728089-57105a83040e?w=500&q=80' },
  { id: 's11', name: 'Natural Wood Perch Branch', price: 15.00, rating: 4.6, category: 'Birds', image: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=500&q=80' },
  { id: 's12', name: 'Foraging Wheel Puzzle Toy', price: 24.50, rating: 4.9, category: 'Birds', image: 'https://images.unsplash.com/photo-1605051670982-fbb97b2d56a0?w=500&q=80' },

  // FISH
  { id: 's13', name: 'Advanced Aquarium Filter', price: 134.20, rating: 4.6, category: 'Fish', image: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=500&q=80' },
  { id: 's14', name: 'LED Plant Growth Spectrum Light', price: 89.99, rating: 4.8, category: 'Fish', image: 'https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=500&q=80' },
  { id: 's15', name: 'Exotic Driftwood Centerpiece', price: 45.00, rating: 4.9, category: 'Fish', image: 'https://images.unsplash.com/photo-1520302630592-fac0f0c05bea?w=500&q=80' },
  { id: 's16', name: 'Premium Micro Wafer Nutrition', price: 12.50, rating: 4.7, category: 'Fish', image: 'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?w=500&q=80' },
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
