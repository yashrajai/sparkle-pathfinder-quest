import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Clock, ShieldCheck, HeadphonesIcon } from 'lucide-react';
import { useThemeStyles } from '../hooks/useThemeStyles';

export default function PlatformFeatures() {
  const { theme, textPrimary, textSecondary } = useThemeStyles();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const isDark = theme === 'dark';

  useEffect(() => { 
    const observer = new IntersectionObserver(([entry]) => { 
      if (entry.isIntersecting && !hasAnimated.current) { setIsVisible(true); hasAnimated.current = true; } 
    }, { threshold: 0.2 }); 
    if (sectionRef.current) observer.observe(sectionRef.current); 
    return () => observer.disconnect(); 
  }, []);

  const benefits = [
    { 
      icon: Clock, 
      title: 'Time Efficient', 
      description: 'Reduce invoice processing time by up to 85% with automated data extraction and TallyPrime integration. Handle 10L+ invoices monthly with ease.'
    },
    { 
      icon: ShieldCheck, 
      title: 'Error-Free', 
      description: 'Automated checks ensure data accuracy in accounting workflows. AI-powered validation eliminates manual entry errors and ensures compliance.'
    },
    { 
      icon: HeadphonesIcon, 
      title: '24/7 Support', 
      description: 'Round-the-clock AI voice agents and chatbots provide instant responses to queries, handle customer support, and manage bookings automatically.'
    },
  ];

  return (
    <section ref={sectionRef} id="benefits" className="relative py-24 px-6" style={{ backgroundColor: isDark ? '#0c1215' : '#f8fafb' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className={`text-sm font-medium mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`} style={{ color: '#14b8a6' }}>
            KEY ADVANTAGES
          </p>
          <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: textPrimary }}>
            Why Choose <span style={{ color: '#14b8a6' }}>Automatrix</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`group p-8 rounded-2xl text-center transition-all duration-700 hover:border-teal-500/50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ 
                transitionDelay: `${200 + index * 100}ms`, 
                backgroundColor: isDark ? '#111a1f' : '#ffffff',
                border: `1px solid ${isDark ? 'rgba(20, 184, 166, 0.15)' : 'rgba(20, 184, 166, 0.2)'}`,
                boxShadow: isDark ? 'none' : '0 4px 20px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgba(20, 184, 166, 0.1)' }}>
                <benefit.icon className="w-8 h-8" style={{ color: '#14b8a6' }} />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: textPrimary }}>{benefit.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: textSecondary }}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
