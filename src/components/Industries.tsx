import { Briefcase, Home, Dumbbell, ShoppingCart, Megaphone, Building2, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function Industries() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => { const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting && !hasAnimated.current) { setIsVisible(true); hasAnimated.current = true; } }, { threshold: 0.2 }); if (sectionRef.current) observer.observe(sectionRef.current); return () => observer.disconnect(); }, []);

  const industries = [
    { icon: Briefcase, title: 'Professional Services', description: 'Streamline client engagement and billing', image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { icon: Home, title: 'Real Estate', description: 'Automate property management and leads', image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { icon: Dumbbell, title: 'Health & Wellness', description: 'Optimize membership and scheduling', image: 'https://images.pexels.com/photos/3775164/pexels-photo-3775164.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { icon: ShoppingCart, title: 'E-commerce', description: 'Enhance inventory and customer engagement', image: 'https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { icon: Megaphone, title: 'Marketing Agencies', description: 'Scale campaign management and reporting', image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { icon: Building2, title: 'Enterprise SMEs', description: 'Unify operations and customer success', image: 'https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ];

  return (
    <section ref={sectionRef} id="industries" className="relative py-32 px-6" style={{ backgroundColor: '#060010' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Industry-Specific<br /><span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Automation Solutions</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className={`group rounded-2xl bg-slate-800/30 border border-violet-500/20 hover:border-violet-500/50 transition-all duration-700 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: `${200 + index * 100}ms` }}>
              <div className="relative h-40 overflow-hidden">
                <img src={industry.image} alt={industry.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-violet-500/90 flex items-center justify-center"><industry.icon className="w-6 h-6 text-white" /></div>
              </div>
              <div className="p-6"><h3 className="text-lg font-semibold mb-3">{industry.title}</h3><p className="text-slate-400 text-sm">{industry.description}</p></div>
            </div>
          ))}
        </div>
        <div className={`mt-20 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a href="https://cal.com/yash-nbvvjb/15min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-violet-500 hover:bg-violet-600 text-white font-semibold rounded-lg transition-all duration-300 group/btn"><span>Discuss Your Requirements</span><ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" /></a>
        </div>
      </div>
    </section>
  );
}
