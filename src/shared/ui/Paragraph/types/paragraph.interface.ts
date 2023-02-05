import * as React from 'react';
import { HasComponent, TypeAttributes } from 'shared/types';

export interface ParagraphProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  weight?: TypeAttributes.Weight;
  fontSize?: number;
}
