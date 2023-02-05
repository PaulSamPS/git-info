import React from 'react';

export interface TypeThemeSwitcher
  extends React.AllHTMLAttributes<HTMLDivElement> {
  iconLight: React.ReactNode;
  iconDark: React.ReactNode;
}
