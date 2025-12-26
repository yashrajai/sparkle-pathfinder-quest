import React from 'react';
import { 
  Calculator, Clock, Brain, BarChart3, CreditCard, FileText, 
  Users, ShoppingCart, Wrench, Car, Settings, Briefcase, ArrowRight, Check 
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useThemeStyles } from '../hooks/useThemeStyles';

export default function Solutions() {
  const { theme, bgPrimary, bgSecondary, textPrimary, textSecondary, borderColor } = useThemeStyles();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => { 
    const observer = new IntersectionObserver(([entry]) => { 
      if (entry.isIntersecting && !hasAnimated.current) { setIsVisible(true); hasAnimated.current = true; } 
    }, { threshold: 0.1 }); 
    if (sectionRef.current) observer.observe(sectionRef.current); 
    return () => observer.disconnect(); 
  }, []);

  const solutions = [
    { icon: Calculator, title: 'AccuLedger℠', subtitle: 'Control Accounting', description: 'Manage and streamline financial operations including banking, payables, receivables, reporting, and compliance.', color: 'from-blue-500 to-blue-600' },
    { icon: Clock, title: 'ClockFlow℠', subtitle: 'Attendance Management', description: 'Reduce time theft, ensure labor law compliance, simplify payroll preparation with real-time visibility.', color: 'from-green-500 to-green-600' },
    { icon: Brain, title: 'CollectIQ℠', subtitle: 'Intelligent Collections', description: 'AI-powered platform that predicts payment behaviors and optimizes collection strategies for maximum recovery.', color: 'from-purple-500 to-purple-600' },
    { icon: BarChart3, title: 'InsightPro℠', subtitle: 'Business Intelligence', description: 'Transform enterprise data with drag-and-drop report building and powerful real-time analytics.', color: 'from-orange-500 to-orange-600' },
    { icon: CreditCard, title: 'LoanTrack℠', subtitle: 'BHPH Financing', description: 'Integrated financing platform handling credit applications, payments, collections, and regulatory compliance.', color: 'from-teal-500 to-teal-600' },
    { icon: FileText, title: 'LeaseTrack℠', subtitle: 'Lease Management', description: 'Manage in-house leasing from applications to payment schedules, maintenance tracking, and lease-end processes.', color: 'from-indigo-500 to-indigo-600' },
    { icon: Briefcase, title: 'PayrollPro℠', subtitle: 'Payroll System', description: 'Process multiple pay frequencies, manage overtime, garnishments, PTO, benefits, and ensure tax compliance.', color: 'from-pink-500 to-pink-600' },
    { icon: Users, title: 'RelationIQ℠', subtitle: 'AI-Powered CRM', description: 'Machine learning to analyze customer patterns, automate interactions, and optimize engagement strategies.', color: 'from-red-500 to-red-600' },
    { icon: ShoppingCart, title: 'RetailConnect℠', subtitle: 'Sales Platform', description: 'Enable seamless in-store and remote sales, team collaboration, and digital transaction completion.', color: 'from-cyan-500 to-cyan-600' },
    { icon: Wrench, title: 'ReconMaster℠', subtitle: 'Vehicle Reconditioning', description: 'Streamline from initial inspection and work orders to parts management, labor tracking, and quality control.', color: 'from-amber-500 to-amber-600' },
    { icon: Car, title: 'ServiceSuite℠', subtitle: 'Service Management', description: 'Optimize workflow, control parts inventory, improve customer satisfaction, and increase service revenue.', color: 'from-emerald-500 to-emerald-600' },
    { icon: Settings, title: 'WorkforcePro℠', subtitle: 'HR Platform', description: 'Unify recruitment, employee management, learning management (LMS), and role-based permissions.', color: 'from-violet-500 to-violet-600' },
  ];

  return (
    <section ref={sectionRef} id="solutions" className="relative py-32 px-6 transition-colors duration-300" style={{ backgroundColor: bgPrimary }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: textPrimary }}>
            Why <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Automatrix</span>?
          </h2>
          <p className={`text-xl max-w-3xl mx-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: textSecondary }}>
            We've evolved beyond Dealer Software to empower your entire business with next-generation, AI-driven ERP Solutions for Dealerships.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className={`group rounded-2xl p-6 transition-all duration-500 hover:scale-[1.02] cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} 
              style={{ 
                transitionDelay: `${100 + index * 50}ms`, 
                backgroundColor: bgSecondary, 
                border: `1px solid ${borderColor}` 
              }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <solution.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-1" style={{ color: textPrimary }}>{solution.title}</h3>
              <p className="text-sm font-medium text-red-500 mb-3">{solution.subtitle}</p>
              <p className="text-sm leading-relaxed" style={{ color: textSecondary }}>{solution.description}</p>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a href="#demo" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-red-600/30 group">
            <span>Explore All Solutions</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
