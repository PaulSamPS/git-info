import { Avatar, Card } from 'components';
import { Name, Stat } from 'entity/Profile';
import React from 'react';
import { Bio } from '../../entity/Profile/Bio/Bio';

const user = {
  login: 'PaulSamPS',
  avatar: 'https://avatars.githubusercontent.com/u/56207237?v=4',
  name: 'Pavel Samoylenko',
  company: null,
  blog: 'https://resume-paulsamps.vercel.app',
  location: 'Orenburg',
  // eslint-disable-next-line max-len
  bio: 'Целеустремленный frontend разработчик со страстью к разработке пользовательского интерфейса, сотрудничеству и обучению. ',
  twitter: null,
  repos: 35,
  followers: 0,
  following: 0,
  created: '2019-10-05T21:37:58Z',
};

export const ProfileCard = () => (
  <Card>
    <Avatar login={user.login} avatar={user.avatar} />
    <Name joinedDate={user.created} login={user.login} name={user.name} />
    <Bio bio={user.bio} />
    <Stat
      followers={user.followers}
      following={user.following}
      repos={user.repos}
    />
  </Card>
);
