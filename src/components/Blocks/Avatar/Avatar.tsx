import React from 'react';
import cx from 'clsx';
import { AvatarProps } from 'entity/Profile/types/avatar';
import styles from './Avatar.module.scss';

export const Avatar = ({
  avatar,
  login,
  className,
  ...restProps
}: AvatarProps) => (
  <img
    src={avatar || undefined}
    alt={login}
    className={cx(className, styles.avatar)}
    {...restProps}
  />
);
