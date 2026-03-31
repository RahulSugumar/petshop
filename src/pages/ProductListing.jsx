import { useState, useRef, useEffect } from 'react';
import { Filter, Crown } from 'lucide-react';
import gsap from 'gsap';
import PetProfileCard from '../components/shared/PetProfileCard';

const SALE_PETS = [
  // DOGS
  { id: 'p1', name: 'Bella', breed: 'Golden Retriever', age: '8 Weeks', gender: 'Female', location: 'In Store', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&q=80', status: 'Available', price: 2500, category: 'Dogs' },
  { id: 'p2', name: 'Max', breed: 'French Bulldog', age: '10 Weeks', gender: 'Male', location: 'In Store', image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500&q=80', status: 'Available', price: 4200, category: 'Dogs' },
  { id: 'p3', name: 'Luna', breed: 'Siberian Husky', age: '9 Weeks', gender: 'Female', location: 'In Store', image: 'https://images.unsplash.com/photo-1605568420105-062e73ce6583?w=500&q=80', status: 'Reserved', price: 1800, category: 'Dogs' },
  { id: 'p4', name: 'Charlie', breed: 'Corgi', age: '12 Weeks', gender: 'Male', location: 'In Store', image: 'https://images.unsplash.com/photo-1615598150499-1bd5fa6fbac9?w=500&q=80', status: 'Available', price: 3000, category: 'Dogs' },
  
  // CATS
  { id: 'p5', name: 'Leo', breed: 'Maine Coon', age: '14 Weeks', gender: 'Male', location: 'In Store', image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=500&q=80', status: 'Available', price: 1500, category: 'Cats' },
  { id: 'p6', name: 'Milo', breed: 'British Shorthair', age: '10 Weeks', gender: 'Male', location: 'In Store', image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500&q=80', status: 'Available', price: 2100, category: 'Cats' },
  { id: 'p7', name: 'Chloe', breed: 'Persian', age: '12 Weeks', gender: 'Female', location: 'In Store', image: 'https://images.unsplash.com/photo-1596767789417-eb7d7920ab0f?w=500&q=80', status: 'Available', price: 1800, category: 'Cats' },
  { id: 'p8', name: 'Oliver', breed: 'Sphynx', age: '16 Weeks', gender: 'Male', location: 'In Store', image: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?w=500&q=80', status: 'Available', price: 2800, category: 'Cats' },

  // BIRDS
  { id: 'p9', name: 'Koko', breed: 'African Grey', age: '1 Year', gender: 'Male', location: 'In Store', image: 'https://images.unsplash.com/photo-1522858547137-f1dcec554f55?w=500&q=80', status: 'Available', price: 4500, category: 'Birds' },
  { id: 'p10', name: 'Rio', breed: 'Macaw', age: '8 Months', gender: 'Male', location: 'In Store', image: 'https://images.unsplash.com/photo-1552728089-57105a83040e?w=500&q=80', status: 'Available', price: 6000, category: 'Birds' },
  { id: 'p11', name: 'Sunny', breed: 'Cockatoo', age: '6 Months', gender: 'Female', location: 'In Store', image: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=500&q=80', status: 'Available', price: 3200, category: 'Birds' },
  { id: 'p12', name: 'Kiwi', breed: 'Sun Conure', age: '4 Months', gender: 'Female', location: 'In Store', image: 'https://images.unsplash.com/photo-1583337260934-24e54cd8c24f?w=500&q=80', status: 'Reserved', price: 850, category: 'Birds' },

  // SMALL PETS
  { id: 'p13', name: 'Thumper', breed: 'Holland Lop', age: '10 Weeks', gender: 'Male', location: 'In Store', image: 'https://images.unsplash.com/photo-1585110396000-c9fd4e4e5088?w=500&q=80', status: 'Available', price: 250, category: 'Small Pets' },
  { id: 'p14', name: 'Peanut', breed: 'Guinea Pig', age: '8 Weeks', gender: 'Male', location: 'In Store', image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=500&q=80', status: 'Available', price: 80, category: 'Small Pets' },
  { id: 'p15', name: 'Pip', breed: 'Dwarf Hamster', age: '6 Weeks', gender: 'Female', location: 'In Store', image: 'https://images.unsplash.com/photo-1425082661705-1834bfd08dca?w=500&q=80', status: 'Available', price: 45, category: 'Small Pets' },
  { id: 'p16', name: 'Dusty', breed: 'Chinchilla', age: '4 Months', gender: 'Male', location: 'In Store', image: 'https://images.unsplash.com/photo-1549479366-fbb978cb5cf9?w=500&q=80', status: 'Reserved', price: 350, category: 'Small Pets' },
];

const CATEGORIES = ['All Pets', 'Dogs', 'Cats', 'Birds', 'Small Pets'];

export default function ProductListing() {
  const [activeCategory, setActiveCategory] = useState('All Pets');
  const containerRef = useRef(null);
  
  const filteredPets = activeCategory === 'All Pets' 
    ? SALE_PETS 
    : SALE_PETS.filter(p => p.category === activeCategory);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.shop-header', { y: 30, opacity: 0, duration: 1, ease: 'power3.out', clearProps: 'all' });
      gsap.from('.filter-chip', { y: 20, opacity: 0, duration: 0.8, stagger: 0.05, ease: 'power2.out', delay: 0.3, clearProps: 'all' });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.pet-grid-item', {
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
        
        <div className="mb-12 border-b border-dark/10 pb-8 flex flex-col xl:flex-row xl:items-end justify-between gap-8">
          <div className="shop-header max-w-2xl text-center xl:text-left mx-auto xl:mx-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white/50 border border-brand/10 justify-center xl:justify-start">
              <Crown className="w-3 h-3 text-accent" />
              <span className="text-xs font-bold text-dark uppercase tracking-widest">Purebred Companions</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark tracking-tight mb-4" style={{ fontFamily: 'var(--font-display)' }}>Premium Pets</h1>
            <p className="text-dark/60 text-lg font-medium">Discover our rigorously screened, health-guaranteed purebred and exotic companions available exclusively in-store.</p>
          </div>
          
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
                  className={`filter-chip px-5 py-2.5 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs transition-all duration-300 border ${
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
          {filteredPets.map((pet) => (
            <div key={pet.id} className="pet-grid-item h-full">
              <PetProfileCard {...pet} />
            </div>
          ))}
        </div>
        
        {filteredPets.length === 0 && (
          <div className="text-center py-32 bg-white/40 rounded-3xl mt-8 border border-white">
            <h3 className="text-3xl font-bold text-dark/50" style={{ fontFamily: 'var(--font-display)' }}>No companions currently available in this category.</h3>
          </div>
        )}
      </div>
    </div>
  );
}
