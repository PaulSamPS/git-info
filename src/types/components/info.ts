import React from 'react';
import { LocalGithubUser } from '../user';

export type InfoItemType = {
  icon: React.ReactNode;
  text?: string | null;
  isLink?: boolean;
};

export interface InfoType
  extends Pick<LocalGithubUser, 'company' | 'twitter' | 'blog' | 'location'> {}
