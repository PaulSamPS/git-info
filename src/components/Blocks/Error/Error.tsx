import React from 'react';
import cx from 'clsx';
import styles from './Error.module.scss';

interface ErrorProps extends React.AllHTMLAttributes<HTMLDivElement> {
  isBlock?: boolean;
  err: string | boolean | unknown;
}

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
