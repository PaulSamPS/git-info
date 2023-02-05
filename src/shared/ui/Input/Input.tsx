import React, { ForwardedRef, forwardRef } from 'react';
import cx from 'clsx';
import styles from './styles/Input.module.scss';
import { InputProps } from './types/input.interface';

export const Input = forwardRef(
  (
    { icon, className, id, ...restProps }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => (
    <div className={cx(className, styles.input, icon && styles['input-icon'])}>
      {icon && <label htmlFor={id}>{icon}</label>}
      <input
        ref={ref}
        id={id}
        className={styles['input-text']}
        autoComplete='off'
        {...restProps}
      />
    </div>
  )
);
