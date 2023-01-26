import React from 'react';
import { Card } from 'components/Blocks';
import { LocalGithubUser } from 'types';
import { AvatarProps, BioType, InfoType, NameType, StatType } from './types';

interface ProfileCardProps {
  Avatar: React.ComponentType<AvatarProps>;
  Name: React.ComponentType<NameType>;
  Bio: React.ComponentType<BioType>;
  Stat: React.ComponentType<StatType>;
  Info: React.ComponentType<InfoType>;
  user: Omit<LocalGithubUser, 'created'>;
  joinedDate: string;
}

export const ProfileCard = ({
  user,
  joinedDate,
  Avatar,
  Bio,
  Name,
  Info,
  Stat,
}: ProfileCardProps) => (
  <Card>
    <Avatar login={user.login} avatar={user.avatar} />
    <Name joinedDate={joinedDate} login={user.login} name={user.name} />
    <Bio bio={user.bio} />
    <Stat
      followers={user.followers}
      following={user.following}
      repos={user.repos}
      username={user.login}
    />
    <Info
      blog={user.blog}
      company={user.company}
      location={user.location}
      twitter={user.twitter}
    />
  </Card>
);
