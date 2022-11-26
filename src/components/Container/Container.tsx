import React from 'react';
import { ContainerProps } from './Container.props';
import styles from './Container.module.scss';

export const Container = ({ children }: ContainerProps) => (
  <div className={styles.container}>{children}</div>
);
