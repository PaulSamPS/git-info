import React from 'react';
import { LocalGithubUser } from 'shared/types';

export interface AvatarProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    Pick<LocalGithubUser, 'avatar' | 'login'> {}
