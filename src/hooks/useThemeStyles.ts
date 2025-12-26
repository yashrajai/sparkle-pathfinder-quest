import { useTheme } from '../context/ThemeContext';

export function useThemeStyles() {
  const { theme, toggleTheme } = useTheme();
  
  const isDark = theme === 'dark';
  
  return {
    theme,
    toggleTheme,
    isDark,
    // AutoMatrix Agency Theme Colors - Teal/Cyan
    bgPrimary: isDark ? '#0c1215' : '#f8fafb',
    bgSecondary: isDark ? '#111a1f' : '#ffffff',
    bgTertiary: isDark ? '#162026' : '#f1f5f7',
    bgHero: isDark ? '#0c1215' : 'linear-gradient(135deg, #f0fdf9 0%, #e0f7f3 30%, #ccfbf1 60%, #f0fdf9 100%)',
    textPrimary: isDark ? '#ffffff' : '#0c1215',
    textSecondary: isDark ? '#7f9ba6' : '#4b6b78',
    textTertiary: isDark ? '#5a7a87' : '#6b8a97',
    borderColor: isDark ? 'rgba(20, 184, 166, 0.15)' : 'rgba(20, 184, 166, 0.2)',
    borderColorHover: isDark ? 'rgba(20, 184, 166, 0.5)' : 'rgba(20, 184, 166, 0.5)',
    // AutoMatrix Teal accent
    accentColor: '#14b8a6',
    accentColorLight: '#2dd4bf',
    accentColorDark: '#0d9488',
  };
}
