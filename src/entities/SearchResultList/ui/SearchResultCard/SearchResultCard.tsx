import React from 'react';
import { Title } from 'shared/ui/Title';
import { CustomLink } from 'shared/ui/CustomLink';
import { Card } from 'shared/ui/Card';
import { Avatar } from 'shared/ui/Avatar';
import { CardGrid } from 'shared/ui/CardGrid';
import { SearchResultCardProps } from '../../types';

export const SearchResultCard = ({
  avatar,
  login,
  desc,
}: SearchResultCardProps) => (
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
