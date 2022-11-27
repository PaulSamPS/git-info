import { LocalGithubUser } from 'types';
import React from 'react';

export interface AvatarProps
  extends React.ImgHTMLAttributes<HTMLElement>,
    Pick<LocalGithubUser, 'avatar' | 'login'> {}
