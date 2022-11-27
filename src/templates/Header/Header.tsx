import React from 'react';
import { Logo, ThemeSwitcher } from 'components';
import { useTheme } from 'hooks';
import styles from './Header.module.scss';

export const Header = () => {
  const { theme, toggleThemeKeyboard, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <Logo>GitInfo</Logo>
      <ThemeSwitcher
        theme={theme}
        toggleTheme={toggleTheme}
        toggleThemeKeyboard={toggleThemeKeyboard}
      />
    </header>
  );
};
