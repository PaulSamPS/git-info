import * as React from 'react';
import { HasComponent } from 'types';

export interface TextProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  weight?: '1' | '2' | '3';
  before?: React.ReactNode;
  alternativeColor?: 'blue' | 'green';
  fontSize?: number;
  center?: boolean;
}
