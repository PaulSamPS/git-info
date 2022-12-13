import React from 'react';
import cx from 'clsx';
import styles from './Card.module.scss';

interface CardProps extends React.AllHTMLAttributes<HTMLDivElement> {}

export const Card = ({ children, className, ...restProps }: CardProps) => (
  <div className={cx(className, styles.card)} {...restProps}>
    {children}
  </div>
);
