import React from 'react';
import { CardProps } from './Card.props';
import styles from './Card.module.scss';

export const Card = ({ children, ...restProps }: CardProps) => (
  <div {...restProps} className={styles.card}>
    {children}
  </div>
);
