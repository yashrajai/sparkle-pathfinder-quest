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
    <div className="relative w-full h-32 flex flex-col items-center justify-center px-2">
      {/* Lead counter */}
      <motion.div 
        className="absolute top-2 right-2 px-2.5 py-1 rounded-md bg-teal-500/8 border border-teal-500/20"
        key={leadCount}
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-[11px] text-teal-400/80 font-mono">+{leadCount} leads</span>
      </motion.div>

      {/* Flow path */}
      <div className="relative w-full mt-3">
        <svg className="absolute inset-x-0 top-[14px] w-full h-[2px]" preserveAspectRatio="none" viewBox="0 0 400 2">
          <line x1="40" y1="1" x2="360" y2="1" stroke="rgba(20, 184, 166, 0.12)" strokeWidth="1.5" />
          <motion.circle
            r="3" fill="rgba(20, 184, 166, 0.6)"
            animate={{ cx: [40, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </svg>

        <div className="flex items-start justify-between w-full relative z-10">
          {nodes.map((node) => (
            <div key={node.label} className="flex flex-col items-center gap-1.5 w-14">
              <div 
                className={`w-7 h-7 rounded-md flex items-center justify-center ${
                  node.highlight 
                    ? 'bg-teal-500/20 border border-teal-500/40' 
                    : 'bg-white/[0.03] border border-white/[0.06]'
                }`}
              >
                <node.icon className={`w-3.5 h-3.5 ${node.highlight ? 'text-teal-400' : 'text-white/30'}`} />
              </div>
              <span className="text-[9px] text-white/40 font-medium text-center leading-tight">{node.label}</span>
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
    <div className="relative w-full h-44 flex items-center justify-center">
      {/* Central property node */}
      <div className="w-12 h-12 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center z-10">
        <span className="text-lg">🏠</span>
      </div>

      {/* Agent nodes in a circle */}
      {agents.map((agent, i) => {
        const angle = (i * 72 - 90) * (Math.PI / 180);
        const radius = 80;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * (radius * 0.8);
        const isActive = i === activeAgent;

        return (
          <React.Fragment key={agent.label}>
            <svg className="absolute pointer-events-none" style={{ left: '50%', top: '50%', overflow: 'visible' }}>
              <line
                x1="0" y1="0" x2={x} y2={y}
                stroke={isActive ? 'rgba(20, 184, 166, 0.35)' : 'rgba(255, 255, 255, 0.04)'}
                strokeWidth={1}
                strokeDasharray={isActive ? "0" : "3 3"}
              />
            </svg>
            
            <div
              className="absolute flex flex-col items-center gap-1"
              style={{ left: `calc(50% + ${x}px - 18px)`, top: `calc(50% + ${y}px - 18px)` }}
            >
              <div 
                className={`w-9 h-9 rounded-md flex items-center justify-center transition-all duration-500 ${
                  isActive 
                    ? 'bg-teal-500/20 border border-teal-500/40' 
                    : 'bg-white/[0.03] border border-white/[0.06]'
                }`}
              >
                <agent.icon className={`w-4 h-4 ${isActive ? 'text-teal-400' : 'text-white/25'}`} />
              </div>
              <span className={`text-[9px] font-medium transition-colors duration-500 ${isActive ? 'text-teal-400/80' : 'text-white/30'}`}>{agent.label}</span>
            </div>
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
    <div className="relative w-full h-36 flex flex-col items-center justify-center gap-4 px-1">
      {/* Main flow */}
      <div className="flex items-center justify-between w-full gap-1">
        {stages.map((stage, i) => (
          <React.Fragment key={stage.label}>
            <div 
              className={`flex-1 h-14 rounded-md flex flex-col items-center justify-center gap-1 transition-all duration-500 ${
                i <= activeStage 
                  ? 'bg-teal-500/8 border border-teal-500/25' 
                  : 'bg-white/[0.02] border border-white/[0.05]'
              }`}
            >
              <stage.icon className={`w-4 h-4 transition-colors duration-500 ${i <= activeStage ? 'text-teal-400' : 'text-white/20'}`} />
              <span className={`text-[9px] font-medium transition-colors duration-500 ${i <= activeStage ? 'text-teal-400/80' : 'text-white/30'}`}>{stage.label}</span>
            </div>
            {i < stages.length - 1 && (
              <div className={`w-3 h-px flex-shrink-0 transition-colors duration-500 ${i < activeStage ? 'bg-teal-500/30' : 'bg-white/[0.06]'}`} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Auto-reply indicators */}
      <div className="flex items-center gap-2.5">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/[0.06]">
          <MessageSquare className="w-3 h-3 text-teal-400/60" />
          <span className="text-[10px] text-white/40 font-medium">Auto-reply</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/[0.06]">
          <Instagram className="w-3 h-3 text-teal-400/60" />
          <span className="text-[10px] text-white/40 font-medium">DM Bot</span>
        </div>
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
    <div className="relative w-full h-28 flex items-center justify-center gap-6">
      {/* Wireframe */}
      <div className="w-28 h-20 rounded-md bg-white/[0.02] border border-white/[0.06] p-2.5 relative overflow-hidden">
        <div className="space-y-1.5">
          <div className="h-1 w-3/4 bg-white/[0.06] rounded-full" />
          <div className="h-1 w-1/2 bg-white/[0.06] rounded-full" />
          <div className="flex gap-1 mt-2">
            <div className="h-5 flex-1 bg-white/[0.03] rounded" />
            <div className="h-5 flex-1 bg-white/[0.03] rounded" />
          </div>
        </div>
      </div>

      <ArrowRight className="w-3.5 h-3.5 text-white/15 flex-shrink-0" />

      {/* API nodes */}
      <div className="flex flex-col gap-1.5">
        {['API', 'DB', 'Auth'].map((node, i) => (
          <div
            key={node}
            className="px-3.5 py-1 rounded-md bg-white/[0.02] border border-teal-500/15 text-[10px] text-teal-400/70 font-mono font-medium text-center"
          >
            {node}
          </div>
        ))}
      </div>

      {/* Deploy status */}
      <div className="absolute bottom-2 right-3 px-2.5 py-1 rounded-md bg-teal-500/6 border border-teal-500/15">
        <span className="text-[10px] text-teal-400/60 font-mono">{deployText}</span>
      </div>
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
    <div className="relative w-full h-28 flex items-center justify-center gap-6">
      {/* Business diagram */}
      <div className="w-12 h-12 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
        <BarChart3 className="w-5 h-5 text-white/25" />
      </div>

      <ArrowRight className="w-3.5 h-3.5 text-white/15 flex-shrink-0" />

      {/* Optimized system */}
      <div className="w-12 h-12 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
        <Zap className="w-5 h-5 text-teal-400/70" />
      </div>

      <ArrowRight className="w-3.5 h-3.5 text-white/15 flex-shrink-0" />

      {/* Metrics */}
      <div className="flex flex-col gap-2">
        <div className="px-3 py-1.5 rounded-md bg-teal-500/6 border border-teal-500/12">
          <span className="text-[11px] text-teal-400/70 font-mono">Efficiency: {efficiency}%</span>
        </div>
        <div className="px-3 py-1.5 rounded-md bg-teal-500/6 border border-teal-500/12">
          <span className="text-[11px] text-teal-400/70 font-mono">Cost: -{cost}%</span>
        </div>
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
        className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.07] text-[11px] text-white/60 font-medium"
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
    className="group relative rounded-xl overflow-hidden"
    style={{ 
      background: 'linear-gradient(160deg, rgba(12, 18, 18, 0.95) 0%, rgba(8, 12, 12, 0.98) 100%)',
      border: '1px solid rgba(255, 255, 255, 0.06)'
    }}
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ 
      borderColor: 'rgba(20, 184, 166, 0.2)',
    }}
  >
    <div className="p-6 lg:p-7 relative z-10 flex flex-col h-full">
      {/* Title & Outcome */}
      <h3 className="text-lg font-semibold text-white tracking-tight">{title}</h3>
      <p className="text-[13px] text-white/45 mt-1 leading-relaxed">{outcome}</p>

      {/* Animation Area */}
      <div className="my-4 flex-1 flex items-center">
        <div className="w-full">
          <Animation />
        </div>
      </div>

      {/* Modules */}
      <ModulePills modules={modules} />

      {/* CTA */}
      <motion.a 
        href="#book-call"
        className="inline-flex items-center gap-1.5 mt-4 text-[13px] text-teal-400/80 font-medium"
        whileHover={{ x: 3 }}
        transition={{ duration: 0.2 }}
      >
        <span>{cta}</span>
        <ArrowRight className="w-3 h-3" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {solutions.map((solution, i) => (
            <SolutionCard key={solution.title} {...solution} delay={i * 0.08} />
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
