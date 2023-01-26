import React from 'react';
import { Title } from 'components/Typography';
import styles from './Intro.module.scss';

interface IntroProps {
  icon: string;
  alt: string;
  text: string;
}
export const Intro = ({ icon, alt, text }: IntroProps) => (
  <div className={styles.intro}>
    <img src={icon} width={50} height={50} alt={alt} />
    <Title level='3'>{text}</Title>
  </div>
);
