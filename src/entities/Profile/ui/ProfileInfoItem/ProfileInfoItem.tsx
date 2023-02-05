import { CardGrid } from 'shared/ui/CardGrid';
import React from 'react';
import { InfoItemType } from 'entities/Profile/types';
import { Caption } from 'shared/ui/Caption';

export const ProfileInfoItem = ({ text, icon, isLink }: InfoItemType) => {
  const currentText = text || 'Отсутствует';
  let currentHref = '';

  if (isLink) {
    currentHref = text && text.startsWith('api') ? text : `${text}`;
  }

  return (
    <CardGrid direction='row' align='center' gap={10}>
      <Caption weight='3' level='3' empty={!text} style={{ lineHeight: 0 }}>
        {icon}
      </Caption>
      <Caption weight='3' level='3' empty={!text} tabIndex={0}>
        {isLink && text ? (
          <a href={currentHref} target='_blank' rel='noreferrer'>
            {currentText}
          </a>
        ) : (
          currentText
        )}
      </Caption>
    </CardGrid>
  );
};
