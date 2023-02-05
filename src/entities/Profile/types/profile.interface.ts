import React from 'react';
import type { LocalGithubUser } from 'shared/types';
import type { AvatarProps } from 'shared/ui/Avatar';
import type { NameType } from './name.interface';
import type { BioType } from './bio.interface';
import type { StatType } from './stat.interface';
import type { InfoType } from './info.interface';

export interface ProfileCardProps {
  Avatar: React.ComponentType<AvatarProps>;
  Name: React.ComponentType<NameType>;
  Bio: React.ComponentType<BioType>;
  Stat: React.ComponentType<StatType>;
  Info: React.ComponentType<InfoType>;
  user: Omit<LocalGithubUser, 'created'>;
  joinedDate: string;
}
