import { AnchorHTMLAttributes, ReactNode } from 'react';

export interface CustomLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  children: ReactNode;
  to: string;
}
