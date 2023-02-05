import React from 'react';
import { useProfile } from 'entities/Profile/lib/hooks';
import { Profile } from 'entities/Profile';
import {
  ProfileBio,
  ProfileInfo,
  ProfileName,
  ProfileStat,
} from 'entities/Profile/ui';
import { Avatar } from 'shared/ui/Avatar';
import { Spinner } from 'shared/ui/Spinner';
import { Backward } from 'entities/Backward';
import { IconArrowLeft } from 'shared/assets';

export const ProfileWidget = () => {
  const { user, joinedDate, isLoading } = useProfile();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Backward icon={<IconArrowLeft />} text='Назад' />
      <Profile
        user={user}
        joinedDate={joinedDate}
        Avatar={Avatar}
        Bio={ProfileBio}
        Info={ProfileInfo}
        Stat={ProfileStat}
        Name={ProfileName}
      />
    </>
  );
};
