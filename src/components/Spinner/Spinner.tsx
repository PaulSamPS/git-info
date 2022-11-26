import React from 'react';
import cn from 'classnames';
import { IconSpinner } from './assets';
import { SpinnerProps } from './Spinner.props';
import styles from './Spinner.module.scss';

export const Spinner = React.memo(
  ({
    position = 'absolute',
    'aria-label': ariaLabel = 'Загружается...',
    ...restProps
  }: SpinnerProps) => (
    <span
      role='status'
      aria-label={ariaLabel}
      {...restProps}
      className={cn(styles.spinner, restProps.className)}
      style={{ position }}
    >
      <IconSpinner aria-hidden='true' className={styles.self} />
    </span>
  )
);
