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
          {/* Robot with Connected Nodes */}
          <div className="absolute right-0 top-0 bottom-0 w-[60%] z-0 flex items-center justify-center">
            {/* Left Node - AutoMatrix AI */}
            <div className="absolute left-[5%] top-[30%] z-20">
              <div className="px-4 py-2 rounded-lg bg-[#0a1a1a]/90 border border-teal-500/40 text-white text-sm font-medium backdrop-blur-sm shadow-lg shadow-teal-500/10">
                AutoMatrix AI
              </div>
              {/* Connection line from left node to robot */}
              <svg className="absolute top-1/2 left-full w-[120px] h-[60px] overflow-visible" style={{ transform: 'translateY(-50%)' }}>
                <path
                  d="M 0 0 Q 60 0 80 30 T 120 60"
                  stroke="url(#tealGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse"
                />
                <defs>
                  <linearGradient id="tealGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#14b8a6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Right Node - Click Me */}
            <div className="absolute right-[15%] top-[20%] z-20">
              {/* Connection line from robot to right node */}
              <svg className="absolute top-1/2 right-full w-[100px] h-[40px] overflow-visible" style={{ transform: 'translateY(-50%)' }}>
                <path
                  d="M 100 20 Q 50 20 30 0 T 0 0"
                  stroke="url(#tealGradient2)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse"
                />
                <defs>
                  <linearGradient id="tealGradient2" x1="100%" y1="0%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#14b8a6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="px-4 py-2 rounded-lg bg-teal-500 text-white text-sm font-medium shadow-lg shadow-teal-500/30 cursor-pointer hover:bg-teal-400 transition-colors">
                Click Me
              </div>
            </div>

            {/* Spline 3D Robot - Centered */}
            <div className="w-full h-full relative" style={{ marginRight: '-10%' }}>
              <Suspense fallback={<div className="w-full h-full bg-transparent" />}>
                <Spline scene="https://prod.spline.design/IDmOZGWSvcrYbJ2O/scene.splinecode" />
              </Suspense>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent z-[1]"></div>
          
          {/* Hero Text - Left side */}
          <div className="absolute left-24 top-1/2 -translate-y-1/2 z-10 max-w-lg">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-teal-400 border border-teal-400/30 rounded-full bg-teal-400/5">
              AI-Powered Solutions
            </span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
              <span className="text-white">Automate Smarter.</span>
              <br />
              <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-teal-500 bg-clip-text text-transparent">Scale Faster</span>
            </h1>
            <div className="flex gap-4">
              <a href="#demo" className="px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Get Started
              </a>
              <a href="#solutions" className="px-6 py-3 bg-transparent border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-colors">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
