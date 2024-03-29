import React from 'react';

export interface ErrorProps extends React.AllHTMLAttributes<HTMLDivElement> {
  isBlock?: boolean;
  err: string | boolean | unknown;
}
