import React, { ForwardedRef, forwardRef } from 'react';
import { classNames } from 'lib';
import { InputProps } from './Input.props';
import './Input.scss';

export const Input = forwardRef(
  (
    { icon, className, ...restProps }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => (
    <div className={classNames('input', icon && 'input-icon')}>
      {icon && <label htmlFor='search'>{icon}</label>}
      <input ref={ref} className='input-text' {...restProps} />
    </div>
  )
);
