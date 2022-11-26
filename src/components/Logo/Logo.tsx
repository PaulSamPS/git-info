import React from 'react';
import { LogoProps } from './Logo.props';
import styles from './Logo.module.scss';

export const Logo = ({ children }: LogoProps) => (
  <div className={styles.logo}>{children}</div>
);
