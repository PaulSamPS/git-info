import * as React from 'react';
import { HasComponent } from 'types';

export interface TitleProps extends React.AllHTMLAttributes<HTMLElement>, HasComponent {
  weight?: '1' | '2' | '3';
  level?: '1' | '2' | '3';
}
