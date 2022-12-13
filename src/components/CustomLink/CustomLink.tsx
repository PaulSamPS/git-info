import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import cx from 'clsx';
import styles from './CustomLink.module.scss';

interface CustomLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  children: ReactNode;
  to: string;
  size?: number;
  empty?: string;
}

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
