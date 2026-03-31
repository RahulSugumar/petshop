import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Shield, Eye, Lock, Database } from 'lucide-react';

export default function Privacy() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.privacy-anim', { 
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
        <div className="text-center mb-16 privacy-anim">
          <div className="flex justify-center mb-6">
            <div className="bg-brand/10 p-6 rounded-3xl">
              <Shield className="w-8 h-8 text-brand" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-dark tracking-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Privacy Policy
          </h1>
          <p className="text-dark/60 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </div>

        {/* Last Updated */}
        <div className="bg-white rounded-2xl p-6 shadow-lg shadow-brand/5 border border-brand/5 mb-8 privacy-anim">
          <p className="text-sm text-dark/60">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Information We Collect */}
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-brand/5 border border-brand/5 mb-8 privacy-anim">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-brand/10 p-4 rounded-2xl">
              <Database className="w-6 h-6 text-brand" />
            </div>
            <h2 className="text-3xl font-bold text-dark" style={{ fontFamily: 'var(--font-display)' }}>
              Information We Collect
            </h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-dark text-lg mb-3">Personal Information</h3>
              <ul className="space-y-2 text-dark/70">
                <li>• Name, email address, phone number</li>
                <li>• Home address and billing information</li>
                <li>• Pet ownership details and preferences</li>
                <li>• Adoption applications and forms</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-dark text-lg mb-3">Usage Information</h3>
              <ul className="space-y-2 text-dark/70">
                <li>• Pages visited and time spent on our site</li>
                <li>• Products viewed and search queries</li>
                <li>• Purchase history and adoption inquiries</li>
                <li>• Device information and browser type</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How We Use Your Information */}
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-brand/5 border border-brand/5 mb-8 privacy-anim">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-accent/10 p-4 rounded-2xl">
              <Eye className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-dark" style={{ fontFamily: 'var(--font-display)' }}>
              How We Use Your Information
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-secondary/20 rounded-2xl">
              <h3 className="font-bold text-dark mb-3">Service Provision</h3>
              <ul className="space-y-1 text-sm text-dark/70">
                <li>• Process orders and adoptions</li>
                <li>• Provide customer support</li>
                <li>• Send order confirmations</li>
                <li>• Schedule appointments</li>
              </ul>
            </div>
            
            <div className="p-6 bg-accent/10 rounded-2xl">
              <h3 className="font-bold text-dark mb-3">Communication</h3>
              <ul className="space-y-1 text-sm text-dark/70">
                <li>• Newsletter subscriptions</li>
                <li>• Product recommendations</li>
                <li>• Adoption updates</li>
                <li>• Promotional offers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Data Protection */}
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-brand/5 border border-brand/5 mb-8 privacy-anim">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-brand/10 p-4 rounded-2xl">
              <Lock className="w-6 h-6 text-brand" />
            </div>
            <h2 className="text-3xl font-bold text-dark" style={{ fontFamily: 'var(--font-display)' }}>
              Data Protection & Security
            </h2>
          </div>
          
          <div className="space-y-4 text-dark/70">
            <p>We implement industry-standard security measures including:</p>
            <ul className="space-y-2 ml-4">
              <li>• SSL encryption for all data transmissions</li>
              <li>• Secure payment processing through PCI-compliant providers</li>
              <li>• Regular security audits and vulnerability assessments</li>
              <li>• Limited employee access to sensitive information</li>
              <li>• Secure data storage with automatic backups</li>
            </ul>
          </div>
        </div>

        {/* Your Rights */}
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-brand/5 border border-brand/5 privacy-anim">
          <h2 className="text-2ei font-bold text-dark mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Your Privacy Rights
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-secondary/10 rounded-xl">
              <h3 className="font-bold text-dark mb-2">Access & Correction</h3>
              <p className="text-dark/70 text-sm">Request access to or correction of your personal information.</p>
            </div>
            <div className="p-4 bg-accent/10 rounded-xl">
              <h3 className="font-bold text-dark mb-2">Data Deletion</h3>
              <p className="text-dark/70 text-sm">Request deletion of your personal data (subject to legal requirements).</p>
            </div>
            <div className="p-4 bg-brand/10 rounded-xl">
              <h3 className="font-bold text-dark mb-2">Opt-Out</h3>
              <p className="text-dark/70 text-sm">Unsubscribe from marketing communications at any time.</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-brand/5 border border-brand/5 privacy-anim">
          <h2 className="text-2ei font-bold text-dark mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Contact Us About Privacy
          </h2>
          <p className="text-dark/70 mb-6">
            If you have questions about this Privacy Policy or how we handle your data, please contact us:
          </p>
          <div className="space-y-2 text-dark/70">
            <p><strong>Email:</strong> privacy@pethub.com</p>
            <p><strong>Phone:</strong> (800) PET-HUBB</p>
            <p><strong>Address:</strong> 942 Premium Pet Boulevard, Beverly Hills, CA 90210</p>
          </div>
        </div>
      </div>
    </div>
  );
}
