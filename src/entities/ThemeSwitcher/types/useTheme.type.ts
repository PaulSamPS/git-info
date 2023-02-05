import { KeyboardEvent } from 'react';
import { Theme } from './theme.type';

export type UseTheme = {
  theme: Theme;
  toggleTheme: () => void;
  toggleThemeKeyboard: (e: KeyboardEvent<HTMLDivElement>) => void;
};
