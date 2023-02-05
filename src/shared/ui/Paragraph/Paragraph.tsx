import * as React from 'react';
import cx from 'clsx';
import styles from './styles/Paragraph.module.scss';
import { ParagraphProps } from './types/paragraph.interface';

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
