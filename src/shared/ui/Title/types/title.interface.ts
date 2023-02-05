import * as React from 'react';
import { HasComponent, TypeAttributes } from 'shared/types';

export interface TitleProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  weight?: TypeAttributes.Weight;
  level?: TypeAttributes.Level;
  before?: React.ReactNode;
}
