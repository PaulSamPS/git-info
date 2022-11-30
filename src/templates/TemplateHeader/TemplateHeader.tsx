import React from 'react';
import { Logo, ThemeSwitcher, Header, CustomLink } from 'components';
import { useTheme } from 'hooks';

export const TemplateHeader = () => {
  const { theme, toggleThemeKeyboard, toggleTheme } = useTheme();

  return (
    <Header>
      <Logo>
        <CustomLink size={28} to='/'>
          GitInfo
        </CustomLink>
      </Logo>
      <ThemeSwitcher
        theme={theme}
        toggleTheme={toggleTheme}
        toggleThemeKeyboard={toggleThemeKeyboard}
      />
    </Header>
  );
};
