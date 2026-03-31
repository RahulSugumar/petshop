import { Heart } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };
  return (
    <footer className="bg-dark text-secondary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-accent" fill="currentColor" />
            <span className="font-bold text-xl text-white">PetHub</span>
          </div>
          <p className="text-sm opacity-80">
            A clean, modern pet e-commerce and adoption platform focused on browsing, buying, and managing pet-related products and pets.
          </p>
        </div>
        
        <div>
          <h3 className="text-white font-medium mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
            <li><a href="/shop" className="hover:text-accent transition-colors">Shop Pets</a></li>
            <li><a href="/supplies" className="hover:text-accent transition-colors">Pet Supplies</a></li>
            <li><a href="/adopt" className="hover:text-accent transition-colors">Adopt a Pet</a></li>
            <li><a href="/contact" className="hover:text-accent transition-colors">Visit Us</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-medium mb-4">Customer Support</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="/contact" className="hover:text-accent transition-colors">Contact Us</a></li>
            <li><a href="/shipping" className="hover:text-accent transition-colors">Shipping & Returns</a></li>
            <li><a href="/faq" className="hover:text-accent transition-colors">FAQs</a></li>
            <li><a href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-medium mb-4">Newsletter</h3>
          <p className="text-sm opacity-80 mb-4">Subscribe for updates on new pets and products.</p>
          <form onSubmit={handleSubscribe} className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 bg-white/10 text-white border border-white/20 rounded-l-md focus:outline-none focus:border-accent w-full text-sm placeholder-white/50"
              required
            />
            <button 
              type="submit"
              className="bg-accent hover:bg-orange-600 text-white px-4 py-2 rounded-r-md transition-colors text-sm font-medium"
            >
              Join
            </button>
          </form>
          {isSubscribed && (
            <p className="text-green-400 text-sm mt-2">✓ Successfully subscribed!</p>
          )}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/10 text-center text-xs opacity-60">
        &copy; {new Date().getFullYear()} PetHub. All rights reserved.
      </div>
    </footer>
  );
}
