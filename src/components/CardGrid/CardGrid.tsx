import React from 'react';
import { classNames } from 'lib';
import { CardGridProps } from './CardGrid.props';
import './CardGrid.scss';

export const CardGrid = ({
  children,
  appearance,
  ...restProps
}: CardGridProps) => (
  <div
    {...restProps}
    className={classNames('grid', appearance && `${appearance}`)}
  >
    {children}
  </div>
);
