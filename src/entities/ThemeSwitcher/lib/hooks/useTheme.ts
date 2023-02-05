import React, { KeyboardEvent } from 'react';
import { UseTheme } from '../../types/useTheme.type';

export const useTheme = (): UseTheme => {
  const currentTheme = localStorage.getItem('theme');
  const [theme, setTheme] = React.useState<string>(currentTheme || 'light');

  const toggleTheme = React.useCallback((): void => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
  }, [theme]);

  const toggleThemeKeyboard = React.useCallback(
    (e: KeyboardEvent<HTMLDivElement>): void => {
      if (e.code === 'Space') {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }
    },
    [theme]
  );

  React.useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return <UseTheme>{ theme, toggleTheme, toggleThemeKeyboard };
};
