import React from 'react';
import cx from 'clsx';
import styles from './CardGrid.module.scss';

interface CardGridProps extends React.AllHTMLAttributes<HTMLDivElement> {
  column?: '2' | '3';
  gap?: number;
  align?: 'baseline' | 'center';
  direction?: 'column' | 'row';
}

export const CardGrid = ({
  children,
  column,
  gap,
  align,
  className,
  direction = 'column',
  ...restProps
}: CardGridProps) => (
  <div
    className={cx(
      className,
      styles.grid,
      column && styles[`grid-column-${column}`],
      direction && styles[`grid-direction-${direction}`],
      align && styles[`grid-align-${align}`]
    )}
    style={{ gap }}
    {...restProps}
  >
    {children}
  </div>
);
