import React, { useState, useEffect, useRef } from 'react';
import { Send, ChevronDown, Users } from 'lucide-react';
import { motion } from 'framer-motion';

// AI Chatbot Mockup - matches reference exactly
const ChatMockup = () => {
  const [typing, setTyping] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTyping(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full p-5 flex flex-col gap-4">
      {/* AI Message */}
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-md bg-emerald-500 flex items-center justify-center flex-shrink-0">
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <div className="h-3 w-36 bg-gray-600/80 rounded-full" />
      </div>
      
      {/* User Message */}
      <div className="flex items-center gap-3 justify-end">
        <div className="flex-1 h-3 bg-emerald-500/60 rounded-full max-w-[200px]" />
        <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0">
          <span className="text-[8px] text-gray-300">👤</span>
        </div>
      </div>

      {/* Input field */}
      <div className="mt-auto">
        <div className="bg-[#1a1f2e] border border-gray-700/50 rounded-lg px-4 py-3 flex items-center gap-3">
          <div className={`h-2.5 flex-1 rounded-full transition-all duration-500 ${typing ? 'bg-emerald-500/50 w-2/3' : 'bg-gray-600/50 w-1/3'}`} />
          <div className="w-7 h-7 rounded-md bg-emerald-500 flex items-center justify-center">
            <Send className="w-3.5 h-3.5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Image Generation Mockup - matches reference
const ImageGenMockup = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full p-5 flex flex-col gap-4">
      {/* Preview area with stacked cards effect */}
      <div className="flex-1 relative">
        {[2, 1, 0].map((i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-xl bg-[#1a1f2e] border border-gray-700/30"
            style={{
              top: `${i * 6}px`,
              transform: `scale(${1 - i * 0.02})`,
              opacity: 1 - i * 0.15,
              zIndex: 3 - i
            }}
          />
        ))}
        <div className="absolute inset-0 rounded-xl bg-[#1a1f2e] border border-gray-700/30 flex items-center justify-center z-10">
          <span className="px-4 py-2 text-gray-400 text-sm">Generating Image...</span>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-2.5 bg-[#1a1f2e] rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-emerald-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <button className="px-4 py-2 rounded-md bg-[#1a1f2e] border border-gray-600/50 text-white text-xs font-medium hover:bg-[#252a3a] transition-colors">
          Generate
        </button>
      </div>
    </div>
  );
};

// Lead Generation Mockup - matches reference with stacked cards
const LeadGenMockup = () => {
  return (
    <div className="w-full h-full p-5 flex flex-col gap-4">
      {/* Stacked cards effect */}
      <div className="relative flex-1">
        {[2, 1, 0].map((i) => (
          <div
            key={i}
            className="absolute inset-x-0 top-0 rounded-xl bg-[#1a1f2e] border border-gray-700/30"
            style={{
              top: `${i * 8}px`,
              height: '70px',
              transform: `scale(${1 - i * 0.02})`,
              opacity: 1 - i * 0.2,
              zIndex: 3 - i
            }}
          />
        ))}
        
        {/* Main lead card */}
        <div className="relative rounded-xl bg-[#1a1f2e] border border-gray-700/30 p-4 z-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gray-600 flex items-center justify-center">
              <Users className="w-4 h-4 text-gray-400" />
            </div>
            <div className="flex-1">
              <div className="text-white text-sm font-medium">John Doe</div>
              <div className="text-gray-500 text-xs">President of Sales</div>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Action bar */}
      <div className="flex items-center gap-3 mt-6">
        <div className="flex-1 h-2.5 bg-emerald-500/40 rounded-full" />
        <button className="px-4 py-2 rounded-md bg-[#1a1f2e] border border-gray-600/50 text-white text-xs font-medium">
          Generate Leads
        </button>
      </div>
    </div>
  );
};

// Blockchain/Data Integration Mockup - matches reference with floating icons
const DataMockup = () => {
  const socialIcons = [
    { icon: '𝕏', top: 10, right: 15 },
    { icon: 'in', top: 35, right: 45, color: 'text-blue-400' },
    { icon: '♪', top: 5, right: 70 },
    { icon: 't', top: 55, right: 20, color: 'text-blue-300' },
    { icon: '⟨/⟩', top: 30, left: 15 },
    { icon: '◎', top: 60, right: 85 },
  ];

  return (
    <div className="w-full h-full p-5 flex flex-col relative overflow-hidden">
      {/* Floating social icons */}
      {socialIcons.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute w-7 h-7 rounded-lg bg-[#252a3a] border border-gray-700/40 flex items-center justify-center text-xs ${item.color || 'text-gray-400'}`}
          style={{ top: item.top, right: item.right, left: item.left }}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Central 100% card */}
      <div className="mt-auto mb-4">
        <div className="inline-flex flex-col items-start">
          <div className="px-5 py-3 rounded-lg bg-[#1a1f2e] border border-emerald-500/30">
            <span className="text-emerald-400 font-bold text-xl">100 %</span>
          </div>
          <span className="text-gray-500 text-xs mt-2">Data transparency</span>
        </div>
      </div>
    </div>
  );
};

// Analytics/Consultation Mockup
const AnalyticsMockup = () => {
  return (
    <div className="w-full h-full p-5 flex flex-col gap-3">
      <div className="flex gap-3">
        {/* Growth card */}
        <div className="flex-1 rounded-lg bg-[#1a1f2e] border border-gray-700/30 p-3">
          <div className="text-[10px] text-gray-500 mb-1">Growth</div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </div>
      </div>
      
      {/* Efficiency bar */}
      <div className="flex-1 rounded-lg bg-[#1a1f2e] border border-emerald-500/20 p-3">
        <div className="text-[10px] text-gray-500 mb-2">Efficiency-87%</div>
        <div className="flex items-end gap-1 h-10">
          {[40, 60, 35, 75, 50, 85, 45].map((h, i) => (
            <motion.div 
              key={i}
              className="flex-1 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-sm"
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Suitable For Tags Component - GREEN background as in reference
const SuitableForSection = () => {
  const tags = ['Creative agencies', 'Startup', 'Creators & marketers', 'Small business'];
  
  return (
    <div 
      className="w-full h-full p-6 flex flex-col"
      style={{ background: 'linear-gradient(145deg, #0d7a5f 0%, #059669 50%, #047857 100%)' }}
    >
      <h4 className="text-white font-semibold text-lg mb-3">We are suitable for</h4>
      <div className="w-16 h-0.5 bg-white/40 mb-5" />
      <div className="flex flex-wrap gap-2.5">
        {tags.map((tag, i) => (
          <motion.span
            key={tag}
            className="px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white text-sm font-medium whitespace-nowrap"
            initial={{ opacity: 0, x: -20, rotate: i % 2 === 0 ? -5 : 5 }}
            whileInView={{ opacity: 1, x: 0, rotate: i % 2 === 0 ? -3 : 3 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 0, backgroundColor: 'rgba(255,255,255,0.25)' }}
            style={{ transform: `rotate(${i % 2 === 0 ? -3 : 3}deg)` }}
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

  return (
    <section 
      ref={sectionRef} 
      id="solutions" 
      className="relative py-24 md:py-32 px-4 md:px-8 overflow-hidden"
      style={{ backgroundColor: '#0c0f14' }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Bento Grid Layout - Exact match to reference */}
        <div className="grid grid-cols-12 gap-4 md:gap-5">
          
          {/* Row 1: Header + Blockchain Card */}
          {/* Header - spans 7 columns */}
          <motion.div
            className="col-span-12 lg:col-span-7 flex items-end pb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-white">What We </span>
              <span className="text-emerald-400">Offer</span>
              <span className="text-white"> – AI solutions that solve real problems, not just look cool</span>
            </h2>
          </motion.div>

          {/* Blockchain Integration Card - spans 5 columns, row-span-2 */}
          <motion.div
            className="col-span-12 md:col-span-6 lg:col-span-5 row-span-1 lg:row-span-2 rounded-2xl overflow-hidden"
            style={{ 
              background: '#12161f',
              border: '1px solid rgba(75, 85, 99, 0.3)'
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ borderColor: 'rgba(16, 185, 129, 0.4)' }}
          >
            <div className="h-40 md:h-48">
              <DataMockup />
            </div>
            <div className="px-6 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">Blockchain Integration</h3>
              <p className="text-gray-400 text-sm leading-relaxed">From smart contract validation to predictive analytics.</p>
            </div>
          </motion.div>

          {/* Row 2: AI Chatbots Card - spans 4 columns, row-span-2 */}
          <motion.div
            className="col-span-12 md:col-span-6 lg:col-span-4 row-span-1 lg:row-span-2 rounded-2xl overflow-hidden"
            style={{ 
              background: '#12161f',
              border: '1px solid rgba(75, 85, 99, 0.3)'
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ borderColor: 'rgba(16, 185, 129, 0.4)' }}
          >
            <div className="h-52 md:h-64">
              <ChatMockup />
            </div>
            <div className="px-6 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">AI-Powered Chatbots</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Our chatbots are built to understand your business type.</p>
            </div>
          </motion.div>

          {/* Suitable For Card - spans 3 columns */}
          <motion.div
            className="col-span-12 md:col-span-6 lg:col-span-3 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <SuitableForSection />
          </motion.div>

          {/* Row 3: Image Generation - spans 4 columns */}
          <motion.div
            className="col-span-12 md:col-span-6 lg:col-span-4 rounded-2xl overflow-hidden"
            style={{ 
              background: '#12161f',
              border: '1px solid rgba(75, 85, 99, 0.3)'
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ borderColor: 'rgba(16, 185, 129, 0.4)' }}
          >
            <div className="h-44">
              <ImageGenMockup />
            </div>
            <div className="px-6 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">Image & Video Generation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Generate high-quality visuals matched to your style.</p>
            </div>
          </motion.div>

          {/* Lead Generation - spans 4 columns */}
          <motion.div
            className="col-span-12 md:col-span-6 lg:col-span-4 rounded-2xl overflow-hidden"
            style={{ 
              background: '#12161f',
              border: '1px solid rgba(75, 85, 99, 0.3)'
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            whileHover={{ borderColor: 'rgba(16, 185, 129, 0.4)' }}
          >
            <div className="h-44">
              <LeadGenMockup />
            </div>
            <div className="px-6 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">Lead Generation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Generate high quality lead for your business growth.</p>
            </div>
          </motion.div>

          {/* Row 4: Analytics/Consultation Card */}
          <motion.div
            className="col-span-12 md:col-span-6 lg:col-span-4 rounded-2xl overflow-hidden"
            style={{ 
              background: '#12161f',
              border: '1px solid rgba(75, 85, 99, 0.3)'
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ borderColor: 'rgba(16, 185, 129, 0.4)' }}
          >
            <div className="h-36">
              <AnalyticsMockup />
            </div>
            <div className="px-6 pb-6">
              <h3 className="text-lg font-bold text-white mb-2">AI Consultation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">We engineer smart tools built around your business logic.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
