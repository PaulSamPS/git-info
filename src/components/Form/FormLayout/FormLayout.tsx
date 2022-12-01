import React from 'react';
import { FormLayoutProps } from './FormLayout.props';
import './FormLayout.scss';

export const FormLayout = ({ children, ...restProps }: FormLayoutProps) => (
  <form className='form' {...restProps}>
    {children}
  </form>
);
