import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Zap, Users, Utensils, Check, Sparkles } from 'lucide-react';
import { GlowButton } from './ui/glow-button';
export default function Solutions() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => { 
    const observer = new IntersectionObserver(([entry]) => { 
      if (entry.isIntersecting && !hasAnimated.current) { 
        setIsVisible(true); 
        hasAnimated.current = true; 
      } 
    }, { threshold: 0.1 }); 
    if (sectionRef.current) observer.observe(sectionRef.current); 
    return () => observer.disconnect(); 
  }, []);

  const solutions = [
    { 
      icon: Zap, 
      title: 'Flowly', 
      subtitle: 'CRM & Sales Automation',
      description: 'Complete CRM and sales automation infrastructure that transforms your pipeline into a revenue machine. From lead capture to close, every touchpoint is optimized.',
      features: ['AI-Powered Lead Scoring', 'Automated Follow-ups', 'Pipeline Analytics', 'Smart Integrations'],
      gradient: 'from-teal-400 via-cyan-500 to-teal-600',
      glowColor: 'rgba(20, 184, 166, 0.3)'
    },
    { 
      icon: Users, 
      title: 'UGC Engine', 
      subtitle: 'UGC Automation Infrastructure',
      description: 'End-to-end user-generated content automation. Source, manage, and deploy authentic creator content at scale with AI-driven matching and workflow automation.',
      features: ['Creator Matching AI', 'Content Pipeline', 'Rights Management', 'Performance Analytics'],
      gradient: 'from-cyan-400 via-teal-500 to-cyan-600',
      glowColor: 'rgba(6, 182, 212, 0.3)'
    },
    { 
      icon: Utensils, 
      title: 'RestoFlow', 
      subtitle: 'Restaurant Infrastructure',
      description: 'Complete restaurant management ecosystem. From reservations to reviews, inventory to insights—streamline every aspect of your restaurant operations.',
      features: ['Smart Reservations', 'Inventory AI', 'Staff Scheduling', 'Customer Insights'],
      gradient: 'from-teal-500 via-emerald-500 to-teal-600',
      glowColor: 'rgba(16, 185, 129, 0.3)'
    },
  ];

  return (
    <section 
      ref={sectionRef} 
      id="solutions" 
      className="relative py-32 px-6 overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-20" 
          style={{ background: 'radial-gradient(circle, rgba(13, 109, 109, 0.4) 0%, transparent 70%)', filter: 'blur(100px)' }}
        />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] rounded-full opacity-15" 
          style={{ background: 'radial-gradient(circle, rgba(10, 85, 85, 0.5) 0%, transparent 70%)', filter: 'blur(120px)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className={`inline-block px-4 py-2 mb-6 text-sm font-medium text-teal-400 border border-teal-400/30 rounded-full bg-teal-400/5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Sparkles className="w-4 h-4 inline mr-2" />
            Our Solutions
          </span>
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-white">Enterprise-Grade </span>
            <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-teal-500 bg-clip-text text-transparent">Automation</span>
          </h2>
          <p className={`text-xl text-gray-400 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Three powerful platforms designed to transform how Fortune 500 companies operate. Built for scale, designed for excellence.
          </p>
        </div>
        
        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative rounded-3xl p-8 transition-all duration-500 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} 
              style={{ 
                transitionDelay: `${200 + index * 100}ms`,
                background: 'rgba(8, 15, 18, 0.85)',
                border: '1px solid rgba(40, 60, 65, 0.4)',
                boxShadow: hoveredCard === index ? `0 0 60px ${solution.glowColor}` : 'none',
              }}
            >
              {/* Hover Glow Effect */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 50% 0%, ${solution.glowColor} 0%, transparent 60%)` }}
              />
              
              {/* Card Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Title */}
                <h3 className={`text-3xl font-bold mb-2 bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent`}>
                  {solution.title}
                </h3>
                <p className="text-teal-400 text-sm font-medium mb-4 uppercase tracking-wider">
                  {solution.subtitle}
                </p>
                
                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6">
                  {solution.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${solution.gradient} flex items-center justify-center`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <GlowButton href="#book-call">
                  <span>Book a Call</span>
                  <ArrowRight className="w-4 h-4" />
                </GlowButton>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-20 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex flex-col items-center p-8 rounded-3xl" style={{ background: 'rgba(8, 15, 18, 0.6)', border: '1px solid rgba(40, 60, 65, 0.4)' }}>
            <h3 className="text-2xl font-bold text-white mb-2">Ready to Transform Your Business?</h3>
            <p className="text-gray-400 mb-6">Join Fortune 500 companies already using AutoMatrix</p>
            <GlowButton href="#book-call">
              <span>Schedule Your Strategy Call</span>
              <ArrowRight className="w-5 h-5" />
            </GlowButton>
          </div>
        </div>
      </div>
    </section>
  );
}
