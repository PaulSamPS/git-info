import React from 'react';
import { Text } from 'shared/ui/Text';
import { NotFoundProps } from './types/notFound.type';

export const NotFound = ({ totalCount, children }: NotFoundProps) => (
  <div>
    {totalCount !== null && totalCount <= 0 && (
      <Text tabIndex={0} center>
        {children}
      </Text>
    )}
  </div>
);
