import { CardGrid, CustomLink } from 'components';
import { Caption } from 'components/Typography';
import { StatType } from 'types/components';

export const Stat = ({ repos, following, followers }: StatType) => (
  <CardGrid column='3'>
    <CardGrid gap={8}>
      <Caption weight='2' level='3'>
        Репозитории
      </Caption>
      <CustomLink to='/' size={20}>
        {repos}
      </CustomLink>
    </CardGrid>
    <CardGrid gap={8}>
      <Caption weight='2' level='3'>
        Подписан
      </Caption>
      <CustomLink to='/' size={20}>
        {following}
      </CustomLink>
    </CardGrid>
    <CardGrid gap={8}>
      <Caption weight='2' level='3'>
        Подписчики
      </Caption>
      <CustomLink to='/' size={20}>
        {followers}
      </CustomLink>
    </CardGrid>
  </CardGrid>
);
