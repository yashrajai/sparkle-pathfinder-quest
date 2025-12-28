import React, { Suspense } from 'react';
import LaserFlow from './LaserFlow';
import { FlipWords } from './ui/flip-words';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';
import automatrixLogo from '@/assets/automatrix-logo.jpg';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const rotatingTexts = ['Driven by Intelligence', 'Powered by AI', 'Built for Dealers', 'Designed to Scale'];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden transition-colors duration-300" style={{ backgroundColor: '#000000' }}>
      {/* Navigation */}
      <nav className="relative z-50 w-full py-6 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={automatrixLogo} alt="Automatrix Logo" className="w-12 h-12 object-contain" />
            <span className="text-xl font-bold bg-gradient-to-r from-teal-300 via-cyan-400 to-teal-500 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
              AutoMatrix
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#passion" className="text-gray-400 transition-colors hover:text-teal-400">Our Passion</a>
            <a href="#solutions" className="text-gray-400 transition-colors hover:text-teal-400">Solutions</a>
            <a href="#team" className="text-gray-400 transition-colors hover:text-teal-400">Team</a>
            <a href="#vision" className="text-gray-400 transition-colors hover:text-teal-400">Vision</a>
            <button onClick={toggleTheme} className="p-2 rounded-lg transition-all hover:scale-110 bg-teal-500/10 text-teal-400">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="#" className="px-4 py-2 border border-white/20 rounded-lg font-medium text-white transition-colors hover:border-teal-500">Login</a>
            <a href="#demo" className="px-6 py-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 rounded-lg font-medium transition-all text-white shadow-lg shadow-teal-500/20">Request Demo</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>
      </nav>

      {/* Background Effect - Deep teal ambient glow on pure black */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
        <LaserFlow 
          color="#064d4d"
          horizontalBeamOffset={0.15}
          verticalBeamOffset={0.0}
          flowSpeed={0.8}
          fogIntensity={0.3}
          decay={0.9}
        />
      </div>
      {/* Additional ambient glow overlays */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, rgba(13, 109, 109, 0.4) 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-15" style={{ background: 'radial-gradient(circle, rgba(10, 85, 85, 0.5) 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-10" style={{ background: 'radial-gradient(ellipse, rgba(13, 109, 109, 0.3) 0%, transparent 60%)', filter: 'blur(60px)' }}></div>
      </div>

      {/* Hero Content */}
      <div className="flex-1 flex items-end justify-center">
        <div className="relative w-[92%] max-w-[1300px] rounded-3xl overflow-hidden -mb-16 transition-all duration-300" style={{ zIndex: 10, height: '58vh', minHeight: '480px', maxHeight: '620px', background: 'rgba(8, 15, 18, 0.85)', border: '1px solid rgba(40, 60, 65, 0.4)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)', backdropFilter: 'blur(20px)' }}>
          {/* Spline 3D Animation Background */}
          <div className="absolute inset-0 z-0">
            <Suspense fallback={<div className="w-full h-full bg-transparent" />}>
              <Spline scene="https://prod.spline.design/IDmOZGWSvcrYbJ2O/scene.splinecode" />
            </Suspense>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent z-[1]"></div>
          <div className="relative h-full flex items-center justify-center px-10 z-[2]">
            <div className="text-center max-w-4xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] text-white">
                A Comprehensive Platform<br />
                <FlipWords words={rotatingTexts} duration={3000} className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-400 bg-clip-text text-transparent" />
              </h1>
              <p className="text-lg md:text-xl mb-4 text-teal-400">
                we truly think of everything
              </p>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-gray-400">
                Transform your automotive retail operations with an enterprise-grade AI-driven ERP solution
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a href="#demo" className="px-9 py-3.5 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white font-semibold rounded-lg transition-all shadow-lg shadow-teal-500/30 hover:shadow-teal-400/40">Request Demo</a>
                <a href="#solutions" className="px-9 py-3.5 backdrop-blur-sm font-semibold rounded-lg transition-all bg-white/5 border border-white/10 text-white hover:border-teal-500/50">Explore Solutions</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
