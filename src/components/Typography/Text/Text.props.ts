import * as React from 'react';
import { HasComponent, HasRootRef } from 'types';

export interface TextProps
  extends React.AllHTMLAttributes<HTMLElement>,
  HasRootRef<HTMLElement>,
  HasComponent {
  weight?: '1' | '2' | '3';
}
