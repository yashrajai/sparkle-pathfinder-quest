import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Award, Globe, Users, Zap, Target, Shield, TrendingUp } from 'lucide-react';
import { GlowButton } from './ui/glow-button';

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

  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every solution is engineered with meticulous attention to detail, ensuring flawless execution at scale.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay at the bleeding edge of technology, continuously evolving our platforms to deliver competitive advantages.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We hold ourselves to the highest standards, delivering enterprise-grade solutions that exceed expectations.'
    },
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

        {/* Values Grid */}
        <div className={`mb-20 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Our <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-teal-500 bg-clip-text text-transparent">Core Values</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group rounded-2xl p-8 text-center transition-all duration-500 hover:scale-105"
                style={{ 
                  background: 'rgba(8, 15, 18, 0.85)',
                  border: '1px solid rgba(40, 60, 65, 0.4)',
                }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className={`text-center transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex flex-col items-center p-10 rounded-3xl" style={{ background: 'rgba(8, 15, 18, 0.6)', border: '1px solid rgba(40, 60, 65, 0.4)' }}>
            <h3 className="text-3xl font-bold text-white mb-2">Ready to Join the Elite?</h3>
            <p className="text-gray-400 mb-8 max-w-lg">Partner with AutoMatrix and unlock the automation infrastructure that powers the world's most successful companies.</p>
            <GlowButton href="#book-call">
              <span>Book Your Call Today</span>
              <ArrowRight className="w-5 h-5" />
            </GlowButton>
          </div>
        </div>
      </div>
    </section>
  );
}
