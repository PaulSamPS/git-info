import React from 'react';
import { useSearch } from 'hooks';
import type { ButtonProps } from 'components/Blocks';
import type { InputProps } from 'components/Form';
import styles from './Search.module.scss';

interface SearchProps {
  Input: React.ComponentType<InputProps>;
  Button: React.ComponentType<ButtonProps>;
  icon: React.ReactNode;
}

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
