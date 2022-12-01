import React from 'react';
import { Avatar, Button, Card, Spinner } from 'components/Blocks';
import { Stat, Bio, Name, Info } from 'entity/Profile';
import { useUser } from 'hooks';
import { IconArrowLeft } from 'helpers/icons';
import { useNavigate } from 'react-router-dom';

export const ProfileCard = () => {
  const { user, joinedDate, isLoading } = useUser();
  const navigate = useNavigate();

  return (
    <>
      <Button
        type='button'
        appearance='transparent'
        icon={<IconArrowLeft />}
        onClick={() => navigate('/')}
      >
        к результатам поиска
      </Button>
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
              username={user.login}
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
    </>
  );
};
