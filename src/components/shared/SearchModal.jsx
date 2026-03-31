import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images as modules for search results
import bella from '/src/assets/Bella.png';
import max from '/src/assets/Max.png';
import luna from '/src/assets/Luna.png';
import charlie from '/src/assets/Charlie.png';
import leo from '/src/assets/Leo.png';
import milo from '/src/assets/Milo.png';
import chloe from '/src/assets/Chloe.png';
import oliver from '/src/assets/Oliver.png';
import koko from '/src/assets/Koko.png';
import rio from '/src/assets/Rio.png';
import sunny from '/src/assets/Sunny.png';
import kiwi from '/src/assets/Kiwi.png';
import thumper from '/src/assets/Thumper.png';
import peanut from '/src/assets/Peanut.png';
import pip from '/src/assets/Pip.png';
import dusty from '/src/assets/Dusty.png';

// Import adoption images
import maxGoldenRetriever from '/src/assets/Max - Golden Retriever Mix.png';
import bellaFrenchBulldog from '/src/assets/Bella - French Bulldog.png';
import charlieMixedTerrier from '/src/assets/Charlie - Mixed Terrier.png';
import lunaHuskyRescue from '/src/assets/Luna - Husky Rescue.png';
import oliverDomesticShorthair from '/src/assets/Oliver - Domestic Shorthair.png';
import leoMaineCoonMix from '/src/assets/Leo - Maine Coon Mix.png';
import miloSiameseCross from '/src/assets/Milo - Siamese Cross.png';
import chloeCalico from '/src/assets/Chloe - Calico.png';
import pipBudgie from '/src/assets/Pip - Budgie.png';
import mangoSunConure from '/src/assets/Mango - Sun Conure.png';
import rioBlueMacaw from '/src/assets/Rio - Blue Macaw.png';
import snowyCockatoo from '/src/assets/Snowy - Cockatoo.png';
import thumperHollandLop from '/src/assets/Thumper - Holland Lop.png';
import peanutGuineaPig from '/src/assets/Peanut - Guinea Pig.png';
import daisyDwarfHamster from '/src/assets/Daisy - Dwarf Hamster.png';
import oreoChinchilla from '/src/assets/Oreo - Chinchilla.png';

// Import supply images
import premiumLeatherCollar from '/src/assets/Premium Leather Collar.png';
import organicDogFood from '/src/assets/Organic Dog Food.png';
import orthopedicDogBed from '/src/assets/Orthopedic Dog Bed.png';
import interactiveDogToy from '/src/assets/Interactive Dog Toy.png';
import luxuryCatTree from '/src/assets/Luxury Cat Tree.png';
import freezeDriedCatTreats from '/src/assets/Freeze-Dried Cat Treats.png';
import ceramicCatFountain from '/src/assets/Ceramic Cat Fountain.png';
import organicCatnip from '/src/assets/Organic Catnip.png';
import birdPlayground from '/src/assets/Bird Playground.png';
import premiumBirdFood from '/src/assets/Premium Bird Food.png';
import naturalWoodPerch from '/src/assets/Natural Wood Perch.png';
import foragingWheelToy from '/src/assets/Foraging Wheel Toy.png';
import aquariumFilter from '/src/assets/Aquarium Filter.png';
import ledAquariumLight from '/src/assets/LED Aquarium Light.png';
import driftwoodCenterpiece from '/src/assets/Driftwood Centerpiece.png';
import premiumFishFood from '/src/assets/Premium Fish Food.png';

