import React from 'react';
import { Quote, Star } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useThemeStyles } from '../hooks/useThemeStyles';

export default function Testimonials() {
  const { theme, textPrimary, textSecondary } = useThemeStyles();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
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

  const testimonials = [
    {
      quote: "The invoice automation system has transformed our accounting workflow. We've reduced processing time by 85% and virtually eliminated manual entry errors. The AI chatbot makes retrieving invoice data instantaneous.",
      name: "Rajesh Patel",
      title: "Finance Director",
      company: "Global Manufacturing Ltd",
      color: '#0D8ABC'
    },
    {
      quote: "Their AI voice agents have revolutionized our customer service. We now handle 3x more calls without increasing staff, and customer satisfaction has improved by 40%. The 24/7 availability is a game-changer.",
      name: "Priya Sharma",
      title: "Operations Head",
      company: "TechServe Solutions",
      color: '#6366F1'
    },
    {
      quote: "The custom SaaS solution Automatrix developed for us perfectly integrates with our existing systems. The scalability and cloud architecture have helped us expand operations across multiple locations seamlessly.",
      name: "Amit Kumar",
      title: "CTO",
      company: "Innovate Retail",
      color: '#22C55E'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-24 px-6" style={{ backgroundColor: isDark ? '#0c1215' : '#f8fafb' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: textPrimary }}>
            Trusted by <span style={{ color: '#14b8a6' }}>Industry Leaders</span>
          </h2>
          <p className={`text-lg transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: textSecondary }}>
            See how Automatrix AI is transforming businesses across sectors
          </p>
        </div>
        
        <div className={`relative p-10 rounded-2xl overflow-hidden transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ backgroundColor: isDark ? '#111a1f' : '#ffffff', border: `1px solid ${isDark ? 'rgba(20, 184, 166, 0.15)' : 'rgba(20, 184, 166, 0.2)'}` }}>
          <div className="relative z-10">
            <p className="text-lg md:text-xl leading-relaxed mb-8 min-h-[100px]" style={{ color: textSecondary }}>
              {testimonials[activeTestimonial].quote}
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: testimonials[activeTestimonial].color }}>
                {testimonials[activeTestimonial].name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold" style={{ color: textPrimary }}>{testimonials[activeTestimonial].name}</div>
                <div className="text-sm" style={{ color: textSecondary }}>{testimonials[activeTestimonial].title}</div>
                <div className="text-sm" style={{ color: '#14b8a6' }}>{testimonials[activeTestimonial].company}</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`h-2 rounded-full transition-all ${i === activeTestimonial ? 'w-8' : 'w-2'}`}
                style={{ backgroundColor: i === activeTestimonial ? '#14b8a6' : isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
