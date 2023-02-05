import * as React from 'react';
import { HasComponent, TypeAttributes } from 'shared/types';

export interface CaptionProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  weight?: TypeAttributes.Weight;
  level?: TypeAttributes.Level4;
  caps?: boolean;
  empty?: boolean;
}
