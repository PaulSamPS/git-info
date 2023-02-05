import React from 'react';
import styles from './styles/Search.module.scss';
import { SearchProps } from './types/search.interface';
import { useSearch } from './lib';

export const Search = ({ Input, Button, icon }: SearchProps) => {
  const { handleSubmit, handleOnChange, isDisabled, isLoading } = useSearch();
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        icon={icon}
        onChange={handleOnChange}
        placeholder='Поиск по имени пользователя'
        autoFocus
        id='search'
      />
      <Button
        appearance='primary'
        type='submit'
        loading={isLoading}
        width={90}
        disabled={isDisabled}
        aria-label='Поиск'
      >
        Поиск
      </Button>
    </form>
  );
};
