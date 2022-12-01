import * as React from 'react';
import { classNames } from 'lib';
import './Text.scss';
import { TextProps } from './Text.props';

export const Text = ({
  children,
  weight,
  Component = 'span',
  before,
  fontSize,
  alternativeColor,
  center,
  ...restProps
}: TextProps) => (
  <Component
    {...restProps}
    className={classNames(
      'text',
      weight && `text-w-${weight}`,
      alternativeColor && `text-color-${alternativeColor}`,
      center && 'text-center'
    )}
    style={{ fontSize }}
  >
    {before && <Component className={before && 'before'}>{before}</Component>}
    {children}
  </Component>
);
