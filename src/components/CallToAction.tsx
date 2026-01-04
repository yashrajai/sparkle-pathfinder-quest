import React, { useEffect } from 'react';
import { Calendar, Laptop, Phone } from 'lucide-react';
import { useState, useRef } from 'react';
import { useThemeStyles } from '../hooks/useThemeStyles';

declare global {
  interface Window {
    Calendly?: any;
  }
}

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

  // Load Calendly script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const pathways = [
    { icon: Calendar, title: 'Request Demo', description: 'See the full platform in action' },
    { icon: Laptop, title: 'Free Consultation', description: 'Discuss your dealership needs' },
    { icon: Phone, title: 'Contact Sales', description: 'Talk to our team directly' },
  ];

  return (
    <section ref={sectionRef} id="demo" className="relative py-32 px-6" style={{ backgroundColor: bgPrimary }}>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: textPrimary }}>
            Ready to Transform Your<br /><span className="bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">Dealership Operations?</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {pathways.map((pathway, index) => (
            <div 
              key={index} 
              className={`group p-8 rounded-2xl text-center transition-all duration-700 hover:border-cyan-500/50 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} 
              style={{ transitionDelay: `${200 + index * 100}ms`, backgroundColor: bgSecondary, border: `1px solid ${borderColor}` }}
            >
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 group-hover:bg-gradient-to-br group-hover:from-cyan-400 group-hover:to-teal-500 flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                <pathway.icon className="w-7 h-7 text-cyan-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors duration-300" style={{ color: textPrimary }}>{pathway.title}</h3>
              <p className="text-sm" style={{ color: textSecondary }}>{pathway.description}</p>
            </div>
          ))}
        </div>
        
        {/* Calendly Embed */}
        <div className={`rounded-2xl overflow-hidden transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ backgroundColor: bgSecondary, border: `1px solid ${borderColor}` }}>
          <div className="h-1 bg-gradient-to-r from-cyan-400 to-teal-500"></div>
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/yashglobal-ai/30min?hide_gdpr_banner=1&hide_event_type_details=0&background_color=0f1419&text_color=ffffff&primary_color=22d3ee" 
            style={{ minWidth: '320px', height: '700px' }}
          ></div>
        </div>

        {/* Get Started Today Section */}
        <div className={`mt-16 relative p-12 rounded-2xl text-center transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ backgroundColor: bgSecondary, border: `1px solid ${borderColor}` }}>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-t-2xl"></div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: textPrimary }}>Get Started Today</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: textSecondary }}>Join dealerships nationwide using Automatrix to drive growth and efficiency</p>
          <a href="#demo" className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-400 hover:to-teal-500 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30">
            Request Demo
          </a>
        </div>
      </div>
    </section>
  );
}
