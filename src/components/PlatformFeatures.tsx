import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Shield, Cloud, Zap, Lock, Server, CheckCircle } from 'lucide-react';
import { useThemeStyles } from '../hooks/useThemeStyles';

export default function PlatformFeatures() {
  const { theme, bgPrimary, bgSecondary, textPrimary, textSecondary, borderColor } = useThemeStyles();
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

  const features = [
    { icon: Cloud, title: 'AWS Hosted', description: 'Industry-leading cloud infrastructure for maximum reliability and scalability' },
    { icon: Shield, title: 'Multi-Layer Security', description: 'Continuous threat monitoring with advanced encryption protocols' },
    { icon: Lock, title: 'Real-Time Detection', description: 'Advanced intrusion detection systems protecting critical data' },
    { icon: Server, title: 'Disaster Recovery', description: 'Redundant systems with automated failover for business continuity' },
  ];

  return (
    <section ref={sectionRef} id="platform" className="relative py-32 px-6" style={{ backgroundColor: bgPrimary }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`} style={{ backgroundColor: bgSecondary, border: `1px solid ${borderColor}` }}>
            <Shield className="w-4 h-4 text-red-500" />
            <span className="text-sm font-medium" style={{ color: textSecondary }}>Resilient by Design</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: textPrimary }}>
            Enterprise-Grade<br /><span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Infrastructure</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: textSecondary }}>
            Our platform is strategically hosted on Amazon Web Services (AWS), ensuring maximum reliability, scalability, and security.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group p-8 rounded-2xl text-center transition-all duration-700 hover:border-red-500/50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${200 + index * 100}ms`, backgroundColor: bgSecondary, border: `1px solid ${borderColor}` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center mx-auto mb-6 group-hover:from-red-500 group-hover:to-red-600 transition-all">
                <feature.icon className="w-8 h-8 text-red-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold mb-3" style={{ color: textPrimary }}>{feature.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: textSecondary }}>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={`mt-16 p-8 rounded-2xl transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ backgroundColor: bgSecondary, border: `1px solid ${borderColor}` }}>
          <div className="flex flex-wrap justify-center gap-8">
            {['99.99% Uptime', 'SOC 2 Compliant', '24/7 Monitoring', 'Encrypted Data'].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-red-500" />
                <span style={{ color: textPrimary }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
