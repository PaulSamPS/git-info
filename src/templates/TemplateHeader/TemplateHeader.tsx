import React from 'react';
import { Logo, Header } from 'components/Blocks';
import { useTheme } from 'hooks';
import { CustomLink } from 'components';
import { ThemeSwitcher } from 'entity';
import { IconMoon, IconSun } from 'helpers/icons';

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
        iconLight={<IconSun />}
        iconDark={<IconMoon />}
        theme={theme}
        toggleTheme={toggleTheme}
        toggleThemeKeyboard={toggleThemeKeyboard}
      />
    </Header>
  );
};
