import * as React from 'react';
import { HasComponent, TypeAttributes } from 'types';
import cx from 'clsx';
import styles from './Text.module.scss';

interface TextProps extends React.AllHTMLAttributes<HTMLElement>, HasComponent {
  weight?: TypeAttributes.Weight;
  before?: React.ReactNode;
  alternativeColor?: 'blue' | 'green';
  fontSize?: number;
  center?: boolean;
}

export const Text = ({
  children,
  weight,
  Component = 'span',
  before,
  fontSize,
  alternativeColor,
  center,
  className,
  ...restProps
}: TextProps) => (
  <Component
    {...restProps}
    className={cx(
      className,
      styles.text,
      weight && styles[`text-w-${weight}`],
      alternativeColor && styles[`text-color-${alternativeColor}`],
      center && styles['text-center']
    )}
    style={{ fontSize }}
  >
    {before && (
      <Component className={before && styles.before}>{before}</Component>
    )}
    {children}
  </Component>
);
