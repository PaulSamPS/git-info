import React from 'react';
import cx from 'clsx';
import styles from './styles/Logo.module.scss';
import { LogoProps } from './types/logo.interface';

export const Logo = ({ children, className, ...restProps }: LogoProps) => (
  <div className={cx(className, styles.logo)} {...restProps}>
    {children}
  </div>
);
