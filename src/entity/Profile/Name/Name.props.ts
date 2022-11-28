import * as React from 'react';

export interface NameProps extends React.AllHTMLAttributes<HTMLElement> {
  name: string;
  login: string;
  joinedDate: string;
}
