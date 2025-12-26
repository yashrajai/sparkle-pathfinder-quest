import React from 'react';
import { FileText, Headphones, Code, Check } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useThemeStyles } from '../hooks/useThemeStyles';

export default function Solutions() {
  const { theme, bgPrimary, bgSecondary, textPrimary, textSecondary, borderColor, accentColor } = useThemeStyles();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const isDark = theme === 'dark';

  useEffect(() => { 
    const observer = new IntersectionObserver(([entry]) => { 
      if (entry.isIntersecting && !hasAnimated.current) { setIsVisible(true); hasAnimated.current = true; } 
    }, { threshold: 0.1 }); 
    if (sectionRef.current) observer.observe(sectionRef.current); 
    return () => observer.disconnect(); 
  }, []);

  const services = [
    { 
      icon: FileText, 
      title: 'Invoice Automation', 
      description: 'End-to-end invoice processing from Email/WhatsApp to TallyPrime with AI-powered data extraction and automatic synchronization.',
      features: ['Multi-Channel Invoice Collection', 'Automated Data Extraction', 'TallyPrime Integration', 'Error Reduction Systems']
    },
    { 
      icon: Headphones, 
      title: 'AI Voice Agents', 
      description: 'Revolutionary AI-powered voice agents handling calls, inquiries, bookings, and customer support 24/7.',
      features: ['Automated Call Handling', 'Appointment Booking', 'Complaint Resolution', 'Mass Cold Calling']
    },
    { 
      icon: Code, 
      title: 'Custom SaaS Development', 
      description: 'Tailored software solutions designed to address your specific business needs with scalable architecture.',
      features: ['Custom Features', 'Scalable Architecture', 'Cloud-Based Solutions', 'Integration Ready']
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="relative py-24 px-6 transition-colors duration-300" style={{ backgroundColor: isDark ? '#0c1215' : '#f8fafb' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: textPrimary }}>
            Our Core <span style={{ color: '#14b8a6' }}>Services</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: textSecondary }}>
            Transform your business operations with our AI-driven solutions designed for efficiency and growth
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group rounded-2xl p-8 transition-all duration-500 hover:border-teal-500/50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ 
                transitionDelay: `${200 + index * 100}ms`,
                backgroundColor: isDark ? '#111a1f' : '#ffffff',
                border: `1px solid ${isDark ? 'rgba(20, 184, 166, 0.15)' : 'rgba(20, 184, 166, 0.2)'}`,
                boxShadow: isDark ? 'none' : '0 4px 20px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(20, 184, 166, 0.1)' }}>
                <service.icon className="w-7 h-7" style={{ color: '#14b8a6' }} />
              </div>
              
              <h3 className="text-xl font-bold mb-3" style={{ color: textPrimary }}>{service.title}</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: textSecondary }}>{service.description}</p>
              
              <div className="space-y-3">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-4 h-4 flex-shrink-0" style={{ color: '#14b8a6' }} />
                    <span className="text-sm" style={{ color: textSecondary }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
