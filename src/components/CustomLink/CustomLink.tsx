import React from 'react';
import { Link } from 'react-router-dom';
import { CustomLinkProps } from './CustomLink.props';
import styles from './CustomLink.module.scss';

export const CustomLink = ({
  children,
  to,
  ...props
}: CustomLinkProps): JSX.Element => (
  <Link to={to} className={styles.link} {...props}>
    {children}
  </Link>
);
