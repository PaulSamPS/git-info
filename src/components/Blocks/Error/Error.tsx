import React from 'react';
import cx from 'clsx';
import styles from './Error.module.scss';

interface ErrorProps extends React.AllHTMLAttributes<HTMLDivElement> {
  isBlock?: boolean;
}

export const Error = ({ children, className, isBlock }: ErrorProps) => (
  <div
    className={cx(className, styles.error, isBlock && styles['error-block'])}
  >
    {children}
  </div>
);
