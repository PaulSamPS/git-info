import React, { ReactNode } from 'react';

export interface CustomLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  children: ReactNode;
  to: string;
  size?: number;
  empty?: string;
}
