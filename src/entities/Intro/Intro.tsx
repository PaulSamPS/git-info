import React from 'react';
import { Title } from 'shared/ui/Title';
import styles from './styles/Intro.module.scss';
import { IntroProps } from './types/intro.interface';

export const Intro = ({ icon, alt, text }: IntroProps) => (
  <div className={styles.intro}>
    <img src={icon} width={50} height={50} alt={alt} />
    <Title level='3'>{text}</Title>
  </div>
);
