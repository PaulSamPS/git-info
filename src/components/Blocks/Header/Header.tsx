import React from 'react';
import cx from 'clsx';
import styles from './Header.module.scss';

interface HeaderProps extends React.AllHTMLAttributes<HTMLElement> {}

export const Header = ({ children, className, ...restProps }: HeaderProps) => (
  <header className={cx(className, styles.header)} {...restProps}>
    {children}
  </header>
);
