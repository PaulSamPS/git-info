import { Paragraph } from 'components/Typography';
import React from 'react';
import { classNames } from 'lib';
import { BioProps } from './Bio.props';

export const Bio = ({ bio }: BioProps) => (
  <Paragraph weight='1' className={classNames(!bio && 'empty')}>
    {bio || 'У этого профиля нет описания'}
  </Paragraph>
);
