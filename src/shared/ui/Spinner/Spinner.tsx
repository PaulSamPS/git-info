import React from 'react';
import cx from 'clsx';
import { IconSpinner } from 'shared/assets';
import styles from './styles/Spinner.module.scss';
import { SpinnerProps } from './types/spinner.interface';

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
