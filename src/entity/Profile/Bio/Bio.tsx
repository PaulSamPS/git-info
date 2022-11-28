import { Paragraph } from 'components/Typography';
import React from 'react';
import { classNames } from 'lib';
import { BioType } from 'types/components';

export const Bio = ({ bio }: BioType) => (
  <Paragraph weight='1' className={classNames(!bio && 'empty')}>
    {bio || 'У этого профиля нет описания'}
  </Paragraph>
);
