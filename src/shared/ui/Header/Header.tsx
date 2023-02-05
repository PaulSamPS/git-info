import React from 'react';
import cx from 'clsx';
import styles from './styles/Header.module.scss';
import { HeaderProps } from './types/header.interface';

export const Header = ({ children, className, ...restProps }: HeaderProps) => (
  <header className={cx(className, styles.header)} {...restProps}>
    {children}
  </header>
);
