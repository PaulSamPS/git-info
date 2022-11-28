import * as React from 'react';
import { HasComponent } from 'types';

export interface ParagraphProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  weight?: '1' | '2' | '3';
}
