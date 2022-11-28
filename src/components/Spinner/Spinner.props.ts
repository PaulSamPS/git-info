import * as React from 'react';

export interface SpinnerProps extends React.AllHTMLAttributes<HTMLSpanElement> {
  position?: 'absolute' | 'relative';
  color?: 'white';
}
