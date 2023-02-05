import React from 'react';
import cx from 'clsx';
import type { AvatarProps } from './types/avatar.interface';
import styles from './styles/Avatar.module.scss';

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
