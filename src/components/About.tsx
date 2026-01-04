import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Award, Globe, Users, Zap, Target, Shield, TrendingUp, Linkedin } from 'lucide-react';
import { GlowButton } from './ui/glow-button';
import { PinContainer } from './ui/3d-pin';
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

  const stats = [
    { number: '500+', label: 'Enterprise Clients', icon: Users },
    { number: '$2B+', label: 'Revenue Generated', icon: TrendingUp },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Global Support', icon: Globe },
  ];


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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className={`inline-block px-4 py-2 mb-6 text-sm font-medium text-teal-400 border border-teal-400/30 rounded-full bg-teal-400/5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            About AutoMatrix
          </span>
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-white">Built for </span>
            <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-teal-500 bg-clip-text text-transparent">Fortune 500</span>
          </h2>
          <p className={`text-xl text-gray-400 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            We're not just another automation agency. We're the strategic partner that Fortune 500 companies trust to transform their operations.
          </p>
        </div>

        {/* Stats Grid */}
        <div className={`grid md:grid-cols-4 gap-6 mb-24 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl p-8 text-center transition-all duration-500 hover:scale-105"
              style={{ 
                background: 'rgba(8, 15, 18, 0.85)',
                border: '1px solid rgba(40, 60, 65, 0.4)',
              }}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(20, 184, 166, 0.2) 0%, transparent 60%)' }} />
              <div className="relative z-10">
                <stat.icon className="w-8 h-8 text-teal-400 mx-auto mb-4" />
                <div className="text-4xl font-bold bg-gradient-to-r from-teal-300 via-cyan-400 to-teal-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Founder Card with 3D Pin Effect */}
        <div className={`flex justify-center mb-24 transition-all duration-700 delay-350 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <PinContainer
            title="Connect on LinkedIn"
            href="https://www.linkedin.com/in/yashraj2333/"
            containerClassName="h-[30rem] w-full max-w-4xl"
          >
            <div 
              className="flex flex-col md:flex-row gap-8 w-[700px] h-[340px] p-8 rounded-2xl relative overflow-hidden"
              style={{ 
                background: 'linear-gradient(135deg, rgba(15, 25, 30, 0.95) 0%, rgba(8, 15, 18, 0.98) 100%)',
                border: '1px solid rgba(45, 80, 85, 0.5)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.05)'
              }}
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(circle at 0% 0%, rgba(20, 184, 166, 0.15) 0%, transparent 50%)' }} />
              
              {/* Photo with enhanced styling */}
              <div className="flex-shrink-0 relative z-10">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-cyan-400 to-teal-500 rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity" />
                  <img 
                    src={founderPhoto} 
                    alt="Yash Raj - Founder" 
                    className="relative w-44 h-56 object-cover rounded-xl border border-white/20"
                  />
                </div>
                <div className="flex items-center gap-3 mt-5 px-1">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center">
                    <Linkedin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Yash Raj</p>
                    <p className="text-gray-500 text-xs">Founder & CEO</p>
                  </div>
                </div>
              </div>
              
              {/* Content with better typography */}
              <div className="flex flex-col justify-center relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-gradient-to-r from-teal-500 to-transparent" />
                  <span className="text-xs uppercase tracking-widest text-teal-400 font-medium">About the Agency</span>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-300 via-cyan-400 to-teal-500 bg-clip-text text-transparent mb-4">
                  AutoMatrix
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  A systems-focused AI automation agency built to help businesses replace manual operations with structured, scalable automation. We design reliable workflows that connect tools, data, and decision-making into one cohesive system.
                </p>
                <p className="text-gray-500 leading-relaxed text-sm italic border-l-2 border-teal-500/50 pl-4">
                  "Every implementation is built for real-world use — not demos, not templates. The focus is on clarity, stability, and long-term performance."
                </p>
              </div>
            </div>
          </PinContainer>
        </div>

        {/* Story Section */}
        <div className={`grid lg:grid-cols-2 gap-16 items-center mb-24 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-teal-500 bg-clip-text text-transparent">AutoMatrix</span> Story
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Founded with a singular vision: to bridge the gap between enterprise-grade automation and accessible implementation. We saw Fortune 500 companies struggling with outdated systems and manual processes that were bleeding millions.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Today, we're the trusted partner for industry leaders who demand nothing but excellence. Our team of world-class engineers, strategists, and automation experts work tirelessly to deliver solutions that don't just meet expectations—they shatter them.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Every line of code we write, every system we design, every strategy we craft is engineered for one purpose: <span className="text-teal-400 font-semibold">your exponential growth</span>.
            </p>
            <GlowButton href="#book-call">
              <span>Book a Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </GlowButton>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div 
              className="rounded-3xl p-10 relative overflow-hidden"
              style={{ 
                background: 'rgba(8, 15, 18, 0.85)',
                border: '1px solid rgba(40, 60, 65, 0.4)',
              }}
            >
              <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(20, 184, 166, 0.3) 0%, transparent 50%)' }} />
              <div className="relative z-10">
                <div className="text-7xl font-bold bg-gradient-to-r from-teal-300 via-cyan-400 to-teal-500 bg-clip-text text-transparent mb-4">
                  10x
                </div>
                <p className="text-2xl text-white font-semibold mb-2">Average ROI Increase</p>
                <p className="text-gray-400">Across all client implementations</p>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Enterprise Security</p>
                      <p className="text-gray-400 text-sm">SOC 2 Type II Certified</p>
                    </div>
                  </div>
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
