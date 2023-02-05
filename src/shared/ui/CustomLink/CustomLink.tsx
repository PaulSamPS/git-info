import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'clsx';
import styles from './styles/CustomLink.module.scss';
import { CustomLinkProps } from './types/customLink.interface';

export const CustomLink = ({
  children,
  to,
  size,
  empty,
  ...restProps
}: CustomLinkProps): JSX.Element => (
  <Link
    to={to}
    className={cx(styles.link, empty && styles.empty)}
    style={{ fontSize: `${size}px` }}
    {...restProps}
  >
    {children}
  </Link>
);
