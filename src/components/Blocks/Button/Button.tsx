import React from 'react';
import { Spinner } from 'components/Blocks';
import { classNames } from 'lib';
import { ButtonProps } from './Button.props';
import './Button.scss';

export const Button = ({
  loading,
  type,
  width,
  appearance = 'primary',
  icon,
  children,
  className,
  ...restProps
}: ButtonProps) => (
  <button
    /* eslint-disable-next-line react/button-has-type */
    type={type}
    style={{ width }}
    className={classNames(
      'button',
      `button-${appearance}`,
      loading && 'button-loading',
      icon && 'button-icon'
    )}
    {...restProps}
  >
    {icon && icon}
    {loading ? <Spinner position='relative' color='white' /> : children}
  </button>
);
