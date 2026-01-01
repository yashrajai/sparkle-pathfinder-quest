import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    },
    {
      number: '02',
      title: 'Strategy Design',
      subtitle: 'Architecting Your Solution',
      description: 'Our team crafts a bespoke automation strategy tailored to your unique needs. We design systems that scale with your ambitions.',
    },
    {
      number: '03',
      title: 'Implementation',
      subtitle: 'Building Your Future',
      description: 'We deploy your automation infrastructure with precision. Every component is tested, optimized, and refined for peak performance.',
    },
    {
      number: '04',
      title: 'Scale & Optimize',
      subtitle: 'Accelerating Growth',
      description: 'Launch is just the beginning. We continuously monitor, optimize, and scale your systems to maximize ROI and drive exponential growth.',
    },
  ];

  return (
    <section 
      ref={sectionRef} 
      id="process" 
      className="relative py-24 md:py-32 px-4 md:px-6 overflow-hidden"
      style={{ backgroundColor: '#0a0a0a' }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header - Split layout */}
        <div className={`flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-16 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="lg:max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-white">How We </span>
              <span className="text-emerald-400">Work</span>
              <span className="text-white"> - From idea to</span>
              <br />
              <span className="text-white">implementation</span>
            </h2>
          </div>
          <div className="lg:max-w-sm lg:pt-2">
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Our process is simple, transparent, and built to deliver results — fast.
            </p>
          </div>
        </div>

        {/* Separator Line */}
        <div className={`h-px bg-gray-800 mb-0 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />

        {/* Tab Navigation */}
        <div className={`grid grid-cols-4 gap-2 md:gap-3 mt-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`relative py-4 md:py-5 px-4 md:px-6 text-center transition-all duration-300 rounded-xl border ${
                activeStep === index 
                  ? 'border-emerald-400/50 bg-emerald-400/5' 
                  : 'border-gray-800 bg-transparent hover:border-gray-700 hover:bg-white/[0.02]'
              }`}
            >
              <span className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                activeStep === index 
                  ? 'text-emerald-400' 
                  : 'text-gray-500 hover:text-gray-400'
              }`}>
                {step.number}
              </span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div 
          className={`relative mt-0 rounded-b-2xl overflow-hidden transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ 
            background: 'linear-gradient(180deg, #111111 0%, #0d1a1a 100%)',
            minHeight: '280px'
          }}
        >
          {/* Green glow at bottom */}
          <div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-48 pointer-events-none"
            style={{ 
              background: 'radial-gradient(ellipse 60% 100% at 50% 100%, rgba(16, 185, 129, 0.25) 0%, transparent 70%)',
            }}
          />
          
          {/* Subtle corner gradients */}
          <div 
            className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none"
            style={{ 
              background: 'radial-gradient(circle at 0% 100%, rgba(16, 185, 129, 0.15) 0%, transparent 60%)',
            }}
          />
          <div 
            className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none"
            style={{ 
              background: 'radial-gradient(circle at 100% 100%, rgba(16, 185, 129, 0.15) 0%, transparent 60%)',
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 md:py-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="max-w-2xl"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {steps[activeStep].title}
                </h3>
                <p className="text-emerald-400/80 text-sm md:text-base font-medium mb-4">
                  {steps[activeStep].subtitle}
                </p>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
                  {steps[activeStep].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
