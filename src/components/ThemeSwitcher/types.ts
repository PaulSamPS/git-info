import { KeyboardEvent } from 'react';

type Theme = 'light' | 'dark';

export type TypeThemeSwitcher = {
  theme: Theme;
  toggleTheme: () => void;
  toggleThemeKeyboard: (e: KeyboardEvent<HTMLDivElement>) => void;
};
