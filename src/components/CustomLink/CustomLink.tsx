import React from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'lib';
import { CustomLinkProps } from './CustomLink.props';
import './CustomLink.scss';

export const CustomLink = ({
  children,
  to,
  size,
  empty,
  ...restProps
}: CustomLinkProps): JSX.Element => (
  <Link
    to={to}
    className={classNames('link', empty && 'empty')}
    style={{ fontSize: `${size}px` }}
    {...restProps}
  >
    {children}
  </Link>
);
