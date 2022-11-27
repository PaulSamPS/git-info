import { Text, Title } from 'components/Typography';
import styles from './Name.module.scss';
import { NameProps } from './Name.props';

export const Name = ({ name, login, joinedDate }: NameProps) => (
  <div className={styles.title}>
    <Title weight='2' level='2'>
      {name || 'Отсутствует'}
    </Title>
    <Title weight='1' level='3' className={styles.login}>
      {login}
    </Title>
    <Text weight='2'>{joinedDate}</Text>
  </div>
);
