import React, { KeyboardEvent } from 'react';

type Theme = 'light' | 'dark';

export interface TypeThemeSwitcher
  extends React.AllHTMLAttributes<HTMLDivElement> {
  theme: Theme;
  toggleTheme: () => void;
  toggleThemeKeyboard: (e: KeyboardEvent<HTMLDivElement>) => void;
}
