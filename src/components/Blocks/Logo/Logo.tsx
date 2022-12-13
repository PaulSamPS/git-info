import React from 'react';
import cx from 'clsx';
import styles from './Logo.module.scss';

interface LogoProps extends React.AllHTMLAttributes<HTMLDivElement> {}

export const Logo = ({ children, className, ...restProps }: LogoProps) => (
  <div className={cx(className, styles.logo)} {...restProps}>
    {children}
  </div>
);
