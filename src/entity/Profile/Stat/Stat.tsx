import { CardGrid, CustomLink } from 'components';
import { Caption } from 'components/Typography';
import { StatProps } from './Stat.props';

export const Stat = ({ repos, following, followers }: StatProps) => (
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
