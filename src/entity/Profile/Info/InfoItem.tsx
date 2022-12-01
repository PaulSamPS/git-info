import { CardGrid } from 'components/Blocks';
import React from 'react';
import { InfoItemType } from 'types/components';
import { Caption } from 'components/Typography';

export const InfoItem = ({ text, icon, isLink }: InfoItemType) => {
  const currentText = text || 'Отсутствует';
  let currentHref = '';

  if (isLink) {
    currentHref = text && text.startsWith('api') ? text : `${text}`;
  }

  return (
    <CardGrid direction='row' align='center' gap={10}>
      <Caption weight='3' level='3' empty={!text}>
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
