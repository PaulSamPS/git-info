import React from 'react';
import { Avatar, Button, Spinner } from 'components/Blocks';
import { useUser } from 'hooks';
import { Backward, ProfileCard } from 'entity';
import { Bio, Info, Name, Stat } from 'entity/Profile/components';
import { IconArrowLeft } from 'helpers/icons';

export const ProfileTemplate = () => {
  const { user, joinedDate, isLoading } = useUser();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Backward
        Button={Button}
        icon={<IconArrowLeft />}
        text='к результатам поиска'
      />
      <ProfileCard
        user={user}
        joinedDate={joinedDate}
        Avatar={Avatar}
        Bio={Bio}
        Info={Info}
        Stat={Stat}
        Name={Name}
      />
    </>
  );
};
