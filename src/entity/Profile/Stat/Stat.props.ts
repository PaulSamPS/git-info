import * as React from 'react';

export interface StatProps extends React.AllHTMLAttributes<HTMLElement> {
  followers: number;
  following: number;
  repos: number;
}
