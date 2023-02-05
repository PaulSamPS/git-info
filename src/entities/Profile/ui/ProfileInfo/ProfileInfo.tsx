import React from 'react';
import { InfoType } from 'entities/Profile/types';
import { CardGrid } from 'shared/ui/CardGrid';
import {
  IconCompany,
  IconLocation,
  IconTwitter,
  IconWebsite,
} from '../../assets';
import { ProfileInfoItem } from '../ProfileInfoItem/ProfileInfoItem';

export const ProfileInfo = ({ twitter, company, blog, location }: InfoType) => {
  const items = React.useMemo(
    () => [
      {
        icon: <IconLocation />,
        text: location,
      },
      {
        icon: <IconWebsite />,
        text: blog,
        isLink: true,
      },
      {
        icon: <IconTwitter />,
        text: twitter,
      },
      {
        icon: <IconCompany />,
        text: company,
      },
    ],
    [twitter, company, blog, location]
  );

  return (
    <CardGrid column='2' gap={10}>
      {items.map((i, index) => (
        <ProfileInfoItem
          key={index}
          icon={i.icon}
          text={i.text}
          isLink={i.isLink}
        />
      ))}
    </CardGrid>
  );
};
