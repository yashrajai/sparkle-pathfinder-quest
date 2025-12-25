import { Cpu, Users, GraduationCap, Check, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { AnimatedBeamDemo } from './AnimatedBeamDemo';
import { useThemeStyles } from '../hooks/useThemeStyles';

export default function Solutions() {
  const { theme, bgPrimary, bgSecondary, textPrimary, textSecondary, borderColor, borderColorHover } = useThemeStyles();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => { const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting && !hasAnimated.current) { setIsVisible(true); hasAnimated.current = true; } }, { threshold: 0.2 }); if (sectionRef.current) observer.observe(sectionRef.current); return () => observer.disconnect(); }, []);

  const solutions = [
    { icon: Cpu, title: 'Automation Software', subtitle: 'Intelligent Platform', description: 'Unified command center replacing 5-10 disconnected tools.', image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800', features: ['Unified communication hub', 'Automated workflow engine', 'Real-time analytics', 'Seamless integrations'] },
    { icon: Users, title: 'Automation Agency', subtitle: 'Done-For-You', description: 'Expert team deploying complete automation ecosystems.', image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800', features: ['Custom automation strategy', 'Full implementation', 'Ongoing optimization', 'Dedicated success team'] },
    { icon: GraduationCap, title: 'Business School', subtitle: 'Self-Implementation', description: 'Comprehensive training for internal teams.', image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800', features: ['Structured curriculum', 'Live sessions', 'Expert community', 'Certification'] },
  ];

  return (
    <section ref={sectionRef} id="solutions" className="relative py-32 px-6 transition-colors duration-300" style={{ backgroundColor: bgPrimary }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: textPrimary }}>Three Pathways to<br /><span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Operational Excellence</span></h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className={`group rounded-2xl transition-all duration-700 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: `${200 + index * 100}ms`, backgroundColor: bgSecondary, border: `1px solid ${borderColor}` }}>
              <div className="relative h-48 overflow-hidden">
                <img src={solution.image} alt={solution.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgb(15, 23, 42), rgba(15, 23, 42, 0.7), transparent)' }}></div>
                <div className="absolute top-4 left-4 w-14 h-14 rounded-xl bg-violet-500/90 flex items-center justify-center"><solution.icon className="w-7 h-7 text-white" /></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2" style={{ color: textPrimary }}>{solution.title}</h3>
                <p className="text-sm font-medium text-violet-400 mb-4">{solution.subtitle}</p>
                <p className="mb-8 leading-relaxed" style={{ color: textSecondary }}>{solution.description}</p>
                <div className="space-y-3 mb-8">{solution.features.map((feature, i) => (<div key={i} className="flex items-center gap-3"><div className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0"><Check className="w-3 h-3 text-violet-400" /></div><span className="text-sm" style={{ color: textSecondary }}>{feature}</span></div>))}</div>
                <button className="w-full px-6 py-3 bg-violet-500/10 hover:bg-violet-500 text-violet-400 hover:text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-2"><span>Learn More</span><ArrowRight className="w-4 h-4" /></button>
              </div>
            </div>
          ))}
        </div>
        <div className={`mt-20 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: textPrimary }}>Seamless Integration<br /><span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Across Your Ecosystem</span></h3>
          </div>
          <AnimatedBeamDemo />
        </div>
      </div>
    </section>
  );
}
