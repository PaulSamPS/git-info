import React from 'react';
import { AvatarProps } from './Avatar.props';
import styles from './Avatar.module.scss';

export const Avatar = ({ avatar, login, ...props }: AvatarProps) => (
  <img
    src={avatar || undefined}
    alt={login}
    className={styles.avatar}
    {...props}
  />
);
