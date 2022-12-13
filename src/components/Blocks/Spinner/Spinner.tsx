import React from 'react';
import cx from 'clsx';
import { IconSpinner } from './assets';
import styles from './Spinner.module.scss';

interface SpinnerProps extends React.AllHTMLAttributes<HTMLSpanElement> {
  position?: 'absolute' | 'relative';
  color?: 'white';
}

export const Spinner = React.memo(
  ({
    position = 'absolute',
    color,
    className,
    'aria-label': ariaLabel = 'Загружается...',
    ...restProps
  }: SpinnerProps) => (
    <span
      role='status'
      aria-label={ariaLabel}
      className={cx(className, styles.spinner)}
      style={{ position, color }}
      {...restProps}
    >
      <IconSpinner aria-hidden='true' className={styles['spinner-self']} />
    </span>
  )
);
