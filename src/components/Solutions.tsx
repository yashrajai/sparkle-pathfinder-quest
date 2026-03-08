import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Mail, Phone, MessageCircle, Share2, FileText, Zap, Database, Code, BarChart3, Target, Calendar, Users, ShoppingBag, Video, Upload, MessageSquare, Instagram, Play } from 'lucide-react';
import { motion } from 'framer-motion';

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
    { label: 'Ad', icon: Target },
    { label: 'Website', icon: Code },
    { label: 'AI Qualifier', icon: Zap, highlight: true },
    { label: 'CRM', icon: Database },
    { label: 'Calendar', icon: Calendar },
  ];

  return (
    <div className="relative w-full h-44 flex flex-col items-center justify-center px-3">
      {/* Lead counter */}
      <motion.div 
        className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/25"
        key={leadCount}
        initial={{ scale: 1.05, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-xs text-teal-400 font-mono font-medium">+{leadCount} leads</span>
      </motion.div>

      {/* Flow path */}
      <div className="relative w-full mt-4">
        <svg className="absolute inset-x-0 top-[18px] w-full h-[4px]" preserveAspectRatio="none" viewBox="0 0 400 4">
          <line x1="40" y1="2" x2="360" y2="2" stroke="rgba(20, 184, 166, 0.15)" strokeWidth="2" />
          <motion.circle
            r="4" fill="#14b8a6"
            animate={{ cx: [40, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            r="3" fill="#10b981" opacity={0.7}
            animate={{ cx: [40, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
          />
        </svg>

        <div className="flex items-start justify-between w-full relative z-10">
          {nodes.map((node) => (
            <div key={node.label} className="flex flex-col items-center gap-2 w-16">
              <motion.div 
                className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                  node.highlight 
                    ? 'bg-gradient-to-br from-teal-500 to-emerald-500 shadow-md shadow-teal-500/20' 
                    : 'bg-[#0d1a1a] border border-teal-500/20'
                }`}
                animate={node.highlight ? { scale: [1, 1.06, 1] } : {}}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <node.icon className={`w-4 h-4 ${node.highlight ? 'text-white' : 'text-teal-400/70'}`} />
              </motion.div>
              <span className="text-[10px] text-gray-500 font-medium text-center leading-tight">{node.label}</span>
            </div>
          ))}
        </div>
      </div>
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
    <div className="relative w-full h-60 flex items-center justify-center">
      {/* Central property node */}
      <motion.div 
        className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-500/15 to-emerald-500/15 border border-teal-500/30 flex items-center justify-center z-10"
        animate={{ boxShadow: ['0 0 15px rgba(20, 184, 166, 0.15)', '0 0 25px rgba(20, 184, 166, 0.3)', '0 0 15px rgba(20, 184, 166, 0.15)'] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <span className="text-xl">🏠</span>
      </motion.div>

      {/* Agent nodes in a circle */}
      {agents.map((agent, i) => {
        const angle = (i * 72 - 90) * (Math.PI / 180);
        const radius = 100;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * (radius * 0.82);
        const isActive = i === activeAgent;

        return (
          <React.Fragment key={agent.label}>
            {/* Connection line */}
            <svg className="absolute pointer-events-none" style={{ left: '50%', top: '50%', overflow: 'visible' }}>
              <line
                x1="0" y1="0" x2={x} y2={y}
                stroke={isActive ? 'rgba(20, 184, 166, 0.5)' : 'rgba(20, 184, 166, 0.1)'}
                strokeWidth={isActive ? 1.5 : 1}
                strokeDasharray={isActive ? "0" : "3 3"}
              />
            </svg>
            
            <motion.div
              className="absolute flex flex-col items-center gap-1.5"
              style={{ left: `calc(50% + ${x}px - 20px)`, top: `calc(50% + ${y}px - 20px)` }}
            >
              <motion.div 
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-br from-teal-500 to-emerald-500 shadow-md shadow-teal-500/25' 
                    : 'bg-[#0d1a1a] border border-gray-700/50'
                }`}
                animate={isActive ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <agent.icon className={`w-4.5 h-4.5 ${isActive ? 'text-white' : 'text-gray-500'}`} />
              </motion.div>
              <span className={`text-[10px] font-medium ${isActive ? 'text-teal-400' : 'text-gray-600'}`}>{agent.label}</span>
            </motion.div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

// CARD 3: E-commerce UGC Animation
const EcommerceAnimation = () => {
  const stages = [
    { label: 'Product', icon: ShoppingBag },
    { label: 'Avatar', icon: Users },
    { label: 'Video', icon: Video },
    { label: 'Ads', icon: Play },
    { label: 'Platforms', icon: Upload },
  ];
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage(prev => (prev + 1) % stages.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-52 flex flex-col items-center justify-center gap-5 px-1">
      {/* Main flow */}
      <div className="flex items-center justify-between w-full gap-1">
        {stages.map((stage, i) => (
          <React.Fragment key={stage.label}>
            <motion.div 
              className={`flex-1 h-16 rounded-lg flex flex-col items-center justify-center gap-1.5 transition-colors duration-300 ${
                i <= activeStage 
                  ? 'bg-teal-500/10 border border-teal-500/35' 
                  : 'bg-[#0d1a1a] border border-gray-700/30'
              }`}
              animate={i === activeStage ? { scale: [1, 1.06, 1] } : {}}
              transition={{ duration: 0.5 }}
            >
              <stage.icon className={`w-5 h-5 ${i <= activeStage ? 'text-teal-400' : 'text-gray-600'}`} />
              <span className={`text-[9px] font-medium ${i <= activeStage ? 'text-teal-400' : 'text-gray-600'}`}>{stage.label}</span>
            </motion.div>
            {i < stages.length - 1 && (
              <div className={`w-4 h-px flex-shrink-0 ${i < activeStage ? 'bg-teal-500/50' : 'bg-gray-700/40'} transition-colors duration-300`} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Auto-reply indicators */}
      <div className="flex items-center gap-3">
        <motion.div 
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0d1a1a] border border-gray-700/40"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <MessageSquare className="w-3 h-3 text-teal-400" />
          <span className="text-[10px] text-gray-400 font-medium">Auto-reply</span>
        </motion.div>
        <motion.div 
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0d1a1a] border border-gray-700/40"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <Instagram className="w-3 h-3 text-teal-400" />
          <span className="text-[10px] text-gray-400 font-medium">DM Bot</span>
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
      setDeployText(prev => prev === 'Deploying...' ? 'Deploying' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-36 flex items-center justify-center gap-8">
      {/* Wireframe */}
      <motion.div 
        className="w-32 h-22 rounded-lg bg-[#0d1a1a] border border-teal-500/20 p-3 relative overflow-hidden"
        animate={{ borderColor: ['rgba(20, 184, 166, 0.2)', 'rgba(20, 184, 166, 0.45)', 'rgba(20, 184, 166, 0.2)'] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="space-y-2">
          <div className="h-1.5 w-3/4 bg-teal-500/15 rounded-full" />
          <div className="h-1.5 w-1/2 bg-teal-500/15 rounded-full" />
          <div className="flex gap-1.5 mt-3">
            <div className="h-7 flex-1 bg-teal-500/8 rounded" />
            <div className="h-7 flex-1 bg-teal-500/8 rounded" />
          </div>
        </div>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 rounded-lg"
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>

      <ArrowRight className="w-4 h-4 text-teal-500/40 flex-shrink-0" />

      {/* API nodes */}
      <div className="flex flex-col gap-2">
        {['API', 'DB', 'Auth'].map((node, i) => (
          <motion.div
            key={node}
            className="px-4 py-1.5 rounded-md bg-[#0d1a1a] border border-teal-500/20 text-[11px] text-teal-400 font-mono font-medium text-center"
            animate={{ x: [0, 2, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          >
            {node}
          </motion.div>
        ))}
      </div>

      {/* Deploy status */}
      <motion.div 
        className="absolute bottom-3 right-4 px-3 py-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/20"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span className="text-[10px] text-emerald-400 font-mono font-medium">{deployText}</span>
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
    <div className="relative w-full h-36 flex items-center justify-center gap-8">
      {/* Business diagram */}
      <div className="relative flex-shrink-0">
        <div className="w-14 h-14 rounded-xl bg-[#0d1a1a] border border-gray-700/50 flex items-center justify-center">
          <BarChart3 className="w-5 h-5 text-gray-500" />
        </div>
        <motion.div 
          className="absolute inset-0 rounded-xl border-2 border-teal-500/40"
          animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </div>

      <ArrowRight className="w-4 h-4 text-teal-500/40 flex-shrink-0" />

      {/* Optimized system */}
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500/15 to-emerald-500/15 border border-teal-500/30 flex items-center justify-center flex-shrink-0">
        <Zap className="w-5 h-5 text-teal-400" />
      </div>

      <ArrowRight className="w-4 h-4 text-teal-500/40 flex-shrink-0" />

      {/* Metrics */}
      <div className="flex flex-col gap-2.5">
        <div className="px-4 py-2 rounded-md bg-teal-500/8 border border-teal-500/15">
          <span className="text-xs text-teal-400 font-mono font-medium">Efficiency: {efficiency}%</span>
        </div>
        <div className="px-4 py-2 rounded-md bg-emerald-500/8 border border-emerald-500/15">
          <span className="text-xs text-emerald-400 font-mono font-medium">Cost: -{cost}%</span>
        </div>
      </div>
    </div>
  );
};

// Module Pills Component
const ModulePills = ({ modules }: { modules: string[] }) => (
  <div className="flex flex-wrap gap-2 mt-5">
    {modules.map((module) => (
      <span 
        key={module}
        className="px-3 py-1.5 rounded-full bg-teal-500/8 border border-teal-500/15 text-xs text-white/80 font-medium"
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
  delay = 0 
}: { 
  title: string;
  outcome: string;
  Animation: React.FC;
  modules: string[];
  cta: string;
  delay?: number;
}) => (
  <motion.div
    className="group relative rounded-2xl overflow-hidden"
    style={{ 
      background: 'linear-gradient(145deg, rgba(10, 20, 20, 0.95) 0%, rgba(6, 12, 12, 0.98) 100%)',
      border: '1px solid rgba(20, 184, 166, 0.12)'
    }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ 
      borderColor: 'rgba(20, 184, 166, 0.35)',
      boxShadow: '0 0 50px rgba(20, 184, 166, 0.08)'
    }}
  >
    {/* Hover glow */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent" />
    </div>

    <div className="p-7 relative z-10 flex flex-col h-full">
      {/* Title & Outcome */}
      <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
      <p className="text-sm text-white/60 mt-1.5 leading-relaxed">{outcome}</p>

      {/* Animation Area */}
      <div className="my-3 flex-1 flex items-center">
        <div className="w-full">
          <Animation />
        </div>
      </div>

      {/* Modules */}
      <ModulePills modules={modules} />

      {/* CTA */}
      <motion.a 
        href="#book-call"
        className="inline-flex items-center gap-2 mt-5 text-sm text-teal-400 font-medium"
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        <span>{cta}</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </motion.a>
    </div>
  </motion.div>
);

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
  ];

  const wideSolutions = [
    {
      title: 'Custom AI SaaS Development',
      outcome: 'We design, build, and automate AI products from scratch.',
      Animation: SaaSAnimation,
      modules: ['MVP to Scale', 'AI APIs', 'Automation (n8n)', 'Dashboards & Admin'],
      cta: 'Build with us →'
    },
    {
      title: 'AI Strategy & Consultation',
      outcome: 'Clear roadmap. No buzzwords. No wasted tools.',
      Animation: ConsultationAnimation,
      modules: ['System Audit', 'AI Roadmap', 'Tool Selection', 'Automation Planning'],
      cta: 'Book consultation →'
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      id="solutions" 
      className="relative py-24 md:py-32 px-4 md:px-6 overflow-hidden"
      style={{ backgroundColor: '#030808' }}
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ 
        backgroundImage: 'linear-gradient(rgba(20,184,166,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.5) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none" 
        style={{ background: 'radial-gradient(circle, rgba(20, 184, 166, 0.3) 0%, transparent 70%)', filter: 'blur(120px)' }}
      />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-8 pointer-events-none" 
        style={{ background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)', filter: 'blur(120px)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Our Core AI Infrastructure Systems
          </h2>
          <p className="text-gray-400 text-lg max-w-lg mx-auto">
            End-to-end AI systems built to replace teams, not tools.
          </p>
        </motion.div>

        {/* Row 1: 3 equal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {solutions.map((solution, i) => (
            <SolutionCard key={solution.title} {...solution} delay={i * 0.1} />
          ))}
        </div>

        {/* Row 2: 2 wide cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {wideSolutions.map((solution, i) => (
            <SolutionCard key={solution.title} {...solution} delay={0.3 + i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
