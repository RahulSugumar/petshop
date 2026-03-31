import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Truck, Package, Clock, Shield } from 'lucide-react';

export default function Shipping() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.shipping-anim', { 
        y: 40, 
        opacity: 0, 
        duration: 0.8, 
        stagger: 0.15, 
        ease: 'power3.out' 
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-beige min-h-screen pt-32 pb-24" ref={containerRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 shipping-anim">
          <h1 className="text-5xl md:text-6xl font-bold text-dark tracking-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Shipping & Returns
          </h1>
          <p className="text-dark/60 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Everything you need to know about getting your pet products and adoption information delivered safely.
          </p>
        </div>

        {/* Shipping Options */}
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-brand/5 border border-brand/5 mb-8 shipping-anim">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-brand/10 p-4 rounded-2xl">
              <Truck className="w-6 h-6 text-brand" />
            </div>
            <h2 className="text-3xl font-bold text-dark" style={{ fontFamily: 'var(--font-display)' }}>Shipping Options</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-secondary/20 rounded-2xl">
              <h3 className="font-bold text-dark text-lg mb-2">Standard Shipping</h3>
              <p className="text-dark/70 mb-2">5-7 business days</p>
              <p className="text-2xl font-bold text-brand">$9.99</p>
              <p className="text-sm text-dark/60 mt-2">Perfect for food, toys, and regular supplies</p>
            </div>
            
            <div className="p-6 bg-accent/10 rounded-2xl">
              <h3 className="font-bold text-dark text-lg mb-2">Express Shipping</h3>
              <p className="text-dark/70 mb-2">2-3 business days</p>
              <p className="text-2xl font-bold text-accent">$19.99</p>
              <p className="text-sm text-dark/60 mt-2">For urgent orders and medications</p>
            </div>
          </div>
        </div>

        {/* Return Policy */}
        <div className="bg-white rounded-[3rem] p-8ei md:p-12 shadow-xl shadow-brand/5 border border-brand/5 mb-8 shipping-anim">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-accent/10 p-4 rounded-2xl">
              <Package className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-dark" style={{ fontFamily: 'var(--font-display)' }}>Return Policy</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-brand mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-dark mb-1">30-Day Return Window</h3>
                <p className="text-dark/70">Return unused items in original packaging within 30 days of delivery.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Shield className="w-5 h-5 text-brand mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-dark mb-1">Quality Guarantee</h3>
                <p className="text-dark/70">Full refund if products arrive damaged or don't meet quality standards.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Special Notes */}
        <div className="bg-white rounded-[3rem] p-8ei md:p-12 shadow-xl shadow-brand/5 border border-brand/5 shipping-anim">
          <h2 className="text-2xl font-bold text-dark mb-6" style={{ fontFamily: 'var(--font-display)' }}>Important Notes</h2>
          <ul className="space-y-3 text-dark/70">
            <li>• Live animals cannot be shipped - all adoptions require in-person pickup</li>
            <li>• Prescription medications require valid veterinary authorization</li>
            <li>• Custom orders may have extended processing times</li>
            <li>• Shipping to Alaska and Hawaii may incur additional fees</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
