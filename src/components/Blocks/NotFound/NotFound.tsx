import React from 'react';
import { Text } from 'components/Typography';

type NotFoundProps = {
  totalCount: number | null;
  children: React.ReactNode;
};

export const NotFound = ({ totalCount, children }: NotFoundProps) => (
  <div>
    {totalCount !== null && totalCount <= 0 && (
      <Text tabIndex={0} center>
        {children}
      </Text>
    )}
  </div>
);
