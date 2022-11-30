import React from 'react';
import { Avatar, Card, Spinner } from 'components';
import { Stat, Bio, Name, Info } from 'entity/Profile';
import { useUser } from 'hooks';

export const ProfileCard = () => {
  const { user, joinedDate, isLoading } = useUser();

  return (
    <Card>
      {isLoading ? (
        <Spinner position='absolute' />
      ) : (
        <>
          <Avatar login={user.login} avatar={user.avatar} />
          <Name joinedDate={joinedDate} login={user.login} name={user.name} />
          <Bio bio={user.bio} />
          <Stat
            followers={user.followers}
            following={user.following}
            repos={user.repos}
          />
          <Info
            blog={user.blog}
            company={user.company}
            location={user.location}
            twitter={user.twitter}
          />
        </>
      )}
    </Card>
  );
};
