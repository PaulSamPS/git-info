import React from 'react';
import { CardList } from '../../entity';

const us = [
  {
    avatar:
      'https://i.pinimg.com/originals/99/db/2e/99db2e985dbafb13a033f9ae7c345669.jpg',
    login: '1',
  },
  {
    avatar: 'https://abc-decor.com/img/gallery/31/thumbs/thumb_l_0985.jpg',
    login: '2',
  },
];

export const SearchList = () => (
  <main>
    {us.map((u) => (
      <CardList key={u.login} login={u.login} avatar={u.avatar} />
    ))}
  </main>
);
