import * as React from 'react';
import cx from 'clsx';
import styles from './styles/Title.module.scss';
import { TitleProps } from './types/title.interface';

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
