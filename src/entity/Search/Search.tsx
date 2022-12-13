import React from 'react';
import { Button, Error } from 'components/Blocks';
import { useSearch } from 'hooks';
import { FormLayout, Input } from 'components/Form';
import { IconSearch } from './assets';

export const Search = () => {
  const { handleSubmit, handleOnChange, isDisabled, isLoading, error } =
    useSearch();

  return (
    <FormLayout onSubmit={handleSubmit}>
      <Input
        icon={<IconSearch />}
        onChange={handleOnChange}
        placeholder='Поиск по имени пользователя'
        autoFocus
        id='search'
      />
      {error && <Error>{error}</Error>}
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
    </FormLayout>
  );
};
