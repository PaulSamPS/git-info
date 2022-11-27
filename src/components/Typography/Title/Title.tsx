import * as React from 'react';
import './Title.scss';
import { classNames } from 'lib';
import { TitleProps } from './Title.props';

export const Title = ({
  children,
  weight,
  level = '1',
  Component,
  ...restProps
}: TitleProps) => {
  if (!Component) {
    Component = `h${level}` as React.ElementType;
  }

  return (
    <Component
      {...restProps}
      className={classNames(
        'title',
        `title-l-${level}`,
        weight && `title-w-${weight}`
      )}
    >
      {children}
    </Component>
  );
};
