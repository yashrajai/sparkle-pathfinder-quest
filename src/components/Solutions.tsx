import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Mail, Phone, MessageCircle, Share2, FileText, Zap, Database, Code, BarChart3, Target, Calendar, Users, ShoppingBag, Video, Upload, MessageSquare, Instagram, Play } from 'lucide-react';
import { motion } from 'framer-motion';

// Flow Line Animation Component
const FlowLine = ({ className = "" }: { className?: string }) => (
  <svg className={`absolute ${className}`} viewBox="0 0 200 2" preserveAspectRatio="none">
    <line x1="0" y1="1" x2="200" y2="1" stroke="rgba(20, 184, 166, 0.3)" strokeWidth="2" />
    <motion.circle
      cx="0"
      cy="1"
      r="3"
      fill="#14b8a6"
      animate={{ cx: [0, 200] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    />
  </svg>
);

// CARD 1: Lead Generation Engine Animation
const LeadGenAnimation = () => {
  const [leadCount, setLeadCount] = useState(247);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setLeadCount(prev => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { label: 'Ad', x: 0 },
    { label: 'Website', x: 25 },
    { label: 'Social', x: 50 },
    { label: 'AI Qualifier', x: 75, highlight: true },
    { label: 'CRM', x: 100 },
    { label: 'Calendar', x: 125 },
  ];

  return (
    <div className="relative w-full h-40 flex items-center justify-center">
      {/* Flow path */}
      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2">
        <svg className="w-full h-2" viewBox="0 0 300 8" preserveAspectRatio="none">
          <path 
            d="M 0 4 Q 50 4 75 4 Q 100 4 150 4 Q 200 4 250 4 L 300 4" 
            stroke="rgba(20, 184, 166, 0.2)" 
            strokeWidth="2" 
            fill="none"
          />
          <motion.circle
            r="4"
            fill="#14b8a6"
            filter="url(#glow)"
            animate={{ offsetDistance: ['0%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ offsetPath: "path('M 0 4 Q 50 4 75 4 Q 100 4 150 4 Q 200 4 250 4 L 300 4')" }}
          />
          <motion.circle
            r="4"
            fill="#10b981"
            filter="url(#glow)"
            animate={{ offsetDistance: ['0%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
            style={{ offsetPath: "path('M 0 4 Q 50 4 75 4 Q 100 4 150 4 Q 200 4 250 4 L 300 4')" }}
          />
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>

      {/* Nodes */}
      <div className="flex items-center justify-between w-full px-4 relative z-10">
        {['Ad', 'Website', 'AI Qualifier', 'CRM', 'Calendar'].map((label, i) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <motion.div 
              className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                label === 'AI Qualifier' 
                  ? 'bg-gradient-to-br from-teal-500 to-emerald-500' 
                  : 'bg-[#1a2828] border border-teal-500/30'
              }`}
              animate={label === 'AI Qualifier' ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {label === 'Ad' && <Target className="w-4 h-4 text-teal-400" />}
              {label === 'Website' && <Code className="w-4 h-4 text-teal-400" />}
              {label === 'AI Qualifier' && <Zap className="w-4 h-4 text-white" />}
              {label === 'CRM' && <Database className="w-4 h-4 text-teal-400" />}
              {label === 'Calendar' && <Calendar className="w-4 h-4 text-teal-400" />}
            </motion.div>
            <span className="text-[10px] text-gray-500">{label}</span>
          </div>
        ))}
      </div>

      {/* Lead counter */}
      <motion.div 
        className="absolute top-2 right-4 px-2 py-1 rounded bg-teal-500/20 border border-teal-500/30"
        key={leadCount}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
      >
        <span className="text-xs text-teal-400 font-mono">+{leadCount} leads</span>
      </motion.div>
    </div>
  );
};

// CARD 2: Real Estate AI Animation
const RealEstateAnimation = () => {
  const [activeAgent, setActiveAgent] = useState(0);
  const agents = [
    { icon: Mail, label: 'Email' },
    { icon: Phone, label: 'Voice' },
    { icon: MessageCircle, label: 'WhatsApp' },
    { icon: Share2, label: 'Social' },
    { icon: FileText, label: 'SEO' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAgent(prev => (prev + 1) % agents.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-40 flex items-center justify-center">
      {/* Central property node */}
      <motion.div 
        className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500/20 to-emerald-500/20 border border-teal-500/40 flex items-center justify-center z-10"
        animate={{ boxShadow: ['0 0 20px rgba(20, 184, 166, 0.2)', '0 0 30px rgba(20, 184, 166, 0.4)', '0 0 20px rgba(20, 184, 166, 0.2)'] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-lg">🏠</span>
      </motion.div>

      {/* Agent nodes in a circle */}
      {agents.map((agent, i) => {
        const angle = (i * 72 - 90) * (Math.PI / 180);
        const x = Math.cos(angle) * 55;
        const y = Math.sin(angle) * 45;
        const isActive = i === activeAgent;

        return (
          <motion.div
            key={agent.label}
            className="absolute flex flex-col items-center gap-1"
            style={{ left: `calc(50% + ${x}px - 16px)`, top: `calc(50% + ${y}px - 16px)` }}
          >
            <motion.div 
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                isActive 
                  ? 'bg-gradient-to-br from-teal-500 to-emerald-500 shadow-lg shadow-teal-500/30' 
                  : 'bg-[#1a2828] border border-gray-700'
              }`}
              animate={isActive ? { scale: [1, 1.15, 1] } : { scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <agent.icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-500'}`} />
            </motion.div>
            <span className={`text-[9px] ${isActive ? 'text-teal-400' : 'text-gray-600'}`}>{agent.label}</span>
            
            {/* Connection line */}
            <svg className="absolute w-full h-full pointer-events-none" style={{ left: 16, top: 16 }}>
              <motion.line
                x1="0"
                y1="0"
                x2={-x}
                y2={-y}
                stroke={isActive ? '#14b8a6' : 'rgba(20, 184, 166, 0.15)'}
                strokeWidth={isActive ? 2 : 1}
                strokeDasharray={isActive ? "0" : "4 4"}
              />
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
};

// CARD 3: E-commerce UGC Animation
const EcommerceAnimation = () => {
  const stages = ['Product', 'Avatar', 'Video', 'Ads', 'Platforms'];
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage(prev => (prev + 1) % stages.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-40 flex flex-col items-center justify-center gap-4">
      {/* Main flow */}
      <div className="flex items-center gap-2">
        {stages.map((stage, i) => (
          <React.Fragment key={stage}>
            <motion.div 
              className={`w-12 h-12 rounded-lg flex flex-col items-center justify-center gap-0.5 transition-all duration-300 ${
                i <= activeStage 
                  ? 'bg-gradient-to-br from-teal-500/30 to-emerald-500/30 border border-teal-500/50' 
                  : 'bg-[#1a2828] border border-gray-700/50'
              }`}
              animate={i === activeStage ? { scale: [1, 1.08, 1] } : {}}
              transition={{ duration: 0.5 }}
            >
              {stage === 'Product' && <ShoppingBag className={`w-5 h-5 ${i <= activeStage ? 'text-teal-400' : 'text-gray-600'}`} />}
              {stage === 'Avatar' && <Users className={`w-5 h-5 ${i <= activeStage ? 'text-teal-400' : 'text-gray-600'}`} />}
              {stage === 'Video' && <Video className={`w-5 h-5 ${i <= activeStage ? 'text-teal-400' : 'text-gray-600'}`} />}
              {stage === 'Ads' && <Play className={`w-5 h-5 ${i <= activeStage ? 'text-teal-400' : 'text-gray-600'}`} />}
              {stage === 'Platforms' && <Upload className={`w-5 h-5 ${i <= activeStage ? 'text-teal-400' : 'text-gray-600'}`} />}
              <span className={`text-[8px] ${i <= activeStage ? 'text-teal-400' : 'text-gray-600'}`}>{stage}</span>
            </motion.div>
            {i < stages.length - 1 && (
              <motion.div 
                className="w-4 h-0.5 rounded"
                animate={{ backgroundColor: i < activeStage ? '#14b8a6' : '#374151' }}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Auto-reply indicators */}
      <div className="flex items-center gap-3">
        <motion.div 
          className="flex items-center gap-1 px-2 py-1 rounded bg-[#1a2828] border border-gray-700"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <MessageSquare className="w-3 h-3 text-teal-400" />
          <span className="text-[10px] text-gray-400">Auto-reply</span>
        </motion.div>
        <motion.div 
          className="flex items-center gap-1 px-2 py-1 rounded bg-[#1a2828] border border-gray-700"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Instagram className="w-3 h-3 text-teal-400" />
          <span className="text-[10px] text-gray-400">DM Bot</span>
        </motion.div>
      </div>
    </div>
  );
};

// CARD 4: Custom SaaS Animation
const SaaSAnimation = () => {
  const [deployText, setDeployText] = useState('Deploying');

  useEffect(() => {
    const interval = setInterval(() => {
      setDeployText(prev => {
        if (prev === 'Deploying...') return 'Deploying';
        return prev + '.';
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-32 flex items-center justify-center gap-6">
      {/* Wireframe morphing to dashboard */}
      <motion.div 
        className="w-28 h-20 rounded-lg bg-[#1a2828] border border-teal-500/30 p-2 relative overflow-hidden"
        animate={{ borderColor: ['rgba(20, 184, 166, 0.3)', 'rgba(20, 184, 166, 0.6)', 'rgba(20, 184, 166, 0.3)'] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {/* Wireframe lines */}
        <div className="space-y-1.5">
          <div className="h-1.5 w-3/4 bg-teal-500/20 rounded" />
          <div className="h-1.5 w-1/2 bg-teal-500/20 rounded" />
          <div className="flex gap-1 mt-2">
            <div className="h-6 flex-1 bg-teal-500/10 rounded" />
            <div className="h-6 flex-1 bg-teal-500/10 rounded" />
          </div>
        </div>
        {/* Dashboard overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 rounded-lg"
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>

      {/* Arrow */}
      <ArrowRight className="w-5 h-5 text-teal-500/50" />

      {/* API nodes */}
      <div className="flex flex-col gap-2">
        {['API', 'DB', 'Auth'].map((node, i) => (
          <motion.div
            key={node}
            className="px-3 py-1 rounded bg-[#1a2828] border border-teal-500/20 text-[10px] text-teal-400 font-mono"
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
          >
            {node}
          </motion.div>
        ))}
      </div>

      {/* Deploy status */}
      <motion.div 
        className="absolute bottom-2 right-4 px-2 py-1 rounded bg-emerald-500/20 border border-emerald-500/30"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span className="text-[10px] text-emerald-400 font-mono">{deployText}</span>
      </motion.div>
    </div>
  );
};

// CARD 5: AI Consultation Animation
const ConsultationAnimation = () => {
  const [efficiency, setEfficiency] = useState(67);
  const [cost, setCost] = useState(42);

  useEffect(() => {
    const interval = setInterval(() => {
      setEfficiency(prev => Math.min(prev + 1, 94));
      setCost(prev => Math.max(prev - 1, 18));
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-32 flex items-center justify-center gap-8">
      {/* Business diagram */}
      <div className="relative">
        <div className="w-16 h-16 rounded-xl bg-[#1a2828] border border-gray-700 flex items-center justify-center">
          <BarChart3 className="w-6 h-6 text-gray-500" />
        </div>
        {/* AI layer overlay */}
        <motion.div 
          className="absolute inset-0 rounded-xl border-2 border-teal-500/50"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      <ArrowRight className="w-5 h-5 text-teal-500/50" />

      {/* Optimized system */}
      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-500/20 to-emerald-500/20 border border-teal-500/40 flex items-center justify-center">
        <Zap className="w-6 h-6 text-teal-400" />
      </div>

      {/* Metrics */}
      <div className="flex flex-col gap-2">
        <motion.div 
          className="px-3 py-1.5 rounded bg-teal-500/10 border border-teal-500/20"
          key={efficiency}
        >
          <span className="text-xs text-teal-400 font-mono">Efficiency: {efficiency}%</span>
        </motion.div>
        <motion.div 
          className="px-3 py-1.5 rounded bg-emerald-500/10 border border-emerald-500/20"
          key={cost}
        >
          <span className="text-xs text-emerald-400 font-mono">Cost: -{cost}%</span>
        </motion.div>
      </div>
    </div>
  );
};

// Module Pills Component
const ModulePills = ({ modules }: { modules: string[] }) => (
  <div className="flex flex-wrap gap-1.5 mt-4">
    {modules.map((module) => (
      <span 
        key={module}
        className="px-2.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[10px] text-teal-400 font-medium"
      >
        {module}
      </span>
    ))}
  </div>
);

// Solution Card Component
const SolutionCard = ({ 
  title, 
  outcome, 
  Animation, 
  modules, 
  cta, 
  wide = false,
  delay = 0 
}: { 
  title: string;
  outcome: string;
  Animation: React.FC;
  modules: string[];
  cta: string;
  wide?: boolean;
  delay?: number;
}) => {
  return (
    <motion.div
      className={`group relative rounded-2xl overflow-hidden cursor-pointer ${wide ? 'lg:col-span-1' : ''}`}
      style={{ 
        background: 'linear-gradient(145deg, rgba(10, 20, 20, 0.9) 0%, rgba(8, 15, 15, 0.95) 100%)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(20, 184, 166, 0.15)'
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        borderColor: 'rgba(20, 184, 166, 0.4)',
        boxShadow: '0 0 40px rgba(20, 184, 166, 0.1)'
      }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent" />
      </div>

      <div className="p-6 relative z-10">
        {/* Title & Outcome */}
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        <p className="text-sm text-gray-400">{outcome}</p>

        {/* Animation Area */}
        <div className="my-4">
          <Animation />
        </div>

        {/* Modules */}
        <ModulePills modules={modules} />

        {/* CTA */}
        <motion.a 
          href="#book-call"
          className="inline-flex items-center gap-2 mt-4 text-sm text-teal-400 font-medium group/cta"
          whileHover={{ x: 5 }}
        >
          <span>{cta}</span>
          <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default function Solutions() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const solutions = [
    {
      title: 'AI Lead Generation Engine',
      outcome: 'Captures, qualifies, and routes leads automatically.',
      Animation: LeadGenAnimation,
      modules: ['Funnel AI', 'Lead Scoring', 'CRM Sync', 'Calendar Booking'],
      cta: 'View system →'
    },
    {
      title: 'Real Estate AI Operating System',
      outcome: 'One AI stack to run sales, follow-ups, and visibility.',
      Animation: RealEstateAnimation,
      modules: ['Email Agent', 'Voice Calling', 'WhatsApp', 'Social Media', 'SEO & Blogging'],
      cta: 'See workflow →'
    },
    {
      title: 'E-commerce Content & UGC Automation',
      outcome: 'Turns products into ads, videos, and conversions—on autopilot.',
      Animation: EcommerceAnimation,
      modules: ['Avatar Generation', 'AI Video Ads', 'Auto Uploading', 'Comment Automation', 'DM Automation'],
      cta: 'Explore automation →'
    },
    {
      title: 'Custom AI SaaS Development',
      outcome: 'We design, build, and automate AI products from scratch.',
      Animation: SaaSAnimation,
      modules: ['MVP to Scale', 'AI APIs', 'Automation (n8n)', 'Dashboards & Admin'],
      cta: 'Build with us →',
      wide: true
    },
    {
      title: 'AI Strategy & Consultation',
      outcome: 'Clear roadmap. No buzzwords. No wasted tools.',
      Animation: ConsultationAnimation,
      modules: ['System Audit', 'AI Roadmap', 'Tool Selection', 'Automation Planning'],
      cta: 'Book consultation →',
      wide: true
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      id="solutions" 
      className="relative py-24 md:py-32 px-4 md:px-6 overflow-hidden bg-background"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ 
        backgroundImage: 'linear-gradient(rgba(20,184,166,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full opacity-15" 
        style={{ background: 'radial-gradient(circle, rgba(20, 184, 166, 0.3) 0%, transparent 70%)', filter: 'blur(100px)' }}
      />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-10" 
        style={{ background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)', filter: 'blur(100px)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Core AI Infrastructure Systems
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            End-to-end AI systems built to replace teams, not tools.
          </p>
        </motion.div>

        {/* Grid: Row 1 - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {solutions.slice(0, 3).map((solution, i) => (
            <SolutionCard key={solution.title} {...solution} delay={i * 0.1} />
          ))}
        </div>

        {/* Grid: Row 2 - 2 wide cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {solutions.slice(3).map((solution, i) => (
            <SolutionCard key={solution.title} {...solution} delay={0.3 + i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
