import * as React from 'react';

export interface CardGridProps extends React.AllHTMLAttributes<HTMLDivElement> {
  column?: '2' | '3';
  gap?: number;
  align?: 'baseline' | 'center';
  direction?: 'column' | 'row';
}
