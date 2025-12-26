import React from 'react';
import { ClipboardList, Settings, Plug, Rocket } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useThemeStyles } from '../hooks/useThemeStyles';

export default function ProblemStatement() {
  const { theme, textPrimary, textSecondary } = useThemeStyles();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting && !hasAnimated.current) { setIsVisible(true); hasAnimated.current = true; } }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const steps = [
    { step: 'STEP 1', icon: ClipboardList, title: 'Requirements Analysis', description: 'We analyze your current invoice processing workflow, voice support needs, and integration requirements to design the perfect solution.' },
    { step: 'STEP 2', icon: Settings, title: 'Custom Configuration', description: 'Our team configures AI systems to match your specific needs, including invoice templates, voice agent scripts, and integration parameters.' },
    { step: 'STEP 3', icon: Plug, title: 'Integration & Testing', description: 'We seamlessly integrate our solutions with your existing systems like TallyPrime, conduct thorough testing, and ensure optimal performance.' },
    { step: 'STEP 4', icon: Rocket, title: 'Training & Deployment', description: 'We provide comprehensive training for your team and ensure smooth deployment with ongoing support and optimization.' },
  ];

  return (
    <section ref={sectionRef} id="workflow" className="relative py-24 px-6 overflow-hidden transition-colors duration-300" style={{ backgroundColor: isDark ? '#0c1215' : '#f8fafb' }}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className={`text-sm font-medium mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`} style={{ color: '#14b8a6' }}>
            IMPLEMENTATION PROCESS
          </p>
          <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: textPrimary }}>
            How We Transform Your Business
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div 
              key={index} 
              className={`relative text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5" style={{ backgroundColor: 'rgba(20, 184, 166, 0.2)' }}>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rotate-45 border-t border-r" style={{ borderColor: 'rgba(20, 184, 166, 0.3)' }}></div>
                </div>
              )}
              
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6" style={{ backgroundColor: 'rgba(20, 184, 166, 0.1)' }}>
                <item.icon className="w-8 h-8" style={{ color: '#14b8a6' }} />
              </div>
              
              <p className="text-xs font-semibold mb-2" style={{ color: '#14b8a6' }}>{item.step}</p>
              <h3 className="text-lg font-bold mb-3" style={{ color: textPrimary }}>{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: textSecondary }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
