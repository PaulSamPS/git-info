import * as React from 'react';
import { HasComponent, TypeAttributes } from 'types';
import cx from 'clsx';
import styles from './Title.module.scss';

interface TitleProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  weight?: TypeAttributes.Weight;
  level?: TypeAttributes.Level;
  before?: React.ReactNode;
}

export const Title = ({
  children,
  weight,
  level = '1',
  Component,
  className,
  before,
  ...restProps
}: TitleProps) => {
  if (!Component) {
    Component = `h${level}` as React.ElementType;
  }

  return (
    <Component
      {...restProps}
      className={cx(
        className,
        styles.title,
        styles[`title-l-${level}`],
        weight && styles[`title-w-${weight}`],
        before && styles['title-color']
      )}
    >
      {before && before}
      {children}
    </Component>
  );
};
