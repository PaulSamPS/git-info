import React, { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';
import { InputProps } from './Input.props';
import styles from './Input.module.scss';

export const Input = forwardRef(
  (
    { icon, className, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => (
    <div className={cn(className, styles.input, { [styles.icon]: icon })}>
      {icon && <label htmlFor='search'>{icon}</label>}
      <input ref={ref} className={styles.textField} {...props} />
    </div>
  )
);
