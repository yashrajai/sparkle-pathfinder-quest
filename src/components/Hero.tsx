import React from 'react';
import LaserFlow from './LaserFlow';
import { FlipWords } from './ui/flip-words';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

export default function Hero() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const rotatingTexts = ['Driven by Intelligence', 'Powered by AI', 'Built for Dealers', 'Designed to Scale'];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden transition-colors duration-300" style={{ backgroundColor: theme === 'dark' ? '#0a0c10' : '#f8fafc' }}>
      {/* Navigation */}
      <nav className="relative z-50 w-full py-6 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">X</span>
            </div>
            <div>
              <span className="text-xl font-bold" style={{ color: theme === 'dark' ? '#ffffff' : '#0f172a' }}>AUTOMATRIX</span>
              <div className="text-xs" style={{ color: theme === 'dark' ? '#94a3b8' : '#64748b' }}>Driven by <span className="text-red-500">Intelligence</span></div>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#passion" className="transition-colors hover:text-red-500" style={{ color: theme === 'dark' ? '#94a3b8' : '#475569' }}>Our Passion</a>
            <a href="#solutions" className="transition-colors hover:text-red-500" style={{ color: theme === 'dark' ? '#94a3b8' : '#475569' }}>Solutions</a>
            <a href="#team" className="transition-colors hover:text-red-500" style={{ color: theme === 'dark' ? '#94a3b8' : '#475569' }}>Team</a>
            <a href="#vision" className="transition-colors hover:text-red-500" style={{ color: theme === 'dark' ? '#94a3b8' : '#475569' }}>Vision</a>
            <button onClick={toggleTheme} className="p-2 rounded-lg transition-all hover:scale-110" style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)', color: '#dc2626' }}>
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="#" className="px-4 py-2 border border-white/20 rounded-lg font-medium transition-colors hover:border-red-500" style={{ color: theme === 'dark' ? '#ffffff' : '#0f172a' }}>Login</a>
            <a href="#demo" className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-lg font-medium transition-all text-white shadow-lg shadow-red-600/20">Request Demo</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} style={{ color: theme === 'dark' ? '#ffffff' : '#0f172a' }} /> : <Menu size={24} style={{ color: theme === 'dark' ? '#ffffff' : '#0f172a' }} />}
          </button>
        </div>
      </nav>

      {/* Background Effect */}
      <div className="absolute inset-0" style={{ pointerEvents: 'none', zIndex: 1 }}>
        <LaserFlow color={theme === 'dark' ? '#dc2626' : '#ef4444'} wispDensity={3.5} fogIntensity={1.2} fogScale={0.4} flowSpeed={0.6} wispSpeed={20} wispIntensity={theme === 'dark' ? 12 : 6} horizontalBeamOffset={0.08} verticalBeamOffset={0} verticalSizing={2.5} horizontalSizing={0.5} decay={0.8} falloffStart={0.7} mouseTiltStrength={0.015} />
      </div>

      {/* Hero Content */}
      <div className="flex-1 flex items-end justify-center">
        <div className="relative w-[92%] max-w-[1300px] rounded-3xl overflow-hidden -mb-16 transition-all duration-300" style={{ zIndex: 10, height: '58vh', minHeight: '480px', maxHeight: '620px', background: theme === 'dark' ? 'rgba(10, 12, 16, 0.6)' : 'rgba(255, 255, 255, 0.6)', border: theme === 'dark' ? '1px solid rgba(220, 38, 38, 0.2)' : '1px solid rgba(220, 38, 38, 0.3)', boxShadow: theme === 'dark' ? '0 0 50px rgba(220, 38, 38, 0.1)' : '0 0 50px rgba(220, 38, 38, 0.15)', backdropFilter: 'blur(12px)' }}>
          <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-transparent"></div>
          <div className="relative h-full flex items-center justify-center px-10">
            <div className="text-center max-w-4xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]" style={{ color: theme === 'dark' ? '#ffffff' : '#0f172a' }}>
                A Comprehensive Platform<br />
                <FlipWords words={rotatingTexts} duration={3000} className="bg-gradient-to-r from-red-500 via-red-600 to-red-500 bg-clip-text text-transparent" />
              </h1>
              <p className="text-lg md:text-xl mb-4" style={{ color: '#dc2626' }}>
                we truly think of everything
              </p>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: theme === 'dark' ? '#94a3b8' : '#475569' }}>
                Transform your automotive retail operations with an enterprise-grade AI-driven ERP solution
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a href="#demo" className="px-9 py-3.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-red-600/30 hover:shadow-red-500/40">Request Demo</a>
                <a href="#solutions" className="px-9 py-3.5 backdrop-blur-sm font-semibold rounded-lg transition-all" style={{ background: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(220, 38, 38, 0.1)', border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(220, 38, 38, 0.2)', color: theme === 'dark' ? '#ffffff' : '#0f172a' }}>Explore Solutions</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