// Import data from pages
const SALE_PETS = [
  { id: 'p1', name: 'Bella', breed: 'Golden Retriever', age: '8 Weeks', gender: 'Female', location: 'In Store', image: bella, status: 'Available', price: 2500, category: 'Dogs', type: 'pet' },
  { id: 'p2', name: 'Max', breed: 'French Bulldog', age: '10 Weeks', gender: 'Male', location: 'In Store', image: max, status: 'Available', price: 4200, category: 'Dogs', type: 'pet' },
  { id: 'p3', name: 'Luna', breed: 'Siberian Husky', age: '9 Weeks', gender: 'Female', location: 'In Store', image: luna, status: 'Reserved', price: 1800, category: 'Dogs', type: 'pet' },
  { id: 'p4', name: 'Charlie', breed: 'Corgi', age: '12 Weeks', gender: 'Male', location: 'In Store', image: charlie, status: 'Available', price: 3000, category: 'Dogs', type: 'pet' },
  { id: 'p5', name: 'Leo', breed: 'Maine Coon', age: '14 Weeks', gender: 'Male', location: 'In Store', image: leo, status: 'Available', price: 1500, category: 'Cats', type: 'pet' },
  { id: 'p6', name: 'Milo', breed: 'British Shorthair', age: '10 Weeks', gender: 'Male', location: 'In Store', image: milo, status: 'Available', price: 2100, category: 'Cats', type: 'pet' },
  { id: 'p7', name: 'Chloe', breed: 'Persian', age: '12 Weeks', gender: 'Female', location: 'In Store', image: chloe, status: 'Available', price: 1800, category: 'Cats', type: 'pet' },
  { id: 'p8', name: 'Oliver', breed: 'Sphynx', age: '16 Weeks', gender: 'Male', location: 'In Store', image: oliver, status: 'Available', price: 2800, category: 'Cats', type: 'pet' },
  { id: 'p9', name: 'Koko', breed: 'African Grey', age: '1 Year', gender: 'Male', location: 'In Store', image: koko, status: 'Available', price: 4500, category: 'Birds', type: 'pet' },
  { id: 'p10', name: 'Rio', breed: 'Macaw', age: '8 Months', gender: 'Male', location: 'In Store', image: rio, status: 'Available', price: 6000, category: 'Birds', type: 'pet' },
  { id: 'p11', name: 'Sunny', breed: 'Cockatoo', age: '6 Months', gender: 'Female', location: 'In Store', image: sunny, status: 'Available', price: 3200, category: 'Birds', type: 'pet' },
  { id: 'p12', name: 'Kiwi', breed: 'Sun Conure', age: '4 Months', gender: 'Female', location: 'In Store', image: kiwi, status: 'Reserved', price: 850, category: 'Birds', type: 'pet' },
  { id: 'p13', name: 'Thumper', breed: 'Holland Lop', age: '10 Weeks', gender: 'Male', location: 'In Store', image: thumper, status: 'Available', price: 250, category: 'Small Pets', type: 'pet' },
  { id: 'p14', name: 'Peanut', breed: 'Guinea Pig', age: '8 Weeks', gender: 'Male', location: 'In Store', image: peanut, status: 'Available', price: 80, category: 'Small Pets', type: 'pet' },
  { id: 'p15', name: 'Pip', breed: 'Dwarf Hamster', age: '6 Weeks', gender: 'Female', location: 'In Store', image: pip, status: 'Available', price: 45, category: 'Small Pets', type: 'pet' },
  { id: 'p16', name: 'Dusty', breed: 'Chinchilla', age: '4 Months', gender: 'Male', location: 'In Store', image: dusty, status: 'Reserved', price: 350, category: 'Small Pets', type: 'pet' },
];

