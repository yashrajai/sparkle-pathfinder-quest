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
      title: 'Understand Your Vision',
      description: 'We start with a discovery session to learn about your goals, challenges, and how AI can make a real impact in your business.',
    },
    {
      number: '02',
      title: 'Design the Right Solution',
      description: 'Our team maps out a custom strategy, whether it\'s a chatbot, AI automation, content generation, or blockchain integration, tailored precisely to your needs.',
    },
    {
      number: '03',
      title: 'Build, Test & Launch',
      description: 'We develop your solution using real data, test it thoroughly, and deploy it into your workflow with minimal disruption.',
    },
    {
      number: '04',
      title: 'Support & Scale',
      description: 'After launch, we provide ongoing support, performance monitoring, and upgrades, so your AI grows as your business does.',
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
        <div className={`grid grid-cols-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`relative py-5 px-4 text-left transition-all duration-300 border-b-2 ${
                activeStep === index 
                  ? 'border-emerald-400' 
                  : 'border-gray-800 hover:border-gray-700'
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
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {steps[activeStep].title}
                </h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
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
