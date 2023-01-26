import { Paragraph } from 'components/Typography';
import React from 'react';
import { BioType } from 'entity/Profile/types';

export const Bio = ({ bio }: BioType) => (
  <Paragraph weight='1' style={{ opacity: bio ? 1 : 0.6 }} tabIndex={0}>
    {bio || 'У этого профиля нет описания'}
  </Paragraph>
);
