import { Text, Title } from 'components/Typography';
import { CardGrid } from 'components';
import { NameProps } from './Name.props';

export const Name = ({ name, login, joinedDate }: NameProps) => (
  <CardGrid column='2' gap={10}>
    <Title weight='2' level='1'>
      {name || 'Отсутствует'}
    </Title>
    <Title weight='1' level='3' before='@'>
      {login}
    </Title>
    <Text weight='2' before='Присоеденился'>
      {joinedDate}
    </Text>
  </CardGrid>
);
