import React, { ForwardedRef, forwardRef, ReactNode } from 'react';
import cx from 'clsx';
import styles from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  id: string;
}

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
