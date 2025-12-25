import { Calendar, Laptop, GraduationCap, CheckCircle2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function CallToAction() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => { const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting && !hasAnimated.current) { setIsVisible(true); hasAnimated.current = true; } }, { threshold: 0.2 }); if (sectionRef.current) observer.observe(sectionRef.current); return () => observer.disconnect(); }, []);

  const pathways = [
    { icon: Calendar, title: 'Book Consultation', description: 'Custom automation strategy session', link: 'https://cal.com/yash-nbvvjb/15min' },
    { icon: Laptop, title: 'Platform Demo', description: 'See the system in action', link: 'https://cal.com/yash-nbvvjb/15min' },
    { icon: GraduationCap, title: 'Training Program', description: 'Self-implementation curriculum', link: 'https://cal.com/yash-nbvvjb/15min' },
  ];

  return (
    <section ref={sectionRef} className="relative py-32 px-6" style={{ backgroundColor: '#060010' }}>
      <div className="absolute inset-0 opacity-20"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Ready to<br /><span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Scale Operations?</span></h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {pathways.map((pathway, index) => (
            <a key={index} href={pathway.link} target="_blank" rel="noopener noreferrer" className={`group p-8 rounded-2xl bg-slate-800/30 border border-violet-500/20 hover:border-violet-500/50 hover:bg-slate-800/50 transition-all duration-700 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: `${200 + index * 100}ms` }}>
              <div className="w-14 h-14 rounded-xl bg-violet-500/10 group-hover:bg-violet-500 flex items-center justify-center mx-auto mb-6 transition-all duration-300"><pathway.icon className="w-7 h-7 text-violet-400 group-hover:text-white transition-colors duration-300" /></div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-violet-400 transition-colors duration-300">{pathway.title}</h3>
              <p className="text-slate-400 text-sm">{pathway.description}</p>
            </a>
          ))}
        </div>
        <div className={`p-12 rounded-2xl bg-gradient-to-br from-slate-800/50 to-violet-900/20 border border-violet-500/20 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Begin with Complimentary Assessment</h3>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">Comprehensive operational analysis identifying automation opportunities</p>
          <a href="https://cal.com/yash-nbvvjb/15min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-4 bg-violet-500 hover:bg-violet-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-violet-500/50">Schedule Assessment</a>
        </div>
        <div className={`mt-12 flex flex-wrap justify-center gap-8 text-sm transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-4 h-4 text-violet-400" /><span>No credit card required</span></div>
          <div className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-4 h-4 text-violet-400" /><span>90-day performance guarantee</span></div>
          <div className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="w-4 h-4 text-violet-400" /><span>Implementation within 48 hours</span></div>
        </div>
      </div>
    </section>
  );
}
