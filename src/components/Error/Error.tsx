import React from 'react';
import { ErrorProps } from './Error.props';
import './Error.scss';

export const Error = ({ children }: ErrorProps) => (
  <div className='error'>{children}</div>
);
