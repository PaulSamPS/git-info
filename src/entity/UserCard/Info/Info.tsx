import React from 'react';
import { CardGrid } from 'components';
import { InfoType } from './Info.type';
import styles from './Info.module.scss';

export const Info = ({ text, icon, isLink }: InfoType) => {
  const currentText = text || 'Отсутствует';
  let currentHref = '';

  if (isLink) {
    currentHref = text && text.startsWith('http') ? text : `https://${text}`;
  }
  return (
    <CardGrid appearance='info'>
      <div className={`${styles.infoItem}${text ? '' : ` ${styles.empty}`}`}>
        {icon}
        {isLink && text ? (
          <a href={currentHref} target='_blank' rel='noreferrer'>
            {currentText}
          </a>
        ) : (
          currentText
        )}
      </div>
    </CardGrid>
  );
};
