import React, { useState, useEffect, useRef } from 'react';
import { Linkedin } from 'lucide-react';
import founderPhoto from '@/assets/founder-photo.jpeg';
import { FaAws, FaSlack, FaWhatsapp, FaMeta, FaStripe } from 'react-icons/fa6';
import { SiGooglecalendar, SiHubspot, SiZendesk, SiSalesforce, SiOpenai, SiZapier, SiAsana, SiRazorpay, SiN8N, SiSquare } from 'react-icons/si';
import { TbBrandGoogle } from 'react-icons/tb';

// Integration icons data
const topRowIcons = [
  { icon: FaAws, color: '#FF9900', glow: 'rgba(255, 153, 0, 0.2)' },
  { icon: SiGooglecalendar, color: '#4285F4', glow: 'rgba(66, 133, 244, 0.2)' },
  { icon: SiHubspot, color: '#FF7A59', glow: 'rgba(255, 122, 89, 0.2)' },
  { icon: FaSlack, color: '#4A154B', glow: 'rgba(74, 21, 75, 0.2)' },
  { icon: SiZendesk, color: '#03363D', glow: 'rgba(3, 54, 61, 0.2)' },
  { icon: SiSalesforce, color: '#00A1E0', glow: 'rgba(0, 161, 224, 0.2)' },
  { icon: FaWhatsapp, color: '#25D366', glow: 'rgba(37, 211, 102, 0.2)' },
  { icon: SiOpenai, color: '#FFFFFF', glow: 'rgba(255, 255, 255, 0.15)' },
  { icon: SiZapier, color: '#FF4A00', glow: 'rgba(255, 74, 0, 0.2)' },
];

