import React from 'react';
import cx from 'clsx';
import styles from './styles/CardGrid.module.scss';
import { CardGridProps } from './types/cardGrid.interface';

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
