import * as React from 'react';
import { HasComponent, TypeAttributes } from 'types';
import cx from 'clsx';
import styles from './Paragraph.module.scss';

interface ParagraphProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  weight?: TypeAttributes.Weight;
  fontSize?: number;
}

export const Paragraph = ({
  Component = 'p',
  weight,
  className,
  children,
  fontSize,
  ...restProps
}: ParagraphProps) => (
  <Component
    {...restProps}
    className={cx(
      className,
      styles.paragraph,
      weight && styles[`paragraph-w-${weight}`]
    )}
    styles={{ fontSize }}
  >
    {children}
  </Component>
);
