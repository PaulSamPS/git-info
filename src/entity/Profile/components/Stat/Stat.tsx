import { CardGrid } from 'components/Blocks';
import { Caption, Text } from 'components/Typography';
import { StatType } from 'entity/Profile/types';

export const Stat = ({ repos, following, followers, username }: StatType) => (
  <CardGrid column='3'>
    <CardGrid gap={8}>
      <Caption weight='2' level='3' tabIndex={0}>
        Репозитории
      </Caption>
      <Text fontSize={20}>
        <a
          href={`https://github.com/${username}?tab=repositories`}
          target='_blank'
          rel='noreferrer'
        >
          {repos}
        </a>
      </Text>
    </CardGrid>
    <CardGrid gap={8}>
      <Caption weight='2' level='3' tabIndex={0}>
        Подписан
      </Caption>
      <Text fontSize={20}>
        <a
          href={`https://github.com/${username}?tab=following`}
          target='_blank'
          rel='noreferrer'
        >
          {following}
        </a>
      </Text>
    </CardGrid>
    <CardGrid gap={8}>
      <Caption weight='2' level='3' tabIndex={0}>
        Подписчики
      </Caption>
      <Text fontSize={20}>
        <a
          href={`https://github.com/${username}?tab=followers`}
          target='_blank'
          rel='noreferrer'
        >
          {followers}
        </a>
      </Text>
    </CardGrid>
  </CardGrid>
);
