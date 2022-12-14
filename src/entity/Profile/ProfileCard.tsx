import React from 'react';
import { Avatar, Card } from 'components/Blocks';
import { LocalGithubUser } from 'types';
import { Stat, Bio, Name, Info } from './components';

interface ProfileCardProps {
  user: Omit<LocalGithubUser, 'created'>;
  joinedDate: string;
}

export const ProfileCard = ({ user, joinedDate }: ProfileCardProps) => (
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
