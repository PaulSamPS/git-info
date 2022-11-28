import React from 'react';
import { IconSpinner } from './assets';
import { SpinnerProps } from './Spinner.props';
import './Spinner.scss';

export const Spinner = React.memo(
  ({
    position = 'absolute',
    color,
    'aria-label': ariaLabel = 'Загружается...',
    ...restProps
  }: SpinnerProps) => (
    <span
      role='status'
      aria-label={ariaLabel}
      className='spinner'
      style={{ position, color }}
      {...restProps}
    >
      <IconSpinner aria-hidden='true' className='spinner-self' />
    </span>
  )
);
