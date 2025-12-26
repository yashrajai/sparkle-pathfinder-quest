import { useTheme } from '../context/ThemeContext';

export function useThemeStyles() {
  const { theme, toggleTheme } = useTheme();
  
  const isDark = theme === 'dark';
  
  return {
    theme,
    toggleTheme,
    isDark,
    // Automatrix Dark Theme Colors
    bgPrimary: isDark ? '#0a0c10' : '#ffffff',
    bgSecondary: isDark ? '#12151c' : '#f8fafc',
    bgTertiary: isDark ? '#1a1f2a' : '#f1f5f9',
    textPrimary: isDark ? '#ffffff' : '#0f172a',
    textSecondary: isDark ? '#94a3b8' : '#64748b',
    textTertiary: isDark ? '#64748b' : '#94a3b8',
    borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
    borderColorHover: isDark ? 'rgba(220, 38, 38, 0.5)' : 'rgba(220, 38, 38, 0.5)',
    // Automatrix Red accent
    accentColor: '#dc2626',
    accentColorLight: '#ef4444',
    accentColorDark: '#b91c1c',
  };
}
