import { Mail, Globe } from 'lucide-react';
import { useThemeStyles } from '../hooks/useThemeStyles';

export default function Footer() {
  const { theme, bgPrimary, textPrimary, textSecondary, borderColor } = useThemeStyles();
  const footerLinks = { Solutions: ['Automation Software', 'Agency Services', 'Business School'], Industries: ['Professional Services', 'Real Estate', 'E-commerce', 'Marketing'], Company: ['About', 'Contact', 'Documentation'] };

  return (
    <footer className="relative pt-20 pb-12 px-6 transition-colors duration-300" style={{ backgroundColor: bgPrimary, borderTop: `1px solid ${borderColor}` }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-4">KentraAI</div>
            <p className="mb-6 leading-relaxed" style={{ color: textSecondary }}>Enterprise AI automation infrastructure enabling operational transformation at scale</p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4" style={{ color: textPrimary }}>{category}</h3>
              <ul className="space-y-3">{links.map((link) => (<li key={link}><a href="#" className="text-sm transition-colors" style={{ color: textSecondary }}>{link}</a></li>))}</ul>
            </div>
          ))}
        </div>
        <div className="pt-8" style={{ borderTop: `1px solid ${borderColor}` }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm" style={{ color: textSecondary }}>
              <a href="mailto:contact@kentraai.com" className="flex items-center gap-2"><Mail className="w-4 h-4" /><span>contact@kentraai.com</span></a>
              <a href="https://www.kentraai.com" className="flex items-center gap-2"><Globe className="w-4 h-4" /><span>www.kentraai.com</span></a>
            </div>
            <div className="flex gap-3 text-xs">
              {['US', 'UK', 'EU', 'India'].map(region => (<span key={region} className="px-3 py-1 rounded-full" style={{ backgroundColor: theme === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)', color: textSecondary }}>{region}</span>))}
            </div>
          </div>
          <div className="mt-8 text-center text-sm" style={{ color: theme === 'dark' ? '#64748b' : '#94a3b8' }}><p>&copy; 2025 KentraAI. Enterprise automation infrastructure. All rights reserved.</p></div>
        </div>
      </div>
    </footer>
  );
}
