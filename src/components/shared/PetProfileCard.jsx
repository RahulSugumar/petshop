import { Link } from 'react-router-dom';
import { Heart, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';

export default function PetProfileCard({ id, name, breed, age, image, gender, location, status, price }) {
  return (
    <div className="bg-white rounded-[2rem] shadow-xl shadow-brand/5 hover:shadow-2xl hover:shadow-brand/10 transition-all duration-500 overflow-hidden group border border-brand/5 flex flex-col h-full relative isolate">
      {/* Image Container */}
      <Link to={`/adopt/${id}`} className="block relative aspect-[4/5] overflow-hidden bg-beige/30">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out z-0" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-80 z-10"></div>
        
        {/* Top Badges */}
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
          <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase text-dark shadow-sm inline-flex items-center gap-1.5 w-fit border border-white/50">
            <span className={`w-1.5 h-1.5 rounded-full ${status === 'Urgent' ? 'bg-red-500' : 'bg-green-500'}`}></span>
            {status}
          </div>
        </div>
        
        <div className="absolute top-4 right-4 z-20">
           <button className="bg-white/40 hover:bg-white backdrop-blur-md p-2 rounded-full text-white hover:text-accent transition-all duration-300 border border-white/50 group/fav">
             <Heart className="w-4 h-4 group-hover/fav:fill-accent transition-colors" />
           </button>
        </div>

        {/* Bottom Image Overlay Text */}
        <div className="absolute bottom-4 left-4 z-20 text-white flex flex-col gap-1">
          <h3 className="font-bold text-3xl tracking-tight drop-shadow-md" style={{ fontFamily: 'var(--font-display)' }}>
            {name}
          </h3>
          <p className="text-white/90 text-sm font-medium flex items-center gap-1.5">
            {gender} • {age}
          </p>
        </div>
      </Link>
      
      {/* Card Body */}
      <div className="p-6 flex flex-col flex-grow bg-white z-20">
        <p className="text-dark/70 font-bold mb-4 line-clamp-1">{breed}</p>
        
        <div className="mt-auto space-y-3 pt-2">
          <div className="flex items-center gap-2 text-sm text-dark/60 font-medium">
            <MapPin className="w-4 h-4 text-accent/70" /> {location}
          </div>
          <div className="flex items-center gap-2 text-sm text-dark/60 font-medium">
            <ShieldCheck className="w-4 h-4 text-brand/70" /> {price ? 'Health Guarantee & Pedigree' : 'Vaccinated & Microchipped'}
          </div>
        </div>

        <Link to="/contact" className="mt-6 flex items-center justify-between w-full py-3 px-6 rounded-full border border-dark/10 text-dark font-bold text-sm tracking-widest uppercase hover:bg-dark hover:text-white transition-all duration-300 group-hover:border-dark">
          {price ? (
            <>
              <span className="text-[10px] md:text-xs">Reserve Today</span>
              <span className="text-brand group-hover:text-accent font-extrabold text-lg transition-colors">${price.toLocaleString()}</span>
            </>
          ) : (
            <span className="flex items-center justify-center gap-2 w-full">Schedule a Visit <ArrowRight className="w-4 h-4" /></span>
          )}
        </Link>
      </div>
    </div>
  );
}
