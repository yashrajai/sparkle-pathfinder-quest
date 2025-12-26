import React from 'react';
import { Car, Building2, Users, CreditCard, Wrench, FileCheck, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useThemeStyles } from '../hooks/useThemeStyles';

export default function Industries() {
  const { bgPrimary, bgSecondary, textPrimary, textSecondary, borderColor } = useThemeStyles();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => { 
    const observer = new IntersectionObserver(([entry]) => { 
      if (entry.isIntersecting && !hasAnimated.current) { setIsVisible(true); hasAnimated.current = true; } 
    }, { threshold: 0.2 }); 
    if (sectionRef.current) observer.observe(sectionRef.current); 
    return () => observer.disconnect(); 
  }, []);

  const useCases = [
    { icon: Car, title: 'Retail & Remote Sales', description: 'Enable seamless in-store and remote transactions with digital tools', image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { icon: CreditCard, title: 'BHPH / Lease Operations', description: 'Complete financing platform with payment processing and compliance', image: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { icon: Wrench, title: 'Service & Reconditioning', description: 'Optimize workflow, parts inventory, and quality control', image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { icon: Building2, title: 'Multi-Location Management', description: 'Scale across multiple dealerships with unified operations', image: 'https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { icon: Users, title: 'HR & Payroll', description: 'Complete workforce management with recruitment and payroll', image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { icon: FileCheck, title: 'Accounting & Compliance', description: 'Centralized financial data with automated reporting', image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ];

  return (
    <section ref={sectionRef} id="industries" className="relative py-32 px-6" style={{ backgroundColor: bgPrimary }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: textPrimary }}>
            Streamline Every<br /><span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Dealership Operation</span>
          </h2>
          <p className={`text-xl max-w-2xl mx-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: textSecondary }}>
            From sales to service, our platform empowers every department
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className={`group rounded-2xl overflow-hidden transition-all duration-700 hover:border-red-500/50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} 
              style={{ transitionDelay: `${200 + index * 100}ms`, backgroundColor: bgSecondary, border: `1px solid ${borderColor}` }}
            >
              <div className="relative h-40 overflow-hidden">
                <img src={useCase.image} alt={useCase.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-[#0a0c10]/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3" style={{ color: textPrimary }}>{useCase.title}</h3>
                <p className="text-sm" style={{ color: textSecondary }}>{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`mt-16 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a href="#demo" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-red-600/30 group">
            <span>Request a Demo</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