const ADOPTION_PETS = [
  { id: 'a1', name: 'Max', breed: 'Golden Retriever Mix', age: '2 Years', gender: 'Male', location: 'Downtown Rescue Center', status: 'Available', category: 'Dogs', image: maxGoldenRetriever, type: 'adoption' },
  { id: 'a2', name: 'Bella', breed: 'French Bulldog', age: '1 Year', gender: 'Female', location: 'Eastside Foster', status: 'Urgent', category: 'Dogs', image: bellaFrenchBulldog, type: 'adoption' },
  { id: 'a3', name: 'Charlie', breed: 'Mixed Terrier', age: '4 Months', gender: 'Male', location: 'City Animal Shelter', status: 'Available', category: 'Dogs', image: charlieMixedTerrier, type: 'adoption' },
  { id: 'a4', name: 'Luna', breed: 'Husky Rescue', age: '3 Years', gender: 'Female', location: 'North Valley Rescue', status: 'Available', category: 'Dogs', image: lunaHuskyRescue, type: 'adoption' },
  { id: 'a5', name: 'Oliver', breed: 'Domestic Shorthair', age: '3 Months', gender: 'Male', location: 'City Animal Shelter', status: 'Available', category: 'Cats', image: oliverDomesticShorthair, type: 'adoption' },
  { id: 'a6', name: 'Leo', breed: 'Maine Coon Mix', age: '2 Years', gender: 'Male', location: 'Downtown Rescue Center', status: 'Urgent', category: 'Cats', image: leoMaineCoonMix, type: 'adoption' },
  { id: 'a7', name: 'Milo', breed: 'Siamese Cross', age: '1 Year', gender: 'Male', location: 'Eastside Foster', status: 'Available', category: 'Cats', image: miloSiameseCross, type: 'adoption' },
  { id: 'a8', name: 'Chloe', breed: 'Calico', age: '4 Years', gender: 'Female', location: 'North Valley Rescue', status: 'Available', category: 'Cats', image: chloeCalico, type: 'adoption' },
  { id: 'a9', name: 'Pip', breed: 'Budgie', age: '6 Months', gender: 'Male', location: 'Avian Sanctuary', status: 'Available', category: 'Birds', image: pipBudgie, type: 'adoption' },
  { id: 'b2', name: 'Mango', breed: 'Sun Conure', age: '2 Years', gender: 'Female', location: 'City Animal Shelter', status: 'Available', category: 'Birds', image: mangoSunConure, type: 'adoption' },
  { id: 'b3', name: 'Rio', breed: 'Blue Macaw', age: '5 Years', gender: 'Male', location: 'Exotic Rescue', status: 'Available', category: 'Birds', image: rioBlueMacaw, type: 'adoption' },
  { id: 'b4', name: 'Snowy', breed: 'Cockatoo', age: '3 Years', gender: 'Female', location: 'Avian Sanctuary', status: 'Urgent', category: 'Birds', image: snowyCockatoo, type: 'adoption' },
  { id: 'a10', name: 'Thumper', breed: 'Holland Lop Rabbit', age: '1 Year', gender: 'Male', location: 'Downtown Rescue Center', status: 'Available', category: 'Small Pets', image: thumperHollandLop, type: 'adoption' },
  { id: 's2', name: 'Peanut', breed: 'Guinea Pig', age: '1 Year', gender: 'Male', location: 'City Animal Shelter', status: 'Available', category: 'Small Pets', image: peanutGuineaPig, type: 'adoption' },
  { id: 's3', name: 'Daisy', breed: 'Dwarf Hamster', age: '6 Months', gender: 'Female', location: 'Eastside Foster', status: 'Available', category: 'Small Pets', image: daisyDwarfHamster, type: 'adoption' },
  { id: 's4', name: 'Oreo', breed: 'Chinchilla', age: '2 Years', gender: 'Male', location: 'North Valley Rescue', status: 'Available', category: 'Small Pets', image: oreoChinchilla, type: 'adoption' }
];

