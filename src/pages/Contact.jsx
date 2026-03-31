import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Contact() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.contact-anim', { 
        y: 40, 
        opacity: 0, 
        duration: 0.8, 
        stagger: 0.15, 
        ease: 'power3.out', 
        clearProps: 'all' 
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-beige min-h-screen pt-32 pb-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 contact-anim">
          <h1 className="text-5xl md:text-7xl font-bold text-dark tracking-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>Visit Our Sanctuary</h1>
          <p className="text-dark/60 text-lg md:text-xl font-medium">
            We don't ship pets holding them in boxes. To adopt a rescue or purchase our premium curated accessories, you must visit us in person or call ahead to reserve.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Information Card */}
          <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-brand/5 border border-brand/5 contact-anim">
            <h2 className="text-3xl font-bold text-dark mb-8" style={{ fontFamily: 'var(--font-display)' }}>Boutique Details</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand/10 p-4 rounded-2xl shrink-0"><MapPin className="w-6 h-6 text-brand" /></div>
                <div>
                  <h3 className="font-bold text-dark text-lg mb-1">Store Location</h3>
                  <p className="text-dark/70 font-medium">942 Premium Pet Boulevard<br/>Beverly Hills, CA 90210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-4 rounded-2xl shrink-0"><Phone className="w-6 h-6 text-accent" /></div>
                <div>
                  <h3 className="font-bold text-dark text-lg mb-1">Direct Inquiries</h3>
                  <p className="text-dark/70 font-medium mb-1">Call to check product availability or schedule a meet-and-greet with our rescues.</p>
                  <a href="tel:18007384822" className="text-accent font-extrabold text-2xl hover:text-dark transition-colors">1 (800) PET-HUBB</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-4 rounded-2xl shrink-0"><Clock className="w-6 h-6 text-dark" /></div>
                <div>
                  <h3 className="font-bold text-dark text-lg mb-1">Visiting Hours</h3>
                  <ul className="text-dark/70 font-medium space-y-1 mt-2">
                    <li className="flex justify-between w-full max-w-[200px]"><span>Mon - Fri:</span> <span>9am - 8pm</span></li>
                    <li className="flex justify-between w-full max-w-[200px]"><span>Saturday:</span> <span>10am - 6pm</span></li>
                    <li className="flex justify-between w-full max-w-[200px] text-accent font-bold"><span>Sunday:</span> <span>Closed</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl shadow-brand/10 contact-anim isolate">
            <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1000&q=80" alt="PetHub physical boutique store interior" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent z-10"></div>
            
            <div className="absolute bottom-8 left-8 z-20 pr-8">
              <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full inline-flex items-center gap-2 shadow-lg mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-dark">Currently Open</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md leading-tight" style={{ fontFamily: 'var(--font-display)' }}>The Premier Pet Experience</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
