import React from 'react';
import { Logo, ThemeSwitcher, Header } from 'components';
import { useTheme } from 'hooks';

export const TemplateHeader = () => {
  const { theme, toggleThemeKeyboard, toggleTheme } = useTheme();

  return (
    <Header>
      <Logo>GitInfo</Logo>
      <ThemeSwitcher
        theme={theme}
        toggleTheme={toggleTheme}
        toggleThemeKeyboard={toggleThemeKeyboard}
      />
    </Header>
  );
};
