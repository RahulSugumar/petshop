import { useState, useRef, useEffect } from 'react';
import { HeartHandshake } from 'lucide-react';
import gsap from 'gsap';
import PetProfileCard from '../components/shared/PetProfileCard';

const ADOPTION_PETS = [
  // DOGS
  { id: 'a1', name: 'Max', breed: 'Golden Retriever Mix', age: '2 Years', gender: 'Male', location: 'Downtown Rescue Center', status: 'Available', category: 'Dogs', image: '/src/assets/Max - Golden Retriever Mix.png' },
  { id: 'a2', name: 'Bella', breed: 'French Bulldog', age: '1 Year', gender: 'Female', location: 'Eastside Foster', status: 'Urgent', category: 'Dogs', image: '/src/assets/Bella - French Bulldog.png' },
  { id: 'a3', name: 'Charlie', breed: 'Mixed Terrier', age: '4 Months', gender: 'Male', location: 'City Animal Shelter', status: 'Available', category: 'Dogs', image: '/src/assets/Charlie - Mixed Terrier.png' },
  { id: 'a4', name: 'Luna', breed: 'Husky Rescue', age: '3 Years', gender: 'Female', location: 'North Valley Rescue', status: 'Available', category: 'Dogs', image: '/src/assets/Luna - Husky Rescue.png' },
  // CATS
  { id: 'a5', name: 'Oliver', breed: 'Domestic Shorthair', age: '3 Months', gender: 'Male', location: 'City Animal Shelter', status: 'Available', category: 'Cats', image: '/src/assets/Oliver - Domestic Shorthair.png' },
  { id: 'a6', name: 'Leo', breed: 'Maine Coon Mix', age: '2 Years', gender: 'Male', location: 'Downtown Rescue Center', status: 'Urgent', category: 'Cats', image: '/src/assets/Leo - Maine Coon Mix.png' },
  { id: 'a7', name: 'Milo', breed: 'Siamese Cross', age: '1 Year', gender: 'Male', location: 'Eastside Foster', status: 'Available', category: 'Cats', image: '/src/assets/Milo - Siamese Cross.png' },
  { id: 'a8', name: 'Chloe', breed: 'Calico', age: '4 Years', gender: 'Female', location: 'North Valley Rescue', status: 'Available', category: 'Cats', image: '/src/assets/Chloe - Calico.png' },
  // OTHERS
  { id: 'a9', name: 'Pip', breed: 'Budgie', age: '6 Months', gender: 'Male', location: 'Avian Sanctuary', status: 'Available', category: 'Birds', image: '/src/assets/Pip - Budgie.png' },
  { id: 'b2', name: 'Mango', breed: 'Sun Conure', age: '2 Years', gender: 'Female', location: 'City Animal Shelter', status: 'Available', category: 'Birds', image: '/src/assets/Mango - Sun Conure.png' },
  { id: 'b3', name: 'Rio', breed: 'Blue Macaw', age: '5 Years', gender: 'Male', location: 'Exotic Rescue', status: 'Available', category: 'Birds', image: '/src/assets/Rio - Blue Macaw.png' },
  { id: 'b4', name: 'Snowy', breed: 'Cockatoo', age: '3 Years', gender: 'Female', location: 'Avian Sanctuary', status: 'Urgent', category: 'Birds', image: '/src/assets/Snowy - Cockatoo.png' },
  { id: 'a10', name: 'Thumper', breed: 'Holland Lop Rabbit', age: '1 Year', gender: 'Male', location: 'Downtown Rescue Center', status: 'Available', category: 'Small Pets', image: '/src/assets/Thumper - Holland Lop.png' },
  { id: 's2', name: 'Peanut', breed: 'Guinea Pig', age: '1 Year', gender: 'Male', location: 'City Animal Shelter', status: 'Available', category: 'Small Pets', image: '/src/assets/Peanut - Guinea Pig.png' },
  { id: 's3', name: 'Daisy', breed: 'Dwarf Hamster', age: '6 Months', gender: 'Female', location: 'Eastside Foster', status: 'Available', category: 'Small Pets', image: '/src/assets/Daisy - Dwarf Hamster.png' },
  { id: 's4', name: 'Oreo', breed: 'Chinchilla', age: '2 Years', gender: 'Male', location: 'North Valley Rescue', status: 'Available', category: 'Small Pets', image: '/src/assets/Oreo - Chinchilla.png' }
];

const CATEGORIES = ['All Rescues', 'Dogs', 'Cats', 'Birds', 'Small Pets'];

export default function PetAdoption() {
  const [activeCategory, setActiveCategory] = useState('All Rescues');
  const containerRef = useRef(null);

  const filteredPets = activeCategory === 'All Rescues' 
    ? ADOPTION_PETS 
    : ADOPTION_PETS.filter(p => p.category === activeCategory);

  // GSAP Animations - Initial Load Only
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.adopt-header', { y: 30, opacity: 0, duration: 1, ease: 'power3.out', clearProps: 'all' });
      gsap.from('.adopt-chip', { y: 20, opacity: 0, duration: 0.8, stagger: 0.05, ease: 'power2.out', delay: 0.3, clearProps: 'all' });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // GSAP Animations - Grid Data Change
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
        
        {/* Luxury Header & Filters */}
        <div className="mb-12 border-b border-dark/10 pb-8 flex flex-col xl:flex-row xl:items-end justify-between gap-8">
          <div className="adopt-header max-w-2xl text-center xl:text-left mx-auto xl:mx-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white/50 border border-brand/10 justify-center xl:justify-start">
              <HeartHandshake className="w-3 h-3 text-accent" />
              <span className="text-xs font-bold text-dark uppercase tracking-widest">Find a Friend</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark tracking-tight mb-4" style={{ fontFamily: 'var(--font-display)' }}>Adopt Love</h1>
            <p className="text-dark/60 text-lg font-medium">Every pet here is fully vaccinated, health-checked, and ready to immediately become the best part of your family.</p>
          </div>
          
          {/* Rescue Filter Bar */}
          <div className="inline-flex flex-col md:flex-row items-center gap-4 lg:gap-6 bg-white/50 p-2 lg:p-3 rounded-[2rem] xl:rounded-full border border-white/60 shadow-sm backdrop-blur-md w-fit mx-auto xl:mx-0 shrink-0">
            <div className="flex flex-wrap xl:flex-nowrap items-center justify-center gap-2 md:gap-3 w-full md:w-auto px-2 lg:px-4">
              {CATEGORIES.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`adopt-chip px-5 py-2.5 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs transition-all duration-300 border ${
                    activeCategory === cat 
                      ? 'bg-brand text-beige border-brand shadow-lg shadow-brand/20 scale-105' 
                      : 'bg-white text-dark/70 border-white hover:bg-dark hover:text-white hover:border-dark shadow-sm'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pet Profile Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {filteredPets.map((pet) => (
            <div key={pet.id} className="pet-grid-item">
              <PetProfileCard {...pet} />
            </div>
          ))}
        </div>
        
        {filteredPets.length === 0 && (
          <div className="text-center py-32 bg-white/40 rounded-3xl mt-8 border border-white">
            <h3 className="text-3xl font-bold text-dark/50" style={{ fontFamily: 'var(--font-display)' }}>No pets matching this search are currently awaiting rescue.</h3>
          </div>
        )}
      </div>
    </div>
  );
}
