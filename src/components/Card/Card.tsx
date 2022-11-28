import React from 'react';
import { CardProps } from './Card.props';
import './Card.scss';

export const Card = ({ children, ...restProps }: CardProps) => (
  <div className='card' {...restProps}>
    {children}
  </div>
);
