import React from 'react';
import { FormProps } from './Form.props';
import './Form.scss';

export const Form = ({ children, ...restProps }: FormProps) => (
  <form className='form' {...restProps}>
    {children}
  </form>
);
