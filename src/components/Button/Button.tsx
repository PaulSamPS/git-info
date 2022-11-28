import React from 'react';
import { Spinner } from 'components/index';
import { classNames } from 'lib';
import { ButtonProps } from './Button.props';
import './Button.scss';

export const Button = ({
  loading,
  type,
  width,
  children,
  className,
  ...restProps
}: ButtonProps) => (
  <button
    /* eslint-disable-next-line react/button-has-type */
    type={type}
    style={{ width }}
    className={classNames('button', loading && 'button-loading')}
    {...restProps}
  >
    {loading ? <Spinner position='relative' color='white' /> : children}
  </button>
);
