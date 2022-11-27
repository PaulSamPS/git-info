import React from 'react';
import cn from 'classnames';
import { Spinner } from 'components/index';
import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';

export const Button = ({
  loading,
  type,
  width,
  children,
  className,
  ...restProps
}: ButtonProps) => (
  <button
    {...restProps}
    /* eslint-disable-next-line react/button-has-type */
    type={type}
    style={{ width }}
    className={cn(styles.button, className)}
  >
    {loading ? (
      <Spinner className={styles.loading} position='relative' color='white' />
    ) : (
      children
    )}
  </button>
);
