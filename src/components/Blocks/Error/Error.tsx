import React from 'react';
import { classNames } from 'lib';
import { ErrorProps } from './Error.props';
import './Error.scss';

export const Error = ({ children, isBlock }: ErrorProps) => (
  <div className={classNames('error', isBlock && 'error-block')}>
    {children}
  </div>
);
