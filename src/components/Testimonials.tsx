import { Quote, Star } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import LogoLoop from './LogoLoop';
import { SiSalesforce, SiOracle, SiSap, SiCisco, SiAdobe, SiShopify, SiSpotify, SiNetflix, SiAirbnb, SiUber, SiAmazon, SiGoogle } from 'react-icons/si';

const companyLogos = [
  { node: <SiGoogle />, title: "Google", href: "https://google.com" },
  { node: <SiAmazon />, title: "Amazon", href: "https://amazon.com" },
  { node: <SiSalesforce />, title: "Salesforce", href: "https://salesforce.com" },
  { node: <SiOracle />, title: "Oracle", href: "https://oracle.com" },
  { node: <SiSap />, title: "SAP", href: "https://sap.com" },
  { node: <SiCisco />, title: "Cisco", href: "https://cisco.com" },
  { node: <SiAdobe />, title: "Adobe", href: "https://adobe.com" },
  { node: <SiShopify />, title: "Shopify", href: "https://shopify.com" },
  { node: <SiSpotify />, title: "Spotify", href: "https://spotify.com" },
  { node: <SiNetflix />, title: "Netflix", href: "https://netflix.com" },
  { node: <SiAirbnb />, title: "Airbnb", href: "https://airbnb.com" },
  { node: <SiUber />, title: "Uber", href: "https://uber.com" },
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => { const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting && !hasAnimated.current) { setIsVisible(true); hasAnimated.current = true; } }, { threshold: 0.2 }); if (sectionRef.current) observer.observe(sectionRef.current); return () => observer.disconnect(); }, []);

  return (
    <section ref={sectionRef} className="relative py-32 px-6" style={{ backgroundColor: '#060010' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Trusted by<br /><span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Enterprise Leaders</span></h2>
        </div>
        <div className={`mb-16 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <LogoLoop logos={companyLogos} speed={60} direction="left" logoHeight={48} gap={60} pauseOnHover scaleOnHover fadeOut fadeOutColor="#060010" />
        </div>
        <div className={`relative p-12 rounded-2xl bg-gradient-to-br from-slate-800/50 to-violet-900/20 border border-violet-500/20 overflow-hidden transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="relative z-10">
            <Quote className="w-12 h-12 text-violet-400/30 mb-6" />
            <div className="flex gap-1 mb-6">{[...Array(5)].map((_, i) => (<Star key={i} className="w-5 h-5 fill-violet-400 text-violet-400" />))}</div>
            <p className="text-2xl md:text-3xl text-slate-200 leading-relaxed mb-8">The KentraAI platform transformed our operational infrastructure. Client satisfaction increased 40% while our team focuses on strategic growth.</p>
            <div className="flex items-center gap-4">
              <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Sarah Chen" className="w-14 h-14 rounded-full object-cover" />
              <div><div className="font-semibold text-white">Sarah Chen</div><div className="text-sm text-slate-400">CEO, Elevate Consulting Group</div></div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-8 text-center">
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}><div className="text-3xl font-bold text-violet-400 mb-2">4.9/5</div><div className="text-sm text-slate-400">Client Rating</div></div>
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}><div className="text-3xl font-bold text-violet-400 mb-2">500+</div><div className="text-sm text-slate-400">Implementations</div></div>
          <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}><div className="text-3xl font-bold text-violet-400 mb-2">98%</div><div className="text-sm text-slate-400">Retention Rate</div></div>
        </div>
      </div>
    </section>
  );
}
