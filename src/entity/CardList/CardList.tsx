import React from 'react';
import { Card, CustomLink, Avatar, CardGrid } from 'components';
import { Title } from 'components/Typography';
import { CardListProps } from './CardList.props';

export const CardList = ({ avatar, login }: CardListProps) => (
  <Card>
    <Avatar avatar={avatar} login={login} />
    <CardGrid gap={20}>
      <Title level='2' weight='2'>
        {login}
      </Title>
      <CustomLink to={`/profile/${login}`}>Посмотреть профиль</CustomLink>
    </CardGrid>
  </Card>
);
