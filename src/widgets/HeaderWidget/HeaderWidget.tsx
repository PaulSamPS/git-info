import React from 'react';
import { CustomLink } from 'shared/ui/CustomLink';
import { ThemeSwitcher } from 'entities/ThemeSwitcher';
import { IconMoon, IconSun } from 'shared/assets';
import { Logo } from 'shared/ui/Logo';
import { Header } from 'shared/ui/Header';

export const HeaderWidget = () => (
  <Header>
    <Logo>
      <CustomLink size={28} to='/'>
        GitInfo
      </CustomLink>
    </Logo>
    <ThemeSwitcher iconLight={<IconSun />} iconDark={<IconMoon />} />
  </Header>
);
