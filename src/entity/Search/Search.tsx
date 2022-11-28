import React from 'react';
import { Input, Button, Form } from 'components';
import { useSearch } from 'hooks';
import { IconSearch } from './assets';

export const Search = () => {
  const { handleSubmit, handleOnChange, isDisabled } = useSearch();

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        icon={<IconSearch />}
        onChange={handleOnChange}
        placeholder='Поиск по имени пользователя'
      />
      <Button type='submit' loading={false} width={90} disabled={isDisabled}>
        Поиск
      </Button>
    </Form>
  );
};
