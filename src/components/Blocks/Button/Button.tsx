import React from 'react';
import { Spinner } from 'components/Blocks';
import cx from 'clsx';
import styles from './Button.module.scss';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  type: 'submit' | 'button';
  width?: number;
  appearance: 'primary' | 'transparent';
  icon?: React.ReactNode;
}

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
    className={cx(
      className,
      styles.button,
      styles[`button-${appearance}`],
      loading && styles['button-loading'],
      icon && styles['button-icon']
    )}
    {...restProps}
  >
    {icon && icon}
    {loading ? <Spinner position='relative' color='white' /> : children}
  </button>
);
