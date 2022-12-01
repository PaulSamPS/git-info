import { LocalGithubUser } from 'types';
import React from 'react';

export interface AvatarProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    Pick<LocalGithubUser, 'avatar' | 'login'> {}
