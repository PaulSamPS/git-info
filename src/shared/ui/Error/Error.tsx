import React from 'react';
import cx from 'clsx';
import styles from './styles/Error.module.scss';
import { ErrorProps } from './types/error.interface';

export const Error = ({ className, isBlock, err }: ErrorProps) => {
  if (err) {
    return (
      <div
        className={cx(
          className,
          styles.error,
          isBlock && styles['error-block']
        )}
      >
        {err.toString()}
      </div>
    );
  }
  return null;
};
