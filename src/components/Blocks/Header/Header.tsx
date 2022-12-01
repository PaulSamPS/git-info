import React from 'react';
import { HeaderProps } from './Header.props';
import './Header.scss';

export const Header = ({ children }: HeaderProps) => (
  <header className='header'>{children}</header>
);
