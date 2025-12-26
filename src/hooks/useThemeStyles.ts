import { useTheme } from '../context/ThemeContext';

export function useThemeStyles() {
  const { theme, toggleTheme } = useTheme();
  
  const isDark = theme === 'dark';
  
  return {
    theme,
    toggleTheme,
    isDark,
    // AutoMatrix Theme Colors - Light teal/cyan gradient style
    bgPrimary: isDark ? '#0d1a1f' : '#f0f7f6',
    bgSecondary: isDark ? '#0f1e23' : '#e8f4f2',
    bgTertiary: isDark ? '#142428' : '#dff0ed',
    textPrimary: isDark ? '#ffffff' : '#1a3a35',
    textSecondary: isDark ? '#8ab4b0' : '#4a7a72',
    textTertiary: isDark ? '#6a9a94' : '#6a9a94',
    borderColor: isDark ? 'rgba(26, 184, 166, 0.2)' : 'rgba(26, 184, 166, 0.15)',
    borderColorHover: isDark ? 'rgba(26, 184, 166, 0.5)' : 'rgba(26, 184, 166, 0.4)',
    // AutoMatrix Teal accent
    accentColor: '#1ab8a6',
    accentColorLight: '#2dd4bf',
    accentColorDark: '#0d9488',
  };
}
