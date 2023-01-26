import { Text, Title } from 'components/Typography';
import { CardGrid } from 'components/Blocks';
import { NameType } from 'entity/Profile/types';

export const Name = ({ name, login, joinedDate }: NameType) => (
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
