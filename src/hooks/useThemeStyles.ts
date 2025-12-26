import { useTheme } from '../context/ThemeContext';

export function useThemeStyles() {
  const { theme, toggleTheme } = useTheme();
  
  const isDark = theme === 'dark';
  
  return {
    theme,
    toggleTheme,
    isDark,
    // AutoMatrix Dark Theme Colors - Cyan/Teal
    bgPrimary: isDark ? '#0a1419' : '#ffffff',
    bgSecondary: isDark ? '#0d1a1f' : '#f8fafc',
    bgTertiary: isDark ? '#122026' : '#f1f5f9',
    textPrimary: isDark ? '#ffffff' : '#0f172a',
    textSecondary: isDark ? '#7aa3b5' : '#64748b',
    textTertiary: isDark ? '#5a8a9c' : '#94a3b8',
    borderColor: isDark ? 'rgba(0, 212, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)',
    borderColorHover: isDark ? 'rgba(0, 212, 255, 0.5)' : 'rgba(0, 212, 255, 0.5)',
    // AutoMatrix Cyan accent
    accentColor: '#00d4ff',
    accentColorLight: '#33ddff',
    accentColorDark: '#00a3c4',
  };
}
