import React from 'react';
import { classNames } from 'lib';
import { CardGridProps } from './CardGrid.props';
import './CardGrid.scss';

export const CardGrid = ({
  children,
  column,
  gap,
  align,
  ...restProps
}: CardGridProps) => (
  <div
    className={classNames(
      'grid',
      column && `grid-column-${column}`,
      align && `grid-align-${align}`
    )}
    style={{ gap }}
    {...restProps}
  >
    {children}
  </div>
);
