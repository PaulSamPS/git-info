import * as React from 'react';
import { classNames } from 'lib';
import './Caption.scss';
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
      'caption',
      `caption-l-${level}`,
      caps && 'caption-caps',
      weight && `caption-w-${weight}`
    )}
  >
    {children}
  </Component>
);
