import { CardGrid } from 'shared/ui/CardGrid';
import { Caption } from 'shared/ui/Caption';
import { Text } from 'shared/ui/Text';
import { StatType } from 'entities/Profile/types';

export const ProfileStat = ({
  repos,
  following,
  followers,
  username,
}: StatType) => (
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
