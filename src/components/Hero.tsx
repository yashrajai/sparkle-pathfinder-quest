import LaserFlow from './LaserFlow';
import { FlipWords } from './ui/flip-words';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Hero() {
  const { theme, toggleTheme } = useTheme();
  const rotatingTexts = ['That Scales With You', 'That Drives Growth', 'That Works 24/7', 'That Reduces Costs'];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden transition-colors duration-300" style={{ backgroundColor: theme === 'dark' ? '#060010' : '#f8fafc' }}>
      <nav className="relative z-50 w-full py-6 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">KentraAI</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#solutions" className="transition-colors" style={{ color: theme === 'dark' ? '#cbd5e1' : '#475569' }}>Solutions</a>
            <a href="#platform" className="transition-colors" style={{ color: theme === 'dark' ? '#cbd5e1' : '#475569' }}>Platform</a>
            <a href="#industries" className="transition-colors" style={{ color: theme === 'dark' ? '#cbd5e1' : '#475569' }}>Industries</a>
            <button onClick={toggleTheme} className="p-2 rounded-lg transition-all hover:scale-110" style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)', color: theme === 'dark' ? '#a78bfa' : '#8b5cf6' }}>
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="https://cal.com/yash-nbvvjb/15min" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-violet-500 hover:bg-violet-600 rounded-lg font-medium transition-colors text-white">Contact</a>
          </div>
        </div>
      </nav>

      <div className="absolute inset-0" style={{ pointerEvents: 'none', zIndex: 1 }}>
        <LaserFlow color={theme === 'dark' ? '#C4B5FD' : '#8b5cf6'} wispDensity={3.5} fogIntensity={1.2} fogScale={0.4} flowSpeed={0.6} wispSpeed={20} wispIntensity={theme === 'dark' ? 12 : 6} horizontalBeamOffset={0.08} verticalBeamOffset={0} verticalSizing={2.5} horizontalSizing={0.5} decay={0.8} falloffStart={0.7} mouseTiltStrength={0.015} />
      </div>

      <div className="flex-1 flex items-end justify-center">
        <div className="relative w-[92%] max-w-[1300px] rounded-3xl overflow-hidden -mb-16 transition-all duration-300" style={{ zIndex: 10, height: '58vh', minHeight: '480px', maxHeight: '620px', background: theme === 'dark' ? 'rgba(6, 0, 16, 0.35)' : 'rgba(255, 255, 255, 0.6)', border: theme === 'dark' ? '1px solid rgba(139, 92, 246, 0.25)' : '1px solid rgba(139, 92, 246, 0.3)', boxShadow: theme === 'dark' ? '0 0 50px rgba(139, 92, 246, 0.12)' : '0 0 50px rgba(139, 92, 246, 0.15)', backdropFilter: 'blur(12px)' }}>
          <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent"></div>
          <div className="relative h-full flex items-center justify-center px-10">
            <div className="text-center max-w-4xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]" style={{ color: theme === 'dark' ? '#ffffff' : '#0f172a' }}>
                Enterprise AI Automation<br />
                <FlipWords words={rotatingTexts} duration={3000} className="bg-gradient-to-r from-violet-400 via-purple-400 to-violet-500 bg-clip-text text-transparent" />
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: theme === 'dark' ? '#cbd5e1' : '#475569' }}>
                Transform operational complexity into competitive advantage with intelligent automation
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a href="https://cal.com/yash-nbvvjb/15min" target="_blank" rel="noopener noreferrer" className="px-9 py-3.5 bg-violet-500 hover:bg-violet-600 text-white font-semibold rounded-lg transition-colors">Schedule Demo</a>
                <a href="#solutions" className="px-9 py-3.5 backdrop-blur-sm font-semibold rounded-lg transition-all" style={{ background: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(139, 92, 246, 0.1)', border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(139, 92, 246, 0.2)', color: theme === 'dark' ? '#ffffff' : '#0f172a' }}>View Solutions</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
