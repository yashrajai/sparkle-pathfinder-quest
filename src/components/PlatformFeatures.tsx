import { useState, useEffect, useRef } from 'react';
import { Users, MessageSquare, CreditCard, BarChart3, Check, Sparkles } from 'lucide-react';

export default function PlatformFeatures() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => { const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting && !hasAnimated.current) { setIsVisible(true); hasAnimated.current = true; } }, { threshold: 0.2 }); if (sectionRef.current) observer.observe(sectionRef.current); return () => observer.disconnect(); }, []);

  const features = [
    { icon: Users, title: 'Lead Management', description: 'Enterprise lead capture and qualification', image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800', details: ['Multi-channel capture', 'Intelligent scoring', 'Automated follow-up', 'Pipeline visualization'] },
    { icon: MessageSquare, title: 'Communication Automation', description: 'Personalized multi-channel communications', image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800', details: ['AI personalization', 'Multi-channel messaging', 'Behavioral triggers', 'Template library'] },
    { icon: CreditCard, title: 'Payment Processing', description: 'Seamless invoicing and subscriptions', image: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800', details: ['Automated invoicing', 'Multiple payment methods', 'Recurring billing', 'Payment tracking'] },
    { icon: BarChart3, title: 'Analytics Dashboard', description: 'Real-time insights for decisions', image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800', details: ['Custom dashboards', 'Revenue analytics', 'Conversion tracking', 'Predictive insights'] },
  ];

  return (
    <section ref={sectionRef} id="platform" className="relative py-32 px-6" style={{ backgroundColor: '#060010' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>One Platform<br /><span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Infinite Capability</span></h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            {features.map((feature, index) => (
              <div key={index} onClick={() => setActiveFeature(index)} className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${activeFeature === index ? 'bg-violet-500/10 border-2 border-violet-500' : 'bg-slate-800/30 border-2 border-violet-500/20 hover:border-violet-500/30'}`}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${activeFeature === index ? 'bg-violet-500' : 'bg-slate-700'}`}><feature.icon className="w-6 h-6 text-white" /></div>
                  <div className="flex-1"><h3 className="text-lg font-semibold mb-1">{feature.title}</h3><p className="text-slate-400 text-sm">{feature.description}</p></div>
                </div>
              </div>
            ))}
          </div>
          <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative rounded-2xl overflow-hidden bg-slate-800/30 border border-violet-500/20">
              <div className="relative h-64 overflow-hidden">
                <img src={features[activeFeature].image} alt={features[activeFeature].title} className="w-full h-full object-cover transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                <div className="absolute top-4 right-4 px-4 py-2 bg-violet-500/90 backdrop-blur-sm rounded-lg flex items-center gap-2"><Sparkles className="w-4 h-4 text-white" /><span className="text-sm font-semibold text-white">AI-Powered</span></div>
              </div>
              <div className="p-8">
                <div className="space-y-3">{features[activeFeature].details.map((detail, i) => (<div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-slate-900/50"><Check className="w-5 h-5 text-violet-400 flex-shrink-0" /><span className="text-slate-300">{detail}</span></div>))}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
