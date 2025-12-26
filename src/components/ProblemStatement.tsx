import React from 'react';
import { Bot, AlertCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useThemeStyles } from '../hooks/useThemeStyles';

export default function ProblemStatement() {
  const { theme, bgPrimary, bgSecondary, textPrimary, textSecondary, borderColor } = useThemeStyles();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting && !hasAnimated.current) { setIsVisible(true); hasAnimated.current = true; } }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="passion" className="relative py-32 px-6 overflow-hidden transition-colors duration-300" style={{ backgroundColor: bgPrimary }}>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`} style={{ backgroundColor: bgSecondary, border: `1px solid ${borderColor}` }}>
            <Bot className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="text-sm font-medium" style={{ color: textSecondary }}>Meet SARA - Our AI</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: textPrimary }}>
            What We Are Passionate About<br /><span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Is Where We Can Help You</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: textSecondary }}>
            We are excited to introduce <strong className="text-red-500">SARA – Smart Assistance and Response AI</strong>, the revolutionary AI chatbot designed to enhance your experience with our software.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          <div className={`relative overflow-hidden rounded-2xl transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="AI Technology" className="w-full h-full object-cover rounded-2xl" />
            <div className="absolute inset-0" style={{ background: theme === 'dark' ? 'linear-gradient(to top, rgb(10, 12, 16), rgba(10, 12, 16, 0.5), transparent)' : 'linear-gradient(to top, rgba(10, 12, 16, 0.9), rgba(10, 12, 16, 0.5), transparent)' }}></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-2xl font-bold mb-2 text-white">Smart Assistance & Response AI</h3>
              <p className="text-slate-200">SARA combines advanced text and voice capabilities to assist customers seamlessly</p>
            </div>
          </div>
          
          <div className={`p-12 rounded-2xl relative overflow-hidden group transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{ backgroundColor: bgSecondary, border: `1px solid ${borderColor}` }}>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-6">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: textPrimary }}>What SARA Can Do</h3>
              <ul className="space-y-3">
                {['Select vehicles and generate leads', 'Create appointments effortlessly', 'Enable secure payment processing', 'Schedule promises to pay', 'Automate repetitive tasks'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span style={{ color: textSecondary }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
