import React from 'react';
import { CardGrid, CustomLink } from 'components';
import { InfoType } from 'types/components';

export const Info = ({ text, icon, isLink }: InfoType) => {
  const currentText = text || 'Отсутствует';
  let currentHref = '';

  if (isLink) {
    currentHref = text && text.startsWith('api') ? text : `https://${text}`;
  }

  return (
    <CardGrid column='2'>
      {icon}
      {isLink && text ? (
        <CustomLink to={currentHref} target='_blank' empty={text}>
          {currentText}
        </CustomLink>
      ) : (
        currentText
      )}
    </CardGrid>
  );
};
