import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, MessageSquare, Image, Users, BarChart3, Zap, Database, Send, Play, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

// Animated Chat Mockup Component
const ChatMockup = () => {
  const [typing, setTyping] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTyping(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full p-4 flex flex-col gap-3">
      {/* Message from AI */}
      <div className="flex items-start gap-2">
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
          <Zap className="w-3.5 h-3.5 text-white" />
        </div>
        <div className="bg-[#1a2a2a] rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[80%]">
          <div className="h-2 w-32 bg-gray-600 rounded-full" />
        </div>
      </div>
      
      {/* Message from User */}
      <div className="flex items-start gap-2 justify-end">
        <div className="bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border border-teal-500/30 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%]">
          <div className="h-2 w-40 bg-teal-400/50 rounded-full" />
        </div>
        <div className="w-7 h-7 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-600" />
        </div>
      </div>

      {/* Input field */}
      <div className="mt-auto">
        <div className="bg-[#0a1414] border border-teal-500/30 rounded-xl px-4 py-3 flex items-center gap-2">
          <div className={`h-2 flex-1 rounded-full transition-all duration-500 ${typing ? 'bg-teal-400/60 w-3/4' : 'bg-gray-700 w-1/2'}`} />
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center">
            <Send className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Image Generation Mockup
const ImageGenMockup = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 2));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full p-4 flex flex-col gap-3">
      {/* Preview area */}
      <div className="flex-1 rounded-xl bg-gradient-to-br from-[#0a1a1a] to-[#0d2020] border border-teal-500/20 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(20,184,166,0.03)_50%,transparent_75%)] bg-[length:20px_20px]" />
        <div className="px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-medium">
          Generating Image...
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="space-y-2">
        <div className="h-2 bg-[#0a1414] rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-end">
          <span className="px-3 py-1 rounded-md bg-teal-500/20 border border-teal-500/30 text-teal-400 text-xs font-medium">
            Generate
          </span>
        </div>
      </div>
    </div>
  );
};

