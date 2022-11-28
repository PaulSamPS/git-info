import React from 'react';
import { ContainerProps } from './Container.props';
import './Container.scss';

export const Container = ({ children, ...restProps }: ContainerProps) => (
  <div className='container' {...restProps}>
    {children}
  </div>
);
