import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useThemeStyles } from '../hooks/useThemeStyles';

export default function Footer() {
  const { theme, textPrimary, textSecondary } = useThemeStyles();
  const isDark = theme === 'dark';
  
  const footerLinks = { 
    Services: ['Invoice Automation', 'AI Voice Agents', 'Custom SaaS', 'TallyPrime Integration'], 
    Company: ['About Us', 'Workflow', 'Benefits', 'Testimonials'],
    Support: ['Contact', 'FAQ', 'Documentation']
  };

  return (
    <footer className="relative pt-16 pb-8 px-6 transition-colors duration-300" style={{ backgroundColor: isDark ? '#0a0f12' : '#f0fdf9', borderTop: `1px solid ${isDark ? 'rgba(20, 184, 166, 0.15)' : 'rgba(20, 184, 166, 0.2)'}` }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #14b8a6, #0d9488)' }}>
                <div className="w-4 h-4 flex flex-col justify-center gap-0.5">
                  <div className="w-full h-0.5 bg-white transform -rotate-45"></div>
                  <div className="w-full h-0.5 bg-white transform -rotate-45"></div>
                </div>
              </div>
              <span className="font-bold text-lg" style={{ color: '#14b8a6' }}>AutoMatrix</span>
            </div>
            <p className="mb-6 leading-relaxed text-sm" style={{ color: textSecondary }}>
              AI-powered automation solutions for businesses. Transform your operations with intelligent invoice processing, voice agents, and custom software.
            </p>
            <div className="space-y-3">
              <a href="mailto:support@automatrix.agency" className="flex items-center gap-2 text-sm hover:text-teal-500 transition-colors" style={{ color: textSecondary }}>
                <Mail className="w-4 h-4" />
                <span>support@automatrix.agency</span>
              </a>
              <a href="tel:+919054233396" className="flex items-center gap-2 text-sm hover:text-teal-500 transition-colors" style={{ color: textSecondary }}>
                <Phone className="w-4 h-4" />
                <span>+91 9054233396</span>
              </a>
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4" style={{ color: textPrimary }}>{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm transition-colors hover:text-teal-500" style={{ color: textSecondary }}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8" style={{ borderTop: `1px solid ${isDark ? 'rgba(20, 184, 166, 0.15)' : 'rgba(20, 184, 166, 0.2)'}` }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: textSecondary }}>
              © 2025 AutoMatrix. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm" style={{ color: textSecondary }}>
              <a href="#" className="hover:text-teal-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-teal-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
