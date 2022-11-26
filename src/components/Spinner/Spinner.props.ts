import * as React from 'react';

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  position?: 'absolute' | 'relative';
  color?: 'white';
}
