import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FAQ() {
  const containerRef = useRef(null);
  const [openItem, setOpenItem] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq-anim', { 
        y: 40, 
        opacity: 0, 
        duration: 0.8, 
        stagger: 0.15, 
        ease: 'power3.out' 
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      question: "How do I adopt a pet?",
      answer: "Visit our Adopt page to browse available pets. Once you find a pet you're interested in, click on their profile to learn more about their personality and requirements. Then visit our store to meet the pet and complete the adoption process."
    },
    {
      question: "What vaccinations do your pets have?",
      answer: "All our pets receive age-appropriate vaccinations, regular health check-ups, and are microchipped. Each pet's medical records are available for review during the adoption process."
    },
    {
      question: "Do you offer pet training services?",
      answer: "While we don't directly offer training services, we partner with local certified trainers and can provide recommendations based on your pet's specific needs and temperament."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, credit/debit cards, PayPal, and financing options for larger purchases. For pet adoptions, we also accept payment plans for qualified adopters."
    },
    {
      question: "Can I return a pet if it doesn't work out?",
      answer: "We understand that sometimes adoptions don't work out. We offer a 30-day return policy for adoptions, where we'll work with you to find a better match or provide additional support."
    },
    {
      question: "Do you deliver pet supplies?",
      answer: "Yes! We offer standard (5-7 days) and express (2-3 days) shipping options for all pet supplies. Orders over $50 qualify for free standard shipping."
    },
    {
      question: "How often should I bring my pet for check-ups?",
      answer: "We recommend annual check-ups for adult pets, semi-annual for seniors (7+ years), and more frequent visits for puppies and kittens. Your specific pet's needs may vary based on breed and health status."
    },
    {
      question: "What should I bring when adopting a pet?",
      answer: "Please bring a valid ID, proof of residence, and if you're renting, landlord approval. If you have other pets, bring their vaccination records. We also recommend bringing a pet carrier for safe transport home."
    }
  ];

  return (
    <div className="bg-beige min-h-screen pt-32 pb-24" ref={containerRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 faq-anim">
          <div className="flex justify-center mb-6">
            <div className="bg-brand/10 p-6 rounded-3xl">
              <HelpCircle className="w-8 h-8 text-brand" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-dark tracking-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Frequently Asked Questions
          </h1>
          <p className="text-dark/60 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Find answers to common questions about our pets, products, and services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg shadow-brand/5 border border-brand/5 overflow-hidden faq-anim"
            >
              <button
                onClick={() => setOpenItem(openItem === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-secondary/10 transition-colors"
              >
                <h3 className="font-bold text-dark text-lg pr-4">{faq.question}</h3>
                <ChevronDown 
                  className={`w-5 h-5 text-brand transition-transform duration-300 flex-shrink-0 ${
                    openItem === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openItem === index && (
                <div className="px-8 pb-6">
                  <p className="text-dark/70 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center faq-anim">
          <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-brand/5 border border-brand/5">
            <h2 className="text-2xl font-bold text-dark mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Still have questions?
            </h2>
            <p className="text-dark/60 mb-6">
              Our team is here to help! Contact us through any of the methods below.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-brand text-white px-6 py-3 rounded-full font-semibold hover:bg-dark transition-colors"
              >
                Visit Our Store
              </a>
              <a 
                href="tel:18007384822" 
                className="bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors"
              >
                Call (800) PET-HUBB
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
