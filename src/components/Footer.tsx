import React from 'react';
import { Mail, Phone, Globe } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';
import { useThemeStyles } from '../hooks/useThemeStyles';

export default function Footer() {
  const { bgPrimary, textPrimary, textSecondary, borderColor } = useThemeStyles();

  return (
    <footer className="relative pt-16 pb-8 px-6 transition-colors duration-300" style={{ backgroundColor: bgPrimary, borderTop: `1px solid ${borderColor}` }}>
      <div className="max-w-6xl mx-auto">
        {/* Contact Info Row */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 text-center">
          <div>
            <h4 className="font-semibold mb-2" style={{ color: textPrimary }}>Email Us</h4>
            <a href="mailto:support@automatrix.agency" className="text-sm hover:text-red-500 transition-colors" style={{ color: textSecondary }}>
              support@automatrix.agency
            </a>
          </div>
          <div>
            <h4 className="font-semibold mb-2" style={{ color: textPrimary }}>Call Us</h4>
            <a href="tel:+919054233396" className="text-sm hover:text-red-500 transition-colors" style={{ color: textSecondary }}>
              +91 9054233396
            </a>
          </div>
          <div>
            <h4 className="font-semibold mb-2" style={{ color: textPrimary }}>Visit Us</h4>
            <a href="https://www.automatrix.agency" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-red-500 transition-colors" style={{ color: textSecondary }}>
              www.automatrix.agency
            </a>
          </div>
        </div>

        {/* Get in touch Section */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold mb-3 text-cyan-400">Get in touch</h3>
          <p className="text-sm mb-6" style={{ color: textSecondary }}>Feel free to reach out if you have any questions or inquiries.</p>
          <div className="flex justify-center gap-4">
            <a 
              href="mailto:support@automatrix.agency" 
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-opacity-80"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: textPrimary, border: `1px solid ${borderColor}` }}
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
            <a 
              href="https://www.linkedin.com/company/automatrix" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-opacity-80"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: textPrimary, border: `1px solid ${borderColor}` }}
            >
              <FaLinkedinIn className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-8" style={{ backgroundColor: borderColor }}></div>

        {/* Copyright */}
        <div className="text-center text-sm" style={{ color: textSecondary }}>
          <p>&copy; 2026 All Rights reserved by <span className="font-semibold" style={{ color: textPrimary }}>Automatrix Agency</span></p>
        </div>
      </div>
    </footer>
  );
}
