import React from 'react';
import { AvatarProps } from './Avatar.props';
import './Avatar.scss';

export const Avatar = ({ avatar, login, ...restProps }: AvatarProps) => (
  <img
    src={avatar || undefined}
    alt={login}
    className='avatar'
    {...restProps}
  />
);
