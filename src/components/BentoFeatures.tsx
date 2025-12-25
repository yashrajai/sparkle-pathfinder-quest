import { BentoCard, BentoGrid } from "./ui/bento-grid";
import { Brain, Zap, Shield, BarChart3, Workflow, MessageSquare } from "lucide-react";
import { AnimatedBeamDemo } from "./AnimatedBeamDemo";

const features = [
  { Icon: Brain, name: "AI-Powered Intelligence", description: "Advanced ML algorithms that adapt to your workflow.", href: "#", cta: "Learn more", background: <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-transparent" />, className: "lg:col-span-1" },
  { Icon: Workflow, name: "Seamless Integrations", description: "Connect all your favorite tools and platforms.", href: "#", cta: "See integrations", background: <div className="absolute inset-0 flex items-center justify-center opacity-60"><AnimatedBeamDemo /></div>, className: "lg:col-span-2 lg:row-span-2" },
  { Icon: Zap, name: "Lightning Fast", description: "Process thousands of requests in seconds.", href: "#", cta: "View benchmarks", background: <div className="absolute inset-0"><div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent" /></div>, className: "lg:col-span-1" },
  { Icon: Shield, name: "Enterprise Security", description: "Bank-level encryption and compliance.", href: "#", cta: "Security details", background: <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent" />, className: "lg:col-span-1" },
  { Icon: BarChart3, name: "Real-Time Analytics", description: "Comprehensive insights for data-driven decisions.", href: "#", cta: "Explore analytics", background: <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent" />, className: "lg:col-span-1" },
  { Icon: MessageSquare, name: "Smart Collaboration", description: "Keep your team aligned and productive.", href: "#", cta: "Try collaboration", background: <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-transparent" />, className: "lg:col-span-1" },
];

export default function BentoFeatures() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">Everything You Need</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">Powerful features designed to transform how you work.</p>
        </div>
        <BentoGrid className="lg:grid-cols-3 md:grid-cols-2 grid-cols-1">{features.map((feature) => (<BentoCard key={feature.name} {...feature} />))}</BentoGrid>
      </div>
    </section>
  );
}
