import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useThemeStyles } from '../hooks/useThemeStyles';

export default function CallToAction() {
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

  return (
    <section ref={sectionRef} id="contact" className="relative py-24 px-6" style={{ backgroundColor: isDark ? '#0c1215' : '#f8fafb' }}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - CTA Text */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: textPrimary }}>
              Let's <span style={{ color: '#14b8a6' }}>Connect</span>
            </h2>
            <p className="text-lg mb-8" style={{ color: textSecondary }}>
              Schedule a 15-minute call to discuss how we can help transform your business with AI solutions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(20, 184, 166, 0.1)' }}>
                  <Mail className="w-5 h-5" style={{ color: '#14b8a6' }} />
                </div>
                <div>
                  <p className="text-sm" style={{ color: textSecondary }}>Email Us</p>
                  <a href="mailto:support@automatrix.agency" className="font-medium hover:underline" style={{ color: textPrimary }}>support@automatrix.agency</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(20, 184, 166, 0.1)' }}>
                  <Phone className="w-5 h-5" style={{ color: '#14b8a6' }} />
                </div>
                <div>
                  <p className="text-sm" style={{ color: textSecondary }}>Call Us</p>
                  <a href="tel:+919054233396" className="font-medium hover:underline" style={{ color: textPrimary }}>+91 9054233396</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(20, 184, 166, 0.1)' }}>
                  <MapPin className="w-5 h-5" style={{ color: '#14b8a6' }} />
                </div>
                <div>
                  <p className="text-sm" style={{ color: textSecondary }}>Visit Us</p>
                  <p className="font-medium" style={{ color: textPrimary }}>India</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Contact Form */}
          <div className={`p-8 rounded-2xl transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{ backgroundColor: isDark ? '#111a1f' : '#ffffff', border: `1px solid ${isDark ? 'rgba(20, 184, 166, 0.15)' : 'rgba(20, 184, 166, 0.2)'}` }}>
            <h3 className="text-xl font-bold mb-6" style={{ color: textPrimary }}>Get Started Today</h3>
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all focus:ring-2 focus:ring-teal-500"
                  style={{ backgroundColor: isDark ? '#0c1215' : '#f8fafb', border: `1px solid ${isDark ? 'rgba(20, 184, 166, 0.15)' : 'rgba(0,0,0,0.1)'}`, color: textPrimary }}
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all focus:ring-2 focus:ring-teal-500"
                  style={{ backgroundColor: isDark ? '#0c1215' : '#f8fafb', border: `1px solid ${isDark ? 'rgba(20, 184, 166, 0.15)' : 'rgba(0,0,0,0.1)'}`, color: textPrimary }}
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all focus:ring-2 focus:ring-teal-500"
                  style={{ backgroundColor: isDark ? '#0c1215' : '#f8fafb', border: `1px solid ${isDark ? 'rgba(20, 184, 166, 0.15)' : 'rgba(0,0,0,0.1)'}`, color: textPrimary }}
                />
              </div>
              <div>
                <textarea 
                  placeholder="Tell us about your needs" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all focus:ring-2 focus:ring-teal-500 resize-none"
                  style={{ backgroundColor: isDark ? '#0c1215' : '#f8fafb', border: `1px solid ${isDark ? 'rgba(20, 184, 166, 0.15)' : 'rgba(0,0,0,0.1)'}`, color: textPrimary }}
                />
              </div>
              <button 
                type="submit"
                className="w-full py-3 rounded-xl font-medium text-white transition-all hover:shadow-lg hover:shadow-teal-500/30"
                style={{ backgroundColor: '#14b8a6' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
