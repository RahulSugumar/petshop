import { Link } from 'react-router-dom';
import { Heart, Search, Menu, MapPin, Phone } from 'lucide-react';

export default function Navbar() {
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
            <button className="hidden md:flex p-2 text-dark/70 hover:text-accent hover:bg-accent/5 rounded-full transition-all">
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            
            <Link to="/contact" className="hidden md:flex p-2 text-dark/70 hover:text-accent hover:bg-accent/5 rounded-full transition-all">
              <MapPin className="w-5 h-5" strokeWidth={1.5} />
            </Link>
            
            <Link to="/contact" className="hidden sm:flex items-center gap-2 px-4 py-2 bg-dark text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-accent transition-all shadow-sm">
              <Phone className="w-3.5 h-3.5" /> Call Shop
            </Link>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-dark/70 hover:text-accent hover:bg-accent/5 rounded-full transition-all">
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
