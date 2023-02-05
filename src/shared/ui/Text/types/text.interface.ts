import * as React from 'react';
import { HasComponent, TypeAttributes } from 'shared/types';

export interface TextProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  weight?: TypeAttributes.Weight;
  before?: React.ReactNode;
  alternativeColor?: 'blue' | 'green';
  fontSize?: number;
  center?: boolean;
}
