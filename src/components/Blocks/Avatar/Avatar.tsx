import React from 'react';
import { LocalGithubUser } from 'types';
import cx from 'clsx';
import styles from './Avatar.module.scss';

interface AvatarProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    Pick<LocalGithubUser, 'avatar' | 'login'> {}

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
