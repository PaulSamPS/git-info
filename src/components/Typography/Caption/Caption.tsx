import * as React from 'react';
import { classNames } from 'lib';
import './Caption.css';
import { CaptionProps } from './Caption.props';

export const Caption = ({
  children,
  weight,
  level = '1',
  caps,
  Component = 'span',
  ...restProps
}: CaptionProps) => (
  <Component
    {...restProps}
    className={classNames(
      'Caption',
      `Caption--l-${level}`,
      caps && 'Caption--caps',
      weight && `Caption--w-${weight}`,
      restProps.className
    )}
  >
    {children}
  </Component>
);
