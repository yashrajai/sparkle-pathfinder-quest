import React from 'react';
import { Quote, Star } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useThemeStyles } from '../hooks/useThemeStyles';

export default function Testimonials() {
  const { bgPrimary, bgSecondary, textPrimary, textSecondary, borderColor } = useThemeStyles();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => { 
    const observer = new IntersectionObserver(([entry]) => { 
      if (entry.isIntersecting && !hasAnimated.current) { setIsVisible(true); hasAnimated.current = true; } 
    }, { threshold: 0.2 }); 
    if (sectionRef.current) observer.observe(sectionRef.current); 
    return () => observer.disconnect(); 
  }, []);

  const testimonials = [
    {
      quote: "Running four dealerships means I need systems that scale. Automatrix has been the backbone of our growth at Florida Fine Cars. Every department—service, sales, accounting, and even collections—is connected in one intelligent system. It's more than just software; it's become a true competitive advantage for us.",
      name: "Amir Azarpad",
      title: "President and Founder",
      company: "Florida Fine Cars"
    },
    {
      quote: "AutoMatrix is very easy to use—CLICK, CLICK, DONE! The best part about AutoMatrix I would say for sure is going to be the reporting. You can see every single type of report possible. There are over 120 reports.",
      name: "Benji Urra",
      title: "President and Founder",
      company: "Dealer Client"
    },
    {
      quote: "I've been using Automatrix since 2019, and it's been great to see how much the system has grown over the years. I love having all my data in one easy-to-use portal—it makes everything so much simpler to manage. Plus, it's awesome knowing I have a software partner who's always working on new features and improvements.",
      name: "Hudson Biondo",
      title: "President",
      company: "Master Car"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 px-6" style={{ backgroundColor: bgPrimary }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: textPrimary }}>
            Testimonials<br /><span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">What Our Clients Say</span>
          </h2>
        </div>
        
        <div className={`relative p-12 rounded-2xl overflow-hidden transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ backgroundColor: bgSecondary, border: `1px solid ${borderColor}` }}>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
          <div className="relative z-10">
            <Quote className="w-12 h-12 text-red-500/30 mb-6" />
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (<Star key={i} className="w-5 h-5 fill-red-500 text-red-500" />))}
            </div>
            <p className="text-xl md:text-2xl leading-relaxed mb-8 min-h-[120px]" style={{ color: textPrimary }}>
              {testimonials[activeTestimonial].quote}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-bold text-xl">
                {testimonials[activeTestimonial].name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold" style={{ color: textPrimary }}>{testimonials[activeTestimonial].name}</div>
                <div className="text-sm" style={{ color: textSecondary }}>{testimonials[activeTestimonial].title}, {testimonials[activeTestimonial].company}</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-3 h-3 rounded-full transition-all ${i === activeTestimonial ? 'bg-red-500 w-8' : 'bg-white/20 hover:bg-white/40'}`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-3 gap-8 text-center">
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-3xl font-bold text-red-500 mb-2">Since 2019</div>
            <div className="text-sm" style={{ color: textSecondary }}>Trusted Platform</div>
          </div>
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-3xl font-bold text-red-500 mb-2">120+</div>
            <div className="text-sm" style={{ color: textSecondary }}>Report Types</div>
          </div>
          <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-3xl font-bold text-red-500 mb-2">12</div>
            <div className="text-sm" style={{ color: textSecondary }}>Integrated Modules</div>
          </div>
        </div>
      </div>
    </section>
  );
}
