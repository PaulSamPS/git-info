import { useEffect, KeyboardEvent, useCallback, useState } from 'react';

type Theme = 'light' | 'dark';

type UseTheme = {
  theme: Theme;
  toggleTheme: () => void;
  toggleThemeKeyboard: (e: KeyboardEvent<HTMLDivElement>) => void;
};

export const useTheme = (): UseTheme => {
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = useCallback((): void => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme]);

  const toggleThemeKeyboard = useCallback(
    (e: KeyboardEvent<HTMLDivElement>): void => {
      if (e.code === 'Space') {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }
    },
    [theme]
  );

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return <UseTheme>{ theme, toggleTheme, toggleThemeKeyboard };
};
