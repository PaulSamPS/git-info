import React from 'react';
import { Input, Button } from 'components';
import { IconSearch } from './assets';
import styles from './Search.module.scss';

export const Search = () => (
  <form className={styles.search}>
    <Input icon={<IconSearch />} />
    <Button type='submit' loading style={{ width: '90px' }}>
      Поиск
    </Button>
  </form>
);
