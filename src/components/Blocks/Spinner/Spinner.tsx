import React from 'react';
import cx from 'clsx';
import { IconSpinner } from './assets';
import styles from './Spinner.module.scss';

interface SpinnerProps extends React.AllHTMLAttributes<HTMLSpanElement> {
  position?: 'fixed' | 'relative';
  color?: 'white';
}

export const Spinner = React.memo(
  ({
    position = 'fixed',
    color,
    className,
    'aria-label': ariaLabel = 'Загружается...',
    ...restProps
  }: SpinnerProps) => (
    <span
      role='status'
      aria-label={ariaLabel}
      className={cx(className, styles.spinner, styles[`spinner-${position}`])}
      style={{ color }}
      {...restProps}
    >
      <IconSpinner aria-hidden='true' className={styles['spinner-self']} />
    </span>
  )
);
