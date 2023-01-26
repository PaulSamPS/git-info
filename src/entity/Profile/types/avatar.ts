import React from 'react';
import { LocalGithubUser } from 'types';

export interface AvatarProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    Pick<LocalGithubUser, 'avatar' | 'login'> {}
