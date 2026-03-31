import { Link } from 'react-router-dom';
import { Heart, Search, Menu, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import SearchModal from '../shared/SearchModal';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleCallShop = () => {
    window.location.href = 'tel:18007384822';
  };

  const handleLocation = () => {
    // Open in Google Maps
    window.open('https://maps.google.com/?q=942+Premium+Pet+Boulevard+Beverly+Hills+CA+90210', '_blank');
  };
  return (
    <div className="fixed top-0 w-full z-50 transition-all duration-300 pointer-events-none">
      <nav className="w-full bg-white/80 backdrop-blur-xl border-b border-white/50 shadow-sm pointer-events-auto">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-16 md:h-20 px-4 sm:px-6 lg:px-8">
          
          {/* Elegant Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-accent transform group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
            <span 
              className="font-bold text-2xl md:text-3xl tracking-tight text-dark" 
              style={{ fontFamily: 'var(--font-display)' }}
            >
              PetHub
            </span>
          </Link>

          {/* Desktop Nav with Animated Underlines */}
          <div className="hidden md:flex space-x-10">
            {[
              { path: '/', label: 'Home' },
              { path: '/shop', label: 'Pets' },
              { path: '/supplies', label: 'Supplies' },
              { path: '/adopt', label: 'Adopt' },
              { path: '/contact', label: 'Visit Us' }
            ].map((link) => (
              <Link 
                key={link.label} 
                to={link.path} 
                className="relative group text-dark/80 font-semibold text-sm tracking-widest uppercase hover:text-brand transition-colors py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            ))}
          </div>

          {/* Actions / Icons */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="hidden md:flex p-2 text-dark/70 hover:text-accent hover:bg-accent/5 rounded-full transition-all"
              title="Search pets and supplies"
            >
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            
            <button 
              onClick={handleLocation}
              className="hidden md:flex p-2 text-dark/70 hover:text-accent hover:bg-accent/5 rounded-full transition-all"
              title="Get directions"
            >
              <MapPin className="w-5 h-5" strokeWidth={1.5} />
            </button>
            
            <button 
              onClick={handleCallShop}
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-dark text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-accent transition-all shadow-sm"
              title="Call us now"
            >
              <Phone className="w-3.5 h-3.5" /> Call Shop
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="md:hidden p-2 text-dark/70 hover:text-accent hover:bg-accent/5 rounded-full transition-all"
              title="Search"
            >
              <Search className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>
      
      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}
