import { CustomLink } from 'components';
import { Caption } from 'components/Typography';
import styles from './Stat.module.scss';
import { StatProps } from './Stat.props';

export const Stat = ({ repos, following, followers }: StatProps) => (
  <div className={styles.stat}>
    <div className={styles.info}>
      <Caption weight='2' level='3' className={styles.infoTitle}>
        Репозитории
      </Caption>
      <CustomLink to='/' className={styles.infoNumber}>
        {repos}
      </CustomLink>
    </div>
    <div className={styles.info}>
      <Caption weight='2' level='3' className={styles.infoTitle}>
        Подписан
      </Caption>
      <CustomLink to='/' className={styles.infoNumber}>
        {following}
      </CustomLink>
    </div>
    <div className={styles.info}>
      <Caption weight='2' level='3' className={styles.infoTitle}>
        Подписчики
      </Caption>
      <CustomLink to='/' className={styles.infoNumber}>
        {followers}
      </CustomLink>
    </div>
  </div>
);
