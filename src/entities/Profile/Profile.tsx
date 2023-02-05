import React from 'react';
import { Card } from 'shared/ui/Card';
import { ProfileCardProps } from './types';

export const Profile = ({
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
