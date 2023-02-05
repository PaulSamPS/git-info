import React from 'react';
import cx from 'clsx';
import styles from './styles/ThemeSwitcher.module.scss';
import { TypeThemeSwitcher } from './types/theme.props';
import { useTheme } from './lib/hooks/useTheme';

export const ThemeSwitcher = ({
  iconLight,
  iconDark,
  className,
  ...restProps
}: TypeThemeSwitcher) => {
  const { theme, toggleThemeKeyboard, toggleTheme } = useTheme();
  return (
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
      {theme === 'light' ? iconLight : iconDark}
    </div>
  );
};