// Lead Generation Mockup
const LeadGenMockup = () => {
  return (
    <div className="w-full h-full p-4 flex flex-col gap-3">
      {/* Lead cards stack */}
      <div className="relative flex-1">
        {[0, 1, 2].map((i) => (
          <div 
            key={i}
            className="absolute inset-x-0 rounded-xl bg-gradient-to-br from-[#0d1a1a] to-[#0a1515] border border-teal-500/20 p-3"
            style={{ 
              top: `${i * 12}px`,
              opacity: 1 - i * 0.2,
              transform: `scale(${1 - i * 0.03})`,
              zIndex: 3 - i
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
                <Users className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex-1">
                <div className="h-2.5 w-24 bg-white/80 rounded-full mb-1.5" />
                <div className="h-2 w-32 bg-gray-500 rounded-full" />
              </div>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        ))}
      </div>

      {/* Action bar */}
      <div className="flex items-center gap-2 mt-8">
        <div className="flex-1 h-2 bg-teal-500/30 rounded-full" />
        <span className="px-3 py-1.5 rounded-md bg-white/90 text-gray-900 text-xs font-semibold">
          Generate Leads
        </span>
      </div>
    </div>
  );
};

// Data Integration Mockup
const DataMockup = () => {
  return (
    <div className="w-full h-full p-4 flex flex-col">
      {/* Icons grid */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative">
          {/* Central element */}
          <div className="w-20 h-12 rounded-lg bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border border-teal-500/40 flex items-center justify-center">
            <span className="text-teal-400 font-bold text-sm">100 %</span>
          </div>
          <div className="text-center mt-2 text-xs text-gray-400">Data transparency</div>
          
          {/* Floating icons */}
          {[
            { Icon: Database, top: -30, right: -40 },
            { Icon: BarChart3, top: -20, left: -50 },
            { Icon: Zap, bottom: -25, right: -30 },
            { Icon: Users, bottom: -20, left: -40 },
          ].map(({ Icon, ...pos }, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8 rounded-lg bg-[#1a2525] border border-gray-700 flex items-center justify-center"
              style={pos}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            >
              <Icon className="w-4 h-4 text-gray-400" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Analytics Mockup
const AnalyticsMockup = () => {
  return (
    <div className="w-full h-full p-4 flex flex-col gap-3">
      <div className="flex gap-3">
        {/* Efficiency card */}
        <div className="flex-1 rounded-xl bg-gradient-to-br from-teal-500/10 to-emerald-500/10 border border-teal-500/30 p-3">
          <div className="text-[10px] text-gray-400 mb-1">Efficiency</div>
          <div className="text-lg font-bold text-teal-400">87%</div>
        </div>
        {/* Growth card */}
        <div className="flex-1 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 p-3">
          <div className="text-[10px] text-gray-400 mb-1">Growth</div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <ArrowRight className="w-3 h-3 text-emerald-400" />
          </div>
        </div>
      </div>
      
      {/* Cost reduction */}
      <div className="flex-1 rounded-xl bg-[#0a1414] border border-gray-800 p-3 flex items-end">
        <div className="w-full">
          <div className="flex items-end gap-1 h-12">
            {[60, 45, 70, 35, 50, 25].map((h, i) => (
              <motion.div 
                key={i}
                className="flex-1 bg-gradient-to-t from-teal-500 to-emerald-400 rounded-t"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              />
            ))}
          </div>
          <div className="mt-2 text-[10px] text-gray-500">Cost: -67%</div>
        </div>
      </div>
    </div>
  );
};

// Suitable For Tags Component
const SuitableForSection = () => {
  const tags = ['Creative agencies', 'Startup', 'Creators & marketers', 'Small business', 'Enterprise'];
  
  return (
    <div className="w-full h-full p-5 flex flex-col" style={{ background: 'linear-gradient(135deg, #0d4d40 0%, #064e3b 50%, #047857 100%)' }}>
      <h4 className="text-white font-semibold text-lg mb-4">We are suitable for</h4>
      <div className="w-12 h-0.5 bg-white/30 mb-4" />
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <motion.span
            key={tag}
            className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default function Solutions() {
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

  const services = [
    { 
      title: 'AI-Powered Chatbots', 
      description: 'Our chatbots are built to understand your business type and deliver personalized experiences.',
      Mockup: ChatMockup,
      size: 'large'
    },
    { 
      title: 'Image & Video Generation', 
      description: 'Generate high-quality visuals matched to your brand style.',
      Mockup: ImageGenMockup,
      size: 'medium'
    },
    { 
      title: 'Blockchain Integration', 
      description: 'From smart contract validation to predictive analytics.',
      Mockup: DataMockup,
      size: 'medium'
    },
    { 
      title: 'Lead Generation', 
      description: 'Generate high quality leads for your business growth.',
      Mockup: LeadGenMockup,
      size: 'medium'
    },
    { 
      title: 'AI Consultation', 
      description: 'We engineer smart tools built around your business logic.',
      Mockup: AnalyticsMockup,
      size: 'medium'
    },
  ];

  return (
    <section 
      ref={sectionRef} 
      id="solutions" 
      className="relative py-24 md:py-32 px-4 md:px-6 overflow-hidden"
      style={{ backgroundColor: '#050a0a' }}
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ 
        backgroundImage: 'linear-gradient(rgba(20,184,166,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full opacity-20" 
        style={{ background: 'radial-gradient(circle, rgba(13, 109, 109, 0.4) 0%, transparent 70%)', filter: 'blur(100px)' }}
      />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-15" 
        style={{ background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)', filter: 'blur(100px)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">What We </span>
              <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-500 bg-clip-text text-transparent">Offer</span>
              <span className="text-white"> – AI solutions that solve real problems, not just look cool</span>
            </h2>
          </motion.div>
          
          <motion.div 
            className="flex flex-col justify-end"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-gray-400 text-lg mb-6">
              We provide intelligent solutions to help brands think fast, build smart, and grow big beyond boundaries.
            </p>
            <a 
              href="#book-call"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-all duration-300 w-fit group"
            >
              <span>Let's Talk</span>
              <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </a>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Large Card - AI Chatbots */}
          <motion.div
            className="md:row-span-2 rounded-3xl overflow-hidden group cursor-pointer"
            style={{ 
              background: 'linear-gradient(145deg, #0a1515 0%, #081010 100%)',
              border: '1px solid rgba(20, 184, 166, 0.15)'
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ borderColor: 'rgba(20, 184, 166, 0.4)', y: -5 }}
          >
            <div className="h-64 md:h-80">
              <ChatMockup />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">AI-Powered Chatbots</h3>
              <p className="text-gray-400 text-sm">Our chatbots are built to understand your business type and deliver personalized experiences.</p>
            </div>
          </motion.div>

          {/* Suitable For Card */}
          <motion.div
            className="rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <SuitableForSection />
          </motion.div>

          {/* Data Integration Card */}
          <motion.div
            className="rounded-3xl overflow-hidden group cursor-pointer"
            style={{ 
              background: 'linear-gradient(145deg, #0a1515 0%, #081010 100%)',
              border: '1px solid rgba(20, 184, 166, 0.15)'
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ borderColor: 'rgba(20, 184, 166, 0.4)', y: -5 }}
          >
            <div className="h-48">
              <DataMockup />
            </div>
            <div className="px-6 pb-6">
              <h3 className="text-lg font-bold text-white mb-1">Blockchain Integration</h3>
              <p className="text-gray-400 text-sm">From smart contract validation to predictive analytics.</p>
            </div>
          </motion.div>

          {/* Image Generation Card */}
          <motion.div
            className="rounded-3xl overflow-hidden group cursor-pointer"
            style={{ 
              background: 'linear-gradient(145deg, #0a1515 0%, #081010 100%)',
              border: '1px solid rgba(20, 184, 166, 0.15)'
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ borderColor: 'rgba(20, 184, 166, 0.4)', y: -5 }}
          >
            <div className="h-48">
              <ImageGenMockup />
            </div>
            <div className="px-6 pb-6">
              <h3 className="text-lg font-bold text-white mb-1">Image & Video Generation</h3>
              <p className="text-gray-400 text-sm">Generate high-quality visuals matched to your style.</p>
            </div>
          </motion.div>

          {/* Lead Generation Card */}
          <motion.div
            className="rounded-3xl overflow-hidden group cursor-pointer"
            style={{ 
              background: 'linear-gradient(145deg, #0a1515 0%, #081010 100%)',
              border: '1px solid rgba(20, 184, 166, 0.15)'
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ borderColor: 'rgba(20, 184, 166, 0.4)', y: -5 }}
          >
            <div className="h-48">
              <LeadGenMockup />
            </div>
            <div className="px-6 pb-6">
              <h3 className="text-lg font-bold text-white mb-1">Lead Generation</h3>
              <p className="text-gray-400 text-sm">Generate high quality leads for your business growth.</p>
            </div>
          </motion.div>

          {/* Analytics / Consultation Card */}
          <motion.div
            className="lg:col-span-2 rounded-3xl overflow-hidden group cursor-pointer"
            style={{ 
              background: 'linear-gradient(145deg, #0a1515 0%, #081010 100%)',
              border: '1px solid rgba(20, 184, 166, 0.15)'
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ borderColor: 'rgba(20, 184, 166, 0.4)', y: -5 }}
          >
            <div className="grid md:grid-cols-2">
              <div className="h-48 md:h-56">
                <AnalyticsMockup />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-white mb-2">AI Consultation</h3>
                <p className="text-gray-400 text-sm mb-4">We engineer smart tools built around your business logic. Custom AI solutions tailored to your specific needs.</p>
                <a 
                  href="#book-call"
                  className="inline-flex items-center gap-2 text-teal-400 font-medium text-sm hover:text-teal-300 transition-colors w-fit group/link"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
