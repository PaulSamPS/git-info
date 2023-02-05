import { Paragraph } from 'shared/ui/Paragraph';
import React from 'react';
import type { BioType } from 'entities/Profile/types';

export const ProfileBio = ({ bio }: BioType) => (
  <Paragraph weight='1' style={{ opacity: bio ? 1 : 0.6 }} tabIndex={0}>
    {bio || 'У этого профиля нет описания'}
  </Paragraph>
);
