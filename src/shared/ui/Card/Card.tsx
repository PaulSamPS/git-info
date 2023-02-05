import React from 'react';
import cx from 'clsx';
import styles from './styles/Card.module.scss';
import { CardProps } from './types/card.interface';

export const Card = ({ children, className, ...restProps }: CardProps) => (
  <div className={cx(className, styles.card)} {...restProps}>
    {children}
  </div>
);