const bottomRowIcons = [
  { icon: FaMeta, color: '#0081FB', glow: 'rgba(0, 129, 251, 0.2)' },
  { icon: SiAsana, color: '#F06A6A', glow: 'rgba(240, 106, 106, 0.2)' },
  { icon: SiRazorpay, color: '#3395FF', glow: 'rgba(51, 149, 255, 0.2)' },
  { icon: TbBrandGoogle, color: '#8E75FF', glow: 'rgba(142, 117, 255, 0.2)' },
  { icon: SiN8N, color: '#EA4B71', glow: 'rgba(234, 75, 113, 0.2)' },
  { icon: FaStripe, color: '#635BFF', glow: 'rgba(99, 91, 255, 0.2)' },
  { icon: TbBrandGoogle, color: '#4285F4', glow: 'rgba(66, 133, 244, 0.2)' },
  { icon: SiZapier, color: '#9747FF', glow: 'rgba(151, 71, 255, 0.2)' },
  { icon: SiSquare, color: '#FFFFFF', glow: 'rgba(255, 255, 255, 0.15)' },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => { 
    const observer = new IntersectionObserver(([entry]) => { 
      if (entry.isIntersecting && !hasAnimated.current) { 
        setIsVisible(true); 
        hasAnimated.current = true; 
      } 
    }, { threshold: 0.1 }); 
    if (sectionRef.current) observer.observe(sectionRef.current); 
    return () => observer.disconnect(); 
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="about" 
      className="relative py-32 px-6 overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-20" 
          style={{ background: 'radial-gradient(circle, rgba(13, 109, 109, 0.4) 0%, transparent 70%)', filter: 'blur(100px)' }}
        />
        <div className="absolute bottom-1/4 right-0 w-[700px] h-[700px] rounded-full opacity-15" 
          style={{ background: 'radial-gradient(circle, rgba(10, 85, 85, 0.5) 0%, transparent 70%)', filter: 'blur(120px)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Founder Card */}
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div 
            className="rounded-2xl p-8 md:p-10 relative overflow-hidden"
            style={{ 
              background: 'linear-gradient(135deg, rgba(15, 25, 30, 0.95) 0%, rgba(8, 15, 18, 0.98) 100%)',
              border: '1px solid rgba(45, 80, 85, 0.5)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.05)'
            }}
          >
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(circle at 0% 0%, rgba(20, 184, 166, 0.15) 0%, transparent 50%)' }} />
            
            <div className="flex flex-col lg:flex-row gap-10 relative z-10">
              {/* Left: Photo */}
              <div className="flex-shrink-0">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-cyan-400 to-teal-500 rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity" />
                  <img 
                    src={founderPhoto} 
                    alt="Yash Raj - Founder" 
                    className="relative w-full max-w-xs lg:w-64 h-80 object-cover rounded-xl border border-white/20"
                  />
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <a 
                    href="https://www.linkedin.com/in/yashraj2333/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <div>
                    <p className="text-white font-semibold">Yash Raj</p>
                    <p className="text-gray-500 text-sm">Founder & Systems Architect</p>
                  </div>
                </div>
              </div>
              
              {/* Right: Content */}
              <div className="flex flex-col justify-center flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-gradient-to-r from-teal-500 to-transparent" />
                  <span className="text-xs uppercase tracking-widest text-teal-400 font-medium">About the Founder</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-300 via-cyan-400 to-teal-500 bg-clip-text text-transparent mb-6">
                  Yash Raj
                </h2>
                
                <div className="space-y-4 text-gray-300 leading-relaxed mb-6">
                  <p>
                    I build AI-driven systems that replace manual work inside businesses.
                  </p>
                  <p>
                    My work is focused on designing structured automation infrastructures — not experiments, not demos. I help companies remove operational bottlenecks by connecting AI agents, workflows, data, and decision-making into one stable system.
                  </p>
                  <p>
                    I've worked closely with service businesses, real estate operators, and e-commerce brands to implement lead generation engines, AI agents, and full automation stacks that actually run in production.
                  </p>
                  <p className="text-teal-400 font-medium">
                    The goal is simple: less chaos, fewer humans doing repetitive work, and systems that scale without breaking.
                  </p>
                </div>

                {/* Quote */}
                <div className="border-l-2 border-teal-500/50 pl-5 py-2">
                  <p className="text-gray-400 italic text-lg">
                    "I don't sell tools. I design systems that run businesses without constant human involvement."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Integrations Section */}
        <div className={`text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-orange-400 border border-orange-400/30 rounded-full bg-orange-400/10">
            POWERFUL INTEGRATIONS
          </span>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-16">
            Seamlessly Integrate<br />Every App
          </h3>
          
          {/* Orb and Marquee Container */}
          <div className="relative max-w-5xl mx-auto mb-12">
            {/* Central Orb */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 rounded-full opacity-80 pointer-events-none z-0"
              style={{
                background: 'radial-gradient(ellipse at 30% 30%, rgba(56, 189, 248, 0.4) 0%, rgba(20, 184, 166, 0.3) 30%, rgba(249, 115, 22, 0.4) 70%, transparent 100%)',
                filter: 'blur(40px)',
              }}
            />
            
            {/* Marquee Rows */}
            <div className="relative z-10 space-y-6 overflow-hidden py-8">
              {/* Top Row - Moving Right */}
              <div className="flex overflow-hidden">
                <div className="flex animate-marquee-right gap-6">
                  {[...topRowIcons, ...topRowIcons].map((item, i) => (
                    <div 
                      key={i}
                      className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                      style={{ 
                        background: 'rgba(20, 25, 30, 0.8)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        boxShadow: `0 0 20px ${item.glow}`,
                      }}
                    >
                      <item.icon className="w-8 h-8 md:w-10 md:h-10 transition-all group-hover:scale-110" style={{ color: item.color }} />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Bottom Row - Moving Left */}
              <div className="flex overflow-hidden">
                <div className="flex animate-marquee-left gap-6">
                  {[...bottomRowIcons, ...bottomRowIcons].map((item, i) => (
                    <div 
                      key={i}
                      className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                      style={{ 
                        background: 'rgba(20, 25, 30, 0.8)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        boxShadow: `0 0 20px ${item.glow}`,
                      }}
                    >
                      <item.icon className="w-8 h-8 md:w-10 md:h-10 transition-all group-hover:scale-110" style={{ color: item.color }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />
          </div>
          
          {/* Explore Button */}
          <button 
            className="px-8 py-3 rounded-full text-white font-medium transition-all hover:scale-105"
            style={{ 
              background: 'rgba(255,255,255,0.1)', 
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)'
            }}
          >
            Explore All
          </button>
        </div>

      </div>
    </section>
  );
}
