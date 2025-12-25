import { AlertCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useThemeStyles } from '../hooks/useThemeStyles';

export default function ProblemStatement() {
  const { theme, bgPrimary, bgSecondary, textPrimary, textSecondary, borderColor, borderColorHover } = useThemeStyles();
  const [isVisible, setIsVisible] = useState(false);
  const [countUp, setCountUp] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting && !hasAnimated.current) { setIsVisible(true); hasAnimated.current = true; } }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && countUp < 73) { const timer = setTimeout(() => setCountUp(prev => Math.min(prev + 1, 73)), 20); return () => clearTimeout(timer); }
  }, [isVisible, countUp]);

  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden transition-colors duration-300" style={{ backgroundColor: bgPrimary }}>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`} style={{ backgroundColor: bgSecondary, border: `1px solid ${borderColor}` }}>
            <AlertCircle className="w-4 h-4 animate-pulse" style={{ color: textSecondary }} />
            <span className="text-sm font-medium" style={{ color: textSecondary }}>The Challenge</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: textPrimary }}>
            Manual Operations<br /><span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Limit Growth Potential</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: textSecondary }}>Every hour spent on repetitive tasks represents unrealized strategic value</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          <div className={`relative overflow-hidden rounded-2xl transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Business team" className="w-full h-full object-cover rounded-2xl" />
            <div className="absolute inset-0" style={{ background: theme === 'dark' ? 'linear-gradient(to top, rgb(15, 23, 42), rgba(15, 23, 42, 0.5), transparent)' : 'linear-gradient(to top, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.5), transparent)' }}></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-2xl font-bold mb-2 text-white">Manual Processes Slow You Down</h3>
              <p className="text-slate-200">Break free from repetitive tasks and focus on what matters most</p>
            </div>
          </div>
          <div className={`text-center p-12 rounded-2xl relative overflow-hidden group transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{ backgroundColor: bgSecondary, border: `1px solid ${borderColor}` }}>
            <div className="relative z-10">
              <div className="text-5xl md:text-6xl font-bold text-violet-400 mb-4 transition-all duration-300 group-hover:scale-110">{countUp}%</div>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: textSecondary }}>of business leaders report spending more time managing operations than driving strategic growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
