import * as React from 'react';
import cx from 'clsx';
import styles from './styles/Caption.module.scss';
import { CaptionProps } from './types/caption.interface';

export const Caption = ({
  children,
  weight,
  level = '1',
  caps,
  empty,
  className,
  Component = 'span',
  ...restProps
}: CaptionProps) => (
  <Component
    {...restProps}
    className={cx(
      className,
      styles.caption,
      styles[`caption-l-${level}`],
      caps && styles['caption-caps'],
      weight && styles[`caption-w-${weight}`],
      empty && styles.empty
    )}
  >
    {children}
  </Component>
);
