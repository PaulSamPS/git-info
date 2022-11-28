import React from 'react';
import { LogoProps } from './Logo.props';
import './Logo.scss';

export const Logo = ({ children, ...restProps }: LogoProps) => (
  <div className='logo' {...restProps}>
    {children}
  </div>
);
