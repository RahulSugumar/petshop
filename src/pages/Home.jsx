import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ShoppingBag, Heart, Star, ArrowRight, ShieldCheck, Truck, Headphones, Clock, Mail } from 'lucide-react';
import ProductCard from '../components/shared/ProductCard';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-text', { y: 40, opacity: 0, duration: 1.2, stagger: 0.15, ease: 'power4.out', delay: 0.2 });
      gsap.from('.hero-img', { scale: 0.85, opacity: 0, duration: 1.5, ease: 'power3.out', delay: 0.4 });
      gsap.from('.floating-badge', { y: 20, opacity: 0, duration: 1, stagger: 0.2, ease: 'back.out(1.7)', delay: 0.8 });
      gsap.to('.float-anim-1', { y: -15, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to('.float-anim-2', { y: 15, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1 });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full bg-beige" ref={containerRef}>
      {/* Premium Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 lg:pt-20 lg:pb-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-4 lg:py-8 mt-4 lg:mt-0">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5 lg:space-y-6">
              <div className="hero-text inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white border-opacity-50 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span className="text-xs font-semibold tracking-wide text-brand uppercase">Premium Pet Care</span>
              </div>
              
              <h1 className="hero-text text-4xl sm:text-5xl md:text-6xl lg:text-[3.7rem] font-bold text-dark leading-tight tracking-tight mt-2">
                Give your pet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-[#A0522D] to-accent">lifestyle</span> they deserve.
              </h1>
              
              <p className="hero-text text-base sm:text-lg lg:text-lg text-dark/70 max-w-lg leading-relaxed font-medium">
                From organic treats to cozy beds, and even finding a new furry friend. Everything you need for a happy, healthy pet.
              </p>
              
              <div className="hero-text flex flex-wrap items-center gap-4 pt-2 lg:pt-3">
                <Link to="/shop" className="group relative inline-flex items-center justify-center gap-2 lg:gap-3 bg-brand text-beige px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-sm lg:text-base overflow-hidden transition-all hover:bg-dark hover:shadow-xl hover:shadow-brand/20">
                  <ShoppingBag className="w-4 h-4 lg:w-5 lg:h-5 z-10" />
                  <span className="z-10">Browse Pets</span>
                  <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 ease-out group-hover:scale-100 group-hover:bg-white/10 z-0"></div>
                </Link>
                
                <Link to="/adopt" className="group inline-flex items-center justify-center gap-2 lg:gap-3 bg-white text-dark border-2 border-transparent px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-sm lg:text-base hover:border-accent hover:text-accent transition-all shadow-lg shadow-black/5">
                  <Heart className="w-4 h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform" />
                  <span>Meet Pets</span>
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="hero-text pt-4 sm:pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 border-t border-dark/10">
                <div className="flex -space-x-3">
                  {[...Array(4)].map((_, i) => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-beige" />
                  ))}
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-beige bg-secondary flex items-center justify-center text-xs font-bold text-dark">
                    +2k
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 lg:w-4 lg:h-4 fill-accent text-accent" />)}
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-dark/70 mt-1">Happy pet parents</p>
                </div>
              </div>
            </div>
            
            {/* Right Images & Badges */}
            <div className="lg:col-span-6 relative aspect-square w-full max-w-[450px] lg:max-w-none max-h-[45vh] lg:max-h-[55vh] mx-auto mt-6 lg:mt-0">
              <div className="hero-img absolute right-0 top-0 w-[85%] h-[90%] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand/20 border-6 lg:border-8 border-white/50 bg-white z-10">
                <img src="/src/assets/Hero Main Image.png" alt="Beautiful golden retriever" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="hero-img absolute left-0 bottom-[5%] w-[45%] h-[40%] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-xl border-4 border-white z-20 hidden sm:block">
                <img src="/src/assets/Hero Secondary Image .png" alt="Cute cat" className="w-full h-full object-cover" />
              </div>
              <div className="floating-badge float-anim-1 absolute top-[5%] sm:top-[12%] left-0 sm:-left-[5%] z-30 bg-white/90 backdrop-blur-md px-3 sm:px-6 py-2.5 sm:py-4 rounded-xl sm:rounded-2xl shadow-xl shadow-black/5 border border-white">
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="bg-accent/10 p-2 sm:p-3 rounded-full"><Heart className="w-4 h-4 sm:w-6 sm:h-6 text-accent fill-accent" /></div>
                  <div><p className="text-[10px] sm:text-sm text-dark/60 font-medium">Adopted</p><p className="text-sm sm:text-xl font-bold text-brand">2,500+</p></div>
                </div>
              </div>
              <div className="floating-badge float-anim-2 absolute bottom-[12%] sm:bottom-[15%] right-0 sm:-right-[5%] z-30 bg-white/90 backdrop-blur-md px-3 sm:px-6 py-2.5 sm:py-4 rounded-xl sm:rounded-2xl shadow-xl shadow-black/5 border border-white">
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="bg-secondary p-2 sm:p-3 rounded-full"><Star className="w-4 h-4 sm:w-6 sm:h-6 text-brand fill-brand" /></div>
                  <div><p className="text-[10px] sm:text-sm text-dark/60 font-medium">Top Rated</p><p className="text-sm sm:text-xl font-bold text-brand">Premium</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-dark tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>Discover Pets</h2>
              <p className="text-dark/60 mt-2 font-medium text-lg">Find the perfect breed for your lifestyle.</p>
            </div>
            <Link to="/shop" className="text-dark font-bold uppercase tracking-widest text-sm hover:text-accent flex items-center gap-2 group pb-2 border-b-2 border-dark/10 hover:border-accent transition-all">
              Explore All <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {[
              { name: 'Dogs', img: '/src/assets/Category - Dogs.png' },
              { name: 'Cats', img: '/src/assets/Category - Cats.png' },
              { name: 'Birds', img: '/src/assets/Category - Birds.png' },
              { name: 'Fish', img: '/src/assets/Category - Fish.png' }
            ].map((cat, i) => (
              <Link key={i} to={`/shop?category=${cat.name.toLowerCase()}`} className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] block cursor-pointer bg-secondary/20 isolate shadow-xl shadow-brand/5">
                <img 
                  src={cat.img} 
                  alt={cat.name} 
                  className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-out z-0" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end h-full">
                  <div className="transform group-hover:-translate-y-4 transition-transform duration-500 ease-out">
                    <h3 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>{cat.name}</h3>
                    <div className="flex items-center gap-2 text-white/90 font-bold uppercase tracking-widest text-xs translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      <span>View Pets</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-beige relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-white/50 border border-brand/10">
                <Star className="w-3 h-3 text-accent fill-accent" />
                <span className="text-xs font-bold text-dark uppercase tracking-widest">Top Rated</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>Trending Essentials</h2>
            </div>
            <Link to="/supplies" className="text-dark font-bold uppercase tracking-widest text-sm hover:text-accent flex items-center gap-2 group pb-2 border-b-2 border-dark/10 hover:border-accent transition-colors">
              Shop All Supplies
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {[
              { id: 1, name: "Premium Leather Collar", price: 45.00, rating: "4.9", image: "/src/assets/Premium Leather Collar.png", category: "Dogs" },
              { id: 2, name: "Orthopedic Memory Foam Bed", price: 120.00, rating: "4.8", image: "/src/assets/Orthopedic Dog Bed.png", category: "Beds" },
              { id: 3, name: "Organic Salmon Cat Treats", price: 15.50, rating: "4.7", image: "/src/assets/Organic Catnip.png", category: "Cats" },
              { id: 4, name: "Interactive Puzzle Toy", price: 28.00, rating: "4.9", image: "/src/assets/Interactive Dog Toy.png", category: "Toys" },
            ].map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start group">
              <div className="w-16 h-16 bg-beige rounded-2xl flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:bg-brand transition-all duration-300">
                <Star className="w-8 h-8 text-brand group-hover:text-beige transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Boutique Experience</h3>
              <p className="text-dark/70 font-medium">In-person consultations and personalized fittings for all luxury accessories.</p>
            </div>
            <div className="flex flex-col items-center md:items-start group">
              <div className="w-16 h-16 bg-beige rounded-2xl flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:bg-brand transition-all duration-300">
                <ShieldCheck className="w-8 h-8 text-brand group-hover:text-beige transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Health Guarantee</h3>
              <p className="text-dark/70 font-medium">100% vet-approved rescues and pristine organic products exclusively in-store.</p>
            </div>
            <div className="flex flex-col items-center md:items-start group">
              <div className="w-16 h-16 bg-beige rounded-2xl flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:bg-brand transition-all duration-300">
                <Heart className="w-8 h-8 text-brand group-hover:text-beige transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Meet & Greet</h3>
              <p className="text-dark/70 font-medium">Schedule a dedicated, peaceful session to bond with your potential rescue.</p>
            </div>
            <div className="flex flex-col items-center md:items-start group">
              <div className="w-16 h-16 bg-beige rounded-2xl flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:bg-brand transition-all duration-300">
                <Headphones className="w-8 h-8 text-brand group-hover:text-beige transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">24/7 Pet Support</h3>
              <p className="text-dark/70 font-medium">Our certified pet specialists are always on standby to help.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 lg:py-32 bg-brand relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/src/assets/Newsletter Background.png')] opacity-5 bg-center bg-cover mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Join the Pet Club</h2>
          <p className="text-secondary text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto">
            Subscribe to receive exclusive deals, organic treat recipes, and early access to VIP adoptions.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark/40" />
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-white text-dark pl-12 pr-4 py-4 rounded-full outline-none focus:ring-4 focus:ring-accent/30 font-medium font-sans"
              />
            </div>
            <button type="button" className="bg-accent hover:bg-white text-white hover:text-dark px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-colors shadow-lg shadow-accent/20">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
