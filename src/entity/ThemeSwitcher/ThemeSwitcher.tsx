import React, { KeyboardEvent } from 'react';
import cx from 'clsx';
import { IconMoon, IconSun } from './assets';
import styles from './ThemeSwitcher.module.scss';

type Theme = 'light' | 'dark';

interface TypeThemeSwitcher extends React.AllHTMLAttributes<HTMLDivElement> {
  theme: Theme;
  toggleTheme: () => void;
  toggleThemeKeyboard: (e: KeyboardEvent<HTMLDivElement>) => void;
}

export const ThemeSwitcher = ({
  theme,
  toggleTheme,
  toggleThemeKeyboard,
  className,
  ...restProps
}: TypeThemeSwitcher) => (
  <div
    role='button'
    tabIndex={0}
    onKeyDown={(e) => toggleThemeKeyboard(e)}
    className={cx(className, styles.switcher)}
    aria-label={`Смена темы, активная  тема ${theme}`}
    onClick={toggleTheme}
    {...restProps}
  >
    <span>{theme}</span>
    {theme === 'light' ? <IconSun /> : <IconMoon />}
  </div>
);
