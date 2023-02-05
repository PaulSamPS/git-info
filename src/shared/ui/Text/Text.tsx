import * as React from 'react';
import cx from 'clsx';
import styles from './styles/Text.module.scss';
import { TextProps } from './types/text.interface';

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
