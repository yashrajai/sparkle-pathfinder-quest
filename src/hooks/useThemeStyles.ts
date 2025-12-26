import { useTheme } from '../context/ThemeContext';

export function useThemeStyles() {
  const { theme, toggleTheme } = useTheme();
  
  const isDark = theme === 'dark';
  
  return {
    theme,
    toggleTheme,
    isDark,
    // AutoMatrix Theme Colors - Dark with Teal/Cyan Glow
    bgPrimary: '#050a0c',
    bgSecondary: '#071012',
    bgTertiary: '#0a1518',
    textPrimary: '#f0f5f5',
    textSecondary: '#7ab5b0',
    textTertiary: '#5a9590',
    borderColor: 'rgba(20, 150, 140, 0.2)',
    borderColorHover: 'rgba(20, 150, 140, 0.5)',
    // AutoMatrix Teal accent
    accentColor: '#14968c',
    accentColorLight: '#1ab8a6',
    accentColorDark: '#0d7a72',
  };
}
