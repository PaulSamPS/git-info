import React from 'react';
import { Card, Avatar, CardGrid } from 'components/Blocks';
import { Title } from 'components/Typography';
import { CustomLink } from 'components';
import { LocalGithubUser } from 'types';

interface CardListProps extends Pick<LocalGithubUser, 'avatar' | 'login'> {
  desc: string;
}

export const SearchResultCard = ({ avatar, login, desc }: CardListProps) => (
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
        {desc}
      </CustomLink>
    </CardGrid>
  </Card>
);
