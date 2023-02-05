import React from 'react';
import cx from 'clsx';
import styles from './styles/Container.module.scss';
import { ContainerProps } from './types/container.interface';

export const Container = ({
  children,
  className,
  ...restProps
}: ContainerProps) => (
  <div className={cx(className, styles.container)} {...restProps}>
    {children}
  </div>
);
