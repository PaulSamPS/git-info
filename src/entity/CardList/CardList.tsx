import React from 'react';
import { Card, Avatar, CardGrid } from 'components/Blocks';
import { Title } from 'components/Typography';
import { CustomLink } from 'components';
import { CardListProps } from './CardList.props';

export const CardList = ({ avatar, login }: CardListProps) => (
  <Card>
    <Avatar avatar={avatar} login={login} />
    <CardGrid gap={20}>
      <Title
        level='2'
        weight='2'
        aria-label={`Найденный пользоватьель ${login}`}
        tabIndex={0}
      >
        {login}
      </Title>
      <CustomLink
        to={`/profile/${login}`}
        aria-label={`Посмотреть профиль пользователя ${login}`}
      >
        Посмотреть профиль
      </CustomLink>
    </CardGrid>
  </Card>
);
