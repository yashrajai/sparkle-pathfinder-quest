import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { useThemeStyles } from '../hooks/useThemeStyles';

export default function Footer() {
  const { theme, bgPrimary, textPrimary, textSecondary, borderColor } = useThemeStyles();
  
  const footerLinks = { 
    Solutions: ['AccuLedger', 'CollectIQ', 'InsightPro', 'RelationIQ', 'RetailConnect', 'ServiceSuite'], 
    Company: ['About Us', 'Our Team', 'Partners', 'Careers', 'Contact'],
    Resources: ['Documentation', 'Integrations', 'Support', 'Training']
  };

  return (
    <footer className="relative pt-20 pb-12 px-6 transition-colors duration-300" style={{ backgroundColor: bgPrimary, borderTop: `1px solid ${borderColor}` }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">X</span>
              </div>
              <div>
                <span className="text-xl font-bold" style={{ color: textPrimary }}>AUTOMATRIX</span>
                <div className="text-xs" style={{ color: textSecondary }}>Driven by <span className="text-red-500">Intelligence</span></div>
              </div>
            </div>
            <p className="mb-6 leading-relaxed" style={{ color: textSecondary }}>
              AI-driven ERP platform designed to streamline and elevate automotive dealership management.
            </p>
            <div className="space-y-3">
              <a href="tel:9542288595" className="flex items-center gap-2 text-sm hover:text-red-500 transition-colors" style={{ color: textSecondary }}>
                <Phone className="w-4 h-4" />
                <span>+1 (954) 228-8595</span>
              </a>
              <a href="mailto:info@automatrix.com" className="flex items-center gap-2 text-sm hover:text-red-500 transition-colors" style={{ color: textSecondary }}>
                <Mail className="w-4 h-4" />
                <span>info@automatrix.com</span>
              </a>
              <div className="flex items-center gap-2 text-sm" style={{ color: textSecondary }}>
                <MapPin className="w-4 h-4" />
                <span>21025 NW 2nd Avenue, Miami, FL 33169</span>
              </div>
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4" style={{ color: textPrimary }}>{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm transition-colors hover:text-red-500" style={{ color: textSecondary }}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8" style={{ borderTop: `1px solid ${borderColor}` }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-sm" style={{ color: textSecondary }}>
              <Globe className="w-4 h-4" />
              <span>Mo-Fr: 9:00am – 5:00pm EST</span>
            </div>
            <div className="flex gap-4 text-sm" style={{ color: textSecondary }}>
              <a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm" style={{ color: theme === 'dark' ? '#64748b' : '#94a3b8' }}>
            <p>&copy; 2025 Automatrix. Driven by Intelligence. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
