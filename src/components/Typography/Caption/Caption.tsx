import * as React from 'react';
import { HasComponent, TypeAttributes } from 'types';
import cx from 'clsx';
import styles from './Caption.module.scss';

interface CaptionProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  weight?: TypeAttributes.Weight;
  level?: TypeAttributes.Level4;
  caps?: boolean;
  empty?: boolean;
}

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
