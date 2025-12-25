import { useTheme } from '../context/ThemeContext';

export function useThemeStyles() {
  const { theme } = useTheme();

  return {
    theme,
    bgPrimary: theme === 'dark' ? '#060010' : '#f8fafc',
    bgSecondary: theme === 'dark' ? 'rgba(30, 41, 59, 0.3)' : 'rgba(241, 245, 249, 0.8)',
    textPrimary: theme === 'dark' ? '#ffffff' : '#0f172a',
    textSecondary: theme === 'dark' ? '#cbd5e1' : '#475569',
    textTertiary: theme === 'dark' ? '#94a3b8' : '#64748b',
    borderColor: theme === 'dark' ? 'rgba(139, 92, 246, 0.2)' : 'rgba(139, 92, 246, 0.3)',
    borderColorHover: theme === 'dark' ? 'rgba(139, 92, 246, 0.5)' : 'rgba(139, 92, 246, 0.6)',
  };
}
