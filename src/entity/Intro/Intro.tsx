import React from 'react';
import emoji from 'helpers/icons/emoji.png';
import { Title } from 'components/Typography';
import styles from './Intro.module.scss';

export const Intro = () => (
  <div className={styles.intro}>
    <img src={emoji} width={50} height={50} alt='backhand index pointing up' />
    <Title level='3'>Введите имя пользователя для поиска.</Title>
  </div>
);
