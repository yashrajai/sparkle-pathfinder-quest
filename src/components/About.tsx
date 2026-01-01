import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Award, Globe, Users, Zap, Target, Shield, TrendingUp, Linkedin } from 'lucide-react';
import { GlowButton } from './ui/glow-button';
import { PinContainer } from './ui/3d-pin';
import founderPhoto from '@/assets/founder-photo.jpeg';

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

      </div>
    </section>
  );
}
