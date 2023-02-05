import { Text } from 'shared/ui/Text';
import { Title } from 'shared/ui/Title';
import { CardGrid } from 'shared/ui/CardGrid';
import { NameType } from 'entities/Profile/types';

export const ProfileName = ({ name, login, joinedDate }: NameType) => (
  <CardGrid column='2' gap={10} align='baseline'>
    <Title weight='2' level='1' tabIndex={0}>
      {name || 'Отсутствует'}
    </Title>
    <Title
      weight='1'
      level='3'
      before='@'
      tabIndex={0}
      aria-label={`логин ${login}`}
    >
      {login}
    </Title>
    <Text weight='2' before='Присоеденился' tabIndex={0}>
      {joinedDate}
    </Text>
  </CardGrid>
);
