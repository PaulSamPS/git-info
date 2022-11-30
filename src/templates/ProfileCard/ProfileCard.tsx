import React from 'react';
import { Avatar, Card } from 'components';
import { Stat, Bio, Name } from 'entity/Profile';
import { toLocalDate } from 'helpers';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'hooks';
import { profileAction, profileSelector } from 'redux/profile';
import { useSelector } from 'react-redux';

export const ProfileCard = () => {
  const { username } = useParams();
  const dispatch = useAppDispatch();
  const { user } = useSelector(profileSelector);

  React.useEffect(() => {
    if (typeof username === 'string') {
      dispatch(profileAction(username));
    }
  }, [username]);

  return (
    <Card>
      <Avatar login={user.login} avatar={user.avatar} />
      <Name
        joinedDate={user.created && toLocalDate(user.created)}
        login={user.login}
        name={user.name}
      />
      <Bio bio={user.bio} />
      <Stat
        followers={user.followers}
        following={user.following}
        repos={user.repos}
      />
    </Card>
  );
};
