import React from 'react';
import { Calendar, Laptop, Phone, CheckCircle2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useThemeStyles } from '../hooks/useThemeStyles';

export default function CallToAction() {
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

  const pathways = [
    { icon: Calendar, title: 'Request Demo', description: 'See the full platform in action' },
    { icon: Laptop, title: 'Free Consultation', description: 'Discuss your dealership needs' },
    { icon: Phone, title: 'Contact Sales', description: 'Talk to our team directly' },
  ];

  return (
    <section ref={sectionRef} id="demo" className="relative py-32 px-6" style={{ backgroundColor: bgPrimary }}>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: textPrimary }}>
            Ready to Transform Your<br /><span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Dealership Operations?</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {pathways.map((pathway, index) => (
            <div 
              key={index} 
              className={`group p-8 rounded-2xl text-center transition-all duration-700 hover:border-red-500/50 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} 
              style={{ transitionDelay: `${200 + index * 100}ms`, backgroundColor: bgSecondary, border: `1px solid ${borderColor}` }}
            >
              <div className="w-14 h-14 rounded-xl bg-red-500/10 group-hover:bg-gradient-to-br group-hover:from-red-500 group-hover:to-red-600 flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                <pathway.icon className="w-7 h-7 text-red-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors duration-300" style={{ color: textPrimary }}>{pathway.title}</h3>
              <p className="text-sm" style={{ color: textSecondary }}>{pathway.description}</p>
            </div>
          ))}
        </div>
        
        <div className={`p-12 rounded-2xl text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ backgroundColor: bgSecondary, border: `1px solid ${borderColor}` }}>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-t-2xl"></div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: textPrimary }}>Get Started Today</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: textSecondary }}>Join dealerships nationwide using Automatrix to drive growth and efficiency</p>
          <a href="#" className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-red-600/30">
            Request Demo
          </a>
        </div>
        
        <div className={`mt-12 flex flex-wrap justify-center gap-8 text-sm transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-2" style={{ color: textSecondary }}>
            <CheckCircle2 className="w-4 h-4 text-red-500" />
            <span>No setup fees</span>
          </div>
          <div className="flex items-center gap-2" style={{ color: textSecondary }}>
            <CheckCircle2 className="w-4 h-4 text-red-500" />
            <span>Free data migration</span>
          </div>
          <div className="flex items-center gap-2" style={{ color: textSecondary }}>
            <CheckCircle2 className="w-4 h-4 text-red-500" />
            <span>Dedicated support team</span>
          </div>
        </div>
      </div>
    </section>
  );
}
