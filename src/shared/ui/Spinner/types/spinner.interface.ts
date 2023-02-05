import React from 'react';

export interface SpinnerProps extends React.AllHTMLAttributes<HTMLSpanElement> {
  position?: 'fixed' | 'relative';
  color?: 'white';
}
