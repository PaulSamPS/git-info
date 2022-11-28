import * as React from 'react';
import { classNames } from 'lib';
import './Text.scss';
import { TextProps } from './Text.props';

export const Text = ({
  children,
  weight,
  Component = 'span',
  before,
  ...restProps
}: TextProps) => (
  <Component
    {...restProps}
    className={classNames('text', weight && `text-w-${weight}`)}
  >
    {before && <Component className={before && 'before'}>{before}</Component>}
    {children}
  </Component>
);
