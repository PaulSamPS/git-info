import React from 'react';
import { InfoType } from 'entity/Profile/types';
import { CardGrid } from 'components/Blocks';
import { IconCompany, IconLocation, IconTwitter, IconWebsite } from './assets';
import { InfoItem } from './InfoItem';

export const Info = ({ twitter, company, blog, location }: InfoType) => {
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
        <InfoItem key={index} icon={i.icon} text={i.text} isLink={i.isLink} />
      ))}
    </CardGrid>
  );
};
