import React from 'react';
import cx from 'clsx';
import styles from './Container.module.scss';

interface ContainerProps extends React.AllHTMLAttributes<HTMLDivElement> {}

export const Container = ({
  children,
  className,
  ...restProps
}: ContainerProps) => (
  <div className={cx(className, styles.container)} {...restProps}>
    {children}
  </div>
);
