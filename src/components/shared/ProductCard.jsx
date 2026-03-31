import { Link } from 'react-router-dom';
import { Phone, Star } from 'lucide-react';

export default function ProductCard({ id, name, price, rating, image, category }) {
  return (
    <div className="bg-white rounded-[2rem] shadow-xl shadow-brand/5 hover:shadow-2xl hover:shadow-brand/10 transition-all duration-500 overflow-hidden group border border-brand/5 flex flex-col h-full">
      <Link to={`/supplies/${id}`} className="block relative aspect-[4/5] sm:aspect-square overflow-hidden bg-beige/30 isolate">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-out z-0"
        />
        <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase text-brand shadow-sm z-10 border border-white/50">
          {category}
        </div>
      </Link>
      
      <div className="p-6 sm:p-8 flex flex-col flex-grow relative bg-white z-20 -mt-4 rounded-t-[2rem]">
        <div className="flex items-center gap-1.5 mb-3">
          <Star className="w-4 h-4 fill-accent text-accent" />
          <span className="text-xs font-bold text-dark/60 tracking-widest">{rating} REVIEWS</span>
        </div>
        
        <Link to={`/supplies/${id}`}>
          <h3 className="font-bold text-dark text-2xl mb-2 line-clamp-2 group-hover:text-accent transition-colors leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            {name}
          </h3>
        </Link>
        
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="font-extrabold text-2xl text-dark tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            ${price.toFixed(2)}
          </span>
          <Link to="/contact" className="bg-dark text-white hover:bg-accent p-3.5 rounded-full transition-all duration-300 shadow-lg shadow-dark/10 group-hover:scale-110 hover:shadow-accent/20" title="Call to Inquire">
            <Phone className="w-5 h-5" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </div>
  );
}