const SUPPLIES = [
  { id: 's1', name: 'Premium Leather Dog Collar', price: 45.00, rating: 4.9, category: 'Dogs', image: premiumLeatherCollar, type: 'supply' },
  { id: 's2', name: 'Organic Grain-Free Salmon Kibble', price: 89.99, rating: 4.9, category: 'Dogs', image: organicDogFood, type: 'supply' },
  { id: 's3', name: 'Orthopedic Memory Foam Bed', price: 120.00, rating: 4.8, category: 'Dogs', image: orthopedicDogBed, type: 'supply' },
  { id: 's4', name: 'Interactive Puzzle Toy', price: 28.00, rating: 4.9, category: 'Dogs', image: interactiveDogToy, type: 'supply' },
  { id: 's5', name: 'Luxury Cat Tree Tower', price: 289.00, rating: 4.8, category: 'Cats', image: luxuryCatTree, type: 'supply' },
  { id: 's6', name: 'Freeze-Dried Chicken Minnows', price: 34.50, rating: 4.9, category: 'Cats', image: freezeDriedCatTreats, type: 'supply' },
  { id: 's7', name: 'Ceramic Drinking Fountain', price: 65.00, rating: 4.8, category: 'Cats', image: ceramicCatFountain, type: 'supply' },
  { id: 's8', name: 'Organic Silvervine Catnip Blend', price: 18.00, rating: 4.7, category: 'Cats', image: organicCatnip, type: 'supply' },
  { id: 's9', name: 'Interactive Bird Playground', price: 42.50, rating: 4.5, category: 'Birds', image: birdPlayground, type: 'supply' },
  { id: 's10', name: 'Premium Seed & Nut Mix', price: 22.00, rating: 4.8, category: 'Birds', image: premiumBirdFood, type: 'supply' },
  { id: 's11', name: 'Natural Wood Perch Branch', price: 15.00, rating: 4.6, category: 'Birds', image: naturalWoodPerch, type: 'supply' },
  { id: 's12', name: 'Foraging Wheel Puzzle Toy', price: 24.50, rating: 4.9, category: 'Birds', image: foragingWheelToy, type: 'supply' },
  { id: 's13', name: 'Advanced Aquarium Filter', price: 134.20, rating: 4.6, category: 'Fish', image: aquariumFilter, type: 'supply' },
  { id: 's14', name: 'LED Plant Growth Spectrum Light', price: 89.99, rating: 4.8, category: 'Fish', image: ledAquariumLight, type: 'supply' },
  { id: 's15', name: 'Exotic Driftwood Centerpiece', price: 45.00, rating: 4.9, category: 'Fish', image: driftwoodCenterpiece, type: 'supply' },
  { id: 's16', name: 'Premium Micro Wafer Nutrition', price: 12.50, rating: 4.7, category: 'Fish', image: premiumFishFood, type: 'supply' },
];

const ALL_ITEMS = [...SALE_PETS, ...ADOPTION_PETS, ...SUPPLIES];

export default function SearchModal({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = ALL_ITEMS.filter(item => {
      const searchableFields = [
        item.name,
        item.breed || '',
        item.category,
        (item.type || '').replace('adoption', 'rescue')
      ].join(' ').toLowerCase();
      
      return searchableFields.includes(query);
    }).slice(0, 8); // Limit to 8 results

    setResults(filtered);
  }, [searchQuery]);

  const handleResultClick = () => {
    onClose();
    setSearchQuery('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Search Modal */}
      <div className="relative flex items-start justify-center pt-20 px-4">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl mx-auto overflow-hidden">
          {/* Search Header */}
          <div className="flex items-center gap-4 p-6 border-b border-gray-100">
            <Search className="w-6 h-6 text-gray-400" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search for pets, supplies, breeds..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 text-lg outline-none placeholder-gray-400"
            />
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          
          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {results.length > 0 ? (
              <div className="p-4 space-y-2">
                {results.map((item) => {
                  const linkPath = item.type === 'supply' ? '/supplies' : 
                                  item.type === 'adoption' ? '/adopt' : '/shop';
                  
                  return (
                    <Link
                      key={`${item.type}-${item.id}`}
                      to={linkPath}
                      onClick={handleResultClick}
                      className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors group"
                    >
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-semibold text-gray-900 truncate">{item.name}</p>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            item.type === 'supply' ? 'bg-blue-100 text-blue-700' :
                            item.type === 'adoption' ? 'bg-green-100 text-green-700' :
                            'bg-purple-100 text-purple-700'
                          }`}>
                            {item.type === 'supply' ? 'Supply' :
                             item.type === 'adoption' ? 'Rescue' : 'Pet'}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">
                          {item.breed && `${item.breed} • `}
                          {item.category}
                          {item.price && ` • $${item.price}`}
                        </p>
                      </div>
                      <div className="text-gray-400 group-hover:text-gray-600 transition-colors">
                        →
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : searchQuery.trim() !== '' ? (
              <div className="p-8 text-center">
                <p className="text-gray-500">No results found for "{searchQuery}"</p>
                <p className="text-sm text-gray-400 mt-2">Try searching for pets, supplies, or breeds</p>
              </div>
            ) : (
              <div className="p-8 text-center">
                <p className="text-gray-500">Start typing to search...</p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  {['Golden Retriever', 'Cat Food', 'Dog Toys', 'Bird Cage', 'Adoption'].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => setSearchQuery(suggestion)}
                      className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
