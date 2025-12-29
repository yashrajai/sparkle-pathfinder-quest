import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, MessageSquare, Target, Rocket, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Process() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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

  const steps = [
    {
      number: '01',
      title: 'Discovery Call',
      subtitle: 'Understanding Your Vision',
      description: 'We begin with a deep-dive strategy session to understand your business goals, current pain points, and growth objectives. This is where we map your success.',
      icon: MessageSquare,
      details: ['60-minute strategy session', 'Business audit & analysis', 'Custom roadmap creation', 'ROI projection'],
      gradient: 'from-teal-400 to-cyan-500'
    },
    {
      number: '02',
      title: 'Strategy Design',
      subtitle: 'Architecting Your Solution',
      description: 'Our team crafts a bespoke automation strategy tailored to your unique needs. We design systems that scale with your ambitions.',
      icon: Target,
      details: ['Custom automation blueprint', 'Integration mapping', 'Technology stack selection', 'Timeline & milestones'],
      gradient: 'from-cyan-400 to-teal-500'
    },
    {
      number: '03',
      title: 'Implementation',
      subtitle: 'Building Your Future',
      description: 'We deploy your automation infrastructure with precision. Every component is tested, optimized, and refined for peak performance.',
      icon: Rocket,
      details: ['Agile development sprints', 'Weekly progress updates', 'Quality assurance testing', 'Seamless integration'],
      gradient: 'from-teal-500 to-emerald-500'
    },
    {
      number: '04',
      title: 'Scale & Optimize',
      subtitle: 'Accelerating Growth',
      description: 'Launch is just the beginning. We continuously monitor, optimize, and scale your systems to maximize ROI and drive exponential growth.',
      icon: Sparkles,
      details: ['Performance monitoring', 'Continuous optimization', 'Scaling strategies', 'Dedicated support'],
      gradient: 'from-emerald-400 to-teal-500'
    },
  ];

  return (
    <section 
      ref={sectionRef} 
      id="process" 
      className="relative py-32 px-6 overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[700px] h-[700px] rounded-full opacity-15" 
          style={{ background: 'radial-gradient(circle, rgba(13, 109, 109, 0.5) 0%, transparent 70%)', filter: 'blur(120px)' }}
        />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-20" 
          style={{ background: 'radial-gradient(circle, rgba(10, 85, 85, 0.4) 0%, transparent 70%)', filter: 'blur(100px)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className={`inline-block px-4 py-2 mb-6 text-sm font-medium text-teal-400 border border-teal-400/30 rounded-full bg-teal-400/5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our Process
          </span>
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-white">From Vision to </span>
            <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-teal-500 bg-clip-text text-transparent">Reality</span>
          </h2>
          <p className={`text-xl text-gray-400 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            A proven four-step methodology that transforms ambitious ideas into scalable, revenue-generating systems.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(20, 184, 166, 0.3) 10%, rgba(20, 184, 166, 0.3) 90%, transparent 100%)' }} />
          
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                onMouseEnter={() => setActiveStep(index)}
                className={`group relative transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                {/* Step Card */}
                <div 
                  className={`relative rounded-3xl p-8 transition-all duration-500 cursor-pointer h-full ${activeStep === index ? 'scale-105' : ''}`}
                  style={{ 
                    background: 'rgba(8, 15, 18, 0.85)',
                    border: activeStep === index ? '1px solid rgba(20, 184, 166, 0.5)' : '1px solid rgba(40, 60, 65, 0.4)',
                    boxShadow: activeStep === index ? '0 0 50px rgba(20, 184, 166, 0.2)' : 'none',
                  }}
                >
                  {/* Glow Effect */}
                  <div 
                    className={`absolute inset-0 rounded-3xl transition-opacity duration-500 ${activeStep === index ? 'opacity-100' : 'opacity-0'}`}
                    style={{ background: 'radial-gradient(circle at 50% 0%, rgba(20, 184, 166, 0.15) 0%, transparent 60%)' }}
                  />

                  <div className="relative z-10">
                    {/* Step Number */}
                    <div className={`text-6xl font-bold mb-4 bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent opacity-30`}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                      {step.title}
                    </h3>
                    <p className="text-teal-400/80 text-sm font-medium mb-4">
                      {step.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Details */}
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-300 text-xs">
                          <CheckCircle2 className={`w-4 h-4 text-transparent bg-gradient-to-r ${step.gradient} rounded-full`} style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }} />
                          <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center flex-shrink-0`}>
                            <CheckCircle2 className="w-3 h-3 text-white" />
                          </div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Connector Dot */}
                <div className="hidden lg:flex absolute -bottom-4 left-1/2 -translate-x-1/2 z-20">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${step.gradient} shadow-lg`} style={{ boxShadow: activeStep === index ? '0 0 20px rgba(20, 184, 166, 0.5)' : 'none' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`mt-24 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex flex-col items-center p-10 rounded-3xl" style={{ background: 'rgba(8, 15, 18, 0.6)', border: '1px solid rgba(40, 60, 65, 0.4)' }}>
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg shadow-teal-500/30">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">Start Your Transformation</h3>
            <p className="text-gray-400 mb-8 max-w-md">Book your discovery call today and let's architect your path to automation excellence.</p>
            <a 
              href="#book-call" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-bold text-lg rounded-xl transition-all shadow-lg shadow-teal-500/30 group"
            >
              <span>Book Your Discovery Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
