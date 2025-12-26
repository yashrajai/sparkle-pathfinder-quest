import React, { useState } from 'react';
import { Moon, Sun, Menu, X, Home, Settings, Workflow, Gift, MessageSquare, Phone, Mic } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Hero() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDark = theme === 'dark';

  const navLinks = [
    { icon: Home, label: 'Home', href: '#' },
    { icon: Settings, label: 'Services', href: '#services' },
    { icon: Workflow, label: 'Workflow', href: '#workflow' },
    { icon: Gift, label: 'Benefits', href: '#benefits' },
    { icon: MessageSquare, label: 'Testimonials', href: '#testimonials' },
    { icon: Phone, label: 'Contact', href: '#contact' },
  ];

  const stats = [
    { value: '85%', label: 'Faster Processing' },
    { value: '24/7', label: 'AI Support' },
    { value: '10L+', label: 'Invoices Monthly' },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden transition-colors duration-300" style={{ background: isDark ? '#0c1215' : 'linear-gradient(135deg, #f0fdf9 0%, #e0f7f3 30%, #ccfbf1 60%, #f0fdf9 100%)' }}>
      {/* Navigation */}
      <nav className="relative z-50 w-full py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <div className="flex items-center gap-2 px-6 py-3 rounded-full" style={{ backgroundColor: isDark ? '#111a1f' : '#ffffff', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
              {/* Logo */}
              <div className="flex items-center gap-2 pr-6 border-r" style={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #14b8a6, #0d9488)' }}>
                  <div className="w-4 h-4 flex flex-col justify-center gap-0.5">
                    <div className="w-full h-0.5 bg-white transform -rotate-45"></div>
                    <div className="w-full h-0.5 bg-white transform -rotate-45"></div>
                  </div>
                </div>
                <span className="font-bold text-lg" style={{ color: '#14b8a6' }}>AutoMatrix</span>
              </div>
              
              {/* Nav Links */}
              <div className="hidden lg:flex items-center gap-1 px-4">
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href} className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors hover:bg-teal-500/10" style={{ color: isDark ? '#7f9ba6' : '#4b6b78' }}>
                    <link.icon size={16} />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
              
              {/* Theme Toggle */}
              <button onClick={toggleTheme} className="p-2 rounded-lg transition-all hover:bg-teal-500/10" style={{ color: isDark ? '#7f9ba6' : '#4b6b78' }}>
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: isDark ? 'rgba(20, 184, 166, 0.1)' : 'rgba(20, 184, 166, 0.1)', border: '1px solid rgba(20, 184, 166, 0.2)' }}>
              <span className="text-sm font-medium" style={{ color: '#14b8a6' }}>AI-Powered Solutions</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: isDark ? '#ffffff' : '#0c1215' }}>
              Transform Your <br />
              <span style={{ color: '#14b8a6' }}>Business Operations</span>
            </h1>
            
            <p className="text-lg mb-8 max-w-lg leading-relaxed" style={{ color: isDark ? '#7f9ba6' : '#4b6b78' }}>
              Harness the power of AI to automate workflows, enhance decision-making, and drive unprecedented growth.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#contact" className="px-8 py-3 rounded-full font-medium text-white transition-all hover:shadow-lg hover:shadow-teal-500/30" style={{ backgroundColor: '#0c1215' }}>
                Get Started
              </a>
              <a href="#services" className="px-8 py-3 rounded-full font-medium transition-all" style={{ backgroundColor: 'transparent', border: '1px solid rgba(0,0,0,0.2)', color: isDark ? '#ffffff' : '#0c1215' }}>
                Learn More
              </a>
            </div>
            
            {/* Stats */}
            <div className="flex gap-12">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold mb-1" style={{ color: isDark ? '#ffffff' : '#0c1215' }}>{stat.value}</div>
                  <div className="text-sm" style={{ color: isDark ? '#7f9ba6' : '#4b6b78' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Content - AI Bot Illustration */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #14b8a6 0%, transparent 70%)' }}></div>
              
              {/* Main bot circle */}
              <div className="absolute inset-8 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(180deg, #1f3a40 0%, #0c1215 100%)', boxShadow: '0 20px 60px rgba(20, 184, 166, 0.2)' }}>
                {/* Eyes */}
                <div className="flex gap-8 mb-8">
                  <div className="w-3 h-10 rounded-full bg-teal-400/50"></div>
                  <div className="w-3 h-10 rounded-full bg-teal-400/50"></div>
                </div>
              </div>
              
              {/* Microphone indicator */}
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(20, 184, 166, 0.2)' }}>
                  <Mic className="w-5 h-5 text-teal-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
