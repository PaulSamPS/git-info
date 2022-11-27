import * as React from 'react';
import { classNames } from 'lib';
import './Text.css';
import { TextProps } from './Text.props';

export const Text = ({
  children,
  weight,
  Component = 'span',
  getRootRef,
  ...restProps
}: TextProps) => (
  <Component
    {...restProps}
    ref={getRootRef}
    className={classNames(
      'Text',
      weight && `Text--w-${weight}`,
      restProps.className
    )}
  >
    {children}
  </Component>
);
