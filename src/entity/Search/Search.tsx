import React from 'react';
import { Input, Button, Form, Error } from 'components';
import { useSearch } from 'hooks';
import { IconSearch } from './assets';

export const Search = () => {
  const { handleSubmit, handleOnChange, isDisabled, isLoading, error } =
    useSearch();

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        icon={<IconSearch />}
        onChange={handleOnChange}
        placeholder='Поиск по имени пользователя'
        autoFocus
      />
      {error && <Error>{error}</Error>}
      <Button
        type='submit'
        loading={isLoading}
        width={90}
        disabled={isDisabled}
      >
        Поиск
      </Button>
    </Form>
  );
};
