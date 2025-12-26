import React from 'react';
import { BentoCard, BentoGrid } from "./ui/bento-grid";
import { Brain, Zap, Shield, BarChart3, Workflow, Bot } from "lucide-react";
import { useThemeStyles } from '../hooks/useThemeStyles';

const features = [
  { Icon: Brain, name: "AI-Powered Intelligence", description: "SARA combines advanced ML to adapt to your dealership workflow.", href: "#", cta: "Learn more", background: <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-transparent" />, className: "lg:col-span-1" },
  { Icon: Workflow, name: "Seamless Integration", description: "Connect all your dealership tools and platforms in one unified system.", href: "#", cta: "See integrations", background: <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent" />, className: "lg:col-span-2" },
  { Icon: Zap, name: "Real-Time Processing", description: "Handle thousands of transactions instantly across all departments.", href: "#", cta: "View benchmarks", background: <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent" />, className: "lg:col-span-1" },
  { Icon: Shield, name: "Enterprise Security", description: "Bank-level encryption with AWS infrastructure and SOC 2 compliance.", href: "#", cta: "Security details", background: <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent" />, className: "lg:col-span-1" },
  { Icon: BarChart3, name: "120+ Reports", description: "Comprehensive reporting with every type of analytics possible.", href: "#", cta: "Explore analytics", background: <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent" />, className: "lg:col-span-1" },
  { Icon: Bot, name: "SARA AI Assistant", description: "Voice and text AI for vehicle selection, appointments, and payments.", href: "#", cta: "Meet SARA", background: <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent" />, className: "lg:col-span-1" },
];

export default function BentoFeatures() {
  const { bgPrimary, textPrimary, textSecondary } = useThemeStyles();
  
  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: bgPrimary }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: textPrimary }}>
            Everything You <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Need</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: textSecondary }}>Powerful features designed to transform how dealerships operate.</p>
        </div>
        <BentoGrid className="lg:grid-cols-3 md:grid-cols-2 grid-cols-1">{features.map((feature) => (<BentoCard key={feature.name} {...feature} />))}</BentoGrid>
      </div>
    </section>
  );
}
