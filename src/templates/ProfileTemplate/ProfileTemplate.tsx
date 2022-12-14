import React from 'react';
import { Spinner } from 'components/Blocks';
import { useUser } from 'hooks';
import { Backward, ProfileCard } from 'entity';

export const ProfileTemplate = () => {
  const { user, joinedDate, isLoading } = useUser();

  if (isLoading) {
    return <Spinner position='absolute' />;
  }

  return (
    <>
      <Backward>к результатам поиска</Backward>
      <ProfileCard user={user} joinedDate={joinedDate} />
    </>
  );
};
